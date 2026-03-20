import { Injectable } from '@nestjs/common';
import { ImageEntityType, Prisma } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { SluggableService } from '../../../common/services/sluggable.service';
import {
  ImageRecordService,
  MovedImageData,
} from '../../images/services/image-record.service';
import { CreateBrandDto, UpdateBrandDto, QueryBrandDto } from '../dto';

type BrandEntity = Prisma.BrandGetPayload<{
  select: {
    id: true;
    name: true;
    slug: true;
    description: true;
    isActive: true;
    createdAt: true;
    updatedAt: true;
    deletedAt: true;
  };
}>;

const ENTITY_TYPE = ImageEntityType.BRAND;
const IMAGE_ROLE = 'logo';
const RELATION_CHECKS = [
  { countKey: 'products', label: 'producto(s) asignado(s)' },
];

@Injectable()
export class BrandsService extends SluggableService<
  BrandEntity,
  CreateBrandDto,
  UpdateBrandDto,
  Prisma.BrandWhereInput,
  Prisma.BrandOrderByWithRelationInput
> {
  protected override useSoftDelete = true;

  constructor(
    prisma: PrismaService,
    private readonly imageRecord: ImageRecordService,
  ) {
    super(prisma, 'brand');
  }

  // ═══════════════════════════════════════════════
  // findAllBrands
  // ═══════════════════════════════════════════════

  async findAllBrands(query: QueryBrandDto) {
    const { search, isActive, page, limit } = query;

    const result = await this.findAll({
      where: {
        ...(isActive !== undefined && { isActive }),
        ...(search !== undefined && {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
          ],
        }),
      },
      orderBy: { name: 'asc' },
      pagination: { page, limit },
    });

    return {
      ...result,
      data: await this.imageRecord.attachImagesToMany(result.data, ENTITY_TYPE),
    };
  }

  // ═══════════════════════════════════════════════
  // findBrandById
  // ═══════════════════════════════════════════════

  async findBrandById(id: string) {
    const brand = await this.findOne(id);
    return this.imageRecord.attachImagesToEntity(brand, ENTITY_TYPE);
  }

  // ═══════════════════════════════════════════════
  // findBrandBySlug
  // ═══════════════════════════════════════════════

  async findBrandBySlug(slug: string) {
    const brand = await this.findBySlug(slug);
    return this.imageRecord.attachImagesToEntity(brand, ENTITY_TYPE);
  }

  // ═══════════════════════════════════════════════
  // createBrand
  //
  // Paso 1 — findTempRecord: valida la imagen (solo lectura)
  //          Si falla: lanza error, nada fue tocado
  // Paso 2 — moveToFinal: mueve archivo al disco
  //          Si falla: archivo sigue en /temp/, nada en BD tocado
  // Paso 3 — $transaction: crea el brand + confirmInDb juntos
  //          Si falla: deleteFiles revierte el disco, BD sin cambios
  // ═══════════════════════════════════════════════

  async createBrand(dto: CreateBrandDto) {
    const { tempImageId, ...brandData } = dto;

    // Paso 1: valida imagen antes de tocar la BD
    const tempRecord =
      tempImageId !== undefined
        ? await this.imageRecord.findTempRecord(
            tempImageId,
            ENTITY_TYPE,
            IMAGE_ROLE,
          )
        : null;

    // Paso 2: mueve al disco (sin tocar BD)
    let moved: MovedImageData | null = null;
    if (tempRecord !== null) {
      moved = await this.imageRecord.moveToFinal(
        tempRecord,
        ENTITY_TYPE,
        '', // entityId aún no existe, se rellena en confirmInDb
        IMAGE_ROLE,
      );
    }

    // Paso 3: BD atómica — crea brand + confirma imagen juntos
    try {
      const brand = await this.prisma.$transaction(async (tx) => {
        const slug = await this.generateUniqueSlug(
          brandData.name,
          undefined,
          tx,
        );
        const created = await this.create(
          { ...brandData, slug } as CreateBrandDto,
          undefined,
          tx,
        );

        if (moved !== null) {
          // Ahora que tenemos el id real, lo inyectamos antes de confirmar
          await this.imageRecord.confirmInDb(
            { ...moved, entityId: created.id },
            tx,
          );
        }

        return created;
      });

      return this.findBrandById(brand.id);
    } catch (error) {
      // $transaction falló → revierte el archivo ya movido al disco
      if (moved !== null) {
        await this.imageRecord.deleteFiles([moved.finalPath]);
      }
      throw error;
    }
  }

  // ═══════════════════════════════════════════════
  // updateBrand
  //
  // Paso 1 — findTempRecord: valida la imagen (solo lectura)
  //          Si falla: lanza error, BD intacta, front mantiene el form
  // Paso 2 — moveToFinal: mueve archivo al disco
  //          Si falla: archivo sigue en /temp/, BD intacta
  // Paso 3 — $transaction: update del brand + confirmInDb juntos
  //          Si falla: deleteFiles revierte el disco, BD sin cambios
  //          El front recibe el error con los datos del form intactos
  // ═══════════════════════════════════════════════

  async updateBrand(id: string, dto: UpdateBrandDto) {
    const { tempImageId, ...brandData } = dto;

    // Paso 1: valida imagen antes de tocar la BD
    const tempRecord =
      tempImageId !== undefined
        ? await this.imageRecord.findTempRecord(
            tempImageId,
            ENTITY_TYPE,
            IMAGE_ROLE,
          )
        : null;

    // Paso 2: mueve al disco (sin tocar BD)
    let moved: MovedImageData | null = null;
    if (tempRecord !== null) {
      moved = await this.imageRecord.moveToFinal(
        tempRecord,
        ENTITY_TYPE,
        id,
        IMAGE_ROLE,
      );
    }

    // Paso 3: BD atómica — update brand + confirma imagen juntos
    try {
      await this.prisma.$transaction(async (tx) => {
        await this.updateWithSlug(
          id,
          brandData as UpdateBrandDto,
          undefined,
          tx,
        );

        if (moved !== null) {
          await this.imageRecord.confirmInDb(moved, tx);
        }
      });
    } catch (error) {
      // $transaction falló → revierte el archivo ya movido al disco
      if (moved !== null) {
        await this.imageRecord.deleteFiles([moved.finalPath]);
      }
      throw error;
    }

    return this.findBrandById(id);
  }

  // ═══════════════════════════════════════════════
  // removeBrand
  // ═══════════════════════════════════════════════

  async removeBrand(id: string) {
    await this.checkRelations(id, RELATION_CHECKS);
    await this.imageRecord.deleteEntityImages(ENTITY_TYPE, id);
    return this.remove(id);
  }

  // ═══════════════════════════════════════════════
  // removeManyBrands
  // ═══════════════════════════════════════════════

  async removeManyBrands(ids: string[]) {
    await this.checkRelationsMany(ids, RELATION_CHECKS);
    await Promise.all(
      ids.map((id) => this.imageRecord.deleteEntityImages(ENTITY_TYPE, id)),
    );
    return this.removeMany(ids);
  }

  // ═══════════════════════════════════════════════
  // softDeleteBrand
  // ═══════════════════════════════════════════════

  async softDeleteBrand(id: string) {
    await this.checkRelations(id, RELATION_CHECKS);
    return this.softDelete(id);
  }

  // ═══════════════════════════════════════════════
  // softDeleteManyBrands
  // ═══════════════════════════════════════════════

  async softDeleteManyBrands(ids: string[]) {
    await this.checkRelationsMany(ids, RELATION_CHECKS);
    return this.softDeleteMany(ids);
  }

  // ═══════════════════════════════════════════════
  // restoreBrand
  // ═══════════════════════════════════════════════

  async restoreBrand(id: string) {
    await this.assertNotDeleted(id);
    return this.restore(id);
  }

  // ═══════════════════════════════════════════════
  // restoreManyBrands
  // ═══════════════════════════════════════════════

  async restoreManyBrands(ids: string[]) {
    return this.restoreMany(ids);
  }
}

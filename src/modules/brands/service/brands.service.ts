import { Injectable } from '@nestjs/common';
import { ImageEntityType, Prisma } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { SluggableService } from '../../../common/services/sluggable.service';
import { ImageRecordService } from '../../images/services/image-record.service';
import { CreateBrandDto } from '../dto/create-brand.dto';
import { UpdateBrandDto } from '../dto/update-brand.dto';
import { QueryBrandDto } from '../dto/query-brand.dto';

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
  // Flujo: BD → imagen (fuera de tx)
  // Si BD falla → rollback automático, imagen sigue en /temp/
  // Si imagen falla → BD creada, usuario puede resubir imagen
  // ═══════════════════════════════════════════════
  async createBrand(dto: CreateBrandDto) {
    const { tempImageId, ...brandData } = dto;

    const brand = await this.createWithSlug(brandData as CreateBrandDto);

    if (tempImageId !== undefined) {
      await this.imageRecord.syncTempImageById(
        tempImageId,
        ENTITY_TYPE,
        brand.id,
        IMAGE_ROLE,
      );
    }

    return this.findBrandById(brand.id);
  }

  // ═══════════════════════════════════════════════
  // updateBrand
  // ═══════════════════════════════════════════════
  async updateBrand(id: string, dto: UpdateBrandDto) {
    const { tempImageId, ...brandData } = dto;

    await this.updateWithSlug(id, brandData as UpdateBrandDto);

    if (tempImageId !== undefined) {
      await this.imageRecord.syncTempImageById(
        tempImageId,
        ENTITY_TYPE,
        id,
        IMAGE_ROLE,
      );
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

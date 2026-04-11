import { Injectable, BadRequestException } from '@nestjs/common';
import { ImageEntityType, Prisma } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { SluggableService } from '../../../common/services/sluggable.service';
import {
  ImageRecordService,
  MovedImageData,
} from '../../images/services/image-record.service';
import { CreateCategoryDto, UpdateCategoryDto, QueryCategoryDto } from '../dto';

type CategoryEntity = Prisma.CategoryGetPayload<{
  include: {
    parent: { select: { id: true; name: true; slug: true } };
    children: true;
    createdBy: { select: { id: true; name: true; email: true } };
    updatedBy: { select: { id: true; name: true; email: true } };
    deletedBy: { select: { id: true; name: true; email: true } };
  };
}>;

const ENTITY_TYPE = ImageEntityType.CATEGORY;
const IMAGE_ROLE = 'main';
const RELATION_CHECKS = [
  { countKey: 'products', label: 'producto(s) asignado(s)' },
  { countKey: 'children', label: 'subcategoría(s)' },
];

const LIST_INCLUDE = {
  createdBy: { select: { id: true, name: true, email: true } },
  updatedBy: { select: { id: true, name: true, email: true } },
} as const;

const TRASH_INCLUDE = {
  deletedBy: { select: { id: true, name: true, email: true } },
} as const;

const DETAIL_INCLUDE = {
  parent: { select: { id: true, name: true, slug: true } },
  children: {
    where: { isActive: true, deletedAt: null },
    orderBy: { sortOrder: 'asc' as const },
    select: { id: true, name: true, slug: true, sortOrder: true },
  },
  _count: { select: { products: true } },
} as const;

@Injectable()
export class CategoriesService extends SluggableService<
  CategoryEntity,
  CreateCategoryDto,
  UpdateCategoryDto,
  Prisma.CategoryWhereInput,
  Prisma.CategoryOrderByWithRelationInput
> {
  protected override useSoftDelete = true;

  constructor(
    prisma: PrismaService,
    private readonly imageRecord: ImageRecordService,
  ) {
    super(prisma, 'category');
  }

  // ═══════════════════════════════════════════════
  // findAllCategories
  // ═══════════════════════════════════════════════

  async findAllCategories(query: QueryCategoryDto) {
    const { search, isActive, parentId, page, limit, onlyTrash } = query;

    const result = await this.findAll({
      where: {
        ...(isActive !== undefined && { isActive }),
        ...(parentId !== undefined && { parentId: parentId ?? null }),
        ...(search !== undefined && {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
          ],
        }),
      },
      orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
      include: {
        parent: { select: { id: true, name: true, slug: true } },
        _count: { select: { children: true, products: true } },
        ...(onlyTrash ? TRASH_INCLUDE : LIST_INCLUDE),
      },
      pagination: { page, limit },
      onlyTrash,
    });

    return {
      ...result,
      data: await this.imageRecord.attachImagesToMany(result.data, ENTITY_TYPE),
    };
  }

  // ═══════════════════════════════════════════════
  // findCategoryById
  // ═══════════════════════════════════════════════

  async findCategoryById(id: string) {
    const category = await this.findOne(id, DETAIL_INCLUDE);
    return this.imageRecord.attachImagesToEntity(category, ENTITY_TYPE);
  }

  // ═══════════════════════════════════════════════
  // findCategoryBySlug
  // ═══════════════════════════════════════════════

  async findCategoryBySlug(slug: string) {
    const category = await this.findBySlug(slug, {
      parent: { select: { id: true, name: true, slug: true } },
      children: {
        where: { isActive: true, deletedAt: null },
        orderBy: { sortOrder: 'asc' },
        select: { id: true, name: true, slug: true },
      },
    });
    return this.imageRecord.attachImagesToEntity(category, ENTITY_TYPE);
  }

  // ═══════════════════════════════════════════════
  // createCategory
  //
  // Paso 1 — findTempRecord: valida la imagen (solo lectura)
  //          Si falla: lanza error, nada fue tocado
  // Paso 2 — moveToFinal: mueve archivo al disco
  //          Si falla: archivo sigue en /temp/, nada en BD tocado
  // Paso 3 — $transaction: crea la categoría + confirmInDb juntos
  //          Si falla: deleteFiles revierte el disco, BD sin cambios
  // ═══════════════════════════════════════════════

  async createCategory(dto: CreateCategoryDto, adminId: string) {
    if (dto.parentId !== undefined && dto.parentId !== null) {
      await this.assertExists(dto.parentId);
    }

    const { tempImageId, ...categoryData } = dto;

    // Paso 1: valida imagen antes de tocar la BD
    const tempRecord =
      tempImageId !== undefined && tempImageId !== null
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

    // Paso 3: BD atómica — crea categoría + confirma imagen juntos
    try {
      const category = await this.prisma.$transaction(async (tx) => {
        const slug = await this.generateUniqueSlug(
          categoryData.name,
          undefined,
          tx,
        );
        const created = await this.create(
          {
            ...categoryData,
            slug,
            createdBy: adminId,
            updatedById: adminId,
          } as CreateCategoryDto,
          undefined,
          tx,
        );

        if (moved !== null) {
          await this.imageRecord.confirmInDb(
            { ...moved, entityId: created.id },
            tx,
          );
        }

        return created;
      });

      return this.findCategoryById(category.id);
    } catch (error) {
      if (moved !== null) {
        await this.imageRecord.deleteFiles([moved.finalPath]);
      }
      throw error;
    }
  }

  // ═══════════════════════════════════════════════
  // updateCategory
  //
  // Paso 1 — findTempRecord: valida la imagen (solo lectura)
  //          Si falla: lanza error, BD intacta, front mantiene el form
  // Paso 2 — moveToFinal: mueve archivo al disco
  //          Si falla: archivo sigue en /temp/, BD intacta
  // Paso 3 — $transaction: update categoría + confirmInDb juntos
  //          Si falla: deleteFiles revierte el disco, BD sin cambios
  // ═══════════════════════════════════════════════

  async updateCategory(id: string, dto: UpdateCategoryDto, adminId: string) {
    if (dto.parentId !== undefined && dto.parentId !== null) {
      if (dto.parentId === id) {
        throw new BadRequestException(
          'Una categoría no puede ser su propio padre',
        );
      }
      await this.assertExists(dto.parentId);
    }

    // Extrae removedImageId junto con tempImageId
    const { tempImageId, removedImageId, ...categoryData } = dto;

    // Paso 1: valida imagen nueva antes de tocar la BD
    const tempRecord =
      tempImageId !== undefined && tempImageId !== null
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

    // Paso 3: BD atómica — update categoría + imagen juntos
    try {
      await this.prisma.$transaction(async (tx) => {
        await this.updateWithSlug(
          id,
          { ...categoryData, updatedById: adminId } as UpdateCategoryDto,
          undefined,
          tx,
        );

        if (moved !== null) {
          await this.imageRecord.confirmInDb(moved, tx);
        } else if (removedImageId) {
          await this.imageRecord.deleteImageById(removedImageId, tx);
        }
      });
    } catch (error) {
      if (moved !== null) {
        await this.imageRecord.deleteFiles([moved.finalPath]);
      }
      throw error;
    }

    return this.findCategoryById(id);
  }

  // ═══════════════════════════════════════════════
  // removeCategory
  // ═══════════════════════════════════════════════

  async removeCategory(id: string) {
    await this.checkRelations(id, RELATION_CHECKS);
    await this.imageRecord.deleteEntityImages(ENTITY_TYPE, id);
    return this.remove(id);
  }

  // ═══════════════════════════════════════════════
  // removeManyCategories
  // ═══════════════════════════════════════════════

  async removeManyCategories(ids: string[]) {
    await this.checkRelationsMany(ids, RELATION_CHECKS);
    await Promise.all(
      ids.map((id) => this.imageRecord.deleteEntityImages(ENTITY_TYPE, id)),
    );
    return this.removeMany(ids);
  }

  // ═══════════════════════════════════════════════
  // getCategoryTree
  // ═══════════════════════════════════════════════

  async getCategoryTree() {
    return this.prisma.category.findMany({
      where: { parentId: null, isActive: true, deletedAt: null },
      orderBy: { sortOrder: 'asc' },
      include: {
        children: {
          where: { isActive: true, deletedAt: null },
          orderBy: { sortOrder: 'asc' },
          include: {
            children: {
              where: { isActive: true, deletedAt: null },
              orderBy: { sortOrder: 'asc' },
            },
          },
        },
      },
    });
  }

  // ═══════════════════════════════════════════════
  // softDeleteCategory
  // ═══════════════════════════════════════════════

  async softDeleteCategory(id: string, adminId: string) {
    await this.checkRelations(id, RELATION_CHECKS);
    return this.softDelete(id, adminId);
  }

  // ═══════════════════════════════════════════════
  // softDeleteManyCategories
  // ═══════════════════════════════════════════════

  async softDeleteManyCategories(ids: string[], adminId: string) {
    await this.checkRelationsMany(ids, RELATION_CHECKS);
    return this.softDeleteMany(ids, adminId);
  }

  // ═══════════════════════════════════════════════
  // restoreCategory
  // ═══════════════════════════════════════════════

  async restoreCategory(id: string, adminId: string) {
    await this.assertNotDeleted(id);
    return this.restore(id, adminId);
  }

  // ═══════════════════════════════════════════════
  // restoreManyCategories
  // ═══════════════════════════════════════════════

  async restoreManyCategories(ids: string[], adminId: string) {
    return this.restoreMany(ids, adminId);
  }
}

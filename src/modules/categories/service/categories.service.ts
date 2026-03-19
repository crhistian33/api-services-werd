import { Injectable, BadRequestException } from '@nestjs/common';
import { ImageEntityType, Prisma } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { SluggableService } from '../../../common/services/sluggable.service';
import { ImageRecordService } from '../../images/services/image-record.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { QueryCategoryDto } from '../dto/query-category.dto';

type CategoryEntity = Prisma.CategoryGetPayload<{
  include: {
    parent: { select: { id: true; name: true; slug: true } };
    children: true;
  };
}>;

const ENTITY_TYPE = ImageEntityType.CATEGORY;
const IMAGE_ROLE = 'main';
const RELATION_CHECKS = [
  { countKey: 'products', label: 'producto(s) asignado(s)' },
  { countKey: 'children', label: 'subcategoría(s)' },
];

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
    const { search, isActive, parentId, page, limit } = query;

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
      },
      pagination: { page, limit },
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
  // ═══════════════════════════════════════════════
  async createCategory(dto: CreateCategoryDto) {
    if (dto.parentId !== undefined) {
      await this.assertExists(dto.parentId);
    }

    const { tempImageId, ...categoryData } = dto;

    const category = await this.createWithSlug(
      categoryData as CreateCategoryDto,
    );

    if (tempImageId !== undefined) {
      await this.imageRecord.syncTempImageById(
        tempImageId,
        ENTITY_TYPE,
        category.id,
        IMAGE_ROLE,
      );
    }

    return this.findCategoryById(category.id);
  }

  // ═══════════════════════════════════════════════
  // updateCategory
  // ═══════════════════════════════════════════════
  async updateCategory(id: string, dto: UpdateCategoryDto) {
    if (dto.parentId !== undefined) {
      if (dto.parentId === id) {
        throw new BadRequestException(
          'Una categoría no puede ser su propio padre',
        );
      }
      await this.assertExists(dto.parentId);
    }

    const { tempImageId, ...categoryData } = dto;

    await this.updateWithSlug(id, categoryData as UpdateCategoryDto);

    if (tempImageId !== undefined) {
      await this.imageRecord.syncTempImageById(
        tempImageId,
        ENTITY_TYPE,
        id,
        IMAGE_ROLE,
      );
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
  // getCategoryTree — árbol completo para navegación
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
  async softDeleteCategory(id: string) {
    await this.checkRelations(id, RELATION_CHECKS);
    return this.softDelete(id);
  }

  // ═══════════════════════════════════════════════
  // softDeleteManyCategories
  // ═══════════════════════════════════════════════
  async softDeleteManyCategories(ids: string[]) {
    await this.checkRelationsMany(ids, RELATION_CHECKS);
    return this.softDeleteMany(ids);
  }

  // ═══════════════════════════════════════════════
  // restoreCategory
  // ═══════════════════════════════════════════════
  async restoreCategory(id: string) {
    await this.assertNotDeleted(id);
    return this.restore(id);
  }

  // ═══════════════════════════════════════════════
  // restoreManyCategories
  // ═══════════════════════════════════════════════
  async restoreManyCategories(ids: string[]) {
    return this.restoreMany(ids);
  }
}

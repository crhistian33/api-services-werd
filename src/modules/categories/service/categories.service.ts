import { Injectable, BadRequestException } from '@nestjs/common';
import { ImageEntityType, Prisma } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { SluggableService } from '../../../common/services/sluggable.service';
import { ImageRecordService } from '../../images/services/image-record.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { QueryCategoryDto } from '../dto/query-category.dto';

type CategoryWithRelations = Prisma.CategoryGetPayload<{
  include: { parent: true; children: true };
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
    where: { isActive: true },
    orderBy: { sortOrder: 'asc' as const },
    select: { id: true, name: true, slug: true, sortOrder: true },
  },
  _count: { select: { products: true } },
};

@Injectable()
export class CategoriesService extends SluggableService<
  CategoryWithRelations,
  CreateCategoryDto,
  UpdateCategoryDto,
  Prisma.CategoryWhereInput,
  Prisma.CategoryOrderByWithRelationInput
> {
  constructor(
    prisma: PrismaService,
    private readonly imageRecord: ImageRecordService,
  ) {
    super(prisma, 'category');
  }

  async findAllCategories(query: QueryCategoryDto) {
    const { search, isActive, parentId, page, limit } = query;

    const where: Prisma.CategoryWhereInput = {
      ...(isActive !== undefined && { isActive }),
      ...(parentId !== undefined && { parentId: parentId ?? null }),
      ...(search && {
        OR: [
          { name: { contains: search, mode: 'insensitive' } },
          { description: { contains: search, mode: 'insensitive' } },
        ],
      }),
    };

    const result = await this.findAll({
      where,
      orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
      include: {
        parent: { select: { id: true, name: true, slug: true } },
        _count: { select: { children: true, products: true } },
      },
      pagination: { page, limit },
    });

    const data = await this.imageRecord.attachImagesToMany(
      result.data,
      ENTITY_TYPE,
    );
    return { ...result, data };
  }

  async findCategoryById(id: string) {
    const category = await this.findOne(id, DETAIL_INCLUDE);
    return this.imageRecord.attachImagesToEntity(category, ENTITY_TYPE);
  }

  async findCategoryBySlug(slug: string) {
    const category = await this.findBySlug(slug, {
      parent: { select: { id: true, name: true, slug: true } },
      children: {
        where: { isActive: true },
        orderBy: { sortOrder: 'asc' },
        select: { id: true, name: true, slug: true },
      },
    });
    return this.imageRecord.attachImagesToEntity(category, ENTITY_TYPE);
  }

  async createCategory(dto: CreateCategoryDto) {
    if (dto.parentId) await this.assertExists(dto.parentId);

    const { tempImageId, ...categoryData } = dto;
    const category = await this.createWithSlug(
      categoryData as CreateCategoryDto,
    );

    if (tempImageId != null) {
      await this.imageRecord.syncTempImageById(
        tempImageId,
        ENTITY_TYPE,
        category.id,
        IMAGE_ROLE,
      );
    }

    return category;
  }

  async updateCategory(id: string, dto: UpdateCategoryDto) {
    if (dto.parentId) {
      if (dto.parentId === id) {
        throw new BadRequestException(
          'Una categoría no puede ser su propio padre',
        );
      }
      await this.assertExists(dto.parentId);
    }

    const { tempImageId, ...categoryData } = dto;
    const category = await this.updateWithSlug(
      id,
      categoryData as UpdateCategoryDto,
    );

    if (tempImageId != null) {
      await this.imageRecord.syncTempImageById(
        tempImageId,
        ENTITY_TYPE,
        id,
        IMAGE_ROLE,
      );
    }

    return category;
  }

  async removeCategory(id: string) {
    await this.checkRelations(id, RELATION_CHECKS);
    await this.imageRecord.deleteEntityImages(ENTITY_TYPE, id);
    return this.remove(id);
  }

  async removeManyCategories(ids: string[]) {
    await this.checkRelationsMany(ids, RELATION_CHECKS);
    await Promise.all(
      ids.map((id) => this.imageRecord.deleteEntityImages(ENTITY_TYPE, id)),
    );
    return this.removeMany(ids);
  }

  async getCategoryTree() {
    return this.prisma.category.findMany({
      where: { parentId: null, isActive: true },
      orderBy: { sortOrder: 'asc' },
      include: {
        children: {
          where: { isActive: true },
          orderBy: { sortOrder: 'asc' },
          include: {
            children: {
              where: { isActive: true },
              orderBy: { sortOrder: 'asc' },
            },
          },
        },
      },
    });
  }

  async softDeleteCategory(id: string) {
    await this.checkRelations(id, RELATION_CHECKS);
    return this.softDelete(id);
  }

  async softDeleteManyCategories(ids: string[]) {
    await this.checkRelationsMany(ids, RELATION_CHECKS);
    return this.softDeleteMany(ids);
  }

  async restoreCategory(id: string) {
    await this.assertNotDeleted(id);
    return this.restore(id);
  }

  async restoreManyCategories(ids: string[]) {
    return this.restoreMany(ids);
  }
}

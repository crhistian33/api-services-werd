import { Injectable } from '@nestjs/common';
import { Prisma, ImageEntityType } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { SluggableService } from '../../../common/services/sluggable.service';
import { ImageRecordService } from '../../images/services/image-record.service';
import { CreateBrandDto } from '../dto/create-brand.dto';
import { UpdateBrandDto } from '../dto/update-brand.dto';
import { QueryBrandDto } from '../dto/query-brand.dto';

type BrandEntity = Prisma.BrandGetPayload<{
  include: { products: false };
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
  protected useSoftDelete = true;
  constructor(
    prisma: PrismaService,
    private readonly imageRecord: ImageRecordService,
  ) {
    super(prisma, 'brand');
  }

  async findAllBrands(query: QueryBrandDto) {
    const { search, isActive, page, limit } = query;

    const where: Prisma.BrandWhereInput = {
      ...(isActive !== undefined && { isActive }),
      ...(search && {
        OR: [
          { name: { contains: search, mode: 'insensitive' } },
          { description: { contains: search, mode: 'insensitive' } },
        ],
      }),
    };

    const result = await this.findAll({
      where,
      orderBy: { name: 'asc' },
      pagination: { page, limit },
    });

    const data = await this.imageRecord.attachImagesToMany(
      result.data,
      ENTITY_TYPE,
    );
    return { ...result, data };
  }

  async findBrandById(id: string) {
    const brand = await this.findOne(id);
    return this.imageRecord.attachImagesToEntity(brand, ENTITY_TYPE);
  }

  async findBrandBySlug(slug: string) {
    const brand = await this.findBySlug(slug);
    return this.imageRecord.attachImagesToEntity(brand, ENTITY_TYPE);
  }

  async createBrand(dto: CreateBrandDto) {
    const { tempImageId, ...brandData } = dto;
    const brand = await this.createWithSlug(brandData as CreateBrandDto);

    if (tempImageId != null) {
      await this.imageRecord.syncTempImageById(
        tempImageId,
        ENTITY_TYPE,
        brand.id,
        IMAGE_ROLE,
      );
    }

    return this.findBrandById(brand.id);
  }

  async updateBrand(id: string, dto: UpdateBrandDto) {
    const { tempImageId, ...brandData } = dto;
    await this.updateWithSlug(id, brandData as UpdateBrandDto);

    if (tempImageId != null) {
      await this.imageRecord.syncTempImageById(
        tempImageId,
        ENTITY_TYPE,
        id,
        IMAGE_ROLE,
      );
    }

    return this.findBrandById(id);
  }

  async removeBrand(id: string) {
    await this.checkRelations(id, RELATION_CHECKS);
    await this.imageRecord.deleteEntityImages(ENTITY_TYPE, id);
    return this.remove(id);
  }

  async removeManyBrands(ids: string[]) {
    await this.checkRelationsMany(ids, RELATION_CHECKS);
    await Promise.all(
      ids.map((id) => this.imageRecord.deleteEntityImages(ENTITY_TYPE, id)),
    );
    return this.removeMany(ids);
  }

  async softDeleteBrand(id: string) {
    await this.checkRelations(id, RELATION_CHECKS);
    return this.softDelete(id);
  }

  async softDeleteManyBrands(ids: string[]) {
    await this.checkRelationsMany(ids, RELATION_CHECKS);
    return this.softDeleteMany(ids);
  }

  async restoreBrand(id: string) {
    await this.assertNotDeleted(id);
    return this.restore(id);
  }

  async restoreManyBrands(ids: string[]) {
    return this.restoreMany(ids);
  }
}

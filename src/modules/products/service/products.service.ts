import { Injectable } from '@nestjs/common';
import { ImageEntityType, Prisma } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { SluggableService } from '../../../common/services/sluggable.service';
import { ImageRecordService } from '../../images/services/image-record.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { QueryProductDto } from '../dto/query-product.dto';

type ProductEntity = Prisma.ProductGetPayload<{
  include: {
    category: { select: { id: true; name: true; slug: true } };
    brand: { select: { id: true; name: true; slug: true } };
  };
}>;

const ENTITY_TYPE = ImageEntityType.PRODUCT;
const IMAGE_ROLE_MAIN = 'main';
const IMAGE_ROLE_GALLERY = 'gallery';

const RELATION_CHECKS = [
  { countKey: 'orderItems', label: 'pedido(s) asociado(s)' },
  { countKey: 'cartItems', label: 'item(s) de carrito' },
];

@Injectable()
export class ProductsService extends SluggableService<
  ProductEntity,
  CreateProductDto,
  UpdateProductDto,
  Prisma.ProductWhereInput,
  Prisma.ProductOrderByWithRelationInput
> {
  constructor(
    prisma: PrismaService,
    private readonly imageRecord: ImageRecordService,
  ) {
    super(prisma, 'product');
  }

  async findAllProducts(query: QueryProductDto) {
    const { search, categoryId, brandId, status, isFeatured, page, limit } =
      query;

    const where: Prisma.ProductWhereInput = {
      ...(categoryId !== undefined && { categoryId }),
      ...(brandId !== undefined && { brandId }),
      ...(status !== undefined && { status }),
      ...(isFeatured !== undefined && { isFeatured }),
      ...(search && {
        OR: [
          { name: { contains: search, mode: 'insensitive' } },
          { sku: { contains: search, mode: 'insensitive' } },
          { shortDescription: { contains: search, mode: 'insensitive' } },
          { description: { contains: search, mode: 'insensitive' } },
        ],
      }),
    };

    const result = await this.findAll({
      where,
      orderBy: [{ createdAt: 'desc' }],
      include: {
        category: { select: { id: true, name: true, slug: true } },
        brand: { select: { id: true, name: true, slug: true } },
      },
      pagination: { page, limit },
    });

    const data = await this.imageRecord.attachImagesToMany(
      result.data,
      ENTITY_TYPE,
    );

    return { ...result, data };
  }

  async findProductById(id: string) {
    const product = await this.findOne(id, {
      category: { select: { id: true, name: true, slug: true } },
      brand: { select: { id: true, name: true, slug: true } },
    });

    return this.imageRecord.attachImagesToEntity(product, ENTITY_TYPE);
  }

  async findProductBySlug(slug: string) {
    const product = await this.findBySlug(slug, {
      category: { select: { id: true, name: true, slug: true } },
      brand: { select: { id: true, name: true, slug: true } },
    });

    return this.imageRecord.attachImagesToEntity(product, ENTITY_TYPE);
  }

  async createProduct(dto: CreateProductDto) {
    const { tempMainImageId, tempGalleryImageIds, ...productData } = dto;

    const product = await this.createWithSlug(productData as CreateProductDto);

    if (tempMainImageId != null) {
      await this.imageRecord.syncTempImageById(
        tempMainImageId,
        ENTITY_TYPE,
        product.id,
        IMAGE_ROLE_MAIN,
      );
    }

    if (tempGalleryImageIds != null) {
      await this.imageRecord.syncTempImagesById(
        tempGalleryImageIds,
        ENTITY_TYPE,
        product.id,
        IMAGE_ROLE_GALLERY,
      );
    }

    // Devuelve el producto ya con las imágenes confirmadas adjuntas
    return this.findProductById(product.id);
  }

  async updateProduct(id: string, dto: UpdateProductDto) {
    const { tempMainImageId, tempGalleryImageIds, ...productData } = dto;

    await this.updateWithSlug(id, productData as UpdateProductDto);

    if (tempMainImageId !== undefined) {
      await this.imageRecord.syncTempImageById(
        tempMainImageId,
        ENTITY_TYPE,
        id,
        IMAGE_ROLE_MAIN,
      );
    }

    if (tempGalleryImageIds !== undefined) {
      await this.imageRecord.syncTempImagesById(
        tempGalleryImageIds,
        ENTITY_TYPE,
        id,
        IMAGE_ROLE_GALLERY,
      );
    }

    // Devuelve el producto actualizado ya con imágenes adjuntas
    return this.findProductById(id);
  }

  async removeProduct(id: string) {
    await this.checkRelations(id, RELATION_CHECKS);
    await this.imageRecord.deleteEntityImages(ENTITY_TYPE, id);
    return this.remove(id);
  }

  async removeManyProducts(ids: string[]) {
    await this.checkRelationsMany(ids, RELATION_CHECKS);
    await Promise.all(
      ids.map((id) => this.imageRecord.deleteEntityImages(ENTITY_TYPE, id)),
    );
    return this.removeMany(ids);
  }

  async softDeleteProduct(id: string) {
    await this.checkRelations(id, RELATION_CHECKS);
    return this.softDelete(id);
  }

  async softDeleteManyProducts(ids: string[]) {
    await this.checkRelationsMany(ids, RELATION_CHECKS);
    return this.softDeleteMany(ids);
  }

  async restoreProduct(id: string) {
    await this.assertNotDeleted(id);
    return this.restore(id);
  }

  async restoreManyProducts(ids: string[]) {
    return this.restoreMany(ids);
  }
}

// src/modules/products/service/products.service.ts

import { Injectable } from '@nestjs/common';
import { ImageEntityType, Prisma } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { SluggableService } from '../../../common/services/sluggable.service';
import { ImageRecordService } from '../../images/services/image-record.service';
import { ProductPriceService } from './product-price.service';
import { ProductSpecsService } from './product-specs.service';
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
    private readonly priceService: ProductPriceService, // ← nuevo
    private readonly specsService: ProductSpecsService, // ← nuevo
  ) {
    super(prisma, 'product');
  }

  // ═══════════════════════════════════════════════
  // findAllProducts — incluye precio para el card
  // ═══════════════════════════════════════════════
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
        price: true, // ← precio para el card del listado
      },
      pagination: { page, limit },
    });

    const data = await this.imageRecord.attachImagesToMany(
      result.data,
      ENTITY_TYPE,
    );

    return { ...result, data };
  }

  async findAllProductsPublic(query: QueryProductDto) {
    const { search, categoryId, brandId, isFeatured, page, limit } = query;

    const where: Prisma.ProductWhereInput = {
      deletedAt: null, // ← solo productos no eliminados
      status: 'active', // ← solo productos activos en el sitio público
      ...(categoryId !== undefined && { categoryId }),
      ...(brandId !== undefined && { brandId }),
      ...(isFeatured !== undefined && { isFeatured }),
      ...(search && {
        OR: [
          { name: { contains: search, mode: 'insensitive' } },
          { sku: { contains: search, mode: 'insensitive' } },
          { shortDescription: { contains: search, mode: 'insensitive' } },
        ],
      }),
    };

    const result = await this.findAll({
      where,
      orderBy: [{ createdAt: 'desc' }],
      include: {
        category: { select: { id: true, name: true, slug: true } },
        brand: { select: { id: true, name: true, slug: true } },
        price: true,
        features: { orderBy: { sortOrder: 'asc' } }, // ← para el modal
      },
      pagination: { page, limit },
    });

    const data = await this.imageRecord.attachImagesToMany(
      result.data,
      ENTITY_TYPE,
    );

    return { ...result, data };
  }

  // ═══════════════════════════════════════════════
  // findProductById — detalle completo para PDP y modal
  // ═══════════════════════════════════════════════
  async findProductById(id: string) {
    const product = await this.findOne(id, {
      category: { select: { id: true, name: true, slug: true } },
      brand: { select: { id: true, name: true, slug: true } },
      price: true, // ← precio actual
      specs: { orderBy: { sortOrder: 'asc' } }, // ← specs ordenadas
      features: { orderBy: { sortOrder: 'asc' } }, // ← features ordenadas
    });

    return this.imageRecord.attachImagesToEntity(product, ENTITY_TYPE);
  }

  // ═══════════════════════════════════════════════
  // findProductBySlug — igual que findProductById
  // pero busca por slug para el sitio público
  // ═══════════════════════════════════════════════
  async findProductBySlug(slug: string) {
    const product = await this.findBySlug(slug, {
      category: { select: { id: true, name: true, slug: true } },
      brand: { select: { id: true, name: true, slug: true } },
      price: true,
      specs: { orderBy: { sortOrder: 'asc' } },
      features: { orderBy: { sortOrder: 'asc' } },
    });

    return this.imageRecord.attachImagesToEntity(product, ENTITY_TYPE);
  }

  // ═══════════════════════════════════════════════
  // createProduct
  // ═══════════════════════════════════════════════
  async createProduct(dto: CreateProductDto) {
    const {
      tempMainImageId,
      tempGalleryImageIds,
      price,
      compareAtPrice,
      cost,
      specs,
      features,
      ...productData
    } = dto;

    const product = await this.createWithSlug(productData as CreateProductDto);

    // Todo lo que no depende entre sí se ejecuta en paralelo
    await Promise.all([
      tempMainImageId != null
        ? this.imageRecord.syncTempImageById(
            tempMainImageId,
            ENTITY_TYPE,
            product.id,
            IMAGE_ROLE_MAIN,
          )
        : Promise.resolve(),

      tempGalleryImageIds != null
        ? this.imageRecord.syncTempImagesById(
            tempGalleryImageIds,
            ENTITY_TYPE,
            product.id,
            IMAGE_ROLE_GALLERY,
          )
        : Promise.resolve(),

      price != null
        ? this.priceService.setPrice(product.id, {
            price,
            compareAtPrice,
            cost,
          })
        : Promise.resolve(),

      specs?.length
        ? this.specsService.setSpecs(product.id, specs)
        : Promise.resolve(),

      features?.length
        ? this.specsService.setFeatures(product.id, features)
        : Promise.resolve(),
    ]);

    return this.findProductById(product.id);
  }

  // ═══════════════════════════════════════════════
  // updateProduct
  // ═══════════════════════════════════════════════
  async updateProduct(id: string, dto: UpdateProductDto) {
    const {
      tempMainImageId,
      tempGalleryImageIds,
      price,
      compareAtPrice,
      cost,
      changedById,
      reason,
      specs,
      features,
      ...productData
    } = dto;

    await this.updateWithSlug(id, productData as UpdateProductDto);

    await Promise.all([
      tempMainImageId !== undefined
        ? this.imageRecord.syncTempImageById(
            tempMainImageId,
            ENTITY_TYPE,
            id,
            IMAGE_ROLE_MAIN,
          )
        : Promise.resolve(),

      tempGalleryImageIds !== undefined
        ? this.imageRecord.syncTempImagesById(
            tempGalleryImageIds,
            ENTITY_TYPE,
            id,
            IMAGE_ROLE_GALLERY,
          )
        : Promise.resolve(),

      price !== undefined
        ? this.priceService.setPrice(id, {
            price,
            compareAtPrice,
            cost,
            changedById,
            reason,
          })
        : Promise.resolve(),

      specs !== undefined
        ? this.specsService.setSpecs(id, specs ?? [])
        : Promise.resolve(),

      features !== undefined
        ? this.specsService.setFeatures(id, features ?? [])
        : Promise.resolve(),
    ]);

    return this.findProductById(id);
  }

  // ═══════════════════════════════════════════════
  // removeProduct — sin cambios
  // ═══════════════════════════════════════════════
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

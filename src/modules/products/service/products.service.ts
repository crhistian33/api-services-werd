import { Injectable } from '@nestjs/common';
import { ImageEntityType, Prisma } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { SluggableService } from '../../../common/services/sluggable.service';
import { ImageRecordService } from '../../images/services/image-record.service';
import { ProductPriceService } from './product-price.service';
import { ProductSpecsService } from './product-specs.service';
import { CreateProductDto, UpdateProductDto, QueryProductDto } from '../dto';

type ProductEntity = Prisma.ProductGetPayload<{
  include: {
    category: { select: { id: true; name: true; slug: true } };
    brand: { select: { id: true; name: true; slug: true } };
    price: true;
    specs: true;
    features: true;
  };
}>;

const ENTITY_TYPE = ImageEntityType.PRODUCT;
const IMAGE_ROLE_MAIN = 'main';
const IMAGE_ROLE_GALLERY = 'gallery';

const RELATION_CHECKS = [
  { countKey: 'orderItems', label: 'pedido(s) asociado(s)' },
  { countKey: 'cartItems', label: 'item(s) de carrito' },
];

// Include completo para PDP y detalle — reutilizado en findById y findBySlug
const DETAIL_INCLUDE = {
  category: { select: { id: true, name: true, slug: true } },
  brand: { select: { id: true, name: true, slug: true } },
  price: true,
  specs: { orderBy: { sortOrder: 'asc' as const } },
  features: { orderBy: { sortOrder: 'asc' as const } },
} as const;

// Include para listado admin — sin specs ni features (datos de detalle)
const LIST_INCLUDE = {
  category: { select: { id: true, name: true, slug: true } },
  brand: { select: { id: true, name: true, slug: true } },
  price: true,
} as const;

// Include para listado público — agrega features para el modal
const PUBLIC_LIST_INCLUDE = {
  ...LIST_INCLUDE,
  features: { orderBy: { sortOrder: 'asc' as const } },
} as const;

@Injectable()
export class ProductsService extends SluggableService<
  ProductEntity,
  CreateProductDto,
  UpdateProductDto,
  Prisma.ProductWhereInput,
  Prisma.ProductOrderByWithRelationInput
> {
  protected override useSoftDelete = true;

  constructor(
    prisma: PrismaService,
    private readonly imageRecord: ImageRecordService,
    private readonly priceService: ProductPriceService,
    private readonly specsService: ProductSpecsService,
  ) {
    super(prisma, 'product');
  }

  // ═══════════════════════════════════════════════
  // findAllProducts — listado para el panel admin
  // Incluye precio para el card, sin specs/features
  // ═══════════════════════════════════════════════
  async findAllProducts(query: QueryProductDto) {
    const { search, categoryId, brandId, status, isFeatured, page, limit } =
      query;

    const result = await this.findAll({
      where: {
        ...(categoryId !== undefined && { categoryId }),
        ...(brandId !== undefined && { brandId }),
        ...(status !== undefined && { status }),
        ...(isFeatured !== undefined && { isFeatured }),
        ...(search !== undefined && {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { sku: { contains: search, mode: 'insensitive' } },
            { shortDescription: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
          ],
        }),
      },
      orderBy: [{ createdAt: 'desc' }],
      include: LIST_INCLUDE,
      pagination: { page, limit },
    });

    return {
      ...result,
      data: await this.imageRecord.attachImagesToMany(result.data, ENTITY_TYPE),
    };
  }

  // ═══════════════════════════════════════════════
  // findAllProductsPublic — listado para Astro
  // Solo activos, incluye features para el modal
  // ═══════════════════════════════════════════════
  async findAllProductsPublic(query: QueryProductDto) {
    const { search, categoryId, brandId, isFeatured, page, limit } = query;

    const result = await this.findAll({
      where: {
        status: 'active',
        deletedAt: null,
        ...(categoryId !== undefined && { categoryId }),
        ...(brandId !== undefined && { brandId }),
        ...(isFeatured !== undefined && { isFeatured }),
        ...(search !== undefined && {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { sku: { contains: search, mode: 'insensitive' } },
            { shortDescription: { contains: search, mode: 'insensitive' } },
          ],
        }),
      },
      orderBy: [{ createdAt: 'desc' }],
      include: PUBLIC_LIST_INCLUDE,
      pagination: { page, limit },
    });

    return {
      ...result,
      data: await this.imageRecord.attachImagesToMany(result.data, ENTITY_TYPE),
    };
  }

  // ═══════════════════════════════════════════════
  // findProductById — detalle completo para PDP
  // ═══════════════════════════════════════════════
  async findProductById(id: string) {
    const product = await this.findOne(id, DETAIL_INCLUDE);
    return this.imageRecord.attachImagesToEntity(product, ENTITY_TYPE);
  }

  // ═══════════════════════════════════════════════
  // findProductBySlug — detalle para sitio público
  // ═══════════════════════════════════════════════
  async findProductBySlug(slug: string) {
    const product = await this.findBySlug(slug, DETAIL_INCLUDE);
    return this.imageRecord.attachImagesToEntity(product, ENTITY_TYPE);
  }

  // ═══════════════════════════════════════════════
  // createProduct
  // Estrategia:
  //   - Datos base + precio + specs + features → $transaction (BD pura)
  //   - Imágenes → fuera de transaction (operaciones de disco)
  //   - Si BD falla → rollback, imagen sigue en /temp/, usuario reintenta
  //   - Si imagen falla → producto creado, usuario puede resubir imagen
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

    // ── Fase 1: BD en una sola transacción ──────────────────────────────────
    const product = await this.prisma.$transaction(async (tx) => {
      const created = await this.createWithSlug(
        productData as CreateProductDto,
        undefined,
        tx,
      );

      await Promise.all([
        price !== undefined
          ? this.priceService.setPrice(
              created.id,
              { price, compareAtPrice, cost },
              tx,
            )
          : Promise.resolve(),

        specs?.length
          ? this.specsService.setSpecs(created.id, specs, tx)
          : Promise.resolve(),

        features?.length
          ? this.specsService.setFeatures(created.id, features, tx)
          : Promise.resolve(),
      ]);

      return created;
    });

    // ── Fase 2: imágenes fuera de la transacción ─────────────────────────────
    await Promise.all([
      tempMainImageId !== undefined
        ? this.imageRecord.syncTempImageById(
            tempMainImageId,
            ENTITY_TYPE,
            product.id,
            IMAGE_ROLE_MAIN,
          )
        : Promise.resolve(),

      tempGalleryImageIds?.length
        ? this.imageRecord.syncTempImagesById(
            tempGalleryImageIds,
            ENTITY_TYPE,
            product.id,
            IMAGE_ROLE_GALLERY,
          )
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

    // ── Fase 1: BD en transacción ────────────────────────────────────────────
    await this.prisma.$transaction(async (tx) => {
      await this.updateWithSlug(
        id,
        productData as UpdateProductDto,
        undefined,
        tx,
      );

      await Promise.all([
        price !== undefined
          ? this.priceService.setPrice(
              id,
              { price, compareAtPrice, cost, changedById, reason },
              tx,
            )
          : Promise.resolve(),

        specs !== undefined
          ? this.specsService.setSpecs(id, specs ?? [], tx)
          : Promise.resolve(),

        features !== undefined
          ? this.specsService.setFeatures(id, features ?? [], tx)
          : Promise.resolve(),
      ]);
    });

    // ── Fase 2: imágenes fuera de la transacción ─────────────────────────────
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
    ]);

    return this.findProductById(id);
  }

  // ═══════════════════════════════════════════════
  // removeProduct
  // ═══════════════════════════════════════════════
  async removeProduct(id: string) {
    await this.checkRelations(id, RELATION_CHECKS);
    await this.imageRecord.deleteEntityImages(ENTITY_TYPE, id);
    return this.remove(id);
  }

  // ═══════════════════════════════════════════════
  // removeManyProducts
  // ═══════════════════════════════════════════════
  async removeManyProducts(ids: string[]) {
    await this.checkRelationsMany(ids, RELATION_CHECKS);
    await Promise.all(
      ids.map((id) => this.imageRecord.deleteEntityImages(ENTITY_TYPE, id)),
    );
    return this.removeMany(ids);
  }

  // ═══════════════════════════════════════════════
  // softDeleteProduct
  // ═══════════════════════════════════════════════
  async softDeleteProduct(id: string) {
    await this.checkRelations(id, RELATION_CHECKS);
    return this.softDelete(id);
  }

  // ═══════════════════════════════════════════════
  // softDeleteManyProducts
  // ═══════════════════════════════════════════════
  async softDeleteManyProducts(ids: string[]) {
    await this.checkRelationsMany(ids, RELATION_CHECKS);
    return this.softDeleteMany(ids);
  }

  // ═══════════════════════════════════════════════
  // restoreProduct
  // ═══════════════════════════════════════════════
  async restoreProduct(id: string) {
    await this.assertNotDeleted(id);
    return this.restore(id);
  }

  // ═══════════════════════════════════════════════
  // restoreManyProducts
  // ═══════════════════════════════════════════════
  async restoreManyProducts(ids: string[]) {
    return this.restoreMany(ids);
  }
}

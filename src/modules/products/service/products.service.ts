import { Injectable } from '@nestjs/common';
import { ImageEntityType, Prisma } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { SluggableService } from '../../../common/services/sluggable.service';
import {
  ImageRecordService,
  MovedImageData,
} from '../../images/services/image-record.service';
import { ProductPriceService } from './product-price.service';
import { ProductSpecsService } from './product-specs.service';
import { ProductReviewService } from '../../product-reviews/service/product-review.service';
import {
  CreateProductDto,
  UpdateProductDto,
  QueryProductDto,
  ListProductsDto,
} from '../dto';

type ProductEntity = Prisma.ProductGetPayload<{
  include: {
    category: { select: { id: true; name: true; slug: true } };
    brand: { select: { id: true; name: true; slug: true } };
    price: true;
    specs: true;
    features: true;
    createdBy: { select: { id: true; name: true; email: true } };
    updatedBy: { select: { id: true; name: true; email: true } };
    deletedBy: { select: { id: true; name: true; email: true } };
  };
}>;

const ENTITY_TYPE = ImageEntityType.PRODUCT;
const IMAGE_ROLE_MAIN = 'main';
const IMAGE_ROLE_GALLERY = 'gallery';
const RELATION_CHECKS = [
  { countKey: 'orderItems', label: 'pedido(s) asociado(s)' },
  { countKey: 'cartItems', label: 'item(s) de carrito' },
];

const DETAIL_INCLUDE = {
  category: { select: { id: true, name: true, slug: true } },
  brand: { select: { id: true, name: true, slug: true } },
  price: true,
  specs: { orderBy: { sortOrder: 'asc' as const } },
  features: { orderBy: { sortOrder: 'asc' as const } },
} as const;

const LIST_INCLUDE = {
  category: { select: { id: true, name: true, slug: true } },
  brand: { select: { id: true, name: true, slug: true } },
  createdBy: { select: { id: true, name: true, email: true } },
  updatedBy: { select: { id: true, name: true, email: true } },
  price: true,
} as const;

const TRASH_INCLUDE = {
  category: { select: { id: true, name: true, slug: true } },
  brand: { select: { id: true, name: true, slug: true } },
  deletedBy: { select: { id: true, name: true, email: true } },
  price: true,
} as const;

const PUBLIC_LIST_INCLUDE = {
  ...LIST_INCLUDE,
  features: { orderBy: { sortOrder: 'asc' as const } },
} as const;

const SEARCH_INCLUDE = {
  category: { select: { id: true, name: true, slug: true } },
  brand: { select: { id: true, name: true, slug: true } },
  price: true,
  features: { orderBy: { sortOrder: 'asc' as const } },
  specs: { orderBy: { sortOrder: 'asc' as const } },
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
    private readonly reviewService: ProductReviewService,
  ) {
    super(prisma, 'product');
  }

  // ═══════════════════════════════════════════════
  // findAllProducts
  // ═══════════════════════════════════════════════

  async findAllProducts(query: QueryProductDto) {
    const {
      search,
      categoryId,
      brandId,
      status,
      isFeatured,
      page,
      limit,
      onlyTrash,
    } = query;

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
      include: onlyTrash ? TRASH_INCLUDE : LIST_INCLUDE,
      pagination: { page, limit },
      onlyTrash,
    });

    return {
      ...result,
      data: await this.imageRecord.attachImagesToMany(result.data, ENTITY_TYPE),
    };
  }

  // ═══════════════════════════════════════════════
  // findAllProductsPublic
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
  // searchProducts — Búsqueda profunda en texto completo
  // Busca por: nombre, marca, categoría, descripciones, specs y features
  // ═══════════════════════════════════════════════

  async searchProducts(
    query: string,
    page = 1,
    limit = 20,
    options?: {
      categoryId?: string;
      brandId?: string;
      minPrice?: number;
      maxPrice?: number;
      sortBy?: string;
    },
  ) {
    // Base search condition (excluding facets/filters)
    const baseWhere: Prisma.ProductWhereInput = {
      status: 'active',
      deletedAt: null,
      ...(query
        ? {
            OR: [
              { name: { contains: query, mode: 'insensitive' } },
              { sku: { contains: query, mode: 'insensitive' } },
              { shortDescription: { contains: query, mode: 'insensitive' } },
              { description: { contains: query, mode: 'insensitive' } },
              { brand: { name: { contains: query, mode: 'insensitive' } } },
              { category: { name: { contains: query, mode: 'insensitive' } } },
              {
                features: {
                  some: { feature: { contains: query, mode: 'insensitive' } },
                },
              },
              {
                specs: {
                  some: {
                    OR: [
                      { specKey: { contains: query, mode: 'insensitive' } },
                      { specValue: { contains: query, mode: 'insensitive' } },
                    ],
                  },
                },
              },
            ],
          }
        : {}),
    };

    // Full filter condition
    const where: Prisma.ProductWhereInput = {
      ...baseWhere,
      ...(options?.categoryId !== undefined
        ? { categoryId: options.categoryId }
        : {}),
      ...(options?.brandId !== undefined ? { brandId: options.brandId } : {}),
      // Price filter via relation (ProductPrice is a related model)
      ...(options?.minPrice !== undefined || options?.maxPrice !== undefined
        ? {
            price: {
              is: {
                price: {
                  ...(options?.minPrice !== undefined
                    ? { gte: options.minPrice }
                    : {}),
                  ...(options?.maxPrice !== undefined
                    ? { lte: options.maxPrice }
                    : {}),
                },
              },
            },
          }
        : {}),
    };

    let orderBy: Prisma.ProductOrderByWithRelationInput[] = [
      { createdAt: 'desc' },
    ];
    if (options?.sortBy) {
      if (options.sortBy === 'price-asc')
        orderBy = [{ price: { price: 'asc' } }];
      else if (options.sortBy === 'price-desc')
        orderBy = [{ price: { price: 'desc' } }];
      else if (options.sortBy === 'name-asc') orderBy = [{ name: 'asc' }];
      else if (options.sortBy === 'name-desc') orderBy = [{ name: 'desc' }];
    }

    const [result, categoryGroups, brandGroups] = await Promise.all([
      this.findAll({
        where,
        orderBy,
        include: SEARCH_INCLUDE,
        pagination: { page, limit },
      }),
      this.prisma.product.groupBy({
        by: ['categoryId'],
        where: baseWhere,
        _count: { id: true },
      }),
      this.prisma.product.groupBy({
        by: ['brandId'],
        where: baseWhere,
        _count: { id: true },
      }),
    ]);

    // Enhance facets with names
    const categoryIds = categoryGroups.map((g) => g.categoryId);
    const brandIds = brandGroups
      .map((g) => g.brandId)
      .filter(Boolean) as string[];

    const [categories, brands] = await Promise.all([
      categoryIds.length > 0
        ? this.prisma.category.findMany({
            where: { id: { in: categoryIds } },
            select: { id: true, name: true, slug: true },
          })
        : ([] as { id: string; name: string; slug: string }[]),
      brandIds.length > 0
        ? this.prisma.brand.findMany({
            where: { id: { in: brandIds } },
            select: { id: true, name: true, slug: true },
          })
        : ([] as { id: string; name: string; slug: string }[]),
    ]);

    const facets = {
      categories: categoryGroups
        .map((g) => {
          const cat = categories.find((c) => c.id === g.categoryId);
          return {
            id: g.categoryId,
            name: cat?.name || 'Unknown',
            slug: cat?.slug || '',
            count: g._count.id,
          };
        })
        .filter((c) => c.name !== 'Unknown')
        .sort((a, b) => b.count - a.count),
      brands: brandGroups
        .filter((g) => g.brandId)
        .map((g) => {
          const b = brands.find((b) => b.id === g.brandId);
          return {
            id: g.brandId!,
            name: b?.name || 'Unknown',
            slug: b?.slug || '',
            count: g._count.id,
          };
        })
        .filter((b) => b.name !== 'Unknown')
        .sort((a, b) => b.count - a.count),
    };

    return {
      ...result,
      data: await this.imageRecord.attachImagesToMany(result.data, ENTITY_TYPE),
      facets,
    };
  }

  async listProductsPublic(dto: ListProductsDto) {
    const {
      search,
      categoryId,
      brandId,
      minPrice,
      maxPrice,
      sortBy,
      page = 1,
      limit = 20,
    } = dto;

    // 1. CONDICIÓN BASE: Define el "universo" contextual (Fijo por Categoría o por término de Búsqueda)
    const baseWhere: Prisma.ProductWhereInput = {
      status: 'active',
      deletedAt: null,
      ...(categoryId && { categoryId }),
      ...(search
        ? {
            OR: [
              { name: { contains: search, mode: 'insensitive' } },
              { sku: { contains: search, mode: 'insensitive' } },
              { shortDescription: { contains: search, mode: 'insensitive' } },
              { description: { contains: search, mode: 'insensitive' } },
              { brand: { name: { contains: search, mode: 'insensitive' } } },
              { category: { name: { contains: search, mode: 'insensitive' } } },
              {
                features: {
                  some: { feature: { contains: search, mode: 'insensitive' } },
                },
              },
              {
                specs: {
                  some: {
                    OR: [
                      { specKey: { contains: search, mode: 'insensitive' } },
                      { specValue: { contains: search, mode: 'insensitive' } },
                    ],
                  },
                },
              },
            ],
          }
        : {}),
    };

    // 2. CONDICIÓN DINÁMICA: Aplica absolutamente todos los filtros cruzados del panel sobre los productos
    const productsWhere: Prisma.ProductWhereInput = {
      ...baseWhere,
      ...(brandId && { brandId }),
      ...(minPrice !== undefined || maxPrice !== undefined
        ? {
            price: {
              is: {
                price: {
                  ...(minPrice !== undefined && { gte: minPrice }),
                  ...(maxPrice !== undefined && { lte: maxPrice }),
                },
              },
            },
          }
        : {}),
    };

    // 3. ORDENAMIENTO DE PRODUCTOS
    let orderBy: Prisma.ProductOrderByWithRelationInput[] = [
      { createdAt: 'desc' },
    ];
    if (sortBy) {
      switch (sortBy) {
        case 'price-asc':
          orderBy = [{ price: { price: 'asc' } }];
          break;
        case 'price-desc':
          orderBy = [{ price: { price: 'desc' } }];
          break;
        case 'name-asc':
          orderBy = [{ name: 'asc' }];
          break;
        case 'name-desc':
          orderBy = [{ name: 'desc' }];
          break;
      }
    }

    // 4. CONSULTAS EN PARALELO
    // Usamos 'baseWhere' en las facetas para que se calculen en base al inicio del contexto
    // y no se auto-filtren destruyendo las opciones del usuario.
    const [result, categoryGroups, brandGroups, priceAggregate] =
      await Promise.all([
        this.findAll({
          where: productsWhere, // Los productos reales sí reciben las mutaciones de marca y precio
          orderBy,
          include: SEARCH_INCLUDE,
          pagination: { page, limit },
        }),
        this.prisma.product.groupBy({
          by: ['categoryId'],
          where: baseWhere, // Estático basado en el contexto inicial
          _count: { id: true },
        }),
        this.prisma.product.groupBy({
          by: ['brandId'],
          where: baseWhere, // Estático basado en el contexto inicial
          _count: { id: true },
        }),
        // Agregación correcta a través de la relación inversa 1:1 con ProductPrice
        this.prisma.productPrice.aggregate({
          where: {
            product: baseWhere, // El slider mantendrá los límites iniciales reales
          },
          _min: {
            price: true,
          },
          _max: {
            price: true,
          },
        }),
      ]);

    // 5. OBTENER INFORMACIÓN DE CATEGORÍAS Y MARCAS ENCONTRADAS
    const categoryIds = categoryGroups.map((g) => g.categoryId);
    const brandIds = brandGroups
      .map((g) => g.brandId)
      .filter((id): id is string => id !== null);

    const [categories, brands] = await Promise.all([
      categoryIds.length > 0
        ? this.prisma.category.findMany({
            where: { id: { in: categoryIds } },
            select: { id: true, name: true, slug: true },
          })
        : ([] as { id: string; name: string; slug: string }[]),
      brandIds.length > 0
        ? this.prisma.brand.findMany({
            where: { id: { in: brandIds } },
            select: { id: true, name: true, slug: true },
          })
        : ([] as { id: string; name: string; slug: string }[]),
    ]);

    // 6. CONSTRUCCIÓN ESTRUCTURADA DE FACETS (CON CONTROL DE TIPOS DECIMAL -> NUMBER)
    const facets = {
      // Si el cliente ya está en una categoría fija vía URL, ocultamos el facet de categorías.
      // Si está en el buscador global sin categoría fija, se muestran las categorías coincidentes.
      categories: categoryId
        ? []
        : categoryGroups
            .map((g) => {
              const cat = categories.find((c) => c.id === g.categoryId);
              return {
                id: g.categoryId,
                name: cat?.name ?? 'Unknown',
                slug: cat?.slug ?? '',
                count: g._count.id,
              };
            })
            .filter((c) => c.name !== 'Unknown')
            .sort((a, b) => b.count - a.count),
      brands: brandGroups
        .filter((g) => g.brandId !== null)
        .map((g) => {
          const brand = brands.find((b) => b.id === g.brandId);
          return {
            id: g.brandId!,
            name: brand?.name ?? 'Unknown',
            slug: brand?.slug ?? '',
            count: g._count.id,
          };
        })
        .filter((b) => b.name !== 'Unknown')
        .sort((a, b) => b.count - a.count),
      priceRange: {
        min: priceAggregate._min?.price ? Number(priceAggregate._min.price) : 0,
        max: priceAggregate._max?.price ? Number(priceAggregate._max.price) : 0,
      },
    };

    return {
      data: await this.imageRecord.attachImagesToMany(result.data, ENTITY_TYPE),
      meta: result.meta,
      facets,
    };
  }

  // ═══════════════════════════════════════════════
  // findProductById
  // ═══════════════════════════════════════════════

  async findProductById(id: string) {
    const product = await this.findOne(id, DETAIL_INCLUDE);
    return this.imageRecord.attachImagesToEntity(product, ENTITY_TYPE);
  }

  // ═══════════════════════════════════════════════
  // findProductBySlug
  // ═══════════════════════════════════════════════

  async findProductBySlug(slug: string) {
    const product = await this.findBySlug(slug, DETAIL_INCLUDE);
    const productWithImages = await this.imageRecord.attachImagesToEntity(
      product,
      ENTITY_TYPE,
    );

    // Agregar rating y reseñas aprobadas
    const reviewsStats = await this.reviewService.getProductReviewsStats(
      product.id,
    );

    return {
      ...productWithImages,
      rating: reviewsStats.rating,
      totalReviews: reviewsStats.totalReviews,
      reviews: reviewsStats.reviews,
    };
  }

  // ═══════════════════════════════════════════════
  // createProduct
  //
  // Paso 1 — findTempRecord x N: valida todas las imágenes (solo lectura)
  //          Si cualquiera falla: error, nada tocado
  // Paso 2 — moveToFinal x N: mueve todos los archivos al disco
  //          Si cualquiera falla: deleteFiles revierte los ya movidos,
  //          BD intacta (aún no se tocó)
  // Paso 3 — $transaction: crea producto + precio + specs + features
  //          + confirmInDb x N, todo atómico
  //          Si falla: deleteFiles revierte el disco, BD sin cambios
  // ═══════════════════════════════════════════════

  async createProduct(dto: CreateProductDto, adminId: string) {
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
    // Paso 1: valida todas las imágenes antes de tocar la BD
    const [mainTempRecord, galleryTempRecords] = await Promise.all([
      tempMainImageId !== undefined
        ? this.imageRecord.findTempRecord(
            tempMainImageId,
            ENTITY_TYPE,
            IMAGE_ROLE_MAIN,
          )
        : Promise.resolve(null),
      tempGalleryImageIds?.length
        ? Promise.all(
            tempGalleryImageIds.map((id) =>
              this.imageRecord.findTempRecord(
                id,
                ENTITY_TYPE,
                IMAGE_ROLE_GALLERY,
              ),
            ),
          )
        : Promise.resolve(null),
    ]);

    // Paso 2: mueve todos los archivos al disco (sin tocar BD)
    const movedList: MovedImageData[] = [];

    try {
      if (mainTempRecord !== null) {
        const moved = await this.imageRecord.moveToFinal(
          mainTempRecord,
          ENTITY_TYPE,
          '', // entityId aún no existe
          IMAGE_ROLE_MAIN,
          0,
        );
        movedList.push(moved);
      }

      if (galleryTempRecords !== null) {
        for (let order = 0; order < galleryTempRecords.length; order++) {
          const moved = await this.imageRecord.moveToFinal(
            galleryTempRecords[order],
            ENTITY_TYPE,
            '', // entityId aún no existe
            IMAGE_ROLE_GALLERY,
            order,
          );
          movedList.push(moved);
        }
      }
    } catch (error) {
      // Algún moveToFinal falló → revierte los archivos ya movidos
      await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
      throw error;
    }

    // Paso 3: BD atómica — crea producto + datos + confirma imágenes
    try {
      const product = await this.prisma.$transaction(async (tx) => {
        const slug = await this.generateUniqueSlug(
          productData.name,
          undefined,
          tx,
        );

        const dataToCreate: CreateProductDto = { ...productData };
        if (dataToCreate.isFeatured === null) delete dataToCreate.isFeatured;
        if (dataToCreate.status === null) delete dataToCreate.status;
        if (dataToCreate.stock === null) delete dataToCreate.stock;

        const created = await this.create(
          {
            ...dataToCreate,
            slug,
            createdById: adminId,
            updatedById: adminId,
          } as CreateProductDto,
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
          // Confirma todas las imágenes inyectando el id real
          ...movedList.map((moved) =>
            this.imageRecord.confirmInDb(
              { ...moved, entityId: created.id },
              tx,
            ),
          ),
        ]);

        return created;
      });

      return this.findProductById(product.id);
    } catch (error) {
      // $transaction falló → revierte todos los archivos movidos al disco
      await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
      throw error;
    }
  }

  // ═══════════════════════════════════════════════
  // updateProduct
  //
  // Paso 1 — findTempRecord x N: valida todas las imágenes (solo lectura)
  //          Si cualquiera falla: error, BD intacta, front mantiene el form
  // Paso 2 — moveToFinal x N: mueve todos los archivos al disco
  //          Si cualquiera falla: deleteFiles revierte los ya movidos,
  //          BD intacta (aún no se tocó)
  // Paso 3 — $transaction: update producto + datos + confirmInDb x N
  //          Si falla: deleteFiles revierte el disco, BD sin cambios
  // ═══════════════════════════════════════════════

  async updateProduct(id: string, dto: UpdateProductDto, adminId: string) {
    const {
      tempMainImageId,
      tempGalleryImageIds,
      removedMainImageId,
      removedGalleryImageIds,
      price,
      compareAtPrice,
      cost,
      changedById,
      reason,
      specs,
      features,
      ...productData
    } = dto;

    // Paso 1: valida todas las imágenes nuevas antes de tocar la BD
    const [mainTempRecord, galleryTempRecords] = await Promise.all([
      tempMainImageId !== undefined
        ? this.imageRecord.findTempRecord(
            tempMainImageId,
            ENTITY_TYPE,
            IMAGE_ROLE_MAIN,
          )
        : Promise.resolve(null),
      tempGalleryImageIds?.length
        ? Promise.all(
            tempGalleryImageIds.map((imgId) =>
              this.imageRecord.findTempRecord(
                imgId,
                ENTITY_TYPE,
                IMAGE_ROLE_GALLERY,
              ),
            ),
          )
        : Promise.resolve(null),
    ]);

    // Paso 2: mueve todos los archivos nuevos al disco (sin tocar BD)
    const movedList: MovedImageData[] = [];

    try {
      if (mainTempRecord !== null) {
        const moved = await this.imageRecord.moveToFinal(
          mainTempRecord,
          ENTITY_TYPE,
          id,
          IMAGE_ROLE_MAIN,
          0,
        );
        movedList.push(moved);
      }

      if (galleryTempRecords !== null) {
        for (let order = 0; order < galleryTempRecords.length; order++) {
          const moved = await this.imageRecord.moveToFinal(
            galleryTempRecords[order],
            ENTITY_TYPE,
            id,
            IMAGE_ROLE_GALLERY,
            order,
          );
          movedList.push(moved);
        }
      }
    } catch (error) {
      await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
      throw error;
    }

    // Determina si viene una nueva imagen main (para no eliminar y añadir al mismo tiempo)
    const hasNewMainImage = movedList.some(
      (m) => m.imageRole === IMAGE_ROLE_MAIN,
    );

    // Paso 3: BD atómica — update producto + datos + imágenes
    try {
      await this.prisma.$transaction(async (tx) => {
        const dataToUpdate: UpdateProductDto = {
          ...productData,
        };
        if (dataToUpdate.isFeatured === null) delete dataToUpdate.isFeatured;
        if (dataToUpdate.status === null) delete dataToUpdate.status;
        if (dataToUpdate.stock === null) delete dataToUpdate.stock;

        await this.updateWithSlug(
          id,
          { ...dataToUpdate, updatedById: adminId } as UpdateProductDto,
          undefined,
          tx,
        );

        await Promise.all([
          // Precio
          price !== undefined
            ? this.priceService.setPrice(
                id,
                { price, compareAtPrice, cost, changedById, reason },
                tx,
              )
            : Promise.resolve(),

          // Specs y features
          specs !== undefined
            ? this.specsService.setSpecs(id, specs ?? [], tx)
            : Promise.resolve(),
          features !== undefined
            ? this.specsService.setFeatures(id, features ?? [], tx)
            : Promise.resolve(),

          // Imagen main: si viene nueva, confirmInDb elimina la anterior automáticamente.
          // Si no viene nueva pero se pidió eliminar, elimina por ID.
          !hasNewMainImage && removedMainImageId
            ? this.imageRecord.deleteImageById(removedMainImageId, tx)
            : Promise.resolve(),

          // Imágenes de galería eliminadas individualmente por el usuario
          ...(removedGalleryImageIds?.map((imgId) =>
            this.imageRecord.deleteImageById(imgId, tx),
          ) ?? []),

          // Confirma todas las imágenes nuevas (confirmInDb elimina el rol anterior si aplica)
          ...movedList.map((moved) => this.imageRecord.confirmInDb(moved, tx)),
        ]);
      });
    } catch (error) {
      await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
      throw error;
    }

    return this.findProductById(id);
  }

  /**
   * Actualiza el estado de múltiples productos a la vez.
   * @param ids Arreglo de UUIDs de los productos.
   * @param status Nuevo estado (active, draft, inactive, out_of_stock).
   */
  async changeStatusManyPro(ids: string[], status: string, adminId: string) {
    // Usamos el helper getModel() heredado de BaseService
    return this.getModel().updateMany({
      where: {
        id: { in: ids },
        // Importante: No cambiamos el estado a productos eliminados lógicamente
        ...this.softDeleteFilter(),
      },
      data: {
        status,
        updatedById: adminId,
      },
    });
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

  async softDeleteProduct(id: string, adminId: string) {
    await this.checkRelations(id, RELATION_CHECKS);
    return this.softDelete(id, adminId);
  }

  // ═══════════════════════════════════════════════
  // softDeleteManyProducts
  // ═══════════════════════════════════════════════

  async softDeleteManyProducts(ids: string[], adminId: string) {
    await this.checkRelationsMany(ids, RELATION_CHECKS);
    return this.softDeleteMany(ids, adminId);
  }

  // ═══════════════════════════════════════════════
  // restoreProduct
  // ═══════════════════════════════════════════════

  async restoreProduct(id: string, adminId: string) {
    await this.assertNotDeleted(id);
    return this.restore(id, adminId);
  }

  // ═══════════════════════════════════════════════
  // restoreManyProducts
  // ═══════════════════════════════════════════════

  async restoreManyProducts(ids: string[], adminId: string) {
    return this.restoreMany(ids, adminId);
  }
}

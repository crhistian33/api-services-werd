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
import { CreateProductDto, UpdateProductDto, QueryProductDto } from '../dto';

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
    return this.imageRecord.attachImagesToEntity(product, ENTITY_TYPE);
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

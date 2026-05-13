"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../../../generated/prisma/client");
const prisma_service_1 = require("../../../prisma/prisma.service");
const sluggable_service_1 = require("../../../common/services/sluggable.service");
const image_record_service_1 = require("../../images/services/image-record.service");
const product_price_service_1 = require("./product-price.service");
const product_specs_service_1 = require("./product-specs.service");
const ENTITY_TYPE = client_1.ImageEntityType.PRODUCT;
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
    specs: { orderBy: { sortOrder: 'asc' } },
    features: { orderBy: { sortOrder: 'asc' } },
};
const LIST_INCLUDE = {
    category: { select: { id: true, name: true, slug: true } },
    brand: { select: { id: true, name: true, slug: true } },
    createdBy: { select: { id: true, name: true, email: true } },
    updatedBy: { select: { id: true, name: true, email: true } },
    price: true,
};
const TRASH_INCLUDE = {
    category: { select: { id: true, name: true, slug: true } },
    brand: { select: { id: true, name: true, slug: true } },
    deletedBy: { select: { id: true, name: true, email: true } },
    price: true,
};
const PUBLIC_LIST_INCLUDE = {
    ...LIST_INCLUDE,
    features: { orderBy: { sortOrder: 'asc' } },
};
let ProductsService = class ProductsService extends sluggable_service_1.SluggableService {
    imageRecord;
    priceService;
    specsService;
    useSoftDelete = true;
    constructor(prisma, imageRecord, priceService, specsService) {
        super(prisma, 'product');
        this.imageRecord = imageRecord;
        this.priceService = priceService;
        this.specsService = specsService;
    }
    async findAllProducts(query) {
        const { search, categoryId, brandId, status, isFeatured, page, limit, onlyTrash, } = query;
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
    async findAllProductsPublic(query) {
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
    async findProductById(id) {
        const product = await this.findOne(id, DETAIL_INCLUDE);
        return this.imageRecord.attachImagesToEntity(product, ENTITY_TYPE);
    }
    async findProductBySlug(slug) {
        const product = await this.findBySlug(slug, DETAIL_INCLUDE);
        return this.imageRecord.attachImagesToEntity(product, ENTITY_TYPE);
    }
    async createProduct(dto, adminId) {
        const { tempMainImageId, tempGalleryImageIds, price, compareAtPrice, cost, specs, features, ...productData } = dto;
        const [mainTempRecord, galleryTempRecords] = await Promise.all([
            tempMainImageId !== undefined
                ? this.imageRecord.findTempRecord(tempMainImageId, ENTITY_TYPE, IMAGE_ROLE_MAIN)
                : Promise.resolve(null),
            tempGalleryImageIds?.length
                ? Promise.all(tempGalleryImageIds.map((id) => this.imageRecord.findTempRecord(id, ENTITY_TYPE, IMAGE_ROLE_GALLERY)))
                : Promise.resolve(null),
        ]);
        const movedList = [];
        try {
            if (mainTempRecord !== null) {
                const moved = await this.imageRecord.moveToFinal(mainTempRecord, ENTITY_TYPE, '', IMAGE_ROLE_MAIN, 0);
                movedList.push(moved);
            }
            if (galleryTempRecords !== null) {
                for (let order = 0; order < galleryTempRecords.length; order++) {
                    const moved = await this.imageRecord.moveToFinal(galleryTempRecords[order], ENTITY_TYPE, '', IMAGE_ROLE_GALLERY, order);
                    movedList.push(moved);
                }
            }
        }
        catch (error) {
            await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
            throw error;
        }
        try {
            const product = await this.prisma.$transaction(async (tx) => {
                const slug = await this.generateUniqueSlug(productData.name, undefined, tx);
                const dataToCreate = { ...productData };
                if (dataToCreate.isFeatured === null)
                    delete dataToCreate.isFeatured;
                if (dataToCreate.status === null)
                    delete dataToCreate.status;
                if (dataToCreate.stock === null)
                    delete dataToCreate.stock;
                const created = await this.create({
                    ...dataToCreate,
                    slug,
                    createdById: adminId,
                    updatedById: adminId,
                }, undefined, tx);
                await Promise.all([
                    price !== undefined
                        ? this.priceService.setPrice(created.id, { price, compareAtPrice, cost }, tx)
                        : Promise.resolve(),
                    specs?.length
                        ? this.specsService.setSpecs(created.id, specs, tx)
                        : Promise.resolve(),
                    features?.length
                        ? this.specsService.setFeatures(created.id, features, tx)
                        : Promise.resolve(),
                    ...movedList.map((moved) => this.imageRecord.confirmInDb({ ...moved, entityId: created.id }, tx)),
                ]);
                return created;
            });
            return this.findProductById(product.id);
        }
        catch (error) {
            await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
            throw error;
        }
    }
    async updateProduct(id, dto, adminId) {
        const { tempMainImageId, tempGalleryImageIds, removedMainImageId, removedGalleryImageIds, price, compareAtPrice, cost, changedById, reason, specs, features, ...productData } = dto;
        const [mainTempRecord, galleryTempRecords] = await Promise.all([
            tempMainImageId !== undefined
                ? this.imageRecord.findTempRecord(tempMainImageId, ENTITY_TYPE, IMAGE_ROLE_MAIN)
                : Promise.resolve(null),
            tempGalleryImageIds?.length
                ? Promise.all(tempGalleryImageIds.map((imgId) => this.imageRecord.findTempRecord(imgId, ENTITY_TYPE, IMAGE_ROLE_GALLERY)))
                : Promise.resolve(null),
        ]);
        const movedList = [];
        try {
            if (mainTempRecord !== null) {
                const moved = await this.imageRecord.moveToFinal(mainTempRecord, ENTITY_TYPE, id, IMAGE_ROLE_MAIN, 0);
                movedList.push(moved);
            }
            if (galleryTempRecords !== null) {
                for (let order = 0; order < galleryTempRecords.length; order++) {
                    const moved = await this.imageRecord.moveToFinal(galleryTempRecords[order], ENTITY_TYPE, id, IMAGE_ROLE_GALLERY, order);
                    movedList.push(moved);
                }
            }
        }
        catch (error) {
            await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
            throw error;
        }
        const hasNewMainImage = movedList.some((m) => m.imageRole === IMAGE_ROLE_MAIN);
        try {
            await this.prisma.$transaction(async (tx) => {
                const dataToUpdate = {
                    ...productData,
                };
                if (dataToUpdate.isFeatured === null)
                    delete dataToUpdate.isFeatured;
                if (dataToUpdate.status === null)
                    delete dataToUpdate.status;
                if (dataToUpdate.stock === null)
                    delete dataToUpdate.stock;
                await this.updateWithSlug(id, { ...dataToUpdate, updatedById: adminId }, undefined, tx);
                await Promise.all([
                    price !== undefined
                        ? this.priceService.setPrice(id, { price, compareAtPrice, cost, changedById, reason }, tx)
                        : Promise.resolve(),
                    specs !== undefined
                        ? this.specsService.setSpecs(id, specs ?? [], tx)
                        : Promise.resolve(),
                    features !== undefined
                        ? this.specsService.setFeatures(id, features ?? [], tx)
                        : Promise.resolve(),
                    !hasNewMainImage && removedMainImageId
                        ? this.imageRecord.deleteImageById(removedMainImageId, tx)
                        : Promise.resolve(),
                    ...(removedGalleryImageIds?.map((imgId) => this.imageRecord.deleteImageById(imgId, tx)) ?? []),
                    ...movedList.map((moved) => this.imageRecord.confirmInDb(moved, tx)),
                ]);
            });
        }
        catch (error) {
            await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
            throw error;
        }
        return this.findProductById(id);
    }
    async changeStatusManyPro(ids, status, adminId) {
        return this.getModel().updateMany({
            where: {
                id: { in: ids },
                ...this.softDeleteFilter(),
            },
            data: {
                status,
                updatedById: adminId,
            },
        });
    }
    async removeProduct(id) {
        await this.checkRelations(id, RELATION_CHECKS);
        await this.imageRecord.deleteEntityImages(ENTITY_TYPE, id);
        return this.remove(id);
    }
    async removeManyProducts(ids) {
        await this.checkRelationsMany(ids, RELATION_CHECKS);
        await Promise.all(ids.map((id) => this.imageRecord.deleteEntityImages(ENTITY_TYPE, id)));
        return this.removeMany(ids);
    }
    async softDeleteProduct(id, adminId) {
        await this.checkRelations(id, RELATION_CHECKS);
        return this.softDelete(id, adminId);
    }
    async softDeleteManyProducts(ids, adminId) {
        await this.checkRelationsMany(ids, RELATION_CHECKS);
        return this.softDeleteMany(ids, adminId);
    }
    async restoreProduct(id, adminId) {
        await this.assertNotDeleted(id);
        return this.restore(id, adminId);
    }
    async restoreManyProducts(ids, adminId) {
        return this.restoreMany(ids, adminId);
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        image_record_service_1.ImageRecordService,
        product_price_service_1.ProductPriceService,
        product_specs_service_1.ProductSpecsService])
], ProductsService);
//# sourceMappingURL=products.service.js.map
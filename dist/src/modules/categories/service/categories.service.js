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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../../../generated/prisma/client");
const prisma_service_1 = require("../../../prisma/prisma.service");
const sluggable_service_1 = require("../../../common/services/sluggable.service");
const image_record_service_1 = require("../../images/services/image-record.service");
const ENTITY_TYPE = client_1.ImageEntityType.CATEGORY;
const IMAGE_ROLE = 'main';
const RELATION_CHECKS = [
    { countKey: 'products', label: 'producto(s) asignado(s)' },
    { countKey: 'children', label: 'subcategoría(s)' },
];
const LIST_INCLUDE = {
    createdBy: { select: { id: true, name: true, email: true } },
    updatedBy: { select: { id: true, name: true, email: true } },
};
const TRASH_INCLUDE = {
    deletedBy: { select: { id: true, name: true, email: true } },
};
const DETAIL_INCLUDE = {
    parent: { select: { id: true, name: true, slug: true } },
    children: {
        where: { isActive: true, deletedAt: null },
        orderBy: { sortOrder: 'asc' },
        select: { id: true, name: true, slug: true, sortOrder: true },
    },
    _count: { select: { products: true } },
};
let CategoriesService = class CategoriesService extends sluggable_service_1.SluggableService {
    imageRecord;
    useSoftDelete = true;
    constructor(prisma, imageRecord) {
        super(prisma, 'category');
        this.imageRecord = imageRecord;
    }
    async findAllCategories(query) {
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
    async findCategoryById(id) {
        const category = await this.findOne(id, DETAIL_INCLUDE);
        return this.imageRecord.attachImagesToEntity(category, ENTITY_TYPE);
    }
    async findCategoryBySlug(slug) {
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
    async createCategory(dto, adminId) {
        if (dto.parentId !== undefined && dto.parentId !== null) {
            await this.assertExists(dto.parentId);
        }
        const { tempImageId, ...categoryData } = dto;
        const tempRecord = tempImageId !== undefined && tempImageId !== null
            ? await this.imageRecord.findTempRecord(tempImageId, ENTITY_TYPE, IMAGE_ROLE)
            : null;
        let moved = null;
        if (tempRecord !== null) {
            moved = await this.imageRecord.moveToFinal(tempRecord, ENTITY_TYPE, '', IMAGE_ROLE);
        }
        try {
            const category = await this.prisma.$transaction(async (tx) => {
                const slug = await this.generateUniqueSlug(categoryData.name, undefined, tx);
                const created = await this.create({
                    ...categoryData,
                    slug,
                    createdById: adminId,
                    updatedById: adminId,
                }, undefined, tx);
                if (moved !== null) {
                    await this.imageRecord.confirmInDb({ ...moved, entityId: created.id }, tx);
                }
                return created;
            });
            return this.findCategoryById(category.id);
        }
        catch (error) {
            if (moved !== null) {
                await this.imageRecord.deleteFiles([moved.finalPath]);
            }
            throw error;
        }
    }
    async updateCategory(id, dto, adminId) {
        if (dto.parentId !== undefined && dto.parentId !== null) {
            if (dto.parentId === id) {
                throw new common_1.BadRequestException('Una categoría no puede ser su propio padre');
            }
            await this.assertExists(dto.parentId);
        }
        const { tempImageId, removedImageId, ...categoryData } = dto;
        const tempRecord = tempImageId !== undefined && tempImageId !== null
            ? await this.imageRecord.findTempRecord(tempImageId, ENTITY_TYPE, IMAGE_ROLE)
            : null;
        let moved = null;
        if (tempRecord !== null) {
            moved = await this.imageRecord.moveToFinal(tempRecord, ENTITY_TYPE, id, IMAGE_ROLE);
        }
        try {
            await this.prisma.$transaction(async (tx) => {
                await this.updateWithSlug(id, { ...categoryData, updatedById: adminId }, undefined, tx);
                if (moved !== null) {
                    await this.imageRecord.confirmInDb(moved, tx);
                }
                else if (removedImageId) {
                    await this.imageRecord.deleteImageById(removedImageId, tx);
                }
            });
        }
        catch (error) {
            if (moved !== null) {
                await this.imageRecord.deleteFiles([moved.finalPath]);
            }
            throw error;
        }
        return this.findCategoryById(id);
    }
    async removeCategory(id) {
        await this.checkRelations(id, RELATION_CHECKS);
        await this.imageRecord.deleteEntityImages(ENTITY_TYPE, id);
        return this.remove(id);
    }
    async removeManyCategories(ids) {
        await this.checkRelationsMany(ids, RELATION_CHECKS);
        await Promise.all(ids.map((id) => this.imageRecord.deleteEntityImages(ENTITY_TYPE, id)));
        return this.removeMany(ids);
    }
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
    async softDeleteCategory(id, adminId) {
        await this.checkRelations(id, RELATION_CHECKS);
        return this.softDelete(id, adminId);
    }
    async softDeleteManyCategories(ids, adminId) {
        await this.checkRelationsMany(ids, RELATION_CHECKS);
        return this.softDeleteMany(ids, adminId);
    }
    async restoreCategory(id, adminId) {
        await this.assertNotDeleted(id);
        return this.restore(id, adminId);
    }
    async restoreManyCategories(ids, adminId) {
        return this.restoreMany(ids, adminId);
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        image_record_service_1.ImageRecordService])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map
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
exports.BrandsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../../../generated/prisma/client");
const prisma_service_1 = require("../../../prisma/prisma.service");
const sluggable_service_1 = require("../../../common/services/sluggable.service");
const image_record_service_1 = require("../../images/services/image-record.service");
const ENTITY_TYPE = client_1.ImageEntityType.BRAND;
const IMAGE_ROLE = 'logo';
const RELATION_CHECKS = [
    { countKey: 'products', label: 'producto(s) asignado(s)' },
];
const LIST_INCLUDE = {
    createdBy: { select: { id: true, name: true, email: true } },
    updatedBy: { select: { id: true, name: true, email: true } },
};
const TRASH_INCLUDE = {
    deletedBy: { select: { id: true, name: true, email: true } },
};
let BrandsService = class BrandsService extends sluggable_service_1.SluggableService {
    imageRecord;
    useSoftDelete = true;
    constructor(prisma, imageRecord) {
        super(prisma, 'brand');
        this.imageRecord = imageRecord;
    }
    async findAllBrands(query) {
        const { search, isActive, page, limit, onlyTrash } = query;
        const result = await this.findAll({
            where: {
                ...(isActive !== undefined && { isActive }),
                ...(search !== undefined && {
                    OR: [
                        { name: { contains: search, mode: 'insensitive' } },
                        { description: { contains: search, mode: 'insensitive' } },
                    ],
                }),
            },
            orderBy: { name: 'asc' },
            pagination: { page, limit },
            include: onlyTrash ? TRASH_INCLUDE : LIST_INCLUDE,
            onlyTrash,
        });
        return {
            ...result,
            data: await this.imageRecord.attachImagesToMany(result.data, ENTITY_TYPE),
        };
    }
    async findBrandById(id) {
        const brand = await this.findOne(id);
        return this.imageRecord.attachImagesToEntity(brand, ENTITY_TYPE);
    }
    async findBrandBySlug(slug) {
        const brand = await this.findBySlug(slug);
        return this.imageRecord.attachImagesToEntity(brand, ENTITY_TYPE);
    }
    async createBrand(dto, adminId) {
        const { tempImageId, ...brandData } = dto;
        const tempRecord = tempImageId !== undefined
            ? await this.imageRecord.findTempRecord(tempImageId, ENTITY_TYPE, IMAGE_ROLE)
            : null;
        let moved = null;
        if (tempRecord !== null) {
            moved = await this.imageRecord.moveToFinal(tempRecord, ENTITY_TYPE, '', IMAGE_ROLE);
        }
        try {
            const brand = await this.prisma.$transaction(async (tx) => {
                const slug = await this.generateUniqueSlug(brandData.name, undefined, tx);
                const created = await this.create({
                    ...brandData,
                    createdById: adminId,
                    updatedById: adminId,
                    slug,
                }, undefined, tx);
                if (moved !== null) {
                    await this.imageRecord.confirmInDb({ ...moved, entityId: created.id }, tx);
                }
                return created;
            });
            return this.findBrandById(brand.id);
        }
        catch (error) {
            if (moved !== null) {
                await this.imageRecord.deleteFiles([moved.finalPath]);
            }
            throw error;
        }
    }
    async updateBrand(id, dto, adminId) {
        const { tempImageId, ...brandData } = dto;
        const tempRecord = tempImageId !== undefined
            ? await this.imageRecord.findTempRecord(tempImageId, ENTITY_TYPE, IMAGE_ROLE)
            : null;
        let moved = null;
        if (tempRecord !== null) {
            moved = await this.imageRecord.moveToFinal(tempRecord, ENTITY_TYPE, id, IMAGE_ROLE);
        }
        try {
            await this.prisma.$transaction(async (tx) => {
                await this.updateWithSlug(id, { ...brandData, updatedById: adminId }, undefined, tx);
                if (moved !== null) {
                    await this.imageRecord.confirmInDb(moved, tx);
                }
            });
        }
        catch (error) {
            if (moved !== null) {
                await this.imageRecord.deleteFiles([moved.finalPath]);
            }
            throw error;
        }
        return this.findBrandById(id);
    }
    async removeBrand(id) {
        await this.checkRelations(id, RELATION_CHECKS);
        await this.imageRecord.deleteEntityImages(ENTITY_TYPE, id);
        return this.remove(id);
    }
    async removeManyBrands(ids) {
        await this.checkRelationsMany(ids, RELATION_CHECKS);
        await Promise.all(ids.map((id) => this.imageRecord.deleteEntityImages(ENTITY_TYPE, id)));
        return this.removeMany(ids);
    }
    async softDeleteBrand(id, adminId) {
        await this.checkRelations(id, RELATION_CHECKS);
        return this.softDelete(id, adminId);
    }
    async softDeleteManyBrands(ids, adminId) {
        await this.checkRelationsMany(ids, RELATION_CHECKS);
        return this.softDeleteMany(ids, adminId);
    }
    async restoreBrand(id, adminId) {
        await this.assertNotDeleted(id);
        return this.restore(id, adminId);
    }
    async restoreManyBrands(ids, adminId) {
        return this.restoreMany(ids, adminId);
    }
};
exports.BrandsService = BrandsService;
exports.BrandsService = BrandsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        image_record_service_1.ImageRecordService])
], BrandsService);
//# sourceMappingURL=brands.service.js.map
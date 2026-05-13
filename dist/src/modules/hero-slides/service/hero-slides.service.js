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
exports.HeroSlidesService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../../../generated/prisma/client");
const prisma_service_1 = require("../../../prisma/prisma.service");
const base_service_1 = require("../../../common/services/base.service");
const image_record_service_1 = require("../../images/services/image-record.service");
const ENTITY_TYPE = client_1.ImageEntityType.HERO_SLIDE;
const ROLE_DESKTOP = 'desktop';
const ROLE_MOBILE = 'mobile';
const LIST_INCLUDE = {
    linkProduct: { select: { id: true, name: true, slug: true } },
    linkCategory: { select: { id: true, name: true, slug: true } },
    createdBy: { select: { id: true, name: true, email: true } },
    updatedBy: { select: { id: true, name: true, email: true } },
};
const TRASH_INCLUDE = {
    linkProduct: { select: { id: true, name: true, slug: true } },
    linkCategory: { select: { id: true, name: true, slug: true } },
    deletedBy: { select: { id: true, name: true, email: true } },
};
let HeroSlidesService = class HeroSlidesService extends base_service_1.BaseService {
    imageRecord;
    useSoftDelete = true;
    nameField = 'title';
    constructor(prisma, imageRecord) {
        super(prisma, 'heroSlide');
        this.imageRecord = imageRecord;
    }
    async findAllHeroSlides(query) {
        const { isActive, linkType, search, page, limit, onlyTrash } = query;
        const result = await this.findAll({
            where: {
                ...(isActive !== undefined && { isActive }),
                ...(linkType !== undefined && { linkType }),
                ...(search !== undefined && {
                    OR: [
                        { title: { contains: search, mode: 'insensitive' } },
                        { subtitle: { contains: search, mode: 'insensitive' } },
                    ],
                }),
            },
            orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
            include: onlyTrash ? TRASH_INCLUDE : LIST_INCLUDE,
            pagination: { page, limit },
            onlyTrash,
        });
        return {
            ...result,
            data: await this.imageRecord.attachImagesToMany(result.data, ENTITY_TYPE),
        };
    }
    async findAllPublic(query) {
        const { search, page, limit } = query;
        const now = new Date();
        const result = await this.findAll({
            where: {
                isActive: true,
                OR: [{ startsAt: null }, { startsAt: { lte: now } }],
                AND: [{ OR: [{ endsAt: null }, { endsAt: { gte: now } }] }],
                deletedAt: null,
                ...(search !== undefined && {
                    OR: [
                        { title: { contains: search, mode: 'insensitive' } },
                        { subtitle: { contains: search, mode: 'insensitive' } },
                    ],
                }),
            },
            orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
            include: LIST_INCLUDE,
            pagination: { page, limit },
        });
        return {
            ...result,
            data: await this.imageRecord.attachImagesToMany(result.data, ENTITY_TYPE),
        };
    }
    async findHeroSlideById(id) {
        const slide = await this.findOne(id, LIST_INCLUDE);
        return this.imageRecord.attachImagesToEntity(slide, ENTITY_TYPE);
    }
    async createHeroSlide(dto, adminId) {
        const { tempDesktopImageId, tempMobileImageId, ...slideData } = dto;
        this.validateLinkData(slideData);
        const [desktopTempRecord, mobileTempRecord] = await Promise.all([
            tempDesktopImageId !== undefined
                ? this.imageRecord.findTempRecord(tempDesktopImageId, ENTITY_TYPE, ROLE_DESKTOP)
                : Promise.resolve(null),
            tempMobileImageId !== undefined
                ? this.imageRecord.findTempRecord(tempMobileImageId, ENTITY_TYPE, ROLE_MOBILE)
                : Promise.resolve(null),
        ]);
        const movedList = [];
        try {
            if (desktopTempRecord !== null) {
                const moved = await this.imageRecord.moveToFinal(desktopTempRecord, ENTITY_TYPE, '', ROLE_DESKTOP);
                movedList.push(moved);
            }
            if (mobileTempRecord !== null) {
                const moved = await this.imageRecord.moveToFinal(mobileTempRecord, ENTITY_TYPE, '', ROLE_MOBILE);
                movedList.push(moved);
            }
        }
        catch (error) {
            await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
            throw error;
        }
        try {
            const slide = await this.prisma.$transaction(async (tx) => {
                const created = await this.create({
                    title: slideData.title,
                    subtitle: slideData.subtitle,
                    linkType: slideData.linkType ?? 'none',
                    linkUrl: slideData.linkType === 'external' ? slideData.linkUrl : null,
                    linkText: slideData.linkType !== 'none' ? slideData.linkText : null,
                    sortOrder: slideData.sortOrder ?? 0,
                    isActive: slideData.isActive ?? true,
                    startsAt: slideData.startsAt ? new Date(slideData.startsAt) : null,
                    endsAt: slideData.endsAt ? new Date(slideData.endsAt) : null,
                    createdBy: { connect: { id: adminId } },
                    updatedBy: { connect: { id: adminId } },
                    ...(slideData.linkType === 'product' &&
                        slideData.linkProductId && {
                        linkProduct: { connect: { id: slideData.linkProductId } },
                    }),
                    ...(slideData.linkType === 'category' &&
                        slideData.linkCategoryId && {
                        linkCategory: { connect: { id: slideData.linkCategoryId } },
                    }),
                }, undefined, tx);
                await Promise.all(movedList.map((moved) => this.imageRecord.confirmInDb({ ...moved, entityId: created.id }, tx)));
                return created;
            });
            return this.findHeroSlideById(slide.id);
        }
        catch (error) {
            await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
            throw error;
        }
    }
    async updateHeroSlide(id, dto, adminId) {
        const { tempDesktopImageId, tempMobileImageId, removedDesktopImageId, removedMobileImageId, ...slideData } = dto;
        this.validateLinkData(slideData);
        await this.assertExists(id);
        const [desktopTempRecord, mobileTempRecord] = await Promise.all([
            tempDesktopImageId !== undefined
                ? this.imageRecord.findTempRecord(tempDesktopImageId, ENTITY_TYPE, ROLE_DESKTOP)
                : Promise.resolve(null),
            tempMobileImageId !== undefined
                ? this.imageRecord.findTempRecord(tempMobileImageId, ENTITY_TYPE, ROLE_MOBILE)
                : Promise.resolve(null),
        ]);
        const movedList = [];
        try {
            if (desktopTempRecord !== null) {
                const moved = await this.imageRecord.moveToFinal(desktopTempRecord, ENTITY_TYPE, id, ROLE_DESKTOP);
                movedList.push(moved);
            }
            if (mobileTempRecord !== null) {
                const moved = await this.imageRecord.moveToFinal(mobileTempRecord, ENTITY_TYPE, id, ROLE_MOBILE);
                movedList.push(moved);
            }
        }
        catch (error) {
            await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
            throw error;
        }
        try {
            await this.prisma.$transaction(async (tx) => {
                await this.update(id, {
                    title: slideData.title,
                    subtitle: slideData.subtitle,
                    linkType: slideData.linkType ?? 'none',
                    linkUrl: slideData.linkType === 'external' ? slideData.linkUrl : null,
                    linkText: slideData.linkType !== 'none' ? slideData.linkText : null,
                    sortOrder: slideData.sortOrder,
                    isActive: slideData.isActive,
                    startsAt: slideData.startsAt ? new Date(slideData.startsAt) : null,
                    endsAt: slideData.endsAt ? new Date(slideData.endsAt) : null,
                    updatedBy: { connect: { id: adminId } },
                    linkProduct: slideData.linkType === 'product' && slideData.linkProductId
                        ? { connect: { id: slideData.linkProductId } }
                        : { disconnect: true },
                    linkCategory: slideData.linkType === 'category' && slideData.linkCategoryId
                        ? { connect: { id: slideData.linkCategoryId } }
                        : { disconnect: true },
                }, undefined, tx);
                await Promise.all([
                    !desktopTempRecord && removedDesktopImageId
                        ? this.imageRecord.deleteImageById(removedDesktopImageId, tx)
                        : Promise.resolve(),
                    !mobileTempRecord && removedMobileImageId
                        ? this.imageRecord.deleteImageById(removedMobileImageId, tx)
                        : Promise.resolve(),
                    ...movedList.map((moved) => this.imageRecord.confirmInDb(moved, tx)),
                ]);
            });
        }
        catch (error) {
            await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
            throw error;
        }
        return this.findHeroSlideById(id);
    }
    async removeHeroSlide(id) {
        await this.imageRecord.deleteEntityImages(ENTITY_TYPE, id);
        return this.remove(id);
    }
    async removeManyHeroSlides(ids) {
        await Promise.all(ids.map((id) => this.imageRecord.deleteEntityImages(ENTITY_TYPE, id)));
        return this.removeMany(ids);
    }
    async reorder(dto, adminId) {
        await this.prisma.$transaction(dto.ids.map((id, index) => this.prisma.heroSlide.update({
            where: { id },
            data: { sortOrder: index, updatedById: adminId },
        })));
        const slides = await this.prisma.heroSlide.findMany({
            where: { id: { in: dto.ids }, deletedAt: null },
            include: LIST_INCLUDE,
            orderBy: { sortOrder: 'asc' },
        });
        return this.imageRecord.attachImagesToMany(slides, ENTITY_TYPE);
    }
    async softDeleteHeroSlide(id, adminId) {
        return this.softDelete(id, adminId);
    }
    async softDeleteManyHeroSlides(ids, adminId) {
        return this.softDeleteMany(ids, adminId);
    }
    async restoreHeroSlide(id, adminId) {
        await this.assertNotDeleted(id);
        return this.restore(id, adminId);
    }
    async restoreManyHeroSlides(ids, adminId) {
        return this.restoreMany(ids, adminId);
    }
    validateLinkData(data) {
        if (data.linkType === client_1.LinkType.product && !data.linkProductId) {
            throw new common_1.BadRequestException('El producto es requerido cuando el tipo de enlace es "producto"');
        }
        if (data.linkType === client_1.LinkType.category && !data.linkCategoryId) {
            throw new common_1.BadRequestException('La categoría es requerida cuando el tipo de enlace es "categoría"');
        }
        if (data.linkType === client_1.LinkType.external && !data.linkUrl) {
            throw new common_1.BadRequestException('La URL externa es requerida cuando el tipo de enlace es "externo"');
        }
    }
};
exports.HeroSlidesService = HeroSlidesService;
exports.HeroSlidesService = HeroSlidesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        image_record_service_1.ImageRecordService])
], HeroSlidesService);
//# sourceMappingURL=hero-slides.service.js.map
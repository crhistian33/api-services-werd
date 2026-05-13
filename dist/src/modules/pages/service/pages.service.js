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
exports.PagesService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../../../generated/prisma/client");
const prisma_service_1 = require("../../../prisma/prisma.service");
const sluggable_service_1 = require("../../../common/services/sluggable.service");
const LIST_INCLUDE = {
    createdBy: { select: { id: true, name: true, email: true } },
    updatedBy: { select: { id: true, name: true, email: true } },
};
const TRASH_INCLUDE = {
    deletedBy: { select: { id: true, name: true, email: true } },
};
let PagesService = class PagesService extends sluggable_service_1.SluggableService {
    useSoftDelete = true;
    nameField = 'title';
    constructor(prisma) {
        super(prisma, 'page');
    }
    async findAllPages(query) {
        const { search, status, page, limit, onlyTrash } = query;
        const result = await this.findAll({
            where: {
                ...(status !== undefined && { status }),
                ...(search !== undefined && {
                    OR: [{ title: { contains: search, mode: 'insensitive' } }],
                }),
            },
            orderBy: [{ createdAt: 'desc' }],
            pagination: { page, limit },
            include: onlyTrash ? TRASH_INCLUDE : LIST_INCLUDE,
            onlyTrash,
        });
        return result;
    }
    async findAllPagesPublic(query) {
        const { search, page, limit } = query;
        const result = await this.findAll({
            where: {
                status: 'published',
                deletedAt: null,
                ...(search !== undefined && {
                    OR: [{ title: { contains: search, mode: 'insensitive' } }],
                }),
            },
            orderBy: [{ createdAt: 'desc' }],
            pagination: { page, limit },
        });
        return result;
    }
    async findPageById(id) {
        return this.findOne(id);
    }
    async findPageBySlug(slug) {
        return this.findBySlug(slug);
    }
    async findPageBySlugPublic(slug) {
        const record = (await this.getModel().findUnique({
            where: { slug },
        }));
        if (!record ||
            record.status !== client_1.PageStatus.published ||
            record.deletedAt !== null) {
            throw new common_1.NotFoundException(`Página con slug "${slug}" no encontrada`);
        }
        return record;
    }
    async createPage(dto, adminId) {
        return this.createWithSlug({
            ...dto,
            status: dto.status ?? client_1.PageStatus.draft,
            createdById: adminId,
            updatedById: adminId,
        }, undefined, undefined);
    }
    async updatePage(id, dto, adminId) {
        return this.updateWithSlug(id, { ...dto, updatedById: adminId }, undefined, undefined);
    }
    async softDeletePage(id, adminId) {
        return this.softDelete(id, adminId);
    }
    async softDeleteManyPages(ids, adminId) {
        return this.softDeleteMany(ids, adminId);
    }
    async restorePage(id, adminId) {
        await this.assertNotDeleted(id);
        return this.restore(id, adminId);
    }
    async restoreManyPages(ids, adminId) {
        return this.restoreMany(ids, adminId);
    }
    async removePage(id) {
        return this.remove(id);
    }
    async removeManyPages(ids) {
        return this.removeMany(ids);
    }
    async changeStatusManyPage(ids, status, adminId) {
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
};
exports.PagesService = PagesService;
exports.PagesService = PagesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PagesService);
//# sourceMappingURL=pages.service.js.map
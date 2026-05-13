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
exports.FaqsService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("../../../common/services/base.service");
const prisma_service_1 = require("../../../prisma/prisma.service");
const LIST_INCLUDE = {
    createdBy: { select: { id: true, name: true, email: true } },
    updatedBy: { select: { id: true, name: true, email: true } },
};
let FaqsService = class FaqsService extends base_service_1.BaseService {
    useSoftDelete = false;
    nameField = 'question';
    constructor(prisma) {
        super(prisma, 'faq');
    }
    async findAllFaqs(query) {
        const { isActive, category, search, page, limit } = query;
        const result = await this.findAll({
            where: {
                ...(isActive !== undefined && { isActive }),
                ...(category !== undefined && { category }),
                ...(search !== undefined && {
                    OR: [
                        { question: { contains: search, mode: 'insensitive' } },
                        { answer: { contains: search, mode: 'insensitive' } },
                    ],
                }),
            },
            orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
            include: LIST_INCLUDE,
            pagination: { page, limit },
        });
        return result;
    }
    async findFaqById(id) {
        return this.findOne(id, LIST_INCLUDE);
    }
    async createFaq(dto, adminId) {
        return this.create({
            ...dto,
            createdById: adminId,
            updatedById: adminId,
        }, undefined, undefined);
    }
    async updateFaq(id, dto, adminId) {
        return this.update(id, { ...dto, updatedById: adminId }, undefined, undefined);
    }
    async removeFaq(id) {
        return this.remove(id);
    }
    async removeManyFaqs(ids) {
        return this.removeMany(ids);
    }
    async reorder(dto, adminId) {
        await this.prisma.$transaction(dto.ids.map((id, index) => this.prisma.faq.update({
            where: { id },
            data: { sortOrder: index, updatedById: adminId },
        })));
        const faqs = await this.prisma.faq.findMany({
            where: { id: { in: dto.ids } },
            include: LIST_INCLUDE,
            orderBy: { sortOrder: 'asc' },
        });
        return faqs;
    }
};
exports.FaqsService = FaqsService;
exports.FaqsService = FaqsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FaqsService);
//# sourceMappingURL=faqs.service.js.map
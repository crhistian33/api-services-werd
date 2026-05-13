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
exports.PaymentMethodsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const base_service_1 = require("../../../common/services/base.service");
const STANDARD_INCLUDE = {
    createdBy: { select: { id: true, name: true, email: true } },
    updatedBy: { select: { id: true, name: true, email: true } },
};
let PaymentMethodsService = class PaymentMethodsService extends base_service_1.BaseService {
    nameField = 'name';
    constructor(prisma) {
        super(prisma, 'paymentMethod');
    }
    async findAllMethods(query) {
        const { isActive, type, search, page, limit } = query;
        return this.findAll({
            where: {
                ...(isActive !== undefined && { isActive }),
                ...(type !== undefined && { type }),
                ...(search !== undefined && {
                    OR: [
                        { name: { contains: search, mode: 'insensitive' } },
                        { code: { contains: search, mode: 'insensitive' } },
                    ],
                }),
            },
            orderBy: { sortOrder: 'asc' },
            include: STANDARD_INCLUDE,
            pagination: { page, limit },
        });
    }
    async createMethod(dto, adminId) {
        return this.create({
            ...dto,
            createdBy: { connect: { id: adminId } },
            updatedBy: { connect: { id: adminId } },
        });
    }
    async updateMethod(id, dto, adminId) {
        await this.assertExists(id);
        return this.update(id, {
            ...dto,
            updatedBy: { connect: { id: adminId } },
        });
    }
    async findAllPublic() {
        return this.prisma.paymentMethod.findMany({
            where: { isActive: true },
            select: {
                id: true,
                code: true,
                name: true,
                type: true,
                instructions: true,
                sortOrder: true,
                config: true,
            },
            orderBy: { sortOrder: 'asc' },
        });
    }
    async reorder(dto, adminId) {
        await this.prisma.$transaction(dto.ids.map((id, index) => this.prisma.paymentMethod.update({
            where: { id },
            data: { sortOrder: index, updatedById: adminId },
        })));
        const paymentMethods = await this.prisma.paymentMethod.findMany({
            where: { id: { in: dto.ids } },
            include: STANDARD_INCLUDE,
            orderBy: { sortOrder: 'asc' },
        });
        return paymentMethods;
    }
};
exports.PaymentMethodsService = PaymentMethodsService;
exports.PaymentMethodsService = PaymentMethodsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaymentMethodsService);
//# sourceMappingURL=payment-methods.service.js.map
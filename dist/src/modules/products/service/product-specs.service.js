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
exports.ProductSpecsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let ProductSpecsService = class ProductSpecsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async setSpecs(productId, specs, prisma) {
        const db = prisma ?? this.prisma;
        if (prisma !== undefined) {
            await db.productSpec.deleteMany({ where: { productId } });
            if (specs.length > 0) {
                await db.productSpec.createMany({
                    data: specs.map((s, i) => ({
                        productId,
                        specKey: s.specKey.trim(),
                        specValue: s.specValue.trim(),
                        sortOrder: s.sortOrder ?? i,
                    })),
                });
            }
            return;
        }
        await this.prisma.$transaction(async (tx) => {
            await tx.productSpec.deleteMany({ where: { productId } });
            if (specs.length > 0) {
                await tx.productSpec.createMany({
                    data: specs.map((s, i) => ({
                        productId,
                        specKey: s.specKey.trim(),
                        specValue: s.specValue.trim(),
                        sortOrder: s.sortOrder ?? i,
                    })),
                });
            }
        });
    }
    async setFeatures(productId, features, prisma) {
        const db = prisma ?? this.prisma;
        if (prisma !== undefined) {
            await db.productFeature.deleteMany({ where: { productId } });
            if (features.length > 0) {
                await db.productFeature.createMany({
                    data: features.map((f, i) => ({
                        productId,
                        feature: f.feature.trim(),
                        sortOrder: f.sortOrder ?? i,
                    })),
                });
            }
            return;
        }
        await this.prisma.$transaction(async (tx) => {
            await tx.productFeature.deleteMany({ where: { productId } });
            if (features.length > 0) {
                await tx.productFeature.createMany({
                    data: features.map((f, i) => ({
                        productId,
                        feature: f.feature.trim(),
                        sortOrder: f.sortOrder ?? i,
                    })),
                });
            }
        });
    }
    async getSpecs(productId) {
        return this.prisma.productSpec.findMany({
            where: { productId },
            orderBy: { sortOrder: 'asc' },
            select: {
                id: true,
                specKey: true,
                specValue: true,
                sortOrder: true,
            },
        });
    }
    async getFeatures(productId) {
        return this.prisma.productFeature.findMany({
            where: { productId },
            orderBy: { sortOrder: 'asc' },
            select: {
                id: true,
                feature: true,
                sortOrder: true,
            },
        });
    }
    async getSpecsAndFeatures(productId) {
        const [specs, features] = await Promise.all([
            this.getSpecs(productId),
            this.getFeatures(productId),
        ]);
        return { specs, features };
    }
    async clearAll(productId) {
        await this.prisma.$transaction([
            this.prisma.productSpec.deleteMany({ where: { productId } }),
            this.prisma.productFeature.deleteMany({ where: { productId } }),
        ]);
    }
};
exports.ProductSpecsService = ProductSpecsService;
exports.ProductSpecsService = ProductSpecsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductSpecsService);
//# sourceMappingURL=product-specs.service.js.map
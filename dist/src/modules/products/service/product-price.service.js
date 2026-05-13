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
exports.ProductPriceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const client_1 = require("../../../../generated/prisma/client");
let ProductPriceService = class ProductPriceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getPrice(productId) {
        const price = await this.prisma.productPrice.findUnique({
            where: { productId },
        });
        if (!price) {
            throw new common_1.NotFoundException(`El producto "${productId}" no tiene precio asignado`);
        }
        return price;
    }
    async setPrice(productId, input, prisma) {
        const db = prisma ?? this.prisma;
        const { price, compareAtPrice, cost, changedById, reason } = input;
        if (compareAtPrice != null && compareAtPrice <= price) {
            throw new common_1.BadRequestException('El precio tachado debe ser mayor al precio actual');
        }
        const marginPct = cost != null && price > 0
            ? new client_1.Prisma.Decimal((price - cost) / price)
            : null;
        const productPrice = await db.productPrice.upsert({
            where: { productId },
            create: {
                productId,
                price: new client_1.Prisma.Decimal(price),
                compareAtPrice: compareAtPrice != null ? new client_1.Prisma.Decimal(compareAtPrice) : null,
                cost: cost != null ? new client_1.Prisma.Decimal(cost) : null,
            },
            update: {
                price: new client_1.Prisma.Decimal(price),
                compareAtPrice: compareAtPrice != null ? new client_1.Prisma.Decimal(compareAtPrice) : null,
                cost: cost != null ? new client_1.Prisma.Decimal(cost) : null,
            },
        });
        await db.productPriceHistory.create({
            data: {
                productId,
                price: new client_1.Prisma.Decimal(price),
                cost: cost != null ? new client_1.Prisma.Decimal(cost) : null,
                marginPct,
                changedById: changedById ?? null,
                reason: reason ?? null,
            },
        });
        return productPrice;
    }
    async getPriceHistory(productId) {
        return this.prisma.productPriceHistory.findMany({
            where: { productId },
            orderBy: { effectiveFrom: 'desc' },
            select: {
                id: true,
                price: true,
                cost: true,
                marginPct: true,
                reason: true,
                effectiveFrom: true,
                changedBy: {
                    select: { id: true, name: true },
                },
            },
        });
    }
    async deletePrice(productId) {
        await this.prisma.productPrice.deleteMany({
            where: { productId },
        });
    }
};
exports.ProductPriceService = ProductPriceService;
exports.ProductPriceService = ProductPriceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductPriceService);
//# sourceMappingURL=product-price.service.js.map
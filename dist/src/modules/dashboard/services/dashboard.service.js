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
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const date_fns_tz_1 = require("date-fns-tz");
let DashboardService = class DashboardService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getDashboardData(query) {
        const startStr = query.startDate;
        const endStr = query.endDate;
        const timeZone = 'America/Lima';
        const startDate = (0, date_fns_tz_1.fromZonedTime)(`${startStr} 00:00:00`, timeZone);
        const endDate = (0, date_fns_tz_1.fromZonedTime)(`${endStr} 23:59:59.999`, timeZone);
        const [totalOrders, effectiveOrdersCount, grossSales, totalRefunded, pendingPayment, totalCustomers, activeProducts, pendingReviews, pendingClaims, completedOrdersCount, recentOrders, ordersByStatus, topProducts, revenueByDay, refundsVsSales, recentClaims,] = await Promise.all([
            this.prisma.order.count({
                where: { placedAt: { gte: startDate, lte: endDate } },
            }),
            this.prisma.order.count({
                where: {
                    placedAt: { gte: startDate, lte: endDate },
                    status: {
                        notIn: ['cancelled', 'refunded'],
                    },
                    OR: [{ paidAt: { not: null } }, { status: 'delivered' }],
                },
            }),
            this.prisma.order.aggregate({
                _sum: { total: true },
                where: {
                    status: {
                        in: ['paid', 'processing', 'shipped', 'delivered', 'refunded'],
                    },
                    placedAt: { gte: startDate, lte: endDate },
                },
            }),
            this.prisma.refund.aggregate({
                _sum: { amount: true },
                where: {
                    status: 'COMPLETED',
                    createdAt: { gte: startDate, lte: endDate },
                },
            }),
            this.prisma.order.aggregate({
                _sum: { total: true },
                where: {
                    status: 'pending_payment',
                    placedAt: { gte: startDate, lte: endDate },
                },
            }),
            this.prisma.customer.count(),
            this.prisma.product.count({
                where: { status: 'active', stock: { gt: 0 } },
            }),
            this.prisma.productReview.count({ where: { isApproved: false } }),
            this.prisma.orderClaim.count({ where: { status: 'PENDING' } }),
            this.prisma.order.count({
                where: {
                    placedAt: { gte: startDate, lte: endDate },
                    OR: [{ paidAt: { not: null } }, { status: 'delivered' }],
                },
            }),
            this.prisma.order.findMany({
                take: 5,
                orderBy: { placedAt: 'desc' },
                where: { placedAt: { gte: startDate, lte: endDate } },
                select: {
                    id: true,
                    orderNumber: true,
                    total: true,
                    status: true,
                    placedAt: true,
                    customer: { select: { firstName: true, lastName: true } },
                    guestName: true,
                },
            }),
            this.prisma.order.groupBy({
                by: ['status'],
                _count: true,
                where: { placedAt: { gte: startDate, lte: endDate } },
                orderBy: { _count: { status: 'desc' } },
            }),
            this.prisma.orderItem.groupBy({
                by: ['productId', 'productName'],
                _sum: { quantity: true },
                where: { order: { placedAt: { gte: startDate, lte: endDate } } },
                orderBy: { _sum: { quantity: 'desc' } },
                take: 10,
            }),
            this.getRevenueByDay(startDate, endDate),
            this.getRefundsVsSalesByDay(startDate, endDate),
            this.prisma.orderClaim.findMany({
                take: 5,
                orderBy: { createdAt: 'desc' },
                where: { createdAt: { gte: startDate, lte: endDate } },
                select: {
                    id: true,
                    claimNumber: true,
                    type: true,
                    status: true,
                    createdAt: true,
                    customer: { select: { firstName: true, lastName: true } },
                },
            }),
        ]);
        const effectiveOrders = effectiveOrdersCount;
        const cancelledStatuses = ['cancelled'];
        const refundedStatuses = ['refunded'];
        const cancelledOrders = ordersByStatus
            .filter((item) => cancelledStatuses.includes(item.status))
            .reduce((acc, curr) => acc + curr._count, 0);
        const refundedOrders = ordersByStatus
            .filter((item) => refundedStatuses.includes(item.status))
            .reduce((acc, curr) => acc + curr._count, 0);
        const pendingOrders = totalOrders - (effectiveOrders + cancelledOrders + refundedOrders);
        const gross = Number(grossSales._sum.total ?? 0);
        const refunded = Number(totalRefunded._sum.amount ?? 0);
        const pending = Number(pendingPayment._sum.total ?? 0);
        return {
            kpis: {
                totalOrders,
                effectiveOrders,
                pendingOrders,
                cancelledOrders,
                refundedOrders,
                grossSales: gross,
                netSales: Number((gross - refunded).toFixed(2)),
                totalRefunded: refunded,
                pendingPayment: pending,
                averageTicket: completedOrdersCount > 0 ? gross / completedOrdersCount : 0,
                totalCustomers,
                activeProducts,
                pendingReviews,
                pendingClaims,
            },
            recentOrders: recentOrders.map((o) => ({
                id: o.id,
                orderNumber: o.orderNumber,
                customerName: o.customer
                    ? `${o.customer.firstName} ${o.customer.lastName}`
                    : (o.guestName ?? 'Invitado'),
                total: Number(o.total),
                status: o.status,
                placedAt: o.placedAt.toISOString(),
            })),
            ordersByStatus: ordersByStatus.map((item) => ({
                status: item.status,
                count: item._count,
            })),
            topProducts: topProducts.map((item) => ({
                productId: item.productId,
                productName: item.productName,
                totalSold: item._sum.quantity ?? 0,
            })),
            revenueByDay,
            refundsVsSales,
            recentClaims: recentClaims.map((c) => ({
                id: c.id,
                claimNumber: c.claimNumber,
                type: c.type,
                customerName: `${c.customer?.firstName ?? ''} ${c.customer?.lastName ?? ''}`.trim(),
                status: c.status,
                createdAt: c.createdAt.toISOString(),
            })),
        };
    }
    async getRevenueByDay(since, until) {
        const result = await this.prisma.$queryRaw `
    SELECT 
      DATE("placedAt" AT TIME ZONE 'UTC' AT TIME ZONE 'America/Lima')::text AS date, 
      SUM("total") AS amount
    FROM orders
    WHERE "placedAt" >= ${since} AND "placedAt" <= ${until}
      AND status IN ('paid', 'processing', 'shipped', 'delivered')
    GROUP BY 1
    ORDER BY 1 ASC
  `;
        return result.map((r) => ({
            date: r.date,
            amount: Number(r.amount),
        }));
    }
    async getRefundsVsSalesByDay(since, until) {
        const salesResult = await this.prisma.$queryRaw `
    SELECT 
      DATE("placedAt" AT TIME ZONE 'UTC' AT TIME ZONE 'America/Lima') AS date,
      SUM("total") AS sales
    FROM orders
    WHERE "placedAt" >= ${since} AND "placedAt" <= ${until}
      AND status IN ('paid', 'processing', 'shipped', 'delivered', 'refunded')
    GROUP BY 1
    ORDER BY 1
  `;
        const refundsResult = await this.prisma.$queryRaw `
    SELECT 
      DATE("createdAt" AT TIME ZONE 'UTC' AT TIME ZONE 'America/Lima') AS date,
      SUM("amount") AS refunds
    FROM refunds
    WHERE "createdAt" >= ${since} AND "createdAt" <= ${until}
      AND status = 'COMPLETED'
    GROUP BY 1
    ORDER BY 1
  `;
        const salesMap = new Map();
        for (const r of salesResult) {
            salesMap.set(r.date.toISOString().split('T')[0], Number(r.sales));
        }
        const refundsMap = new Map();
        for (const r of refundsResult) {
            refundsMap.set(r.date.toISOString().split('T')[0], Number(r.refunds));
        }
        const allDates = new Set([...salesMap.keys(), ...refundsMap.keys()]);
        const sorted = Array.from(allDates).sort();
        return sorted.map((date) => ({
            date,
            sales: salesMap.get(date) ?? 0,
            refunds: refundsMap.get(date) ?? 0,
        }));
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map
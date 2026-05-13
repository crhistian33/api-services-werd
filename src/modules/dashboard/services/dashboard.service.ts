import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import {
  DashboardResponse,
  RefundsVsSalesByDay,
  RevenueByDay,
} from '../dto/dashboard-response.dto';
import { DashboardQueryDto } from '../dto/dashboard-query.dto';
import { fromZonedTime } from 'date-fns-tz';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getDashboardData(query: DashboardQueryDto): Promise<DashboardResponse> {
    // 1. Usar strings para evitar que el constructor de Date mueva las horas por zona horaria
    const startStr = query.startDate; // "2026-05-01"
    const endStr = query.endDate; // "2026-05-13"

    // 2. Convertir a objetos Date reales que cubran el día completo LOCAL
    const timeZone = 'America/Lima';

    const startDate = fromZonedTime(`${startStr} 00:00:00`, timeZone);

    const endDate = fromZonedTime(`${endStr} 23:59:59.999`, timeZone);
    // Normalizar: endDate al final del día
    // endDate.setHours(23, 59, 59, 999);
    // startDate.setHours(0, 0, 0, 0);

    const [
      totalOrders,
      effectiveOrdersCount,
      grossSales,
      totalRefunded,
      pendingPayment,
      totalCustomers,
      activeProducts,
      pendingReviews,
      pendingClaims,
      completedOrdersCount,
      recentOrders,
      ordersByStatus,
      topProducts,
      revenueByDay,
      refundsVsSales,
      recentClaims,
    ] = await Promise.all([
      //totalOrders
      this.prisma.order.count({
        where: { placedAt: { gte: startDate, lte: endDate } }, // 👈 con rango
      }),

      //effectiveOrdersCount
      this.prisma.order.count({
        where: {
          placedAt: { gte: startDate, lte: endDate },
          status: {
            notIn: ['cancelled', 'refunded'],
          },
          OR: [{ paidAt: { not: null } }, { status: 'delivered' }],
        },
      }),

      //grossSales
      this.prisma.order.aggregate({
        _sum: { total: true },
        where: {
          status: {
            in: ['paid', 'processing', 'shipped', 'delivered', 'refunded'],
          },
          placedAt: { gte: startDate, lte: endDate },
        },
      }),

      //totalRefunded
      this.prisma.refund.aggregate({
        _sum: { amount: true },
        where: {
          status: 'COMPLETED',
          createdAt: { gte: startDate, lte: endDate },
        },
      }),

      //pendingPayment
      this.prisma.order.aggregate({
        _sum: { total: true },
        where: {
          status: 'pending_payment',
          placedAt: { gte: startDate, lte: endDate },
        },
      }),

      //totalCustomers
      this.prisma.customer.count(),

      //activeProducts
      this.prisma.product.count({
        where: { status: 'active', stock: { gt: 0 } },
      }),

      //pendingReviews
      this.prisma.productReview.count({ where: { isApproved: false } }),

      //pendingClaims
      this.prisma.orderClaim.count({ where: { status: 'PENDING' } }),

      //completedOrdersCount
      this.prisma.order.count({
        where: {
          placedAt: { gte: startDate, lte: endDate },
          OR: [{ paidAt: { not: null } }, { status: 'delivered' }],
        },
      }),

      //recentOrders
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

      //ordersByStatus
      this.prisma.order.groupBy({
        by: ['status'],
        _count: true,
        where: { placedAt: { gte: startDate, lte: endDate } },
        orderBy: { _count: { status: 'desc' } },
      }),

      //topProducts
      this.prisma.orderItem.groupBy({
        by: ['productId', 'productName'],
        _sum: { quantity: true },
        where: { order: { placedAt: { gte: startDate, lte: endDate } } },
        orderBy: { _sum: { quantity: 'desc' } },
        take: 10,
      }),

      //revenueByDay
      this.getRevenueByDay(startDate, endDate),

      //refundsVsSales
      this.getRefundsVsSalesByDay(startDate, endDate),

      //recentClaims
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

    const pendingOrders =
      totalOrders - (effectiveOrders + cancelledOrders + refundedOrders);

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
        averageTicket:
          completedOrdersCount > 0 ? gross / completedOrdersCount : 0,
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
        customerName:
          `${c.customer?.firstName ?? ''} ${c.customer?.lastName ?? ''}`.trim(),
        status: c.status,
        createdAt: c.createdAt.toISOString(),
      })),
    };
  }

  private async getRevenueByDay(
    since: Date,
    until: Date,
  ): Promise<RevenueByDay[]> {
    const result = await this.prisma.$queryRaw<RevenueByDay[]>`
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
      // Esto asegura que la llave sea "2026-05-13" y no un ISO largo
      date: r.date,
      amount: Number(r.amount),
    }));
  }

  private async getRefundsVsSalesByDay(
    since: Date,
    until: Date,
  ): Promise<RefundsVsSalesByDay[]> {
    const salesResult = await this.prisma.$queryRaw<
      { date: Date; sales: number }[]
    >`
    SELECT 
      DATE("placedAt" AT TIME ZONE 'UTC' AT TIME ZONE 'America/Lima') AS date,
      SUM("total") AS sales
    FROM orders
    WHERE "placedAt" >= ${since} AND "placedAt" <= ${until}
      AND status IN ('paid', 'processing', 'shipped', 'delivered', 'refunded')
    GROUP BY 1
    ORDER BY 1
  `;

    const refundsResult = await this.prisma.$queryRaw<
      { date: Date; refunds: number }[]
    >`
    SELECT 
      DATE("createdAt" AT TIME ZONE 'UTC' AT TIME ZONE 'America/Lima') AS date,
      SUM("amount") AS refunds
    FROM refunds
    WHERE "createdAt" >= ${since} AND "createdAt" <= ${until}
      AND status = 'COMPLETED'
    GROUP BY 1
    ORDER BY 1
  `;

    const salesMap = new Map<string, number>();
    for (const r of salesResult) {
      salesMap.set(r.date.toISOString().split('T')[0], Number(r.sales));
    }

    const refundsMap = new Map<string, number>();
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
}

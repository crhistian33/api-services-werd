import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { OrderStatus, Prisma } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateReviewDto } from '../dto/create-review.dto';
import { QueryReviewDto } from '../dto/query-review.dto';

@Injectable()
export class ProductReviewService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Crea o actualiza una reseña (Upsert).
   * - Si el cliente ya tiene una reseña para ese producto, la actualiza
   *   guardando el historial previo en el campo `history`.
   * - Si no existe, crea una nueva.
   */
  async upsertReview(customerId: string, dto: CreateReviewDto) {
    const { productId, rating, title, comment, orderId } = dto;

    // Verificar que el producto existe
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
      select: { id: true },
    });
    if (!product) {
      throw new NotFoundException('Producto no encontrado');
    }

    // Verificar que el cliente compró y recibió este producto en alguna orden
    const purchasedItem = await this.prisma.orderItem.findFirst({
      where: {
        productId,
        order: {
          customerId,
          status: OrderStatus.delivered,
        },
      },
      select: { orderId: true },
      orderBy: { order: { deliveredAt: 'desc' } },
    });

    if (!purchasedItem) {
      throw new ForbiddenException(
        'Solo puedes reseñar productos de pedidos entregados',
      );
    }

    // Si el frontend mandó un orderId explícito (ej. desde el detalle de una orden puntual),
    // validar que esa orden sea del cliente, contenga el producto, y esté entregada
    let resolvedOrderId = purchasedItem.orderId;
    if (orderId) {
      const specificOrder = await this.prisma.order.findFirst({
        where: {
          id: orderId,
          customerId,
          status: OrderStatus.delivered,
          items: { some: { productId } },
        },
        select: { id: true },
      });
      if (!specificOrder) {
        throw new ForbiddenException(
          'Esa orden no corresponde a este producto, cliente, o aún no ha sido entregada',
        );
      }
      resolvedOrderId = specificOrder.id;
    }

    // Buscar reseña existente del cliente para este producto
    const existingReview = await this.prisma.productReview.findUnique({
      where: { productId_customerId: { productId, customerId } },
    });

    if (existingReview) {
      const historyEntry = {
        rating: existingReview.rating,
        title: existingReview.title,
        comment: existingReview.comment,
        updatedAt: new Date().toISOString(),
      };

      const previousHistory =
        (existingReview.history as Prisma.InputJsonValue[]) ?? [];

      return this.prisma.productReview.update({
        where: { id: existingReview.id },
        data: {
          rating,
          title: title ?? null,
          comment: comment ?? null,
          orderId: resolvedOrderId,
          isApproved: false,
          history: [...previousHistory, historyEntry] as Prisma.InputJsonValue,
        },
        include: {
          customer: { select: { id: true, firstName: true, lastName: true } },
        },
      });
    }

    return this.prisma.productReview.create({
      data: {
        productId,
        customerId,
        orderId: resolvedOrderId,
        rating,
        title: title ?? null,
        comment: comment ?? null,
        isApproved: false,
      },
      include: {
        customer: { select: { id: true, firstName: true, lastName: true } },
      },
    });
  }

  async getReviewStatusForOrder(customerId: string, orderId: string) {
    const order = await this.prisma.order.findFirst({
      where: { id: orderId, customerId },
      select: {
        id: true,
        status: true,
        items: {
          select: {
            productId: true,
            productName: true,
            productImageUrl: true,
          },
        },
      },
    });

    if (!order) {
      throw new NotFoundException('Pedido no encontrado');
    }

    const productIds = order.items.map((item) => item.productId);

    // Trae de una sola vez todas las reviews existentes del cliente para estos productos
    const existingReviews = productIds.length
      ? await this.prisma.productReview.findMany({
          where: {
            customerId,
            productId: { in: productIds },
          },
        })
      : [];

    const reviewsByProduct = new Map(
      existingReviews.map((review) => [review.productId, review]),
    );

    const canReviewOrder = order.status === OrderStatus.delivered;

    return {
      orderId: order.id,
      canReviewOrder,
      items: order.items.map((item) => {
        const existing = reviewsByProduct.get(item.productId) ?? null;
        return {
          productId: item.productId,
          productName: item.productName,
          productImageUrl: item.productImageUrl,
          canReview: canReviewOrder,
          review: existing
            ? {
                id: existing.id,
                rating: existing.rating,
                title: existing.title,
                comment: existing.comment,
                isApproved: existing.isApproved,
                updatedAt: existing.updatedAt,
              }
            : null,
        };
      }),
    };
  }

  /**
   * Obtiene todas las reseñas (con filtros opcionales).
   * Endpoint para administración.
   */
  async findAll(query: QueryReviewDto) {
    const where: Prisma.ProductReviewWhereInput = {};

    if (query.productId) where.productId = query.productId;
    if (query.customerId) where.customerId = query.customerId;
    if (query.isApproved !== undefined) where.isApproved = query.isApproved;

    return this.prisma.productReview.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      include: {
        customer: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
        product: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
    });
  }

  /**
   * Aprueba o rechaza una reseña (moderación de administrador).
   */
  async moderateReview(reviewId: string, isApproved: boolean, adminId: string) {
    const review = await this.prisma.productReview.findUnique({
      where: { id: reviewId },
    });
    if (!review) {
      throw new NotFoundException('Reseña no encontrada');
    }

    return this.prisma.productReview.update({
      where: { id: reviewId },
      data: {
        isApproved,
        reviewedById: adminId,
        reviewedAt: new Date(),
      },
      include: {
        customer: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
        product: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
    });
  }

  /**
   * Elimina una reseña por ID.
   */
  async removeReview(reviewId: string) {
    const review = await this.prisma.productReview.findUnique({
      where: { id: reviewId },
    });
    if (!review) {
      throw new NotFoundException('Reseña no encontrada');
    }

    await this.prisma.productReview.delete({
      where: { id: reviewId },
    });

    return { message: 'Reseña eliminada exitosamente' };
  }

  /**
   * Obtiene el rating promedio y las reseñas aprobadas de un producto.
   * Usado por el servicio público de productos.
   */
  async getProductReviewsStats(
    productId: string,
    page: number = 1,
    limit: number = 5,
  ) {
    const skip = (page - 1) * limit;

    const [aggregation, reviews] = await Promise.all([
      this.prisma.productReview.aggregate({
        where: { productId, isApproved: true },
        _avg: { rating: true },
        _count: { rating: true },
      }),
      this.prisma.productReview.findMany({
        where: { productId, isApproved: true },
        orderBy: [{ createdAt: 'desc' }, { id: 'desc' }],
        skip,
        take: limit,
        include: {
          customer: { select: { id: true, firstName: true, lastName: true } },
        },
      }),
    ]);

    const totalReviews = aggregation._count.rating;

    return {
      rating: aggregation._avg.rating
        ? Number(aggregation._avg.rating.toFixed(1))
        : 0,
      totalReviews,
      reviews: reviews.map((review) => ({
        id: review.id,
        rating: review.rating,
        title: review.title,
        comment: review.comment,
        createdAt: review.createdAt,
        updatedAt: review.updatedAt,
        customer: {
          id: review.customer.id,
          firstName: review.customer.firstName,
          lastName: review.customer.lastName,
        },
      })),
      page,
      limit,
      hasMore: skip + reviews.length < totalReviews,
    };
  }

  /**
   * Obtiene el rating promedio y conteo de reseñas aprobadas para una lista de productos.
   */
  async getProductsReviewsStatsBulk(productIds: string[]) {
    if (!productIds || productIds.length === 0) {
      return new Map<string, { rating: number; reviewsCount: number }>();
    }

    const aggregations = await this.prisma.productReview.groupBy({
      by: ['productId'],
      where: {
        productId: { in: productIds },
        isApproved: true,
      },
      _avg: { rating: true },
      _count: { rating: true },
    });

    const map = new Map<string, { rating: number; reviewsCount: number }>();
    for (const agg of aggregations) {
      map.set(agg.productId, {
        rating: agg._avg.rating ? Number(agg._avg.rating.toFixed(1)) : 0,
        reviewsCount: agg._count.rating ?? 0,
      });
    }
    return map;
  }
}

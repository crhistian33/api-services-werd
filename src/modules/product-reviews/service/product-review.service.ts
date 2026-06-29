import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from 'generated/prisma/client';
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

    // Buscar reseña existente del cliente para este producto
    const existingReview = await this.prisma.productReview.findUnique({
      where: {
        productId_customerId: {
          productId,
          customerId,
        },
      },
    });

    if (existingReview) {
      // === ACTUALIZACIÓN: guardar historial antes de sobreescribir ===
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
          orderId: orderId ?? existingReview.orderId,
          isApproved: false, // Cada actualización requiere re-aprobación
          history: [...previousHistory, historyEntry] as Prisma.InputJsonValue,
        },
        include: {
          customer: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
            },
          },
        },
      });
    }

    // === CREACIÓN NUEVA ===
    return this.prisma.productReview.create({
      data: {
        productId,
        customerId,
        orderId: orderId ?? null,
        rating,
        title: title ?? null,
        comment: comment ?? null,
        isApproved: false,
      },
      include: {
        customer: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });
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
  async getProductReviewsStats(productId: string) {
    const [aggregation, reviews] = await Promise.all([
      this.prisma.productReview.aggregate({
        where: {
          productId,
          isApproved: true,
        },
        _avg: { rating: true },
        _count: { rating: true },
      }),
      this.prisma.productReview.findMany({
        where: {
          productId,
          isApproved: true,
        },
        orderBy: { createdAt: 'desc' },
        include: {
          customer: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
            },
          },
        },
      }),
    ]);

    return {
      rating: aggregation._avg.rating
        ? Number(aggregation._avg.rating.toFixed(1))
        : 0,
      totalReviews: aggregation._count.rating,
      reviews: reviews.map((review) => ({
        id: review.id,
        rating: review.rating,
        title: review.title,
        comment: review.comment,
        history: review.history as Prisma.InputJsonValue | null,
        createdAt: review.createdAt,
        updatedAt: review.updatedAt as Date,
        customer: {
          id: review.customer.id,
          firstName: review.customer.firstName,
          lastName: review.customer.lastName,
        },
      })),
    };
  }
}

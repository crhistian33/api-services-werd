import {
  Injectable,
  BadRequestException,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { MailService } from '../../mail/service/mail.service';
import { CreateRefundDto } from '../dto/create-refund.dto';
import {
  Prisma,
  OrderStatus,
  ImageEntityType,
  ClaimType,
  ClaimStatus,
  RefundStatus,
  ClaimReasonCategory,
} from 'generated/prisma/client';
import { CompleteRefundDto } from '../dto';
import {
  REFUND_METHOD_LABELS,
  CLAIM_STATUS_LABELS,
  CLAIM_TYPE_LABELS,
} from '../constants/order-labels.constants';
import {
  ImageRecordService,
  MovedImageData,
} from '../../images/services/image-record.service';

// ─────────────────────────────────────────────────────────────
// CONSTANTES DE IMÁGENES
// ─────────────────────────────────────────────────────────────

const REFUND_ENTITY_TYPE = ImageEntityType.ORDER_REFUND;
const REFUND_IMAGE_ROLE = 'refund_evidence';

// ─────────────────────────────────────────────────────────────
// TIPOS ESTRICTOS
// ─────────────────────────────────────────────────────────────

type OrderRefundContext = Prisma.OrderGetPayload<{
  include: {
    items: true;
    refunds: { include: { items: true } };
    customer: true;
  };
}>;

/**
 * Tipo estricto para reclamos listos para procesar reembolso.
 * Incluye toda la información necesaria para calcular montos y validar elegibilidad.
 */
export type ClaimForRefund = Prisma.OrderClaimGetPayload<{
  include: {
    customer: { select: { firstName: true; email: true } };
    order: {
      include: {
        items: { include: { refundItems: true } };
        paymentMethod: { select: { type: true } };
      };
    };
    items: {
      include: {
        orderItem: {
          select: {
            id: true;
            unitPrice: true;
            quantity: true;
            productName: true;
          };
        };
      };
    };
  };
}>;

// ─────────────────────────────────────────────────────────────
// SERVICE
// ─────────────────────────────────────────────────────────────

@Injectable()
export class OrderRefundService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
    private readonly imageRecord: ImageRecordService,
  ) {}

  // ═══════════════════════════════════════════════════════════
  // isClaimReadyForRefund — validación unificada de elegibilidad
  // ═══════════════════════════════════════════════════════════

  /**
   * Valida si un reclamo cumple todas las condiciones para ser reembolsado.
   */
  isClaimReadyForRefund(claim: ClaimForRefund): boolean {
    if (!claim.refundMethod) return false;

    switch (claim.type) {
      case ClaimType.REFUND:
        return claim.status === ClaimStatus.RECEIVED;

      case ClaimType.CANCELLATION: {
        if (claim.status !== ClaimStatus.APPROVED) return false;

        if (!claim.order.paidAt) return false;

        // const isCod =
        //   claim.order.paymentMethod?.type ===
        //   PaymentMethodType.cash_on_delivery;

        // if (isCod) {
        //   return claim.order.status === OrderStatus.paid;
        // }

        // const paidStatuses: OrderStatus[] = [
        //   OrderStatus.paid,
        //   OrderStatus.processing,
        //   OrderStatus.shipped,
        //   OrderStatus.delivered,
        // ];
        // return paidStatuses.includes(claim.order.status);
        return true;
      }

      case ClaimType.REPLACEMENT:
        return false;

      default:
        return false;
    }
  }

  // ═══════════════════════════════════════════════════════════
  // processClaimRefund — ÚNICO punto de creación de Refund
  // ═══════════════════════════════════════════════════════════

  /**
   * Procesa el reembolso de un reclamo de tipo REFUND o CANCELLATION.
   * Es el único método autorizado para crear o completar registros Refund
   * vinculados a un reclamo.
   */
  async processClaimRefund(
    claimId: string,
    dto: CompleteRefundDto,
    adminId: string,
  ): Promise<{ success: boolean; claimId: string; refundId: string }> {
    // ── 1. Obtener el claim con todos los datos necesarios ───
    const claim = await this.prisma.orderClaim.findUnique({
      where: { id: claimId },
      include: {
        customer: { select: { firstName: true, lastName: true, email: true } },
        order: {
          include: {
            items: { include: { refundItems: true } },
            paymentMethod: { select: { type: true } },
          },
        },
        items: {
          include: {
            orderItem: {
              select: {
                id: true,
                unitPrice: true,
                quantity: true,
                productName: true,
              },
            },
          },
        },
      },
    });

    if (!claim) throw new NotFoundException('Reclamo no encontrado');

    // ── 2. Validar elegibilidad para reembolso ───────────────
    if (!this.isClaimReadyForRefund(claim)) {
      const expected =
        claim.type === ClaimType.REFUND
          ? CLAIM_STATUS_LABELS[ClaimStatus.RECEIVED]
          : CLAIM_STATUS_LABELS[ClaimStatus.APPROVED];
      throw new BadRequestException(
        `El reclamo no está listo para reembolso. ` +
          `Tipo: ${CLAIM_TYPE_LABELS[claim.type]}, estado actual: "${CLAIM_STATUS_LABELS[claim.status]}", ` +
          `esperado: "${expected}". ` +
          (claim.refundMethod
            ? ''
            : 'Falta el método de reembolso del cliente.'),
      );
    }

    if (claim.type === ClaimType.REPLACEMENT) {
      throw new BadRequestException(
        'Los reclamos de tipo REEMPLAZO no generan reembolso.',
      );
    }

    // ── 3. Verificar que no exista Refund COMPLETED previo ───
    const existingRefund = await this.prisma.refund.findUnique({
      where: { claimId },
    });

    if (existingRefund?.status === RefundStatus.COMPLETED) {
      throw new ConflictException(
        `El reclamo ya tiene un reembolso completado (ID: ${existingRefund.id}).`,
      );
    }

    // ── 4. Calcular monto total del reembolso ────────────────
    const refundItemsData = claim.items.map((claimItem) => {
      const unitPrice = Number(claimItem.orderItem.unitPrice);
      const amount = unitPrice * claimItem.quantity;
      return {
        orderItemId: claimItem.orderItemId,
        quantity: claimItem.quantity,
        amount,
      };
    });

    let totalRefundAmount = refundItemsData.reduce(
      (sum, item) => sum + item.amount,
      0,
    );

    if (
      claim.customerVoucherAmount &&
      Number(claim.customerVoucherAmount) > 0 &&
      claim.reasonCategory !== ClaimReasonCategory.CUSTOMER_DECISION
    ) {
      totalRefundAmount += Number(claim.customerVoucherAmount);
    }

    // ── 5. Procesar imágenes de evidencia ────────────────────
    const safeImageIds = Array.isArray(dto.tempImageIds)
      ? dto.tempImageIds
      : dto.tempImageIds
        ? [dto.tempImageIds as unknown as string]
        : [];

    const tempRecords = safeImageIds.length
      ? await Promise.all(
          safeImageIds.map((id) =>
            this.imageRecord.findTempRecord(
              id,
              REFUND_ENTITY_TYPE,
              REFUND_IMAGE_ROLE,
            ),
          ),
        )
      : [];

    const movedList: MovedImageData[] = [];
    try {
      for (let i = 0; i < tempRecords.length; i++) {
        const moved = await this.imageRecord.moveToFinal(
          tempRecords[i],
          REFUND_ENTITY_TYPE,
          '',
          REFUND_IMAGE_ROLE,
          i,
        );
        movedList.push(moved);
      }
    } catch (err) {
      await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
      throw err;
    }

    // ✅ Obtener TODOS los refunds de la orden (incluyendo otros claims)
    const allRefundedQty = await this.prisma.refundItem.aggregate({
      where: {
        refund: {
          orderId: claim.orderId,
          status: RefundStatus.COMPLETED,
        },
      },
      _sum: { quantity: true },
    });

    // ── 6. Determinar si es reembolso total ──────────────────
    // const totalOrderQty = claim.order.items.reduce(
    //   (sum, i) => sum + i.quantity,
    //   0,
    // );
    // const totalClaimQty = claim.items.reduce((sum, i) => sum + i.quantity, 0);

    const previousRefundedQty = allRefundedQty._sum.quantity ?? 0;
    const currentClaimQty = claim.items.reduce((sum, i) => sum + i.quantity, 0);
    const totalOrderQty = claim.order.items.reduce(
      (sum, i) => sum + i.quantity,
      0,
    );

    //const isFullRefund = totalClaimQty >= totalOrderQty;
    const isFullRefund = previousRefundedQty + currentClaimQty >= totalOrderQty;

    let refundId: string;

    try {
      await this.prisma.$transaction(async (tx) => {
        // ── 7a. Si existe Refund PENDING: actualizar a COMPLETED ─
        if (existingRefund) {
          await tx.refund.update({
            where: { id: existingRefund.id },
            data: {
              status: RefundStatus.COMPLETED,
              method: dto.refundMethod,
              gatewayRefundId: dto.gatewayRefundId ?? null,
              adminNotes: dto.adminNotes ?? null,
              processedById: adminId,
            },
          });
          refundId = existingRefund.id;
        } else {
          // ── 7b. Si no existe: crear Refund COMPLETED directamente ─
          const newRefund = await tx.refund.create({
            data: {
              orderId: claim.orderId,
              claimId,
              amount: totalRefundAmount,
              status: RefundStatus.COMPLETED,
              method: dto.refundMethod,
              gatewayRefundId: dto.gatewayRefundId ?? null,
              adminNotes: dto.adminNotes ?? null,
              reason: claim.refundAccountDetails ?? null,
              createdById: adminId,
              processedById: adminId,
              items: { createMany: { data: refundItemsData } },
            },
          });
          refundId = newRefund.id;
        }

        // ── 8. Confirmar imágenes de evidencia en BD ─────────
        if (movedList.length > 0) {
          for (const moved of movedList) {
            await this.imageRecord.confirmInDb(
              { ...moved, entityId: refundId },
              tx,
            );
          }
        }

        // ── 9. Cerrar el reclamo ──────────────────────────────
        await tx.orderClaim.update({
          where: { id: claimId },
          data: {
            status: ClaimStatus.COMPLETED,
            completedAt: new Date(),
          },
        });

        // ── 10. Si es reembolso total: actualizar orden ───────
        if (isFullRefund) {
          await tx.order.update({
            where: { id: claim.orderId },
            data: {
              status: OrderStatus.refunded,
              refundedAt: new Date(),
            },
          });
        }

        // ── 11. Registrar en historial ────────────────────────
        const effectiveAmount = existingRefund
          ? Number(existingRefund.amount)
          : totalRefundAmount;

        const methodLabel =
          REFUND_METHOD_LABELS[dto.refundMethod] ?? dto.refundMethod;

        const typeLabel =
          claim.type === 'REFUND' ? 'Devolución' : 'Cancelación';
        const refundLabel = isFullRefund
          ? 'Reembolso total'
          : 'Reembolso parcial';

        await tx.orderStatusHistory.create({
          data: {
            orderId: claim.orderId,
            fromStatus: claim.order.status,
            toStatus: isFullRefund ? OrderStatus.refunded : claim.order.status,
            changedById: adminId,
            comment:
              `[${claim.claimNumber}] ${typeLabel} · ${refundLabel} · ` +
              `S/ ${effectiveAmount.toFixed(2)} · ${methodLabel}` +
              (dto.gatewayRefundId ? ` · Extorno: ${dto.gatewayRefundId}` : ''),
          },
        });
      });
    } catch (err) {
      await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
      throw err;
    }

    // ── 12. Email al cliente (fuera de transacción) ──────────
    const recipientEmail = claim.customer?.email;
    const recipientName = claim.customer?.firstName ?? 'Cliente';

    if (recipientEmail) {
      try {
        await this.mailService.sendClaimCompleted(recipientEmail, {
          customerName: recipientName,
          claimNumber: claim.claimNumber,
          type: claim.type,
          totalRefundedAmount: existingRefund
            ? Number(existingRefund.amount)
            : totalRefundAmount,
          completedAt: new Date(),
        });
      } catch (err) {
        console.error(
          '[OrderRefundService] Error enviando email de reembolso de reclamo:',
          err,
        );
      }
    }

    return { success: true, claimId, refundId: refundId! };
  }

  // ═══════════════════════════════════════════════════════════
  // createRefund — reembolso directo sin reclamo (casos excepcionales)
  // ═══════════════════════════════════════════════════════════

  /**
   * Crea un reembolso directo vinculado a una orden sin reclamo previo.
   */
  async createRefund(orderId: string, dto: CreateRefundDto, adminId: string) {
    return await this.prisma.$transaction(async (tx) => {
      const order = await tx.order.findUnique({
        where: { id: orderId },
        include: {
          items: true,
          refunds: { include: { items: true } },
          customer: true,
        },
      });

      if (!order) throw new NotFoundException('Pedido no encontrado');

      let totalRefundAmount = 0;

      const refundItemsData = dto.items.map((dtoItem) => {
        const orderItem = order.items.find(
          (oi) => oi.id === dtoItem.orderItemId,
        );

        if (!orderItem) {
          throw new BadRequestException(
            `El ítem ${dtoItem.orderItemId} no pertenece a esta orden`,
          );
        }

        const alreadyRefunded = order.refunds
          .flatMap((r) => r.items)
          .filter((ri) => ri.orderItemId === dtoItem.orderItemId)
          .reduce((sum, item) => sum + item.quantity, 0);

        if (alreadyRefunded + dtoItem.quantity > orderItem.quantity) {
          throw new BadRequestException(
            `Cantidad excedida. Ya se reembolsaron ${alreadyRefunded} de ${orderItem.quantity} unidades.`,
          );
        }

        const unitPrice = Number(orderItem.unitPrice);
        const refundAmount = unitPrice * dtoItem.quantity;
        totalRefundAmount += refundAmount;

        return {
          orderItemId: dtoItem.orderItemId,
          quantity: dtoItem.quantity,
          amount: refundAmount,
        };
      });

      const refund = await tx.refund.create({
        data: {
          orderId,
          reason: dto.reason || 'Reembolso procesado desde administración',
          createdById: adminId,
          status: RefundStatus.PENDING,
          amount: totalRefundAmount,
          items: { createMany: { data: refundItemsData } },
        },
        include: { items: true },
      });

      const isTotal = this.checkIfTotalRefund(order, dto);
      if (isTotal) {
        await tx.order.update({
          where: { id: orderId },
          data: { status: OrderStatus.refunded as OrderStatus },
        });
      }

      return refund;
    });
  }

  private checkIfTotalRefund(
    order: OrderRefundContext,
    dto: CreateRefundDto,
  ): boolean {
    const totalOrdered = order.items.reduce(
      (sum: number, i) => sum + i.quantity,
      0,
    );
    const totalRefundedBefore = order.refunds
      .flatMap((r) => r.items)
      .reduce((sum: number, i) => sum + i.quantity, 0);
    const totalNewRefund = dto.items.reduce((sum, i) => sum + i.quantity, 0);
    return totalRefundedBefore + totalNewRefund >= totalOrdered;
  }

  // ═══════════════════════════════════════════════════════════
  // getRefundsByOrder — historial de reembolsos de una orden
  // ═══════════════════════════════════════════════════════════

  async getRefundsByOrder(orderId: string) {
    return this.prisma.refund.findMany({
      where: { orderId },
      include: {
        items: { include: { orderItem: { include: { product: true } } } },
        createdBy: { select: { name: true, email: true } },
        processedBy: { select: { name: true, email: true } },
      },
    });
  }

  // ═══════════════════════════════════════════════════════════
  // processRefund — procesar reembolso PENDIENTE (flujo directo)
  // ═══════════════════════════════════════════════════════════

  /**
   * Completa un reembolso pendiente creado sin reclamo previo.
   * Para reembolsos vinculados a reclamos, usar processClaimRefund().
   */
  async processRefund(
    refundId: string,
    dto: CompleteRefundDto,
    adminId: string,
  ) {
    const refund = await this.prisma.refund.findUnique({
      where: { id: refundId },
      include: {
        order: {
          include: {
            customer: true,
            paymentMethod: true,
          },
        },
      },
    });

    if (!refund) throw new NotFoundException('Reembolso no encontrado');
    if (refund.status !== RefundStatus.PENDING) {
      throw new BadRequestException(
        'Solo se pueden procesar reembolsos pendientes',
      );
    }

    const safeImageIds = Array.isArray(dto.tempImageIds)
      ? dto.tempImageIds
      : dto.tempImageIds
        ? [dto.tempImageIds as unknown as string]
        : [];

    const tempRecords = safeImageIds.length
      ? await Promise.all(
          safeImageIds.map((id) =>
            this.imageRecord.findTempRecord(
              id,
              REFUND_ENTITY_TYPE,
              REFUND_IMAGE_ROLE,
            ),
          ),
        )
      : [];

    const movedList: MovedImageData[] = [];
    try {
      for (let i = 0; i < tempRecords.length; i++) {
        const moved = await this.imageRecord.moveToFinal(
          tempRecords[i],
          REFUND_ENTITY_TYPE,
          '',
          REFUND_IMAGE_ROLE,
          i,
        );
        movedList.push(moved);
      }
    } catch (err) {
      await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
      throw err;
    }

    let isFullRefund = false;
    let evidenceImageUrl: string | undefined;

    try {
      await this.prisma.$transaction(async (tx) => {
        await tx.refund.update({
          where: { id: refundId },
          data: {
            status: RefundStatus.COMPLETED,
            processedById: adminId,
            method: dto.refundMethod,
            gatewayRefundId: dto.gatewayRefundId,
            adminNotes: dto.adminNotes,
          },
        });

        if (movedList.length > 0) {
          for (const moved of movedList) {
            await this.imageRecord.confirmInDb(
              { ...moved, entityId: refundId },
              tx,
            );
          }

          const images = await tx.image.findMany({
            where: {
              entityType: REFUND_ENTITY_TYPE,
              entityId: refundId,
              isConfirmed: true,
            },
            select: { url: true, metadata: true },
          });

          const urls = images
            .map((img) => {
              const meta = img.metadata as {
                variants?: Record<string, string>;
              };
              const url = meta?.variants?.medium || img.url || '';
              return `${process.env.APP_URL}${url}`;
            })
            .filter(Boolean);

          evidenceImageUrl = urls[0];
        }

        const orderItems = await tx.orderItem.findMany({
          where: { orderId: refund.orderId },
        });
        const allRefundItems = await tx.refundItem.findMany({
          where: { refund: { orderId: refund.orderId } },
        });

        const totalOrdered = orderItems.reduce((sum, i) => sum + i.quantity, 0);
        const totalRefunded = allRefundItems.reduce(
          (sum, i) => sum + i.quantity,
          0,
        );
        isFullRefund = totalRefunded >= totalOrdered;

        if (isFullRefund) {
          await tx.order.update({
            where: { id: refund.orderId },
            data: { status: OrderStatus.refunded, refundedAt: new Date() },
          });
        }

        await tx.orderStatusHistory.create({
          data: {
            orderId: refund.orderId,
            fromStatus: refund.order.status,
            toStatus: isFullRefund ? OrderStatus.refunded : refund.order.status,
            changedById: adminId,
            comment: `Reembolso directo procesado. Monto: S/ ${Number(refund.amount).toFixed(2)}. Método: ${REFUND_METHOD_LABELS[dto.refundMethod] || dto.refundMethod}.`,
          },
        });
      });

      const order = refund.order;
      const email = order.customer?.email || order.guestEmail;
      const name = order.customer?.firstName || order.guestName || 'Cliente';

      if (email) {
        try {
          await this.mailService.sendOrderRefunded(email, {
            customerName: name,
            orderNumber: order.orderNumber,
            refundAmount: Number(refund.amount),
            refundMethod: dto.refundMethod,
            refundDate: new Date().toLocaleDateString('es-PE'),
            evidenceImageUrl,
          });
        } catch (err) {
          console.error('[OrderRefundService] Error enviando email:', err);
        }
      }

      return { success: true, refundId };
    } catch (err) {
      await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
      throw err;
    }
  }
}

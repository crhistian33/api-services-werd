import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import {
  ImageRecordService,
  MovedImageData,
} from '../../images/services/image-record.service';
import { MailService } from '../../mail/service/mail.service';
import { PrismaService } from '../../../prisma/prisma.service';
import {
  CreateOrderClaimDto,
  ReviewClaimDto,
  QueryClaimDto,
  ConfirmClaimShipmentDto,
  ConfirmReturnShipmentDto,
} from '../dto';
import { MarkClaimReceivedDto } from '../dto/mark-claim-received.dto';
import {
  ImageEntityType,
  Prisma,
  ClaimType,
  OrderStatus,
  ReturnedProductCondition,
  RefundMethod,
  ClaimStatus,
  DeliveryType,
  ClaimReasonCategory,
} from 'generated/prisma/client';
import {
  RETURNED_CONDITION_LABELS,
  CLAIM_STATUS_LABELS,
  CLAIM_TYPE_LABELS,
  ORDER_STATUS_LABELS,
} from '../constants/order-labels.constants';
import { OrderRefundService } from './order-refund.service';

// ─────────────────────────────────────────────────────────────
// CONSTANTES
// ─────────────────────────────────────────────────────────────

const ENTITY_TYPE = ImageEntityType.ORDER_CLAIM;
const IMAGE_ROLE = 'customer_evidence';
const ENTITY_TYPE_RETURN = ImageEntityType.ORDER_ITEM_RETURN;
const IMAGE_ROLE_RETURN = 'return_evidence';

// ─────────────────────────────────────────────────────────────
// TIPO ÚNICO PARA RECLAMOS
// ─────────────────────────────────────────────────────────────

export type ClaimWithRelations = Prisma.OrderClaimGetPayload<{
  include: typeof CLAIM_INCLUDE;
}>;

export const CLAIM_INCLUDE = {
  customer: { select: { firstName: true, lastName: true, email: true } },
  order: {
    include: {
      items: {
        include: {
          product: { select: { id: true, name: true, stock: true, sku: true } },
        },
      },
      paymentMethod: { select: { type: true } },
    },
  },
  items: {
    include: {
      orderItem: {
        include: {
          product: { select: { id: true, name: true, sku: true } },
        },
      },
    },
  },
} as const;

// ─────────────────────────────────────────────────────────────
// SERVICE
// ─────────────────────────────────────────────────────────────

@Injectable()
export class OrderClaimsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly imageRecord: ImageRecordService,
    private readonly mailService: MailService,
    private readonly orderRefundService: OrderRefundService,
  ) {}

  // ═══════════════════════════════════════════════════════════
  // HELPER CENTRAL: Obtener claim con todas las relaciones
  // ═══════════════════════════════════════════════════════════

  private async findClaimById(id: string): Promise<ClaimWithRelations> {
    const claim = await this.prisma.orderClaim.findUnique({
      where: { id },
      include: CLAIM_INCLUDE,
    });
    if (!claim) throw new NotFoundException('Reclamo no encontrado');
    return claim;
  }

  // ═══════════════════════════════════════════════════════════
  // findAll — listado paginado para el CMS
  // ═══════════════════════════════════════════════════════════

  async findAll(query: QueryClaimDto) {
    const { page = 1, limit = 10, status, type, search } = query;
    const skip = (page - 1) * limit;

    const where: Prisma.OrderClaimWhereInput = {
      ...(status && { status }),
      ...(type && { type }),
      ...(search && {
        OR: [
          { claimNumber: { contains: search, mode: 'insensitive' } },
          {
            customer: { firstName: { contains: search, mode: 'insensitive' } },
          },
          { customer: { lastName: { contains: search, mode: 'insensitive' } } },
          { customer: { email: { contains: search, mode: 'insensitive' } } },
          { order: { orderNumber: { contains: search, mode: 'insensitive' } } },
        ],
      }),
    };

    const [total, data] = await Promise.all([
      this.prisma.orderClaim.count({ where }),
      this.prisma.orderClaim.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          customer: {
            select: { id: true, firstName: true, lastName: true, email: true },
          },
          order: {
            select: { id: true, orderNumber: true, status: true, total: true },
          },
          items: {
            include: {
              orderItem: {
                select: {
                  productName: true,
                  productSku: true,
                  productImageUrl: true,
                  unitPrice: true,
                  quantity: true,
                },
              },
            },
          },
          reviewedBy: { select: { id: true, name: true } },
        },
      }),
    ]);

    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  // ═══════════════════════════════════════════════════════════
  // createClaim — storefront (cliente)
  // ═══════════════════════════════════════════════════════════

  async createClaim(
    customerId: string,
    orderId: string,
    dto: CreateOrderClaimDto,
  ) {
    const { tempImageIds, items, ...claimData } = dto;

    const tempRecords = tempImageIds?.length
      ? await Promise.all(
          tempImageIds.map((id) =>
            this.imageRecord.findTempRecord(id, ENTITY_TYPE, IMAGE_ROLE),
          ),
        )
      : [];

    const claim = await this.prisma.$transaction(async (tx) => {
      const order = await tx.order.findFirst({
        where: { id: orderId, customerId },
        include: {
          items: {
            include: {
              claimItems: {
                where: {
                  claim: {
                    status: {
                      notIn: [ClaimStatus.CANCELLED, ClaimStatus.REJECTED],
                    },
                  },
                },
              },
            },
          },
        },
      });

      if (!order)
        throw new NotFoundException(
          'La orden no existe o no pertenece a este cliente',
        );

      this.validateClaimForOrderStatus(order.status, claimData.type);

      const activeClaim = await tx.orderClaim.findFirst({
        where: {
          orderId,
          status: {
            notIn: [
              ClaimStatus.CANCELLED,
              ClaimStatus.REJECTED,
              ClaimStatus.COMPLETED,
            ],
          },
        },
        select: { claimNumber: true, status: true },
      });

      if (activeClaim) {
        throw new ConflictException(
          `Ya existe un reclamo activo (${activeClaim.claimNumber}, estado: ${CLAIM_STATUS_LABELS[activeClaim.status]})`,
        );
      }

      for (const dtoItem of items) {
        const orderItem = order.items.find(
          (oi) => oi.id === dtoItem.orderItemId,
        );
        if (!orderItem)
          throw new BadRequestException(
            `El ítem ${dtoItem.orderItemId} no pertenece a esta orden`,
          );

        const alreadyClaimed = orderItem.claimItems.reduce(
          (acc, ci) => acc + ci.quantity,
          0,
        );
        const available = orderItem.quantity - alreadyClaimed;

        if (dtoItem.quantity <= 0)
          throw new BadRequestException(
            'La cantidad a reclamar debe ser mayor a 0',
          );
        if (dtoItem.quantity > available) {
          throw new BadRequestException(
            `Ítem "${orderItem.productName}": solo ${available} unidades disponibles (compradas: ${orderItem.quantity}, ya procesadas: ${alreadyClaimed})`,
          );
        }
      }

      const claimNumber = await this.generateClaimNumber(tx);

      const created = await tx.orderClaim.create({
        data: {
          claimNumber,
          orderId,
          customerId,
          type: claimData.type,
          reasonCategory: claimData.reasonCategory,
          description: claimData.description,
          internalNote: claimData.internalNote,
          status: ClaimStatus.PENDING,
          items: {
            create: items.map((item) => ({
              orderItemId: item.orderItemId,
              quantity: item.quantity,
            })),
          },
          ...(dto.refundMethod && {
            refundMethod: dto.refundMethod as RefundMethod,
            refundAccountDetails: dto.refundAccountDetails ?? null,
          }),
        },
        include: {
          items: {
            include: {
              orderItem: { select: { productName: true, productSku: true } },
            },
          },
          customer: {
            select: { firstName: true, lastName: true, email: true },
          },
          order: { select: { orderNumber: true } },
        },
      });

      if (tempRecords.length > 0) {
        const movedList: MovedImageData[] = [];
        try {
          for (let i = 0; i < tempRecords.length; i++) {
            const moved = await this.imageRecord.moveToFinal(
              tempRecords[i],
              ENTITY_TYPE,
              created.id,
              IMAGE_ROLE,
              i,
            );
            movedList.push(moved);
          }
          for (const moved of movedList)
            await this.imageRecord.confirmInDb(moved, tx);
        } catch (err) {
          await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
          throw err;
        }
      }

      return created;
    });

    if (claim.customer?.email) {
      try {
        await this.mailService.sendClaimCreated(claim.customer.email, {
          customerName: `${claim.customer.firstName} ${claim.customer.lastName}`,
          claimNumber: claim.claimNumber,
          claimTypeLabel: CLAIM_TYPE_LABELS[claimData.type] ?? claimData.type,
          orderNumber: claim.order.orderNumber,
          description: claimData.description,
          items: claim.items.map((i) => ({
            productName: i.orderItem.productName,
            quantity: i.quantity,
          })),
        });
      } catch (err) {
        console.error(
          '[OrderClaimsService] Error enviando email de reclamo:',
          err,
        );
      }
    }

    return claim;
  }

  // ═══════════════════════════════════════════════════════════
  // createClaimAsAdmin — CMS
  // ═══════════════════════════════════════════════════════════

  async createClaimAsAdmin(
    orderId: string,
    dto: CreateOrderClaimDto,
    adminId: string,
  ) {
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
      select: { customerId: true, status: true },
    });
    if (!order) throw new NotFoundException('Pedido no encontrado');
    if (!order.customerId)
      throw new BadRequestException(
        'Solo disponible para pedidos de clientes registrados',
      );

    this.validateClaimForOrderStatus(order.status, dto.type);

    if (dto.autoApprove) {
      const claim = await this.createClaim(order.customerId, orderId, dto);
      return this.reviewClaim(
        claim.id,
        {
          action: 'APPROVED',
          reviewNote:
            dto.autoApproveNote ||
            'Reclamo registrado y aprobado desde el CMS.',
          internalNote: dto.internalNote,
        },
        adminId,
      );
    }

    return this.createClaim(order.customerId, orderId, dto);
  }

  // ═══════════════════════════════════════════════════════════
  // reviewClaim — APROBAR o RECHAZAR
  // ═══════════════════════════════════════════════════════════

  async reviewClaim(claimId: string, dto: ReviewClaimDto, adminId: string) {
    const claim = await this.findClaimById(claimId);

    if (claim.status !== ClaimStatus.PENDING) {
      throw new BadRequestException(
        `Solo se pueden revisar reclamos pendientes. Estado actual: "${CLAIM_STATUS_LABELS[claim.status]}"`,
      );
    }
    if (dto.action === 'REJECTED' && !dto.reviewNote?.trim()) {
      throw new BadRequestException(
        'El motivo del rechazo (reviewNote) es obligatorio',
      );
    }
    if (dto.action === 'APPROVED' && claim.type === ClaimType.CANCELLATION) {
      if (['shipped', 'delivered'].includes(claim.order.status)) {
        throw new BadRequestException(
          'No se puede cancelar un pedido que ya fue enviado o entregado.',
        );
      }
    }

    const newStatus =
      dto.action === 'APPROVED' ? ClaimStatus.APPROVED : ClaimStatus.REJECTED;

    await this.prisma.$transaction(async (tx) => {
      await tx.orderClaim.update({
        where: { id: claimId },
        data: {
          status: newStatus,
          reviewedById: adminId,
          reviewNote: dto.reviewNote,
          internalNote: dto.internalNote,
          reviewedAt: new Date(),
        },
      });

      if (dto.action === 'APPROVED') {
        if (claim.type === ClaimType.CANCELLATION) {
          const claimApproved = {
            ...claim,
            status: ClaimStatus.APPROVED,
          };
          await this.handleCancellation(tx, claimApproved, adminId);
        } else {
          // await this.createHistoryEntry(
          //   tx,
          //   claim,
          //   adminId,
          //   `Reclamo ${claim.claimNumber} aprobado. Pendiente de recibir el producto.`,
          // );
          await this.createHistoryEntry(
            tx,
            claim,
            adminId,
            'Aprobado · Pendiente de recibir el producto',
          );
        }
      }
    });

    await this.sendReviewEmail(claim, dto).catch((err) =>
      console.error(
        '[OrderClaimsService] Error enviando email de revisión:',
        err,
      ),
    );

    return { ...claim, status: newStatus };
  }

  // ═══════════════════════════════════════════════════════════
  // handleCancellation — Stock + estado + reembolso
  // ═══════════════════════════════════════════════════════════

  private async handleCancellation(
    tx: Prisma.TransactionClient,
    claim: ClaimWithRelations,
    adminId: string,
  ): Promise<void> {
    // 1. Devolver stock
    for (const item of claim.items) {
      await tx.product.update({
        where: { id: item.orderItem.product.id },
        data: { stock: { increment: item.quantity } },
      });
    }

    // 2. ¿Cancelación total? (considerando claims previos)
    const isFull = await this.isFullCancellation(tx, claim);

    if (isFull) {
      await tx.order.update({
        where: { id: claim.order.id },
        data: { status: OrderStatus.cancelled, cancelledAt: new Date() },
      });
      // await this.createHistoryEntry(
      //   tx,
      //   claim,
      //   adminId,
      //   `Cancelación total aprobada por reclamo ${claim.claimNumber}.`,
      // );
      await this.createHistoryEntry(
        tx,
        claim,
        adminId,
        'Cancelación total aprobada',
      );
    } else {
      const amount = this.calculateCancelledAmount(claim);
      // await this.createHistoryEntry(
      //   tx,
      //   claim,
      //   adminId,
      //   `Cancelación parcial aprobada. ${claim.items.length} ítem(s) cancelado(s). Monto: S/ ${amount.toFixed(2)}`,
      // );
      await this.createHistoryEntry(
        tx,
        claim,
        adminId,
        `Cancelación parcial · ${claim.items.length} ítem(s) · S/ ${amount.toFixed(2)}`,
      );
    }

    // 3. ¿Necesita reembolso?
    const needsRefund = this.orderRefundService.isClaimReadyForRefund(claim);

    if (needsRefund) {
      // await this.createHistoryEntry(
      //   tx,
      //   claim,
      //   adminId,
      //   `Reclamo ${claim.claimNumber} aprobado. Pendiente de reembolso.`,
      // );
      await this.createHistoryEntry(
        tx,
        claim,
        adminId,
        'Pendiente de reembolso',
      );
    } else {
      await tx.orderClaim.update({
        where: { id: claim.id },
        data: { status: ClaimStatus.COMPLETED, completedAt: new Date() },
      });
    }
  }

  // ═══════════════════════════════════════════════════════════
  // markClaimReceived — APPROVED → RECEIVED
  // ═══════════════════════════════════════════════════════════

  async markClaimReceived(
    claimId: string,
    dto: MarkClaimReceivedDto,
    adminId: string,
  ) {
    const claim = await this.prisma.orderClaim.findUnique({
      where: { id: claimId },
      include: {
        order: { include: { items: true } },
        items: {
          include: {
            orderItem: {
              include: {
                product: { select: { id: true, name: true, stock: true } },
              },
            },
          },
        },
      },
    });

    if (!claim) throw new NotFoundException('Reclamo no encontrado');
    if (claim.status !== ClaimStatus.APPROVED)
      throw new BadRequestException(
        `Debe estar APROBADO. Actual: "${CLAIM_STATUS_LABELS[claim.status]}"`,
      );
    if (claim.type === ClaimType.CANCELLATION)
      throw new BadRequestException(
        'Los reclamos de cancelación no requieren recepción.',
      );
    if (claim.type === ClaimType.REFUND && !claim.refundMethod)
      throw new BadRequestException('Falta el método de reembolso.');

    await this.prisma.$transaction(async (tx) => {
      await tx.orderClaim.update({
        where: { id: claimId },
        data: {
          status: ClaimStatus.RECEIVED,
          receivedAt: new Date(),
          receivedProductCondition: dto.productCondition,
          internalDamageNote: dto.internalDamageNote,
          receivedAdminNote: dto.adminNote,
        },
      });

      if (dto.productCondition === ReturnedProductCondition.RESELLABLE) {
        for (const item of claim.items) {
          await tx.product.update({
            where: { id: item.orderItem.product.id },
            data: { stock: { increment: item.quantity } },
          });
        }
      }

      // await this.createHistoryEntry(
      //   tx,
      //   claim as ClaimWithRelations,
      //   adminId,
      //   `Producto recibido. Reclamo: ${claim.claimNumber}. Condición: ${RETURNED_CONDITION_LABELS[dto.productCondition]}.` +
      //     (dto.internalDamageNote ? ` Nota: ${dto.internalDamageNote}.` : ''),
      // );
      await this.createHistoryEntry(
        tx,
        claim as ClaimWithRelations,
        adminId,
        `Producto recibido · ${RETURNED_CONDITION_LABELS[dto.productCondition]}`,
      );
    });

    return { success: true, claimId };
  }

  // ═══════════════════════════════════════════════════════════
  // completeReplacement — RECEIVED → COMPLETED
  // ═══════════════════════════════════════════════════════════

  async completeReplacement(claimId: string, adminId: string) {
    const claim = await this.prisma.orderClaim.findUnique({
      where: { id: claimId },
      include: {
        customer: { select: { id: true, firstName: true, email: true } },
        order: {
          include: {
            shippingAddress: true,
            shippingRate: { select: { id: true, price: true } },
            paymentMethod: { select: { id: true } },
            items: {
              include: {
                product: { select: { id: true, stock: true, name: true } },
              },
            },
          },
        },
        items: {
          include: {
            orderItem: {
              select: {
                productId: true,
                unitPrice: true,
                productName: true,
                productSku: true,
              },
            },
          },
        },
      },
    });

    if (!claim) throw new NotFoundException('Reclamo no encontrado');
    if (claim.type !== ClaimType.REPLACEMENT)
      throw new BadRequestException('Solo aplica a REEMPLAZO');
    if (claim.status !== ClaimStatus.RECEIVED)
      throw new BadRequestException(
        `Debe estar RECIBIDO. Actual: "${CLAIM_STATUS_LABELS[claim.status]}"`,
      );
    if (claim.replacementOrderId)
      throw new ConflictException(
        `Ya existe orden de reemplazo (${claim.replacementOrderId})`,
      );

    for (const ci of claim.items) {
      const product = claim.order.items.find(
        (i) => i.productId === ci.orderItem.productId,
      )?.product;
      if (product && product.stock < ci.quantity) {
        throw new BadRequestException(
          `Stock insuficiente para "${product.name}". Disponible: ${product.stock}, requerido: ${ci.quantity}.`,
        );
      }
    }

    const result = await this.prisma.$transaction(async (tx) => {
      const orderNumber = `${claim.order.orderNumber}-RPL`;
      const storeCovers =
        claim.reasonCategory !== ClaimReasonCategory.CUSTOMER_DECISION;

      const replacementItems = claim.items.map((ci) => ({
        productId: ci.orderItem.productId,
        productName: ci.orderItem.productName,
        productSku: ci.orderItem.productSku,
        quantity: ci.quantity,
        unitPrice: ci.orderItem.unitPrice,
        lineTotal: Number(ci.orderItem.unitPrice) * ci.quantity,
        discountAmount: 0,
      }));

      const subtotal = replacementItems.reduce((s, i) => s + i.lineTotal, 0);
      const shipping = storeCovers
        ? 0
        : Number(claim.order.shippingRate?.price ?? 0);

      const replacement = await tx.order.create({
        data: {
          orderNumber,
          customerId: claim.order.customerId ?? undefined,
          status: storeCovers
            ? OrderStatus.processing
            : OrderStatus.pending_payment,
          paidAt: storeCovers ? new Date() : null,
          subtotal,
          shippingAmount: shipping,
          total: storeCovers ? 0 : shipping,
          paymentMethodId: claim.order.paymentMethod.id,
          shippingRateId: claim.order.shippingRate?.id ?? undefined,
          parentOrderId: claim.order.id,
          adminNotes: `Orden de reemplazo por reclamo ${claim.claimNumber}`,
          claimAsReplacementId: claimId,
          items: { createMany: { data: replacementItems } },
          ...(claim.order.shippingAddress && {
            shippingAddress: {
              create: {
                recipientName: claim.order.shippingAddress.recipientName,
                phone: claim.order.shippingAddress.phone ?? undefined,
                departmentId: claim.order.shippingAddress.departmentId,
                provinceId: claim.order.shippingAddress.provinceId,
                districtId: claim.order.shippingAddress.districtId,
                addressLine: claim.order.shippingAddress.addressLine,
                reference: claim.order.shippingAddress.reference ?? undefined,
                alias: claim.order.shippingAddress.alias ?? undefined,
                latitude: claim.order.shippingAddress.latitude ?? undefined,
                longitude: claim.order.shippingAddress.longitude ?? undefined,
              },
            },
          }),
        },
      });

      await tx.orderLogistics.create({
        data: {
          orderId: replacement.id,
          deliveryType: DeliveryType.COURIER,
          estimatedShipping: 0,
        },
      });

      for (const ci of claim.items) {
        await tx.product.update({
          where: { id: ci.orderItem.productId },
          data: { stock: { decrement: ci.quantity } },
        });
      }

      await tx.orderClaim.update({
        where: { id: claimId },
        data: {
          status: ClaimStatus.COMPLETED,
          completedAt: new Date(),
          replacementOrderId: replacement.id,
        },
      });

      await tx.orderStatusHistory.create({
        data: {
          orderId: claim.orderId,
          fromStatus: claim.order.status,
          toStatus: claim.order.status,
          changedById: adminId,
          comment: `Reemplazo completado. Nueva orden: ${orderNumber}.`,
        },
      });
      await tx.orderStatusHistory.create({
        data: {
          orderId: replacement.id,
          fromStatus: null,
          toStatus: OrderStatus.processing,
          changedById: adminId,
          comment: `Orden de reemplazo creada por reclamo ${claim.claimNumber}.`,
        },
      });

      return { replacementOrderId: replacement.id };
    });

    if (claim.customer?.email) {
      try {
        await this.mailService.sendClaimCompleted(claim.customer.email, {
          customerName: claim.customer.firstName ?? 'Cliente',
          claimNumber: claim.claimNumber,
          type: claim.type,
          totalRefundedAmount: undefined,
          completedAt: new Date(),
        });
      } catch (err) {
        console.error(
          '[OrderClaimsService] Error enviando email de reemplazo:',
          err,
        );
      }
    }

    return {
      success: true,
      claimId,
      replacementOrderId: result.replacementOrderId,
    };
  }

  // ═══════════════════════════════════════════════════════════
  // cancelClaim, deleteClaim, confirmClaimShipment, registerReturnShipment
  // ═══════════════════════════════════════════════════════════

  async cancelClaim(claimId: string, customerId: string) {
    const claim = await this.prisma.orderClaim.findUnique({
      where: { id: claimId },
      include: { order: { select: { id: true, status: true } } },
    });
    if (!claim) throw new NotFoundException('Reclamo no encontrado');
    if (claim.customerId !== customerId)
      throw new BadRequestException('No tienes permiso');
    if (claim.status !== ClaimStatus.PENDING)
      throw new BadRequestException(
        `Solo PENDING. Actual: "${CLAIM_STATUS_LABELS[claim.status]}"`,
      );

    await this.prisma.$transaction(async (tx) => {
      await tx.orderClaim.update({
        where: { id: claimId },
        data: { status: ClaimStatus.CANCELLED },
      });
      await this.createHistoryEntry(
        tx,
        claim as ClaimWithRelations,
        '',
        `Reclamo ${claim.claimNumber} cancelado por el cliente.`,
      );
    });

    return { success: true, claimId };
  }

  async deleteClaim(claimId: string) {
    const claim = await this.prisma.orderClaim.findUnique({
      where: { id: claimId },
      select: { id: true, status: true },
    });
    if (!claim) throw new NotFoundException('Reclamo no encontrado');

    const statusList: ClaimStatus[] = [
      ClaimStatus.CANCELLED,
      ClaimStatus.REJECTED,
    ];

    if (!statusList.includes(claim.status)) {
      throw new BadRequestException(
        `Solo CANCELLED o REJECTED. Actual: "${CLAIM_STATUS_LABELS[claim.status]}"`,
      );
    }
    await this.imageRecord.deleteEntityImages(ENTITY_TYPE, claimId);
    await this.prisma.orderClaim.delete({ where: { id: claimId } });
    return { success: true };
  }

  async confirmClaimShipment(
    claimId: string,
    dto: ConfirmClaimShipmentDto,
    customerId: string,
  ) {
    const claim = await this.prisma.orderClaim.findFirst({
      where: {
        id: claimId,
        customerId,
        status: ClaimStatus.APPROVED,
        type: { in: [ClaimType.REFUND, ClaimType.REPLACEMENT] },
      },
      include: {
        customer: { select: { firstName: true, lastName: true, email: true } },
        order: { select: { id: true, orderNumber: true, status: true } },
        items: {
          include: {
            orderItem: { select: { productName: true, productSku: true } },
          },
        },
      },
    });

    if (!claim)
      throw new NotFoundException('Reclamo no encontrado o no está aprobado');
    if (claim.returnShipmentConfirmedAt)
      throw new ConflictException('Ya confirmaste el envío');

    const tempRecords = dto.tempImageIds?.length
      ? await Promise.all(
          dto.tempImageIds.map((id) =>
            this.imageRecord.findTempRecord(
              id,
              ENTITY_TYPE_RETURN,
              IMAGE_ROLE_RETURN,
            ),
          ),
        )
      : [];

    const movedList: MovedImageData[] = [];
    try {
      for (let i = 0; i < tempRecords.length; i++) {
        movedList.push(
          await this.imageRecord.moveToFinal(
            tempRecords[i],
            ENTITY_TYPE_RETURN,
            '',
            IMAGE_ROLE_RETURN,
            i,
          ),
        );
      }
    } catch (err) {
      await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
      throw err;
    }

    try {
      await this.prisma.$transaction(async (tx) => {
        await tx.orderClaim.update({
          where: { id: claimId },
          data: {
            returnCourierName: dto.returnCourierName,
            returnTrackingNumber: dto.returnTrackingNumber,
            returnShipmentNotes: dto.returnShipmentNotes,
            returnShipmentConfirmedAt: new Date(),
            ...(claim.type === ClaimType.REFUND && {
              refundMethod: dto.refundMethod as RefundMethod,
              refundAccountDetails: dto.refundAccountDetails,
            }),
          },
        });

        for (const moved of movedList)
          await this.imageRecord.confirmInDb(
            { ...moved, entityId: claimId },
            tx,
          );

        // const refundInfo =
        //   claim.type === ClaimType.REFUND && dto.refundMethod
        //     ? `Método de reembolso: ${dto.refundMethod}. `
        //     : '';
        // await this.createHistoryEntry(
        //   tx,
        //   claim as ClaimWithRelations,
        //   '',
        //   `Cliente confirmó envío. Courier: ${dto.returnCourierName}, Tracking: ${dto.returnTrackingNumber}. ${refundInfo}Pendiente verificación.`,
        // );
        await this.createHistoryEntry(
          tx,
          claim as ClaimWithRelations,
          '',
          `Envío confirmado · ${dto.returnCourierName} · ${dto.returnTrackingNumber}`,
        );
      });

      const adminEmails = await this.getAdminEmails();
      if (adminEmails.length > 0) {
        const name = claim.customer
          ? `${claim.customer.firstName} ${claim.customer.lastName}`.trim()
          : 'Cliente';
        await this.mailService
          .sendClaimShippedAdmin(adminEmails, {
            claimNumber: claim.claimNumber,
            orderNumber: claim.order.orderNumber,
            customerName: name,
            claimType: CLAIM_TYPE_LABELS[claim.type] ?? claim.type,
            courierName: dto.returnCourierName,
            trackingNumber: dto.returnTrackingNumber,
            items: claim.items.map((i) => i.orderItem.productName).join(', '),
            shippingCost: dto.returnShippingCost,
          })
          .catch(() => {});
      }
      if (claim.customer?.email) {
        await this.mailService
          .sendClaimShipmentConfirmed(claim.customer.email, {
            customerName: claim.customer.firstName,
            claimNumber: claim.claimNumber,
            claimType: CLAIM_TYPE_LABELS[claim.type] ?? claim.type,
            orderNumber: claim.order.orderNumber,
            trackingNumber: dto.returnTrackingNumber,
            courierName: dto.returnCourierName,
          })
          .catch(() => {});
      }

      return { success: true, claimId, status: ClaimStatus.APPROVED };
    } catch (err) {
      await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
      throw err;
    }
  }

  async registerReturnShipment(
    claimId: string,
    dto: ConfirmReturnShipmentDto,
    adminId: string,
  ) {
    const claim = await this.prisma.orderClaim.findUnique({
      where: { id: claimId },
      include: { order: { select: { id: true, status: true } } },
    });
    if (!claim) throw new NotFoundException('Reclamo no encontrado');
    if (claim.status !== ClaimStatus.APPROVED)
      throw new BadRequestException(
        `Debe estar APROBADO. Actual: "${claim.status}"`,
      );
    if (claim.type !== ClaimType.REFUND && claim.type !== ClaimType.REPLACEMENT)
      throw new BadRequestException('Solo REFUND o REPLACEMENT');
    if (
      dto.customerVoucherAmount &&
      dto.customerVoucherAmount > 0 &&
      claim.reasonCategory === ClaimReasonCategory.CUSTOMER_DECISION
    ) {
      throw new BadRequestException(
        'El voucher no aplica para decisión del cliente',
      );
    }

    const tempRecords = dto.tempImageIds?.length
      ? await Promise.all(
          dto.tempImageIds.map((id) =>
            this.imageRecord.findTempRecord(
              id,
              ENTITY_TYPE_RETURN,
              IMAGE_ROLE_RETURN,
            ),
          ),
        )
      : [];

    const movedList: MovedImageData[] = [];
    try {
      for (let i = 0; i < tempRecords.length; i++) {
        movedList.push(
          await this.imageRecord.moveToFinal(
            tempRecords[i],
            ENTITY_TYPE_RETURN,
            claimId,
            IMAGE_ROLE_RETURN,
            i,
          ),
        );
      }
    } catch (err) {
      await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
      throw err;
    }

    try {
      return await this.prisma.$transaction(async (tx) => {
        const updated = await tx.orderClaim.update({
          where: { id: claimId },
          data: {
            returnCourierName: dto.courierName,
            returnTrackingNumber: dto.trackingNumber,
            returnShipmentNotes: dto.notes,
            returnShipmentConfirmedAt: new Date(),
            ...(dto.customerVoucherAmount !== undefined && {
              customerVoucherAmount: dto.customerVoucherAmount,
            }),
            ...(claim.type === ClaimType.REFUND &&
              dto.refundMethod && {
                refundMethod: dto.refundMethod as RefundMethod,
                refundAccountDetails: dto.refundAccountDetails ?? null,
              }),
          },
          include: {
            customer: {
              select: { firstName: true, lastName: true, email: true },
            },
            order: { select: { orderNumber: true } },
          },
        });

        for (const moved of movedList)
          await this.imageRecord.confirmInDb(
            { ...moved, entityId: claimId },
            tx,
          );

        // await this.createHistoryEntry(
        //   tx,
        //   claim as ClaimWithRelations,
        //   adminId,
        //   `Admin registró envío. Courier: ${dto.courierName}, Tracking: ${dto.trackingNumber}.` +
        //     (dto.customerVoucherAmount
        //       ? ` Voucher: S/ ${dto.customerVoucherAmount.toFixed(2)}.`
        //       : ''),
        // );

        await this.createHistoryEntry(
          tx,
          claim as ClaimWithRelations,
          adminId,
          `Envío registrado · ${dto.courierName} · ${dto.trackingNumber}`,
        );

        return updated;
      });
    } catch (err) {
      await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
      throw err;
    }
  }

  // ═══════════════════════════════════════════════════════════
  // HELPERS PRIVADOS
  // ═══════════════════════════════════════════════════════════

  private async isFullCancellation(
    tx: Prisma.TransactionClient,
    claim: ClaimWithRelations,
  ): Promise<boolean> {
    const previous = await tx.orderClaim.findMany({
      where: {
        orderId: claim.order.id,
        type: ClaimType.CANCELLATION,
        status: { in: [ClaimStatus.APPROVED, ClaimStatus.COMPLETED] },
        id: { not: claim.id },
      },
      include: { items: { select: { orderItemId: true, quantity: true } } },
    });

    const map = new Map<string, number>();
    for (const prev of previous) {
      for (const item of prev.items)
        map.set(
          item.orderItemId,
          (map.get(item.orderItemId) ?? 0) + item.quantity,
        );
    }
    for (const item of claim.items)
      map.set(
        item.orderItemId,
        (map.get(item.orderItemId) ?? 0) + item.quantity,
      );

    return claim.order.items.every(
      (oi) => (map.get(oi.id) ?? 0) >= oi.quantity,
    );
  }

  private calculateCancelledAmount(claim: ClaimWithRelations): number {
    return claim.items.reduce((acc, ci) => {
      const oi = claim.order.items.find((i) => i.id === ci.orderItemId);
      if (!oi) return acc;
      const unitNet =
        Number(oi.unitPrice) -
        Number(oi.discountAmount ?? 0) / Math.max(1, oi.quantity);
      return acc + unitNet * ci.quantity;
    }, 0);
  }

  // private async createHistoryEntry(
  //   tx: Prisma.TransactionClient,
  //   claim: ClaimWithRelations,
  //   adminId: string,
  //   comment: string,
  // ) {
  //   await tx.orderStatusHistory.create({
  //     data: {
  //       orderId: claim.order.id,
  //       fromStatus: claim.order.status,
  //       toStatus: claim.order.status,
  //       changedById: adminId || undefined,
  //       comment,
  //     },
  //   });
  // }

  /**
   * Crea o actualiza una entrada en el timeline de la orden.
   *
   * Regla de negocio: Un reclamo genera UNA sola entrada en el timeline
   * que se actualiza con cada cambio de estado, evitando ruido visual.
   *
   * Las transiciones de estado de la orden (paid→processing→shipped→delivered)
   * sí generan entradas separadas porque son hitos del pedido, no del reclamo.
   */
  private async createHistoryEntry(
    tx: Prisma.TransactionClient,
    claim: ClaimWithRelations,
    adminId: string,
    action: string,
  ): Promise<void> {
    const claimRef = `[${claim.claimNumber}]`;

    const existing = await tx.orderStatusHistory.findFirst({
      where: {
        orderId: claim.order.id,
        comment: { startsWith: claimRef },
      },
      orderBy: { createdAt: 'desc' },
    });

    const summary = this.buildTimelineSummary(claim, action);

    if (existing) {
      await tx.orderStatusHistory.update({
        where: { id: existing.id },
        data: {
          comment: `${claimRef} ${summary}`,
          changedById: adminId || existing.changedById,
          createdAt: new Date(), // Mover al top del timeline
        },
      });
    } else {
      await tx.orderStatusHistory.create({
        data: {
          orderId: claim.order.id,
          fromStatus: claim.order.status,
          toStatus: claim.order.status,
          changedById: adminId || undefined,
          comment: `${claimRef} ${summary}`,
        },
      });
    }
  }

  /**
   * Construye un resumen legible del estado actual del reclamo.
   */
  private buildTimelineSummary(
    claim: ClaimWithRelations,
    action: string,
  ): string {
    const type = CLAIM_TYPE_LABELS[claim.type] ?? claim.type;
    const status = CLAIM_STATUS_LABELS[claim.status] ?? claim.status;
    const itemsCount = claim.items?.length ?? 0;

    const base =
      itemsCount > 0
        ? `${type} · ${itemsCount} producto(s) · ${status}`
        : `${type} · ${status}`;

    return action ? `${base} · ${action}` : base;
  }

  private validateClaimForOrderStatus(
    orderStatus: OrderStatus,
    type: ClaimType,
  ): void {
    if (orderStatus === OrderStatus.shipped)
      throw new BadRequestException(
        'No se pueden crear reclamos para pedidos en camino.',
      );
    if (
      type === ClaimType.CANCELLATION &&
      !['pending_payment', 'paid', 'processing'].includes(orderStatus)
    ) {
      throw new BadRequestException(
        `No se puede cancelar. Estado: "${ORDER_STATUS_LABELS[orderStatus]}".`,
      );
    }
    if (
      (type === ClaimType.REFUND || type === ClaimType.REPLACEMENT) &&
      orderStatus !== OrderStatus.delivered
    ) {
      throw new BadRequestException(
        `Solo disponible para pedidos entregados. Estado: "${ORDER_STATUS_LABELS[orderStatus]}".`,
      );
    }
  }

  private async sendReviewEmail(
    claim: ClaimWithRelations,
    dto: ReviewClaimDto,
  ): Promise<void> {
    const customer = claim.customer;
    if (!customer?.email) return;
    const name = `${customer.firstName} ${customer.lastName}`;

    if (dto.action === 'APPROVED') {
      await this.mailService.sendClaimApproved(customer.email, {
        customerName: name,
        claimNumber: claim.claimNumber,
        type: claim.type,
        orderNumber: claim.order.orderNumber,
        reviewNote: dto.reviewNote,
      });
    } else {
      let note = dto.reviewNote ?? '';
      if (
        claim.type === ClaimType.CANCELLATION &&
        ['shipped', 'delivered'].includes(claim.order.status)
      ) {
        note = `No es posible cancelar porque ya fue enviado. ${note} Puedes solicitar una devolución al recibirlo.`;
      }
      await this.mailService.sendClaimRejected(customer.email, {
        customerName: name,
        claimNumber: claim.claimNumber,
        orderNumber: claim.order.orderNumber,
        reviewNote: note,
      });
    }
  }

  private async getAdminEmails(): Promise<string[]> {
    const config = await this.prisma.siteConfig.findFirst({
      select: { storeEmail: true, supportEmail: true },
    });
    return [config?.storeEmail, config?.supportEmail].filter((e): e is string =>
      Boolean(e),
    );
  }

  private async generateClaimNumber(
    tx: Prisma.TransactionClient,
  ): Promise<string> {
    const date = new Date();
    const datePart = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
    const seq = await tx.$queryRaw<[{ lastseq: number }]>`
      INSERT INTO claim_sequence (id, "lastSeq") VALUES ('global', 1)
      ON CONFLICT (id) DO UPDATE SET "lastSeq" = claim_sequence."lastSeq" + 1
      RETURNING "lastSeq" as lastseq
    `;
    return `REC-${datePart}-${String(seq[0].lastseq).padStart(4, '0')}`;
  }
}

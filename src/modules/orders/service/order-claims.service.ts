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
import { CreateOrderClaimDto, ReviewClaimDto, QueryClaimDto } from '../dto';
import {
  ImageEntityType,
  Prisma,
  ClaimType,
  OrderStatus,
} from 'generated/prisma/client';

const ENTITY_TYPE = ImageEntityType.ORDER_CLAIM;
const IMAGE_ROLE = 'customer_evidence';

// Labels para emails
const CLAIM_TYPE_LABELS: Record<string, string> = {
  CANCELLATION: 'cancelación',
  REFUND: 'devolución',
  REPLACEMENT: 'reemplazo',
};

// ═══════════════════════════════════════════════════════════
// TIPOS ESTRICTOS (COINCIDEN EXACTAMENTE CON LAS CONSULTAS)
// ═══════════════════════════════════════════════════════════

type ClaimForReview = Prisma.OrderClaimGetPayload<{
  include: {
    customer: { select: { firstName: true; lastName: true; email: true } };
    order: {
      include: {
        items: {
          include: {
            product: { select: { id: true; name: true; stock: true } };
          };
        };
      };
    };
    items: {
      include: {
        orderItem: {
          include: {
            product: { select: { id: true; name: true; sku: true } };
          };
        };
      };
    };
  };
}>;

type FullOrderForProcessing = Prisma.OrderGetPayload<{
  include: {
    items: {
      include: {
        product: { select: { id: true; name: true; stock: true } };
      };
    };
  };
}>;

type ClaimItemWithOrderItem = Prisma.OrderClaimItemGetPayload<{
  include: {
    orderItem: {
      include: {
        product: { select: { id: true; name: true; sku: true } };
      };
    };
  };
}>;

type OrderItemForProcessing = Prisma.OrderItemGetPayload<{
  include: {
    product: { select: { id: true; name: true; stock: true } };
  };
}>;

@Injectable()
export class OrderClaimsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly imageRecord: ImageRecordService,
    private readonly mailService: MailService,
  ) {}

  // ═══════════════════════════════════════════════════════════
  // findAll — listado paginado para el CMS (admin)
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
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  // ═══════════════════════════════════════════════════════════
  // createClaim — con validaciones de seguridad completas
  // ═══════════════════════════════════════════════════════════

  async createClaim(
    customerId: string,
    orderId: string,
    dto: CreateOrderClaimDto,
  ) {
    const { tempImageIds, items, customerVoucherAmount, ...claimData } = dto;

    // ── 0. Validar voucher solo en categorías que aplican ───────
    if (
      customerVoucherAmount !== undefined &&
      claimData.reasonCategory === 'CUSTOMER_DECISION'
    ) {
      throw new BadRequestException(
        'El voucher de envío de retorno no aplica cuando la devolución es por decisión del cliente',
      );
    }

    // ── 1. Validar y mover imágenes al disco antes de tocar la BD ──
    const tempRecords = tempImageIds?.length
      ? await Promise.all(
          tempImageIds.map((id) =>
            this.imageRecord.findTempRecord(id, ENTITY_TYPE, IMAGE_ROLE),
          ),
        )
      : [];

    const movedList: MovedImageData[] = [];
    try {
      for (let i = 0; i < tempRecords.length; i++) {
        const moved = await this.imageRecord.moveToFinal(
          tempRecords[i],
          ENTITY_TYPE,
          '',
          IMAGE_ROLE,
          i,
        );
        movedList.push(moved);
      }
    } catch (err) {
      await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
      throw err;
    }

    // ── 2. Transacción de BD ────────────────────────────────────
    try {
      return await this.prisma.$transaction(async (tx) => {
        const order = await tx.order.findFirst({
          where: { id: orderId, customerId },
          include: {
            items: {
              include: {
                claimItems: {
                  where: {
                    claim: { status: { notIn: ['CANCELLED', 'REJECTED'] } },
                  },
                },
                refundItems: true,
              },
            },
          },
        });

        if (!order) {
          throw new NotFoundException(
            'La orden no existe o no pertenece a este cliente',
          );
        }

        this.validateClaimForOrderStatus(order.status, claimData.type);

        const activeClaim = await tx.orderClaim.findFirst({
          where: {
            orderId,
            status: { notIn: ['CANCELLED', 'REJECTED', 'COMPLETED'] },
          },
          select: { claimNumber: true, status: true },
        });
        if (activeClaim) {
          throw new ConflictException(
            `Ya existe un reclamo activo para este pedido (${activeClaim.claimNumber}, estado: ${activeClaim.status})`,
          );
        }

        for (const dtoItem of items) {
          const orderItem = order.items.find(
            (oi) => oi.id === dtoItem.orderItemId,
          );
          if (!orderItem) {
            throw new BadRequestException(
              `El ítem ${dtoItem.orderItemId} no pertenece a esta orden`,
            );
          }

          const alreadyClaimed = orderItem.claimItems.reduce(
            (acc, ci) => acc + ci.quantity,
            0,
          );
          const alreadyRefunded = orderItem.refundItems.reduce(
            (acc, ri) => acc + ri.quantity,
            0,
          );
          const totalConsumed = alreadyClaimed + alreadyRefunded;
          const availableToReclaim = orderItem.quantity - totalConsumed;

          if (dtoItem.quantity <= 0) {
            throw new BadRequestException(
              `La cantidad a reclamar debe ser mayor a 0`,
            );
          }

          if (dtoItem.quantity > availableToReclaim) {
            throw new BadRequestException(
              `Ítem "${orderItem.productName}": solo ${availableToReclaim} unidades disponibles para reclamar ` +
                `(compradas: ${orderItem.quantity}, ya reclamadas/reembolsadas: ${totalConsumed})`,
            );
          }
        }

        const claimNumber = await this.generateClaimNumber(tx);

        const claim = await tx.orderClaim.create({
          data: {
            claimNumber,
            orderId,
            customerId,
            type: claimData.type,
            reasonCategory: claimData.reasonCategory,
            description: claimData.description,
            customerVoucherAmount: customerVoucherAmount,
            status: 'PENDING',
            items: {
              create: items.map((item) => ({
                orderItemId: item.orderItemId,
                quantity: item.quantity,
              })),
            },
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

        if (movedList.length > 0) {
          await Promise.all(
            movedList.map((moved) =>
              this.imageRecord.confirmInDb(
                { ...moved, entityId: claim.id },
                tx,
              ),
            ),
          );
        }

        if (claim.customer?.email) {
          await this.mailService.sendClaimCreated(claim.customer.email, {
            customerName: `${claim.customer.firstName} ${claim.customer.lastName}`,
            claimNumber,
            claimTypeLabel: CLAIM_TYPE_LABELS[claimData.type] ?? claimData.type,
            orderNumber: claim.order.orderNumber,
            description: claimData.description,
            items: claim.items.map((i) => ({
              productName: i.orderItem.productName,
              quantity: i.quantity,
            })),
          });
        }

        return claim;
      });
    } catch (err) {
      await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
      throw err;
    }
  }

  // ═══════════════════════════════════════════════════════════
  // reviewClaim — APROBAR o RECHAZAR (admin)
  // ═══════════════════════════════════════════════════════════

  async reviewClaim(claimId: string, dto: ReviewClaimDto, adminId: string) {
    // 1. Obtener reclamo con todas las relaciones necesarias
    const claim = await this.prisma.orderClaim.findUnique({
      where: { id: claimId },
      include: {
        customer: { select: { firstName: true, lastName: true, email: true } },
        order: {
          include: {
            items: {
              include: {
                product: { select: { id: true, name: true, stock: true } },
              },
            },
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
      },
    });

    if (!claim) throw new NotFoundException('Reclamo no encontrado');

    // 2. Validaciones iniciales
    if (claim.status !== 'PENDING') {
      throw new BadRequestException(
        `No se puede revisar un reclamo en estado "${claim.status}". Solo se pueden revisar reclamos PENDING.`,
      );
    }

    if (dto.action === 'REJECTED' && !dto.reviewNote?.trim()) {
      throw new BadRequestException(
        'El motivo del rechazo (reviewNote) es obligatorio',
      );
    }

    // 3. Validaciones específicas si es APROBADO
    if (dto.action === 'APPROVED') {
      this.validateClaimApproval(claim as ClaimForReview);
    }

    const newStatus = dto.action === 'APPROVED' ? 'APPROVED' : 'REJECTED';

    // 4. Transacción atómica
    const updated = await this.prisma.$transaction(async (tx) => {
      // 4.1 Actualizar el reclamo
      const updatedClaim = await tx.orderClaim.update({
        where: { id: claimId },
        data: {
          status: newStatus,
          reviewedById: adminId,
          reviewNote: dto.reviewNote,
          internalNote: dto.internalNote,
          reviewedAt: new Date(),
        },
        include: {
          items: {
            include: {
              orderItem: {
                select: {
                  id: true,
                  productId: true,
                  productName: true,
                  productSku: true,
                  quantity: true,
                  unitPrice: true,
                  discountAmount: true,
                },
              },
            },
          },
          customer: {
            select: { firstName: true, lastName: true, email: true },
          },
          order: {
            select: {
              id: true,
              orderNumber: true,
              status: true,
              shippingAmount: true,
              taxAmount: true,
            },
          },
        },
      });

      // 4.2 Si es APROBADO, ejecutar lógica según tipo
      if (dto.action === 'APPROVED') {
        // Obtener el pedido completo con items para procesar
        const fullOrder = await tx.order.findUnique({
          where: { id: claim.order.id },
          include: {
            items: {
              include: {
                product: { select: { id: true, name: true, stock: true } },
              },
            },
          },
        });

        if (!fullOrder) {
          throw new NotFoundException('Pedido no encontrado');
        }

        await this.processApprovedClaim(
          tx,
          claim as ClaimForReview,
          fullOrder as FullOrderForProcessing,
          adminId,
        );
      }

      return updatedClaim;
    });

    // 5. Enviar emails
    await this.sendReviewEmails(claim as ClaimForReview, dto);

    return updated;
  }

  // ═══════════════════════════════════════════════════════════
  // cancelClaim — el cliente cancela su propio reclamo PENDING
  // ═══════════════════════════════════════════════════════════

  async cancelClaim(claimId: string, customerId: string) {
    const claim = await this.prisma.orderClaim.findFirst({
      where: { id: claimId, customerId, status: 'PENDING' },
    });

    if (!claim) {
      throw new NotFoundException(
        'Reclamo no encontrado o no puede ser cancelado (solo se pueden cancelar reclamos propios en estado PENDING)',
      );
    }

    await this.imageRecord.deleteEntityImages(ENTITY_TYPE, claimId);

    return this.prisma.orderClaim.update({
      where: { id: claimId },
      data: { status: 'CANCELLED' },
    });
  }

  // ═══════════════════════════════════════════════════════════
  // deleteClaim — eliminación física (admin, casos excepcionales)
  // ═══════════════════════════════════════════════════════════

  async deleteClaim(id: string) {
    await this.imageRecord.deleteEntityImages(ENTITY_TYPE, id);
    return this.prisma.orderClaim.delete({ where: { id } });
  }

  // ═══════════════════════════════════════════════════════════
  // PRIVADOS - VALIDACIONES
  // ═══════════════════════════════════════════════════════════

  private validateClaimForOrderStatus(
    orderStatus: OrderStatus,
    type: ClaimType,
  ): void {
    const preShipStatuses: OrderStatus[] = [
      OrderStatus.pending_payment,
      OrderStatus.paid,
      OrderStatus.processing,
    ];
    const postShipStatuses: OrderStatus[] = [
      OrderStatus.shipped,
      OrderStatus.delivered,
    ];

    if (type === 'CANCELLATION' && !preShipStatuses.includes(orderStatus)) {
      throw new BadRequestException(
        `La cancelación solo es posible antes del envío. Estado actual del pedido: "${orderStatus}"`,
      );
    }

    if (
      (type === 'REFUND' || type === 'REPLACEMENT') &&
      !postShipStatuses.includes(orderStatus)
    ) {
      throw new BadRequestException(
        `Las devoluciones y reemplazos solo son posibles tras el envío. Estado actual: "${orderStatus}"`,
      );
    }
  }

  private validateClaimApproval(claim: ClaimForReview): void {
    const orderStatus = claim.order.status;
    const claimType = claim.type;

    if (claimType === 'CANCELLATION') {
      const shippedStatuses: OrderStatus[] = [
        OrderStatus.shipped,
        OrderStatus.delivered,
      ];
      if (shippedStatuses.includes(orderStatus)) {
        throw new BadRequestException(
          `No se puede aprobar la cancelación porque el pedido ya fue enviado (estado: ${orderStatus})`,
        );
      }
    }
  }

  // ═══════════════════════════════════════════════════════════
  // PRIVADOS - PROCESAMIENTO DE RECLAMOS APROBADOS
  // ═══════════════════════════════════════════════════════════

  private async processApprovedClaim(
    tx: Prisma.TransactionClient,
    claim: ClaimForReview,
    order: FullOrderForProcessing,
    adminId: string,
  ): Promise<void> {
    const claimType = claim.type;

    switch (claimType) {
      case 'CANCELLATION':
        await this.processCancellation(tx, claim, order, adminId);
        break;
      case 'REFUND':
        await this.processRefundApproval(tx, claim, order, adminId);
        break;
      case 'REPLACEMENT':
        await this.processReplacementApproval(tx, claim, order, adminId);
        break;
    }
  }

  private async processCancellation(
    tx: Prisma.TransactionClient,
    claim: ClaimForReview,
    order: FullOrderForProcessing,
    adminId: string,
  ): Promise<void> {
    const orderItems = order.items;
    const claimItems = claim.items;

    // 1. Devolver stock al inventario
    for (const claimItem of claimItems) {
      const orderItem = orderItems.find(
        (oi) => oi.id === claimItem.orderItemId,
      );

      if (!orderItem) {
        throw new BadRequestException(
          `El ítem ${claimItem.orderItemId} no pertenece al pedido`,
        );
      }

      if (claimItem.quantity > orderItem.quantity) {
        throw new BadRequestException(
          `No se puede cancelar ${claimItem.quantity} unidades de "${orderItem.productName}". ` +
            `Solo hay ${orderItem.quantity} en el pedido.`,
        );
      }

      await tx.product.update({
        where: { id: orderItem.productId },
        data: { stock: { increment: claimItem.quantity } },
      });
    }

    // 2. Determinar si es cancelación total o parcial
    const isFullCancellation = this.isFullCancellation(orderItems, claimItems);

    if (isFullCancellation) {
      await tx.order.update({
        where: { id: order.id },
        data: {
          status: OrderStatus.cancelled,
          cancelledAt: new Date(),
        },
      });

      await tx.orderStatusHistory.create({
        data: {
          orderId: order.id,
          fromStatus: order.status,
          toStatus: OrderStatus.cancelled,
          changedById: adminId,
          comment: `Cancelación total aprobada por reclamo ${claim.claimNumber}`,
        },
      });
    } else {
      // Cancelación parcial
      for (const claimItem of claimItems) {
        const orderItem = orderItems.find(
          (oi) => oi.id === claimItem.orderItemId,
        );

        if (!orderItem) continue;

        const newQuantity = orderItem.quantity - claimItem.quantity;

        if (newQuantity === 0) {
          await tx.orderItem.delete({ where: { id: orderItem.id } });
        } else {
          const newLineTotal =
            Number(orderItem.unitPrice) * newQuantity -
            Number(orderItem.discountAmount);

          await tx.orderItem.update({
            where: { id: orderItem.id },
            data: {
              quantity: newQuantity,
              lineTotal: newLineTotal,
            },
          });
        }
      }

      // Recalcular totales
      const remainingItems = await tx.orderItem.findMany({
        where: { orderId: order.id },
      });

      const newSubtotal = remainingItems.reduce(
        (sum, item) => sum + Number(item.unitPrice) * item.quantity,
        0,
      );
      const newDiscount = remainingItems.reduce(
        (sum, item) => sum + Number(item.discountAmount),
        0,
      );
      const newTotal =
        newSubtotal -
        newDiscount +
        Number(order.shippingAmount) +
        Number(order.taxAmount);

      await tx.order.update({
        where: { id: order.id },
        data: {
          subtotal: newSubtotal,
          discountAmount: newDiscount,
          total: Math.max(0, newTotal),
        },
      });

      await tx.orderStatusHistory.create({
        data: {
          orderId: order.id,
          fromStatus: order.status,
          toStatus: order.status,
          changedById: adminId,
          comment: `Cancelación parcial de ${claimItems.length} ítem(s) por reclamo ${claim.claimNumber}. Nuevo total: S/ ${newTotal.toFixed(2)}`,
        },
      });
    }
  }

  private async processRefundApproval(
    tx: Prisma.TransactionClient,
    claim: ClaimForReview,
    order: FullOrderForProcessing,
    adminId: string,
  ): Promise<void> {
    await tx.orderStatusHistory.create({
      data: {
        orderId: order.id,
        fromStatus: order.status,
        toStatus: order.status,
        changedById: adminId,
        comment: `Devolución ${claim.claimNumber} aprobada. Pendiente de recibir el producto.`,
      },
    });
  }

  private async processReplacementApproval(
    tx: Prisma.TransactionClient,
    claim: ClaimForReview,
    order: FullOrderForProcessing,
    adminId: string,
  ): Promise<void> {
    await tx.orderStatusHistory.create({
      data: {
        orderId: order.id,
        fromStatus: order.status,
        toStatus: order.status,
        changedById: adminId,
        comment: `Reemplazo ${claim.claimNumber} aprobado. Pendiente de recibir el producto defectuoso.`,
      },
    });
  }

  private isFullCancellation(
    orderItems: OrderItemForProcessing[],
    claimItems: ClaimItemWithOrderItem[],
  ): boolean {
    const claimedQtyMap = new Map<string, number>();
    for (const ci of claimItems) {
      const current = claimedQtyMap.get(ci.orderItemId) || 0;
      claimedQtyMap.set(ci.orderItemId, current + ci.quantity);
    }

    for (const oi of orderItems) {
      const claimedQty = claimedQtyMap.get(oi.id) || 0;
      if (claimedQty < oi.quantity) {
        return false;
      }
    }

    return true;
  }

  // ═══════════════════════════════════════════════════════════
  // PRIVADOS - EMAILS
  // ═══════════════════════════════════════════════════════════

  private async sendReviewEmails(
    claim: ClaimForReview,
    dto: ReviewClaimDto,
  ): Promise<void> {
    const customer = claim.customer;
    if (!customer?.email) return;

    const name = `${customer.firstName} ${customer.lastName}`;
    const order = claim.order;

    if (dto.action === 'APPROVED') {
      await this.mailService.sendClaimApproved(customer.email, {
        customerName: name,
        claimNumber: claim.claimNumber,
        type: claim.type,
        orderNumber: order.orderNumber,
        reviewNote: dto.reviewNote,
      });
    } else {
      let reviewNote = dto.reviewNote!;

      if (claim.type === 'CANCELLATION') {
        const shippedStatuses: OrderStatus[] = [
          OrderStatus.shipped,
          OrderStatus.delivered,
        ];
        if (shippedStatuses.includes(order.status)) {
          reviewNote = `No es posible cancelar el pedido porque ya fue enviado. ${reviewNote} Puedes recibir el producto y solicitar una devolución para evaluar un reembolso.`;
        }
      }

      await this.mailService.sendClaimRejected(customer.email, {
        customerName: name,
        claimNumber: claim.claimNumber,
        orderNumber: order.orderNumber,
        reviewNote,
      });
    }
  }

  private async generateClaimNumber(
    tx: Prisma.TransactionClient,
  ): Promise<string> {
    const prefix = 'REC';
    const date = new Date();
    const datePart =
      date.getFullYear().toString() +
      (date.getMonth() + 1).toString().padStart(2, '0') +
      date.getDate().toString().padStart(2, '0');

    const lastClaim = await tx.orderClaim.findFirst({
      where: { claimNumber: { startsWith: `${prefix}-${datePart}-` } },
      orderBy: { claimNumber: 'desc' },
      select: { claimNumber: true },
    });

    let nextSeq = 1;
    if (lastClaim) {
      const parts = lastClaim.claimNumber.split('-');
      const lastN = parseInt(parts[2], 10);
      if (!isNaN(lastN)) nextSeq = lastN + 1;
    }

    return `${prefix}-${datePart}-${nextSeq.toString().padStart(4, '0')}`;
  }
}

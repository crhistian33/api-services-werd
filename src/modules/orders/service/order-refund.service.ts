import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { MailService } from '../../mail/service/mail.service';
import { CreateRefundDto } from '../dto/create-refund.dto';
import { Prisma, OrderStatus } from 'generated/prisma/client';

type OrderRefundContext = Prisma.OrderGetPayload<{
  include: {
    items: true;
    refunds: { include: { items: true } };
    customer: true;
  };
}>;

@Injectable()
export class OrderRefundService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
  ) {}

  /**
   * Crea un reembolso vinculado a una orden.
   * Sigue un flujo de auditoría de dos pasos (Created vs Processed).
   */
  async createRefund(orderId: string, dto: CreateRefundDto, adminId: string) {
    return await this.prisma.$transaction(async (tx) => {
      // 1. Obtener la orden con el contexto de ítems y reembolsos previos
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

      // 2. Validar y preparar los ítems del reembolso con sus montos
      const refundItemsData = dto.items.map((dtoItem) => {
        const orderItem = order.items.find(
          (oi) => oi.id === dtoItem.orderItemId,
        );

        if (!orderItem) {
          throw new BadRequestException(
            `El ítem ${dtoItem.orderItemId} no pertenece a esta orden`,
          );
        }

        // Calcular cuánto se ha reembolsado ya de este ítem específico
        const alreadyRefunded = order.refunds
          .flatMap((r) => r.items)
          .filter((ri) => ri.orderItemId === dtoItem.orderItemId)
          .reduce((sum, item) => sum + item.quantity, 0);

        if (alreadyRefunded + dtoItem.quantity > orderItem.quantity) {
          throw new BadRequestException(
            `Cantidad excedida. Ya se reembolsaron ${alreadyRefunded} de ${orderItem.quantity} unidades.`,
          );
        }

        // Importante: El amount se calcula con el precio histórico guardado en el OrderItem
        const unitPrice = Number(orderItem.unitPrice);
        const refundAmount = unitPrice * dtoItem.quantity;

        totalRefundAmount += refundAmount;

        return {
          orderItemId: dtoItem.orderItemId,
          quantity: dtoItem.quantity,
          amount: refundAmount, // Campo obligatorio en RefundItem
        };
      });

      // 3. Crear el registro de Refund con doble auditoría
      // Se registra quién lo crea (adminId) y se marca como procesado por el mismo
      const refund = await tx.refund.create({
        data: {
          orderId,
          reason: dto.reason || 'Reembolso procesado desde administración',
          createdById: adminId, // Auditoría: Quién inició/aprobó
          processedById: adminId, // Auditoría: Quién ejecutó el pago
          amount: totalRefundAmount,
          items: {
            createMany: { data: refundItemsData },
          },
        },
        include: {
          items: true,
        },
      });

      // 4. Actualizar el estado de la orden si el reembolso es total
      const isTotal = this.checkIfTotalRefund(order, dto);
      if (isTotal) {
        await tx.order.update({
          where: { id: orderId },
          data: {
            status: OrderStatus.refunded as OrderStatus,
          },
        });
      }

      // 5. Notificación al cliente (Soporta Guest y Customer)
      await this.notifyClient(order, refund, refundItemsData);

      return refund;
    });
  }

  /**
   * Calcula si la suma de reembolsos completa la totalidad de la orden
   */
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

  /**
   * Envía el correo de confirmación de reembolso
   */
  private async notifyClient(
    order: OrderRefundContext,
    refund: { id: string },
    items: { amount: number }[],
  ) {
    const recipientEmail = order.customer?.email || order.guestEmail;
    const recipientName =
      order.customer?.firstName || order.guestName || 'Cliente';

    if (!recipientEmail) return;

    const totalAmount = items.reduce((sum, i) => sum + i.amount, 0);
    const referenceCode = refund.id.substring(0, 8).toUpperCase();

    try {
      await this.mailService.sendClaimCompleted(recipientEmail, {
        customerName: recipientName,
        claimNumber: referenceCode,
        type: 'REFUND',
        completedAt: new Date(),
        totalRefundedAmount: totalAmount,
      });
    } catch (error) {
      // Loggear error de correo pero no revertir la transacción de BD
      console.error('Error enviando correo de reembolso:', error);
    }
  }

  /**
   * Obtener historial de reembolsos de una orden
   */
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
}

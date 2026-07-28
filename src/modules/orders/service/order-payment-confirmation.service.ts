import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { MailService } from '../../mail/service/mail.service';
import { ConfirmManualPaymentDto } from '../dto/confirm-payment.dto';
import { PaymentMethodType } from 'generated/prisma/client';
import { CartService } from '../../cart/service/cart.service';

// Tipos de pago que requieren confirmación manual por el admin.
// 'card' se procesa automáticamente por la pasarela (Culqi, etc.)
// 'cash_on_delivery' se confirma al marcar la entrega
const MANUAL_PAYMENT_TYPES: PaymentMethodType[] = [
  PaymentMethodType.wallet, // YAPE, PLIN
  PaymentMethodType.cash_code, // Código de pago
  PaymentMethodType.bank_transfer, // Transferencia bancaria
  PaymentMethodType.cash_on_delivery, // Pago en efectivo al recibir
];

@Injectable()
export class OrderPaymentConfirmationService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
    private readonly cartService: CartService,
  ) {}

  // ═══════════════════════════════════════════════════════════
  // confirmPayment
  //
  // Valida que el pedido esté en pending_payment y que el método
  // de pago requiera confirmación manual. Actualiza la orden a
  // "paid" registrando el número de operación en la transacción.
  // ═══════════════════════════════════════════════════════════

  async confirmPayment(
    orderId: string,
    dto: ConfirmManualPaymentDto,
    adminId: string,
  ): Promise<{ success: boolean; orderId: string; newStatus: string }> {
    // 1. Obtener orden completa antes de la transacción (solo lectura)
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
      include: {
        paymentMethod: { select: { id: true, name: true, type: true } },
        customer: { select: { firstName: true, email: true } },
      },
    });

    if (!order) throw new NotFoundException('Pedido no encontrado');

    // 2. Validaciones de negocio pre-transacción
    if (order.status !== 'pending_payment') {
      throw new BadRequestException(
        `El pedido no está en espera de pago. Estado actual: "${order.status}"`,
      );
    }

    if (!MANUAL_PAYMENT_TYPES.includes(order.paymentMethod.type)) {
      throw new BadRequestException(
        `El método de pago "${order.paymentMethod.name}" no requiere confirmación manual. ` +
          `Los pagos con tarjeta se procesan automáticamente vía pasarela.`,
      );
    }

    // 3. Transacción de BD — actualizar orden + transacción de pago + historial
    await this.prisma.$transaction(async (tx) => {
      // Actualizar orden a paid
      await tx.order.update({
        where: { id: orderId },
        data: {
          status: 'paid',
          paidAt: new Date(),
          paymentConfirmedById: adminId,
          paymentConfirmedAt: new Date(),
          ...(dto.adminNotes && {
            adminNotes: `[Pago confirmado] ${dto.adminNotes}`,
          }),
        },
      });

      const linkedCart = await this.cartService.findByOrderId(orderId, tx);
      if (linkedCart) await this.cartService.markCompleted(linkedCart.id, tx);

      // Actualizar transacción de pago existente o crear una nueva
      const existingTransaction = await tx.orderPaymentTransaction.findFirst({
        where: { orderId },
        orderBy: { createdAt: 'desc' },
      });

      if (existingTransaction) {
        await tx.orderPaymentTransaction.update({
          where: { id: existingTransaction.id },
          data: {
            status: 'completed',
            paidAt: new Date(),
            operationNumber: dto.operationNumber,
            paidAmount: dto.paidAmount,
            confirmedById: adminId,
          },
        });
      } else {
        // Caso raro: no había transacción previa (pedidos migrados, etc.)
        await tx.orderPaymentTransaction.create({
          data: {
            orderId,
            paymentMethodId: order.paymentMethodId,
            status: 'completed',
            amount: order.total,
            paidAt: new Date(),
            operationNumber: dto.operationNumber,
            paidAmount: dto.paidAmount,
            confirmedById: adminId,
          },
        });
      }

      // Registrar en historial de estados
      await tx.orderStatusHistory.create({
        data: {
          orderId,
          fromStatus: 'pending_payment',
          toStatus: 'paid',
          changedById: adminId,
          comment:
            `Pago confirmado manualmente. ` +
            `Método: ${order.paymentMethod.name}. ` +
            `Nro. operación: ${dto.operationNumber}. ` +
            `Monto recibido: S/ ${dto.paidAmount.toFixed(2)}.`,
        },
      });
    });

    // 4. Email al cliente (fuera de la transacción — no debe revertirla)
    const recipientEmail = order.customer?.email ?? order.guestEmail;
    const recipientName =
      order.customer?.firstName ?? order.guestName ?? 'Cliente';

    if (recipientEmail) {
      try {
        await this.mailService.sendOrderPaymentConfirmed(recipientEmail, {
          customerName: recipientName,
          orderNumber: order.orderNumber,
          total: Number(order.total).toFixed(2),
          operationNumber: dto.operationNumber,
          paymentMethod: order.paymentMethod.name,
          confirmedAt: new Date().toLocaleDateString('es-PE', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          }),
        });
      } catch (emailErr) {
        console.error(
          '[OrderPaymentConfirmationService] Error enviando email de confirmación de pago:',
          emailErr,
        );
      }
    }

    return { success: true, orderId, newStatus: 'paid' };
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../../../prisma/prisma.service';
import { MailService } from '../../mail/service/mail.service';
import { ConfigService } from '@nestjs/config';
import { CartService } from '../../cart/service/cart.service';

// Horas antes del vencimiento para enviar el recordatorio
const REMINDER_HOURS_BEFORE_EXPIRY = 6;

@Injectable()
export class OrderPaymentExpiryService {
  private readonly logger = new Logger(OrderPaymentExpiryService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
    private readonly config: ConfigService,
    private readonly cartService: CartService,
  ) {}

  // ═══════════════════════════════════════════════════════════
  // sendPaymentReminders — corre cada 30 minutos
  //
  // Busca pedidos pending_payment cuyo vencimiento está dentro
  // de las próximas REMINDER_HOURS_BEFORE_EXPIRY horas y que
  // aún no tienen recordatorio enviado. Envía el email y marca
  // paymentReminderSentAt para no enviar duplicados.
  // ═══════════════════════════════════════════════════════════

  @Cron(CronExpression.EVERY_30_MINUTES)
  async sendPaymentReminders(): Promise<void> {
    const now = new Date();
    const reminderThreshold = new Date(
      now.getTime() + REMINDER_HOURS_BEFORE_EXPIRY * 60 * 60 * 1000,
    );

    const ordersToRemind = await this.prisma.order.findMany({
      where: {
        status: 'pending_payment',
        paymentReminderSentAt: null, // Aún no se envió recordatorio
        paymentExpiresAt: {
          not: null,
          lte: reminderThreshold, // Vence dentro de N horas
          gt: now, // Pero aún no ha vencido
        },
      },
      include: {
        customer: { select: { firstName: true, email: true } },
        paymentMethod: { select: { name: true, instructions: true } },
      },
    });

    if (ordersToRemind.length === 0) return;
    this.logger.log(
      `[Recordatorio de pago] ${ordersToRemind.length} pedido(s) pendientes`,
    );

    for (const order of ordersToRemind) {
      try {
        const recipientEmail = order.customer?.email ?? order.guestEmail;
        const recipientName =
          order.customer?.firstName ?? order.guestName ?? 'Cliente';

        if (!recipientEmail) continue;

        const horasRestantes = Math.max(
          1,
          Math.ceil(
            (order.paymentExpiresAt!.getTime() - now.getTime()) /
              (1000 * 60 * 60),
          ),
        );

        // Enviar email de recordatorio
        await this.mailService.sendPaymentReminder(recipientEmail, {
          customerName: recipientName,
          orderNumber: order.orderNumber,
          total: Number(order.total).toFixed(2),
          paymentMethod: order.paymentMethod.name,
          horasRestantes,
          paymentExpiresAt: order.paymentExpiresAt!.toLocaleString('es-PE', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          }),
          // Número de WhatsApp global desde .env (SUPPORT_WHATSAPP_NUMBER)
          whatsappNumber: this.config.get<string>('SUPPORT_WHATSAPP_NUMBER'),
        });

        // Marcar recordatorio enviado y registrar en historial
        await this.prisma.$transaction([
          this.prisma.order.update({
            where: { id: order.id },
            data: { paymentReminderSentAt: now },
          }),
          this.prisma.orderPaymentReminder.create({
            data: { orderId: order.id, type: 'FIRST_REMINDER', sentAt: now },
          }),
        ]);

        this.logger.log(
          `Recordatorio enviado → Pedido ${order.orderNumber} | Vence en ${horasRestantes}h`,
        );
      } catch (err) {
        // Error en un pedido no debe detener el procesamiento de los demás
        this.logger.error(
          `Error enviando recordatorio para pedido ${order.orderNumber}:`,
          err,
        );
      }
    }
  }

  // ═══════════════════════════════════════════════════════════
  // cancelExpiredOrders — corre cada 30 minutos
  //
  // Busca pedidos pending_payment cuyo paymentExpiresAt ya pasó.
  // Para cada uno:
  //   - Cancela el pedido (status → cancelled)
  //   - Restaura el stock de los ítems
  //   - Marca la transacción de pago como fallida
  //   - Registra en OrderStatusHistory
  //   - Envía email de cancelación al cliente
  // ═══════════════════════════════════════════════════════════

  @Cron(CronExpression.EVERY_30_MINUTES)
  async cancelExpiredOrders(): Promise<void> {
    const now = new Date();

    const expiredOrders = await this.prisma.order.findMany({
      where: {
        status: 'pending_payment',
        paymentExpiresAt: {
          not: null,
          lt: now, // Ya venció
        },
      },
      include: {
        items: { select: { productId: true, quantity: true } },
        customer: { select: { firstName: true, email: true } },
        paymentMethod: { select: { name: true } },
        // couponId es un campo escalar del modelo Order (no relación), viene automáticamente
      },
    });

    if (expiredOrders.length === 0) return;
    this.logger.log(
      `[Cancelación automática] ${expiredOrders.length} pedido(s) vencido(s)`,
    );

    for (const order of expiredOrders) {
      try {
        await this.prisma.$transaction(async (tx) => {
          // Cancelar el pedido
          await tx.order.update({
            where: { id: order.id },
            data: {
              status: 'cancelled',
              cancelledAt: now,
            },
          });

          // Restaurar stock de todos los ítems
          for (const { productId, quantity } of order.items) {
            await tx.product.update({
              where: { id: productId },
              data: { stock: { increment: quantity } },
            });
          }

          // ✅ Revertir cupón si el pedido tenía uno aplicado
          if (order.couponId) {
            await tx.couponUsage.deleteMany({ where: { orderId: order.id } });
            await tx.coupon.update({
              where: { id: order.couponId },
              data: { timesUsed: { decrement: 1 } },
            });
          }

          // Marcar transacción de pago como fallida
          await tx.orderPaymentTransaction.updateMany({
            where: { orderId: order.id, status: 'pending' },
            data: { status: 'failed' },
          });

          const linkedCart = await this.cartService.findByOrderId(order.id, tx);
          if (linkedCart)
            await this.cartService.abandonCheckout(linkedCart.id, tx);

          // Registrar en historial de estados
          await tx.orderStatusHistory.create({
            data: {
              orderId: order.id,
              fromStatus: 'pending_payment',
              toStatus: 'cancelled',
              // changedById null → cancelación automática del sistema
              comment:
                `Cancelado automáticamente: tiempo de pago expirado. ` +
                `Límite era ${order.paymentExpiresAt!.toLocaleDateString('es-PE')}.`,
            },
          });
        });

        // Email al cliente (fuera de la transacción)
        const recipientEmail = order.customer?.email ?? order.guestEmail;
        const recipientName =
          order.customer?.firstName ?? order.guestName ?? 'Cliente';

        if (recipientEmail) {
          try {
            await this.mailService.sendOrderCancelledNoPayment(recipientEmail, {
              customerName: recipientName,
              orderNumber: order.orderNumber,
              paymentMethod: order.paymentMethod.name,
              total: Number(order.total).toFixed(2),
            });
          } catch (emailErr) {
            this.logger.error(
              `Error enviando email de cancelación para ${order.orderNumber}:`,
              emailErr,
            );
          }
        }

        this.logger.log(
          `Pedido ${order.orderNumber} cancelado por falta de pago. Stock restaurado.`,
        );
      } catch (err) {
        this.logger.error(`Error cancelando pedido ${order.orderNumber}:`, err);
      }
    }
  }
}

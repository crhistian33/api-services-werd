import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as Handlebars from 'handlebars';
import { readFileSync } from 'fs';
import { join } from 'path';
import { SmtpService } from './smtp.service';
import {
  CLAIM_TYPE_LABELS,
  DELIVERY_TYPE_LABELS,
  REFUND_METHOD_LABELS,
} from '../../orders/constants/order-labels.constants';
import { RefundMethod, ClaimType } from 'generated/prisma/client';

// ─────────────────────────────────────────────────────────────
// Contextos de templates
// ─────────────────────────────────────────────────────────────

interface OrderConfirmedContext {
  customerName: string;
  orderNumber: string;
  placedAt: string;
  items: {
    productName: string;
    productSku: string;
    quantity: number;
    lineTotal: string;
  }[];
  total: string;
  trackingUrl: string;
  isCashOnDelivery?: boolean;
  cashOnDeliveryInstructions?: string;
}

interface OrderShippedContext {
  customerName: string;
  orderNumber: string;
  deliveryType: 'COURIER' | 'LOCAL_MOTORIZED';
  trackingNumber?: string;
  courierName?: string;
  estimatedDelivery?: string;
}

interface OrderDeliveredContext {
  customerName: string;
  orderNumber: string;
}

interface ClaimCreatedContext {
  customerName: string;
  claimNumber: string;
  claimTypeLabel: string;
  orderNumber: string;
  description: string;
  items: { productName: string; quantity: number }[];
}

interface ClaimRejectedContext {
  customerName: string;
  claimNumber: string;
  orderNumber: string;
  reviewNote: string;
}

interface OrderPendingPaymentContext {
  customerName: string;
  orderNumber: string;
  total: string;
  paymentMethodName: string;
  paymentInstructions?: string;
  whatsappNumber?: string;
  paymentExpiresAt: string;
}

interface OrderPaymentReminderContext {
  customerName: string;
  orderNumber: string;
  total: string;
  paymentMethod: string;
  horasRestantes: number;
  paymentExpiresAt: string;
  whatsappNumber?: string;
}

interface OrderPaymentConfirmedContext {
  customerName: string;
  orderNumber: string;
  total: string;
  operationNumber: string;
  paymentMethod: string;
  confirmedAt: string;
}

interface OrderCancelledNoPaymentContext {
  customerName: string;
  orderNumber: string;
  paymentMethod: string;
  total: string;
}

interface OrderCancelledByAdminContext {
  customerName: string;
  orderNumber: string;
  cancellationReason: string;
  refundPending?: boolean;
  supportWhatsapp?: string | null;
  supportEmail?: string | null;
  canReorder?: boolean;
  storeUrl?: string;
}

interface OrderProcessingContext {
  customerName: string;
  orderNumber: string;
  estimatedDays?: string;
}

interface OrderNewAdminContext {
  orderNumber: string;
  total: string;
  customerName: string;
  paymentMethod: string;
  items: { productName: string; quantity: number; lineTotal: string }[];
}

interface OrderRefundedContext {
  customerName: string;
  orderNumber: string;
  refundAmount: number;
  refundMethod: string;
  refundDate: string;
  evidenceImageUrl?: string;
}

interface ClaimShippedAdminContext {
  claimNumber: string;
  orderNumber: string;
  customerName: string;
  claimType: string;
  courierName: string;
  trackingNumber: string;
  items: string;
  shippingCost?: number;
}

interface ClaimShipmentConfirmedContext {
  customerName: string;
  claimNumber: string;
  claimType: string;
  orderNumber: string;
  trackingNumber: string;
  courierName: string;
}

@Injectable()
export class MailService {
  readonly logger = new Logger(MailService.name);
  private templates: Map<string, HandlebarsTemplateDelegate> = new Map();

  constructor(
    private readonly config: ConfigService,
    private readonly smtp: SmtpService,
  ) {}

  private get storeFrontendUrl(): string {
    return this.config.get<string>(
      'STORE_FRONTEND_URL',
      'https://tienda.werd.com',
    );
  }

  private get storeReturnAddress(): string {
    return this.config.get<string>(
      'STORE_RETURN_ADDRESS',
      'Consultar con soporte',
    );
  }

  private get fromEmail(): string {
    return this.config.get<string>('MAIL_FROM', 'noreply@werd.com');
  }

  private get fromName(): string {
    return this.config.get<string>('MAIL_FROM_NAME', 'Werd');
  }

  /**
   * Renderiza un template Handlebars con el contexto dado.
   * Los templates se cachean en memoria después de la primera lectura.
   */
  private renderTemplate(templateName: string, context: object): string {
    let template = this.templates.get(templateName);
    if (!template) {
      const templatePath = join(
        __dirname,
        '..',
        'templates',
        `${templateName}.hbs`,
      );
      const source = readFileSync(templatePath, 'utf-8');
      template = Handlebars.compile(source);
      this.templates.set(templateName, template);
    }
    return template(context);
  }

  /**
   * Envía un correo transaccional vía SMTP (nodemailer).
   * Fire-and-forget: el error se loggea pero NO se relanza,
   * para que nunca bloquee la respuesta HTTP.
   */
  private async send(
    to: string,
    subject: string,
    templateName: string,
    context: object,
  ): Promise<void> {
    try {
      const htmlContent = this.renderTemplate(templateName, context);

      await this.smtp.sendMail({
        to,
        subject,
        html: htmlContent,
        from: this.fromEmail,
        fromName: this.fromName,
      });
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : 'Error desconocido';
      this.logger.error(
        `[MailService] Error enviando "${subject}" a ${to}: ${errorMessage}`,
      );
    }
  }

  // ═══════════════════════════════════════════════════════════
  // AUTENTICACIÓN
  // ═══════════════════════════════════════════════════════════

  async sendVerificationEmail(
    email: string,
    code: string,
    isGuest: boolean = false,
  ): Promise<void> {
    const subject = isGuest
      ? 'Código de verificación para tu pedido - Werd'
      : 'Verifica tu cuenta - Werd';

    await this.send(email, subject, 'verification', { code, isGuest });
  }

  async sendPasswordResetEmail(email: string, code: string): Promise<void> {
    await this.send(
      email,
      'Recuperación de contraseña - Werd',
      'reset-password',
      { code },
    );
  }

  // ═══════════════════════════════════════════════════════════
  // CICLO DE VIDA DEL PEDIDO
  // ═══════════════════════════════════════════════════════════

  async sendOrderConfirmed(
    email: string,
    ctx: OrderConfirmedContext,
  ): Promise<void> {
    await this.send(
      email,
      `Pedido confirmado ${ctx.orderNumber} - Werd`,
      'order-confirmed',
      ctx,
    );
  }

  async sendOrderShipped(
    email: string,
    ctx: OrderShippedContext,
  ): Promise<void> {
    const deliveryInstructions: Record<string, string> = {
      COURIER:
        'Tu pedido ha sido despachado por una agencia de courier. Puedes hacer seguimiento con el número de tracking.',
      LOCAL_MOTORIZED:
        'Tu pedido será entregado por un motorizado local. Te contactaremos cuando esté cerca de tu domicilio.',
    };

    await this.send(
      email,
      `Tu pedido ${ctx.orderNumber} está en camino - Werd`,
      'order-shipped',
      {
        ...ctx,
        deliveryTypeLabel:
          DELIVERY_TYPE_LABELS[ctx.deliveryType] || ctx.deliveryType,
        deliveryInstructions: deliveryInstructions[ctx.deliveryType] || '',
      },
    );
  }

  async sendOrderDelivered(
    email: string,
    ctx: OrderDeliveredContext,
  ): Promise<void> {
    await this.send(
      email,
      `Pedido ${ctx.orderNumber} entregado - Werd`,
      'order-delivered',
      {
        ...ctx,
        reviewUrl: `${this.storeFrontendUrl}/mis-pedidos`,
      },
    );
  }

  async sendOrderPendingPayment(
    email: string,
    ctx: OrderPendingPaymentContext,
  ): Promise<void> {
    await this.send(
      email,
      `Pedido ${ctx.orderNumber} - Completa tu pago - Werd`,
      'order-pending-payment',
      ctx,
    );
  }

  async sendPaymentReminder(
    email: string,
    ctx: OrderPaymentReminderContext,
  ): Promise<void> {
    await this.send(
      email,
      `⚠ Tu pedido ${ctx.orderNumber} está por vencer - Werd`,
      'order-payment-reminder',
      ctx,
    );
  }

  async sendOrderPaymentConfirmed(
    email: string,
    ctx: OrderPaymentConfirmedContext,
  ): Promise<void> {
    await this.send(
      email,
      `Pago de pedido ${ctx.orderNumber} confirmado - Werd`,
      'order-payment-confirmed',
      ctx,
    );
  }

  async sendOrderCancelledNoPayment(
    email: string,
    ctx: OrderCancelledNoPaymentContext,
  ): Promise<void> {
    await this.send(
      email,
      `Pedido ${ctx.orderNumber} cancelado por falta de pago - Werd`,
      'order-cancelled-no-payment',
      ctx,
    );
  }

  async sendOrderCancelledByAdmin(
    email: string,
    ctx: OrderCancelledByAdminContext,
  ): Promise<void> {
    await this.send(
      email,
      `Tu pedido ${ctx.orderNumber} ha sido cancelado - Werd`,
      'order-cancelled-admin',
      {
        ...ctx,
        canReorder: true,
        storeUrl: this.storeFrontendUrl,
      },
    );
  }

  async sendOrderProcessing(
    email: string,
    ctx: OrderProcessingContext,
  ): Promise<void> {
    await this.send(
      email,
      `Pedido ${ctx.orderNumber} en preparación - Werd`,
      'order-processing',
      ctx,
    );
  }

  async sendOrderNewAdmin(
    emails: string[],
    ctx: OrderNewAdminContext,
  ): Promise<void> {
    for (const email of emails) {
      await this.send(
        email,
        `🛒 Nuevo pedido ${ctx.orderNumber} - ${ctx.total} - Werd`,
        'order-new-admin',
        ctx,
      );
    }
  }

  // ═══════════════════════════════════════════════════════════
  // RECLAMACIONES (OrderClaim)
  // ═══════════════════════════════════════════════════════════

  async sendClaimCreated(
    email: string,
    ctx: ClaimCreatedContext,
  ): Promise<void> {
    await this.send(
      email,
      `Solicitud ${ctx.claimNumber} recibida - Werd`,
      'claim-created',
      ctx,
    );
  }

  async sendClaimApproved(
    email: string,
    claim: {
      customerName: string;
      claimNumber: string;
      type: ClaimType;
      orderNumber: string;
      reviewNote?: string;
      totalRefundedAmount?: number;
    },
  ): Promise<void> {
    const requiresReturn =
      claim.type === 'REFUND' || claim.type === 'REPLACEMENT';

    await this.send(
      email,
      `Solicitud ${claim.claimNumber} aprobada - Werd`,
      'claim-approved',
      {
        customerName: claim.customerName,
        claimNumber: claim.claimNumber,
        claimType: CLAIM_TYPE_LABELS[claim.type] ?? claim.type,
        orderNumber: claim.orderNumber,
        reviewNote: claim.reviewNote,
        totalRefundedAmount: claim.totalRefundedAmount?.toFixed(2),
        requiresReturn,
        returnAddress: requiresReturn ? this.storeReturnAddress : undefined,
      },
    );
  }

  async sendClaimRejected(
    email: string,
    ctx: ClaimRejectedContext,
  ): Promise<void> {
    await this.send(
      email,
      `Solicitud ${ctx.claimNumber} revisada - Werd`,
      'claim-rejected',
      ctx,
    );
  }

  async sendClaimCompleted(
    email: string,
    claim: {
      customerName: string;
      claimNumber: string;
      type: ClaimType;
      totalRefundedAmount?: number;
      completedAt: Date;
    },
  ): Promise<void> {
    await this.send(
      email,
      `Solicitud ${claim.claimNumber} completada - Werd`,
      'claim-completed',
      {
        customerName: claim.customerName,
        claimNumber: claim.claimNumber,
        claimType: CLAIM_TYPE_LABELS[claim.type] ?? claim.type,
        totalRefundedAmount: claim.totalRefundedAmount?.toFixed(2),
        completedAt: claim.completedAt.toLocaleDateString('es-PE'),
      },
    );
  }

  async sendOrderRefunded(
    email: string,
    ctx: OrderRefundedContext,
  ): Promise<void> {
    const instructions: Record<string, string> = {
      CARD: 'El monto será extornado a tu tarjeta de crédito o débito en los próximos 1-3 días hábiles.',
      WALLET: 'El monto será devuelto a tu billetera digital (Yape/Plin).',
      STORE_CREDIT: 'El crédito ya está disponible en tu cuenta de la tienda.',
      BANK_TRANSFER:
        'Recibirás el monto en tu cuenta bancaria en los próximos 1-3 días hábiles.',
      CASH: 'Se coordinará la entrega en efectivo o contra-entrega.',
    };

    await this.send(
      email,
      `Reembolso procesado - Pedido ${ctx.orderNumber} - Werd`,
      'order-refunded',
      {
        ...ctx,
        refundMethodLabel:
          REFUND_METHOD_LABELS[ctx.refundMethod as RefundMethod] ||
          ctx.refundMethod,
        refundInstructions:
          instructions[ctx.refundMethod] ||
          'Te notificaremos cuando el reembolso sea procesado.',
      },
    );
  }

  async sendClaimShippedAdmin(
    emails: string[],
    ctx: ClaimShippedAdminContext,
  ): Promise<void> {
    for (const email of emails) {
      await this.send(
        email,
        `📦 Cliente envió ${ctx.claimType} — ${ctx.claimNumber} — Werd`,
        'claim-shipped-admin',
        ctx,
      );
    }
  }

  async sendClaimShipmentConfirmed(
    email: string,
    ctx: ClaimShipmentConfirmedContext,
  ): Promise<void> {
    await this.send(
      email,
      `Envío de retorno registrado — ${ctx.claimNumber} — Werd`,
      'claim-shipment-confirmed',
      ctx,
    );
  }
}

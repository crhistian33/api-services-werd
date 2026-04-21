import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

// ─────────────────────────────────────────────────────────────
// Tipos de contexto para cada template
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

interface ClaimApprovedContext {
  customerName: string;
  claimNumber: string;
  claimType: string;
  orderNumber: string;
  reviewNote?: string;
  totalRefundedAmount?: string;
  requiresReturn: boolean;
  returnAddress?: string;
}

interface ClaimRejectedContext {
  customerName: string;
  claimNumber: string;
  orderNumber: string;
  reviewNote: string;
}

interface ClaimCompletedContext {
  customerName: string;
  claimNumber: string;
  claimType: string;
  totalRefundedAmount?: string;
  completedAt: string;
}

// ─────────────────────────────────────────────────────────────
// Labels para templates
// ─────────────────────────────────────────────────────────────

const CLAIM_TYPE_LABELS: Record<string, string> = {
  CANCELLATION: 'cancelación',
  REFUND: 'devolución',
  EXCHANGE: 'reemplazo',
};

// Dirección de retorno de la tienda (cargar desde ConfigService en producción)
const STORE_RETURN_ADDRESS = 'Jr. Comercio 123, Lima, Lima 15001';
const STORE_TRACKING_BASE = 'https://tienda.werd.com/mis-pedidos';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  // ── Helper central ────────────────────────────────────────────
  private async send(
    to: string,
    subject: string,
    template: string,
    context: object,
  ): Promise<void> {
    try {
      await this.mailerService.sendMail({ to, subject, template, context });
    } catch (error) {
      console.error(
        `[MailService] Error enviando "${subject}" a ${to}:`,
        error,
      );
      // No lanzamos excepción — el correo es auxiliar, no debe frenar el flujo principal
    }
  }

  // ═══════════════════════════════════════════════════════════
  // AUTENTICACIÓN (ya existentes)
  // ═══════════════════════════════════════════════════════════

  async sendVerificationEmail(email: string, code: string): Promise<void> {
    await this.send(email, 'Verifica tu cuenta - Werd', './verification', {
      code,
    });
  }

  async sendPasswordResetEmail(email: string, code: string): Promise<void> {
    await this.send(
      email,
      'Recuperación de contraseña - Werd',
      './reset-password',
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
      './order-confirmed',
      ctx,
    );
  }

  async sendOrderShipped(
    email: string,
    ctx: OrderShippedContext,
  ): Promise<void> {
    await this.send(
      email,
      `Tu pedido ${ctx.orderNumber} está en camino - Werd`,
      './order-shipped',
      ctx,
    );
  }

  async sendOrderDelivered(
    email: string,
    ctx: OrderDeliveredContext,
  ): Promise<void> {
    await this.send(
      email,
      `Pedido ${ctx.orderNumber} entregado - Werd`,
      './order-delivered',
      {
        ...ctx,
        reviewUrl: `${STORE_TRACKING_BASE}`,
      },
    );
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
      './claim-created',
      ctx,
    );
  }

  async sendClaimApproved(
    email: string,
    claim: {
      customerName: string;
      claimNumber: string;
      type: string;
      orderNumber: string;
      reviewNote?: string;
      totalRefundedAmount?: number;
    },
  ): Promise<void> {
    const requiresReturn = claim.type === 'REFUND' || claim.type === 'EXCHANGE';
    const ctx: ClaimApprovedContext = {
      customerName: claim.customerName,
      claimNumber: claim.claimNumber,
      claimType: CLAIM_TYPE_LABELS[claim.type] ?? claim.type,
      orderNumber: claim.orderNumber,
      reviewNote: claim.reviewNote,
      totalRefundedAmount: claim.totalRefundedAmount?.toFixed(2),
      requiresReturn,
      returnAddress: requiresReturn ? STORE_RETURN_ADDRESS : undefined,
    };

    await this.send(
      email,
      `Solicitud ${claim.claimNumber} aprobada - Werd`,
      './claim-approved',
      ctx,
    );
  }

  async sendClaimRejected(
    email: string,
    ctx: ClaimRejectedContext,
  ): Promise<void> {
    await this.send(
      email,
      `Solicitud ${ctx.claimNumber} revisada - Werd`,
      './claim-rejected',
      ctx,
    );
  }

  async sendClaimCompleted(
    email: string,
    claim: {
      customerName: string;
      claimNumber: string;
      type: string;
      totalRefundedAmount?: number;
      completedAt: Date;
    },
  ): Promise<void> {
    const ctx: ClaimCompletedContext = {
      customerName: claim.customerName,
      claimNumber: claim.claimNumber,
      claimType: CLAIM_TYPE_LABELS[claim.type] ?? claim.type,
      totalRefundedAmount: claim.totalRefundedAmount?.toFixed(2),
      completedAt: claim.completedAt.toLocaleDateString('es-PE'),
    };

    await this.send(
      email,
      `Solicitud ${claim.claimNumber} completada - Werd`,
      './claim-completed',
      ctx,
    );
  }
}

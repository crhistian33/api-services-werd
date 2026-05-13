"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const order_labels_constants_1 = require("../../orders/constants/order-labels.constants");
let MailService = class MailService {
    mailerService;
    config;
    constructor(mailerService, config) {
        this.mailerService = mailerService;
        this.config = config;
    }
    get storeFrontendUrl() {
        return this.config.get('STORE_FRONTEND_URL', 'https://tienda.werd.com');
    }
    get storeReturnAddress() {
        return this.config.get('STORE_RETURN_ADDRESS', 'Consultar con soporte');
    }
    async send(to, subject, template, context) {
        try {
            await this.mailerService.sendMail({ to, subject, template, context });
        }
        catch (err) {
            console.error(`[MailService] Error enviando "${subject}" a ${to}:`, err);
        }
    }
    async sendVerificationEmail(email, code) {
        await this.send(email, 'Verifica tu cuenta - Werd', './verification', {
            code,
        });
    }
    async sendPasswordResetEmail(email, code) {
        await this.send(email, 'Recuperación de contraseña - Werd', './reset-password', { code });
    }
    async sendOrderConfirmed(email, ctx) {
        await this.send(email, `Pedido confirmado ${ctx.orderNumber} - Werd`, './order-confirmed', ctx);
    }
    async sendOrderShipped(email, ctx) {
        const deliveryInstructions = {
            COURIER: 'Tu pedido ha sido despachado por una agencia de courier. Puedes hacer seguimiento con el número de tracking.',
            LOCAL_MOTORIZED: 'Tu pedido será entregado por un motorizado local. Te contactaremos cuando esté cerca de tu domicilio.',
        };
        await this.send(email, `Tu pedido ${ctx.orderNumber} está en camino - Werd`, './order-shipped', {
            ...ctx,
            deliveryTypeLabel: order_labels_constants_1.DELIVERY_TYPE_LABELS[ctx.deliveryType] || ctx.deliveryType,
            deliveryInstructions: deliveryInstructions[ctx.deliveryType] || '',
        });
    }
    async sendOrderDelivered(email, ctx) {
        await this.send(email, `Pedido ${ctx.orderNumber} entregado - Werd`, './order-delivered', {
            ...ctx,
            reviewUrl: `${this.storeFrontendUrl}/mis-pedidos`,
        });
    }
    async sendOrderPendingPayment(email, ctx) {
        await this.send(email, `Pedido ${ctx.orderNumber} - Completa tu pago - Werd`, './order-pending-payment', ctx);
    }
    async sendPaymentReminder(email, ctx) {
        await this.send(email, `⚠ Tu pedido ${ctx.orderNumber} está por vencer - Werd`, './order-payment-reminder', ctx);
    }
    async sendOrderPaymentConfirmed(email, ctx) {
        await this.send(email, `Pago de pedido ${ctx.orderNumber} confirmado - Werd`, './order-payment-confirmed', ctx);
    }
    async sendOrderCancelledNoPayment(email, ctx) {
        await this.send(email, `Pedido ${ctx.orderNumber} cancelado por falta de pago - Werd`, './order-cancelled-no-payment', ctx);
    }
    async sendOrderCancelledByAdmin(email, ctx) {
        await this.send(email, `Tu pedido ${ctx.orderNumber} ha sido cancelado - Werd`, './order-cancelled-admin', {
            ...ctx,
            canReorder: true,
            storeUrl: process.env.STORE_FRONTEND_URL || 'https://werd.com',
        });
    }
    async sendOrderProcessing(email, ctx) {
        await this.send(email, `Pedido ${ctx.orderNumber} en preparación - Werd`, './order-processing', ctx);
    }
    async sendOrderNewAdmin(emails, ctx) {
        for (const email of emails) {
            await this.send(email, `🛒 Nuevo pedido ${ctx.orderNumber} - ${ctx.total} - Werd`, './order-new-admin', ctx);
        }
    }
    async sendClaimCreated(email, ctx) {
        await this.send(email, `Solicitud ${ctx.claimNumber} recibida - Werd`, './claim-created', ctx);
    }
    async sendClaimApproved(email, claim) {
        const requiresReturn = claim.type === 'REFUND' || claim.type === 'REPLACEMENT';
        const ctx = {
            customerName: claim.customerName,
            claimNumber: claim.claimNumber,
            claimType: order_labels_constants_1.CLAIM_TYPE_LABELS[claim.type] ?? claim.type,
            orderNumber: claim.orderNumber,
            reviewNote: claim.reviewNote,
            totalRefundedAmount: claim.totalRefundedAmount?.toFixed(2),
            requiresReturn,
            returnAddress: requiresReturn ? this.storeReturnAddress : undefined,
        };
        await this.send(email, `Solicitud ${claim.claimNumber} aprobada - Werd`, './claim-approved', ctx);
    }
    async sendClaimRejected(email, ctx) {
        await this.send(email, `Solicitud ${ctx.claimNumber} revisada - Werd`, './claim-rejected', ctx);
    }
    async sendClaimCompleted(email, claim) {
        const ctx = {
            customerName: claim.customerName,
            claimNumber: claim.claimNumber,
            claimType: order_labels_constants_1.CLAIM_TYPE_LABELS[claim.type] ?? claim.type,
            totalRefundedAmount: claim.totalRefundedAmount?.toFixed(2),
            completedAt: claim.completedAt.toLocaleDateString('es-PE'),
        };
        await this.send(email, `Solicitud ${claim.claimNumber} completada - Werd`, './claim-completed', ctx);
    }
    async sendOrderRefunded(email, ctx) {
        const instructions = {
            CARD: 'El monto será extornado a tu tarjeta de crédito o débito en los próximos 1-3 días hábiles.',
            WALLET: 'El monto será devuelto a tu billetera digital (Yape/Plin).',
            STORE_CREDIT: 'El crédito ya está disponible en tu cuenta de la tienda.',
            BANK_TRANSFER: 'Recibirás el monto en tu cuenta bancaria en los próximos 1-3 días hábiles.',
            CASH: 'Se coordinará la entrega en efectivo o contra-entrega.',
        };
        await this.send(email, `Reembolso procesado - Pedido ${ctx.orderNumber} - Werd`, './order-refunded', {
            ...ctx,
            refundMethodLabel: order_labels_constants_1.REFUND_METHOD_LABELS[ctx.refundMethod] ||
                ctx.refundMethod,
            refundInstructions: instructions[ctx.refundMethod] ||
                'Te notificaremos cuando el reembolso sea procesado.',
        });
    }
    async sendClaimShippedAdmin(emails, ctx) {
        for (const email of emails) {
            await this.send(email, `📦 Cliente envió ${ctx.claimType} — ${ctx.claimNumber} — Werd`, './claim-shipped-admin', ctx);
        }
    }
    async sendClaimShipmentConfirmed(email, ctx) {
        await this.send(email, `Envío de retorno registrado — ${ctx.claimNumber} — Werd`, './claim-shipment-confirmed', ctx);
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService,
        config_1.ConfigService])
], MailService);
//# sourceMappingURL=mail.service.js.map
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
var OrderPaymentExpiryService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderPaymentExpiryService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const prisma_service_1 = require("../../../prisma/prisma.service");
const mail_service_1 = require("../../mail/service/mail.service");
const config_1 = require("@nestjs/config");
const REMINDER_HOURS_BEFORE_EXPIRY = 6;
let OrderPaymentExpiryService = OrderPaymentExpiryService_1 = class OrderPaymentExpiryService {
    prisma;
    mailService;
    config;
    logger = new common_1.Logger(OrderPaymentExpiryService_1.name);
    constructor(prisma, mailService, config) {
        this.prisma = prisma;
        this.mailService = mailService;
        this.config = config;
    }
    async sendPaymentReminders() {
        const now = new Date();
        const reminderThreshold = new Date(now.getTime() + REMINDER_HOURS_BEFORE_EXPIRY * 60 * 60 * 1000);
        const ordersToRemind = await this.prisma.order.findMany({
            where: {
                status: 'pending_payment',
                paymentReminderSentAt: null,
                paymentExpiresAt: {
                    not: null,
                    lte: reminderThreshold,
                    gt: now,
                },
            },
            include: {
                customer: { select: { firstName: true, email: true } },
                paymentMethod: { select: { name: true, instructions: true } },
            },
        });
        if (ordersToRemind.length === 0)
            return;
        this.logger.log(`[Recordatorio de pago] ${ordersToRemind.length} pedido(s) pendientes`);
        for (const order of ordersToRemind) {
            try {
                const recipientEmail = order.customer?.email ?? order.guestEmail;
                const recipientName = order.customer?.firstName ?? order.guestName ?? 'Cliente';
                if (!recipientEmail)
                    continue;
                const horasRestantes = Math.max(1, Math.ceil((order.paymentExpiresAt.getTime() - now.getTime()) /
                    (1000 * 60 * 60)));
                await this.mailService.sendPaymentReminder(recipientEmail, {
                    customerName: recipientName,
                    orderNumber: order.orderNumber,
                    total: Number(order.total).toFixed(2),
                    paymentMethod: order.paymentMethod.name,
                    horasRestantes,
                    paymentExpiresAt: order.paymentExpiresAt.toLocaleString('es-PE', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                    }),
                    whatsappNumber: this.config.get('SUPPORT_WHATSAPP_NUMBER'),
                });
                await this.prisma.$transaction([
                    this.prisma.order.update({
                        where: { id: order.id },
                        data: { paymentReminderSentAt: now },
                    }),
                    this.prisma.orderPaymentReminder.create({
                        data: { orderId: order.id, type: 'FIRST_REMINDER', sentAt: now },
                    }),
                ]);
                this.logger.log(`Recordatorio enviado → Pedido ${order.orderNumber} | Vence en ${horasRestantes}h`);
            }
            catch (err) {
                this.logger.error(`Error enviando recordatorio para pedido ${order.orderNumber}:`, err);
            }
        }
    }
    async cancelExpiredOrders() {
        const now = new Date();
        const expiredOrders = await this.prisma.order.findMany({
            where: {
                status: 'pending_payment',
                paymentExpiresAt: {
                    not: null,
                    lt: now,
                },
            },
            include: {
                items: { select: { productId: true, quantity: true } },
                customer: { select: { firstName: true, email: true } },
                paymentMethod: { select: { name: true } },
            },
        });
        if (expiredOrders.length === 0)
            return;
        this.logger.log(`[Cancelación automática] ${expiredOrders.length} pedido(s) vencido(s)`);
        for (const order of expiredOrders) {
            try {
                await this.prisma.$transaction(async (tx) => {
                    await tx.order.update({
                        where: { id: order.id },
                        data: {
                            status: 'cancelled',
                            cancelledAt: now,
                        },
                    });
                    for (const { productId, quantity } of order.items) {
                        await tx.product.update({
                            where: { id: productId },
                            data: { stock: { increment: quantity } },
                        });
                    }
                    if (order.couponId) {
                        await tx.couponUsage.deleteMany({ where: { orderId: order.id } });
                        await tx.coupon.update({
                            where: { id: order.couponId },
                            data: { timesUsed: { decrement: 1 } },
                        });
                    }
                    await tx.orderPaymentTransaction.updateMany({
                        where: { orderId: order.id, status: 'pending' },
                        data: { status: 'failed' },
                    });
                    await tx.orderStatusHistory.create({
                        data: {
                            orderId: order.id,
                            fromStatus: 'pending_payment',
                            toStatus: 'cancelled',
                            comment: `Cancelado automáticamente: tiempo de pago expirado. ` +
                                `Límite era ${order.paymentExpiresAt.toLocaleDateString('es-PE')}.`,
                        },
                    });
                });
                const recipientEmail = order.customer?.email ?? order.guestEmail;
                const recipientName = order.customer?.firstName ?? order.guestName ?? 'Cliente';
                if (recipientEmail) {
                    try {
                        await this.mailService.sendOrderCancelledNoPayment(recipientEmail, {
                            customerName: recipientName,
                            orderNumber: order.orderNumber,
                            paymentMethod: order.paymentMethod.name,
                            total: Number(order.total).toFixed(2),
                        });
                    }
                    catch (emailErr) {
                        this.logger.error(`Error enviando email de cancelación para ${order.orderNumber}:`, emailErr);
                    }
                }
                this.logger.log(`Pedido ${order.orderNumber} cancelado por falta de pago. Stock restaurado.`);
            }
            catch (err) {
                this.logger.error(`Error cancelando pedido ${order.orderNumber}:`, err);
            }
        }
    }
};
exports.OrderPaymentExpiryService = OrderPaymentExpiryService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_30_MINUTES),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderPaymentExpiryService.prototype, "sendPaymentReminders", null);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_30_MINUTES),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderPaymentExpiryService.prototype, "cancelExpiredOrders", null);
exports.OrderPaymentExpiryService = OrderPaymentExpiryService = OrderPaymentExpiryService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mail_service_1.MailService,
        config_1.ConfigService])
], OrderPaymentExpiryService);
//# sourceMappingURL=order-payment-expiry.service.js.map
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
exports.OrderPaymentConfirmationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const mail_service_1 = require("../../mail/service/mail.service");
const client_1 = require("../../../../generated/prisma/client");
const MANUAL_PAYMENT_TYPES = [
    client_1.PaymentMethodType.wallet,
    client_1.PaymentMethodType.cash_code,
];
let OrderPaymentConfirmationService = class OrderPaymentConfirmationService {
    prisma;
    mailService;
    constructor(prisma, mailService) {
        this.prisma = prisma;
        this.mailService = mailService;
    }
    async confirmPayment(orderId, dto, adminId) {
        const order = await this.prisma.order.findUnique({
            where: { id: orderId },
            include: {
                paymentMethod: { select: { id: true, name: true, type: true } },
                customer: { select: { firstName: true, email: true } },
            },
        });
        if (!order)
            throw new common_1.NotFoundException('Pedido no encontrado');
        if (order.status !== 'pending_payment') {
            throw new common_1.BadRequestException(`El pedido no está en espera de pago. Estado actual: "${order.status}"`);
        }
        if (!MANUAL_PAYMENT_TYPES.includes(order.paymentMethod.type)) {
            throw new common_1.BadRequestException(`El método de pago "${order.paymentMethod.name}" no requiere confirmación manual. ` +
                `Los pagos con tarjeta se procesan automáticamente vía pasarela.`);
        }
        await this.prisma.$transaction(async (tx) => {
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
            }
            else {
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
            await tx.orderStatusHistory.create({
                data: {
                    orderId,
                    fromStatus: 'pending_payment',
                    toStatus: 'paid',
                    changedById: adminId,
                    comment: `Pago confirmado manualmente. ` +
                        `Método: ${order.paymentMethod.name}. ` +
                        `Nro. operación: ${dto.operationNumber}. ` +
                        `Monto recibido: S/ ${dto.paidAmount.toFixed(2)}.`,
                },
            });
        });
        const recipientEmail = order.customer?.email ?? order.guestEmail;
        const recipientName = order.customer?.firstName ?? order.guestName ?? 'Cliente';
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
            }
            catch (emailErr) {
                console.error('[OrderPaymentConfirmationService] Error enviando email de confirmación de pago:', emailErr);
            }
        }
        return { success: true, orderId, newStatus: 'paid' };
    }
};
exports.OrderPaymentConfirmationService = OrderPaymentConfirmationService;
exports.OrderPaymentConfirmationService = OrderPaymentConfirmationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mail_service_1.MailService])
], OrderPaymentConfirmationService);
//# sourceMappingURL=order-payment-confirmation.service.js.map
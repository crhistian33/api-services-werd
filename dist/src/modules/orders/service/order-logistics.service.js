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
exports.OrderLogisticsService = void 0;
const common_1 = require("@nestjs/common");
const image_record_service_1 = require("../../../modules/images/services/image-record.service");
const prisma_service_1 = require("../../../prisma/prisma.service");
const mail_service_1 = require("../../mail/service/mail.service");
const client_1 = require("../../../../generated/prisma/client");
const LOGISTICS_ENTITY_TYPE = client_1.ImageEntityType.ORDER_LOGISTICS;
const LOGISTICS_IMAGE_ROLE = 'shipping_evidence';
const DELIVERY_ENTITY_TYPE = client_1.ImageEntityType.ORDER_DELIVERY;
const DELIVERY_IMAGE_ROLE = 'delivery_evidence';
let OrderLogisticsService = class OrderLogisticsService {
    prisma;
    imageRecord;
    mailService;
    constructor(prisma, imageRecord, mailService) {
        this.prisma = prisma;
        this.imageRecord = imageRecord;
        this.mailService = mailService;
    }
    async updateToShipped(orderId, dto, adminId) {
        const order = await this.prisma.order.findUnique({
            where: { id: orderId },
            include: {
                paymentMethod: { select: { type: true, name: true } },
                customer: { select: { firstName: true, email: true } },
            },
        });
        if (!order)
            throw new common_1.BadRequestException('Pedido no encontrado');
        if (order.status !== 'processing') {
            throw new common_1.BadRequestException(`El pedido debe estar en proceso para enviarlo. Estado actual: "${order.status}"`);
        }
        const tempRecords = dto.tempImageIds?.length
            ? await Promise.all(dto.tempImageIds.map((id) => this.imageRecord.findTempRecord(id, LOGISTICS_ENTITY_TYPE, LOGISTICS_IMAGE_ROLE)))
            : [];
        const movedList = [];
        try {
            for (let i = 0; i < tempRecords.length; i++) {
                const moved = await this.imageRecord.moveToFinal(tempRecords[i], LOGISTICS_ENTITY_TYPE, '', LOGISTICS_IMAGE_ROLE, i);
                movedList.push(moved);
            }
        }
        catch (error) {
            await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
            throw error;
        }
        try {
            const logistics = await this.prisma.$transaction(async (tx) => {
                await tx.order.update({
                    where: { id: orderId },
                    data: { status: 'shipped', shippedAt: new Date() },
                });
                const logisticsData = {
                    deliveryType: dto.deliveryType,
                    actualShippingCost: dto.actualShippingCost,
                    internalTransportCost: dto.internalTransportCost,
                    dispatchedBy: adminId ? { connect: { id: adminId } } : undefined,
                    dispatchedAt: new Date(),
                };
                if (dto.deliveryType === 'COURIER') {
                    logisticsData.courierName = dto.courierName;
                    logisticsData.trackingNumber = dto.trackingNumber;
                }
                else {
                    logisticsData.courierName = null;
                    logisticsData.trackingNumber = null;
                }
                const logistics = await tx.orderLogistics.update({
                    where: { orderId },
                    data: logisticsData,
                });
                for (const moved of movedList) {
                    await this.imageRecord.confirmInDb({ ...moved, entityId: logistics.id }, tx);
                }
                await tx.orderStatusHistory.create({
                    data: {
                        orderId,
                        fromStatus: 'processing',
                        toStatus: 'shipped',
                        changedById: adminId,
                        comment: dto.deliveryType === 'COURIER'
                            ? `Enviado vía ${dto.courierName}. Tracking: ${dto.trackingNumber}.`
                            : `Enviado con motorizado local. Costo: S/ ${dto.internalTransportCost ?? 0}.`,
                    },
                });
                return logistics;
            });
            const recipientEmail = order.customer?.email ?? order.guestEmail;
            const recipientName = order.customer?.firstName ?? order.guestName ?? 'Cliente';
            if (recipientEmail) {
                try {
                    await this.mailService.sendOrderShipped(recipientEmail, {
                        customerName: recipientName,
                        orderNumber: order.orderNumber,
                        deliveryType: dto.deliveryType,
                        trackingNumber: dto.trackingNumber,
                        courierName: dto.courierName,
                    });
                }
                catch (emailErr) {
                    console.error('[OrderLogisticsService] Error enviando email de envío:', emailErr);
                }
            }
            return logistics;
        }
        catch (error) {
            await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
            throw error;
        }
    }
    async markAsDelivered(orderId, dto, adminId) {
        const order = await this.prisma.order.findUnique({
            where: { id: orderId },
            include: {
                paymentMethod: { select: { type: true, name: true } },
                customer: { select: { firstName: true, email: true } },
                logistics: { select: { id: true } },
            },
        });
        if (!order)
            throw new common_1.BadRequestException('Pedido no encontrado');
        if (order.status !== 'shipped') {
            throw new common_1.BadRequestException(`El pedido debe estar en "shipped" para marcarlo como entregado. Estado actual: "${order.status}"`);
        }
        if (!order.logistics) {
            throw new common_1.BadRequestException('El pedido no tiene logística registrada. Completa el paso de envío primero.');
        }
        const isCashOnDelivery = order.paymentMethod.type === client_1.PaymentMethodType.cash_on_delivery;
        if (isCashOnDelivery && dto.cashCollectedAmount === undefined) {
            throw new common_1.BadRequestException('Para pedidos con pago contraentrega, debes registrar el monto cobrado al cliente.');
        }
        const tempRecords = dto.tempImageIds?.length
            ? await Promise.all(dto.tempImageIds.map((id) => this.imageRecord.findTempRecord(id, DELIVERY_ENTITY_TYPE, DELIVERY_IMAGE_ROLE)))
            : [];
        const movedList = [];
        try {
            for (let i = 0; i < tempRecords.length; i++) {
                const moved = await this.imageRecord.moveToFinal(tempRecords[i], DELIVERY_ENTITY_TYPE, orderId, DELIVERY_IMAGE_ROLE, i);
                movedList.push(moved);
            }
        }
        catch (error) {
            await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
            throw error;
        }
        const now = new Date();
        try {
            await this.prisma.$transaction(async (tx) => {
                await tx.order.update({
                    where: { id: orderId },
                    data: {
                        status: 'delivered',
                        deliveredAt: now,
                        ...(isCashOnDelivery && { paidAt: now }),
                    },
                });
                await tx.orderLogistics.update({
                    where: { orderId },
                    data: {
                        deliveredAt: now,
                        deliveredById: adminId,
                        deliveryEvidenceNote: dto.deliveryEvidenceNote,
                    },
                });
                for (const moved of movedList) {
                    await this.imageRecord.confirmInDb({ ...moved, entityId: order.logistics.id }, tx);
                }
                if (isCashOnDelivery) {
                    const existingTx = await tx.orderPaymentTransaction.findFirst({
                        where: { orderId },
                    });
                    if (existingTx) {
                        await tx.orderPaymentTransaction.update({
                            where: { id: existingTx.id },
                            data: {
                                status: 'completed',
                                paidAt: now,
                                operationNumber: 'CASH_ON_DELIVERY',
                                paidAmount: dto.cashCollectedAmount,
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
                                paidAt: now,
                                operationNumber: 'CASH_ON_DELIVERY',
                                paidAmount: dto.cashCollectedAmount,
                            },
                        });
                    }
                }
                await tx.orderStatusHistory.create({
                    data: {
                        orderId,
                        fromStatus: 'shipped',
                        toStatus: 'delivered',
                        changedById: adminId,
                        comment: isCashOnDelivery
                            ? `Pedido entregado y cobrado. Monto contraentrega: S/ ${dto.cashCollectedAmount?.toFixed(2)}. ${dto.deliveryEvidenceNote ?? ''}`
                            : `Pedido entregado. ${dto.deliveryEvidenceNote ?? ''}`,
                    },
                });
            });
            const recipientEmail = order.customer?.email ?? order.guestEmail;
            const recipientName = order.customer?.firstName ?? order.guestName ?? 'Cliente';
            if (recipientEmail) {
                try {
                    await this.mailService.sendOrderDelivered(recipientEmail, {
                        customerName: recipientName,
                        orderNumber: order.orderNumber,
                    });
                }
                catch (emailErr) {
                    console.error('[OrderLogisticsService] Error enviando email de entrega:', emailErr);
                }
            }
            return { success: true, orderId, newStatus: 'delivered' };
        }
        catch (error) {
            await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
            throw error;
        }
    }
};
exports.OrderLogisticsService = OrderLogisticsService;
exports.OrderLogisticsService = OrderLogisticsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        image_record_service_1.ImageRecordService,
        mail_service_1.MailService])
], OrderLogisticsService);
//# sourceMappingURL=order-logistics.service.js.map
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
exports.OrderRefundService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const mail_service_1 = require("../../mail/service/mail.service");
const client_1 = require("../../../../generated/prisma/client");
const order_labels_constants_1 = require("../constants/order-labels.constants");
const image_record_service_1 = require("../../images/services/image-record.service");
const REFUND_ENTITY_TYPE = client_1.ImageEntityType.ORDER_REFUND;
const REFUND_IMAGE_ROLE = 'refund_evidence';
let OrderRefundService = class OrderRefundService {
    prisma;
    mailService;
    imageRecord;
    constructor(prisma, mailService, imageRecord) {
        this.prisma = prisma;
        this.mailService = mailService;
        this.imageRecord = imageRecord;
    }
    isClaimReadyForRefund(claim) {
        if (!claim.refundMethod)
            return false;
        switch (claim.type) {
            case client_1.ClaimType.REFUND:
                return claim.status === client_1.ClaimStatus.RECEIVED;
            case client_1.ClaimType.CANCELLATION: {
                if (claim.status !== client_1.ClaimStatus.APPROVED)
                    return false;
                if (!claim.order.paidAt)
                    return false;
                return true;
            }
            case client_1.ClaimType.REPLACEMENT:
                return false;
            default:
                return false;
        }
    }
    async processClaimRefund(claimId, dto, adminId) {
        const claim = await this.prisma.orderClaim.findUnique({
            where: { id: claimId },
            include: {
                customer: { select: { firstName: true, lastName: true, email: true } },
                order: {
                    include: {
                        items: { include: { refundItems: true } },
                        paymentMethod: { select: { type: true } },
                    },
                },
                items: {
                    include: {
                        orderItem: {
                            select: {
                                id: true,
                                unitPrice: true,
                                quantity: true,
                                productName: true,
                            },
                        },
                    },
                },
            },
        });
        if (!claim)
            throw new common_1.NotFoundException('Reclamo no encontrado');
        if (!this.isClaimReadyForRefund(claim)) {
            const expected = claim.type === client_1.ClaimType.REFUND
                ? order_labels_constants_1.CLAIM_STATUS_LABELS[client_1.ClaimStatus.RECEIVED]
                : order_labels_constants_1.CLAIM_STATUS_LABELS[client_1.ClaimStatus.APPROVED];
            throw new common_1.BadRequestException(`El reclamo no está listo para reembolso. ` +
                `Tipo: ${order_labels_constants_1.CLAIM_TYPE_LABELS[claim.type]}, estado actual: "${order_labels_constants_1.CLAIM_STATUS_LABELS[claim.status]}", ` +
                `esperado: "${expected}". ` +
                (claim.refundMethod
                    ? ''
                    : 'Falta el método de reembolso del cliente.'));
        }
        if (claim.type === client_1.ClaimType.REPLACEMENT) {
            throw new common_1.BadRequestException('Los reclamos de tipo REEMPLAZO no generan reembolso.');
        }
        const existingRefund = await this.prisma.refund.findUnique({
            where: { claimId },
        });
        if (existingRefund?.status === client_1.RefundStatus.COMPLETED) {
            throw new common_1.ConflictException(`El reclamo ya tiene un reembolso completado (ID: ${existingRefund.id}).`);
        }
        const refundItemsData = claim.items.map((claimItem) => {
            const unitPrice = Number(claimItem.orderItem.unitPrice);
            const amount = unitPrice * claimItem.quantity;
            return {
                orderItemId: claimItem.orderItemId,
                quantity: claimItem.quantity,
                amount,
            };
        });
        let totalRefundAmount = refundItemsData.reduce((sum, item) => sum + item.amount, 0);
        if (claim.customerVoucherAmount &&
            Number(claim.customerVoucherAmount) > 0 &&
            claim.reasonCategory !== client_1.ClaimReasonCategory.CUSTOMER_DECISION) {
            totalRefundAmount += Number(claim.customerVoucherAmount);
        }
        const safeImageIds = Array.isArray(dto.tempImageIds)
            ? dto.tempImageIds
            : dto.tempImageIds
                ? [dto.tempImageIds]
                : [];
        const tempRecords = safeImageIds.length
            ? await Promise.all(safeImageIds.map((id) => this.imageRecord.findTempRecord(id, REFUND_ENTITY_TYPE, REFUND_IMAGE_ROLE)))
            : [];
        const movedList = [];
        try {
            for (let i = 0; i < tempRecords.length; i++) {
                const moved = await this.imageRecord.moveToFinal(tempRecords[i], REFUND_ENTITY_TYPE, '', REFUND_IMAGE_ROLE, i);
                movedList.push(moved);
            }
        }
        catch (err) {
            await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
            throw err;
        }
        const allRefundedQty = await this.prisma.refundItem.aggregate({
            where: {
                refund: {
                    orderId: claim.orderId,
                    status: client_1.RefundStatus.COMPLETED,
                },
            },
            _sum: { quantity: true },
        });
        const previousRefundedQty = allRefundedQty._sum.quantity ?? 0;
        const currentClaimQty = claim.items.reduce((sum, i) => sum + i.quantity, 0);
        const totalOrderQty = claim.order.items.reduce((sum, i) => sum + i.quantity, 0);
        const isFullRefund = previousRefundedQty + currentClaimQty >= totalOrderQty;
        let refundId;
        try {
            await this.prisma.$transaction(async (tx) => {
                if (existingRefund) {
                    await tx.refund.update({
                        where: { id: existingRefund.id },
                        data: {
                            status: client_1.RefundStatus.COMPLETED,
                            method: dto.refundMethod,
                            gatewayRefundId: dto.gatewayRefundId ?? null,
                            adminNotes: dto.adminNotes ?? null,
                            processedById: adminId,
                        },
                    });
                    refundId = existingRefund.id;
                }
                else {
                    const newRefund = await tx.refund.create({
                        data: {
                            orderId: claim.orderId,
                            claimId,
                            amount: totalRefundAmount,
                            status: client_1.RefundStatus.COMPLETED,
                            method: dto.refundMethod,
                            gatewayRefundId: dto.gatewayRefundId ?? null,
                            adminNotes: dto.adminNotes ?? null,
                            reason: claim.refundAccountDetails ?? null,
                            createdById: adminId,
                            processedById: adminId,
                            items: { createMany: { data: refundItemsData } },
                        },
                    });
                    refundId = newRefund.id;
                }
                if (movedList.length > 0) {
                    for (const moved of movedList) {
                        await this.imageRecord.confirmInDb({ ...moved, entityId: refundId }, tx);
                    }
                }
                await tx.orderClaim.update({
                    where: { id: claimId },
                    data: {
                        status: client_1.ClaimStatus.COMPLETED,
                        completedAt: new Date(),
                    },
                });
                if (isFullRefund) {
                    await tx.order.update({
                        where: { id: claim.orderId },
                        data: {
                            status: client_1.OrderStatus.refunded,
                            refundedAt: new Date(),
                        },
                    });
                }
                const effectiveAmount = existingRefund
                    ? Number(existingRefund.amount)
                    : totalRefundAmount;
                const methodLabel = order_labels_constants_1.REFUND_METHOD_LABELS[dto.refundMethod] ?? dto.refundMethod;
                const typeLabel = claim.type === 'REFUND' ? 'Devolución' : 'Cancelación';
                const refundLabel = isFullRefund
                    ? 'Reembolso total'
                    : 'Reembolso parcial';
                await tx.orderStatusHistory.create({
                    data: {
                        orderId: claim.orderId,
                        fromStatus: claim.order.status,
                        toStatus: isFullRefund ? client_1.OrderStatus.refunded : claim.order.status,
                        changedById: adminId,
                        comment: `[${claim.claimNumber}] ${typeLabel} · ${refundLabel} · ` +
                            `S/ ${effectiveAmount.toFixed(2)} · ${methodLabel}` +
                            (dto.gatewayRefundId ? ` · Extorno: ${dto.gatewayRefundId}` : ''),
                    },
                });
            });
        }
        catch (err) {
            await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
            throw err;
        }
        const recipientEmail = claim.customer?.email;
        const recipientName = claim.customer?.firstName ?? 'Cliente';
        if (recipientEmail) {
            try {
                await this.mailService.sendClaimCompleted(recipientEmail, {
                    customerName: recipientName,
                    claimNumber: claim.claimNumber,
                    type: claim.type,
                    totalRefundedAmount: existingRefund
                        ? Number(existingRefund.amount)
                        : totalRefundAmount,
                    completedAt: new Date(),
                });
            }
            catch (err) {
                console.error('[OrderRefundService] Error enviando email de reembolso de reclamo:', err);
            }
        }
        return { success: true, claimId, refundId: refundId };
    }
    async createRefund(orderId, dto, adminId) {
        return await this.prisma.$transaction(async (tx) => {
            const order = await tx.order.findUnique({
                where: { id: orderId },
                include: {
                    items: true,
                    refunds: { include: { items: true } },
                    customer: true,
                },
            });
            if (!order)
                throw new common_1.NotFoundException('Pedido no encontrado');
            let totalRefundAmount = 0;
            const refundItemsData = dto.items.map((dtoItem) => {
                const orderItem = order.items.find((oi) => oi.id === dtoItem.orderItemId);
                if (!orderItem) {
                    throw new common_1.BadRequestException(`El ítem ${dtoItem.orderItemId} no pertenece a esta orden`);
                }
                const alreadyRefunded = order.refunds
                    .flatMap((r) => r.items)
                    .filter((ri) => ri.orderItemId === dtoItem.orderItemId)
                    .reduce((sum, item) => sum + item.quantity, 0);
                if (alreadyRefunded + dtoItem.quantity > orderItem.quantity) {
                    throw new common_1.BadRequestException(`Cantidad excedida. Ya se reembolsaron ${alreadyRefunded} de ${orderItem.quantity} unidades.`);
                }
                const unitPrice = Number(orderItem.unitPrice);
                const refundAmount = unitPrice * dtoItem.quantity;
                totalRefundAmount += refundAmount;
                return {
                    orderItemId: dtoItem.orderItemId,
                    quantity: dtoItem.quantity,
                    amount: refundAmount,
                };
            });
            const refund = await tx.refund.create({
                data: {
                    orderId,
                    reason: dto.reason || 'Reembolso procesado desde administración',
                    createdById: adminId,
                    status: client_1.RefundStatus.PENDING,
                    amount: totalRefundAmount,
                    items: { createMany: { data: refundItemsData } },
                },
                include: { items: true },
            });
            const isTotal = this.checkIfTotalRefund(order, dto);
            if (isTotal) {
                await tx.order.update({
                    where: { id: orderId },
                    data: { status: client_1.OrderStatus.refunded },
                });
            }
            return refund;
        });
    }
    checkIfTotalRefund(order, dto) {
        const totalOrdered = order.items.reduce((sum, i) => sum + i.quantity, 0);
        const totalRefundedBefore = order.refunds
            .flatMap((r) => r.items)
            .reduce((sum, i) => sum + i.quantity, 0);
        const totalNewRefund = dto.items.reduce((sum, i) => sum + i.quantity, 0);
        return totalRefundedBefore + totalNewRefund >= totalOrdered;
    }
    async getRefundsByOrder(orderId) {
        return this.prisma.refund.findMany({
            where: { orderId },
            include: {
                items: { include: { orderItem: { include: { product: true } } } },
                createdBy: { select: { name: true, email: true } },
                processedBy: { select: { name: true, email: true } },
            },
        });
    }
    async processRefund(refundId, dto, adminId) {
        const refund = await this.prisma.refund.findUnique({
            where: { id: refundId },
            include: {
                order: {
                    include: {
                        customer: true,
                        paymentMethod: true,
                    },
                },
            },
        });
        if (!refund)
            throw new common_1.NotFoundException('Reembolso no encontrado');
        if (refund.status !== client_1.RefundStatus.PENDING) {
            throw new common_1.BadRequestException('Solo se pueden procesar reembolsos pendientes');
        }
        const safeImageIds = Array.isArray(dto.tempImageIds)
            ? dto.tempImageIds
            : dto.tempImageIds
                ? [dto.tempImageIds]
                : [];
        const tempRecords = safeImageIds.length
            ? await Promise.all(safeImageIds.map((id) => this.imageRecord.findTempRecord(id, REFUND_ENTITY_TYPE, REFUND_IMAGE_ROLE)))
            : [];
        const movedList = [];
        try {
            for (let i = 0; i < tempRecords.length; i++) {
                const moved = await this.imageRecord.moveToFinal(tempRecords[i], REFUND_ENTITY_TYPE, '', REFUND_IMAGE_ROLE, i);
                movedList.push(moved);
            }
        }
        catch (err) {
            await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
            throw err;
        }
        let isFullRefund = false;
        let evidenceImageUrl;
        try {
            await this.prisma.$transaction(async (tx) => {
                await tx.refund.update({
                    where: { id: refundId },
                    data: {
                        status: client_1.RefundStatus.COMPLETED,
                        processedById: adminId,
                        method: dto.refundMethod,
                        gatewayRefundId: dto.gatewayRefundId,
                        adminNotes: dto.adminNotes,
                    },
                });
                if (movedList.length > 0) {
                    for (const moved of movedList) {
                        await this.imageRecord.confirmInDb({ ...moved, entityId: refundId }, tx);
                    }
                    const images = await tx.image.findMany({
                        where: {
                            entityType: REFUND_ENTITY_TYPE,
                            entityId: refundId,
                            isConfirmed: true,
                        },
                        select: { url: true, metadata: true },
                    });
                    const urls = images
                        .map((img) => {
                        const meta = img.metadata;
                        const url = meta?.variants?.medium || img.url || '';
                        return `${process.env.APP_URL}${url}`;
                    })
                        .filter(Boolean);
                    evidenceImageUrl = urls[0];
                }
                const orderItems = await tx.orderItem.findMany({
                    where: { orderId: refund.orderId },
                });
                const allRefundItems = await tx.refundItem.findMany({
                    where: { refund: { orderId: refund.orderId } },
                });
                const totalOrdered = orderItems.reduce((sum, i) => sum + i.quantity, 0);
                const totalRefunded = allRefundItems.reduce((sum, i) => sum + i.quantity, 0);
                isFullRefund = totalRefunded >= totalOrdered;
                if (isFullRefund) {
                    await tx.order.update({
                        where: { id: refund.orderId },
                        data: { status: client_1.OrderStatus.refunded, refundedAt: new Date() },
                    });
                }
                await tx.orderStatusHistory.create({
                    data: {
                        orderId: refund.orderId,
                        fromStatus: refund.order.status,
                        toStatus: isFullRefund ? client_1.OrderStatus.refunded : refund.order.status,
                        changedById: adminId,
                        comment: `Reembolso directo procesado. Monto: S/ ${Number(refund.amount).toFixed(2)}. Método: ${order_labels_constants_1.REFUND_METHOD_LABELS[dto.refundMethod] || dto.refundMethod}.`,
                    },
                });
            });
            const order = refund.order;
            const email = order.customer?.email || order.guestEmail;
            const name = order.customer?.firstName || order.guestName || 'Cliente';
            if (email) {
                try {
                    await this.mailService.sendOrderRefunded(email, {
                        customerName: name,
                        orderNumber: order.orderNumber,
                        refundAmount: Number(refund.amount),
                        refundMethod: dto.refundMethod,
                        refundDate: new Date().toLocaleDateString('es-PE'),
                        evidenceImageUrl,
                    });
                }
                catch (err) {
                    console.error('[OrderRefundService] Error enviando email:', err);
                }
            }
            return { success: true, refundId };
        }
        catch (err) {
            await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
            throw err;
        }
    }
};
exports.OrderRefundService = OrderRefundService;
exports.OrderRefundService = OrderRefundService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mail_service_1.MailService,
        image_record_service_1.ImageRecordService])
], OrderRefundService);
//# sourceMappingURL=order-refund.service.js.map
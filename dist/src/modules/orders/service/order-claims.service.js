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
exports.OrderClaimsService = exports.CLAIM_INCLUDE = void 0;
const common_1 = require("@nestjs/common");
const image_record_service_1 = require("../../images/services/image-record.service");
const mail_service_1 = require("../../mail/service/mail.service");
const prisma_service_1 = require("../../../prisma/prisma.service");
const client_1 = require("../../../../generated/prisma/client");
const order_labels_constants_1 = require("../constants/order-labels.constants");
const order_refund_service_1 = require("./order-refund.service");
const ENTITY_TYPE = client_1.ImageEntityType.ORDER_CLAIM;
const IMAGE_ROLE = 'customer_evidence';
const ENTITY_TYPE_RETURN = client_1.ImageEntityType.ORDER_ITEM_RETURN;
const IMAGE_ROLE_RETURN = 'return_evidence';
exports.CLAIM_INCLUDE = {
    customer: { select: { firstName: true, lastName: true, email: true } },
    order: {
        include: {
            items: {
                include: {
                    product: { select: { id: true, name: true, stock: true, sku: true } },
                },
            },
            paymentMethod: { select: { type: true } },
        },
    },
    items: {
        include: {
            orderItem: {
                include: {
                    product: { select: { id: true, name: true, sku: true } },
                },
            },
        },
    },
};
let OrderClaimsService = class OrderClaimsService {
    prisma;
    imageRecord;
    mailService;
    orderRefundService;
    constructor(prisma, imageRecord, mailService, orderRefundService) {
        this.prisma = prisma;
        this.imageRecord = imageRecord;
        this.mailService = mailService;
        this.orderRefundService = orderRefundService;
    }
    async findClaimById(id) {
        const claim = await this.prisma.orderClaim.findUnique({
            where: { id },
            include: exports.CLAIM_INCLUDE,
        });
        if (!claim)
            throw new common_1.NotFoundException('Reclamo no encontrado');
        return claim;
    }
    async findAll(query) {
        const { page = 1, limit = 10, status, type, search } = query;
        const skip = (page - 1) * limit;
        const where = {
            ...(status && { status }),
            ...(type && { type }),
            ...(search && {
                OR: [
                    { claimNumber: { contains: search, mode: 'insensitive' } },
                    {
                        customer: { firstName: { contains: search, mode: 'insensitive' } },
                    },
                    { customer: { lastName: { contains: search, mode: 'insensitive' } } },
                    { customer: { email: { contains: search, mode: 'insensitive' } } },
                    { order: { orderNumber: { contains: search, mode: 'insensitive' } } },
                ],
            }),
        };
        const [total, data] = await Promise.all([
            this.prisma.orderClaim.count({ where }),
            this.prisma.orderClaim.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
                include: {
                    customer: {
                        select: { id: true, firstName: true, lastName: true, email: true },
                    },
                    order: {
                        select: { id: true, orderNumber: true, status: true, total: true },
                    },
                    items: {
                        include: {
                            orderItem: {
                                select: {
                                    productName: true,
                                    productSku: true,
                                    productImageUrl: true,
                                    unitPrice: true,
                                    quantity: true,
                                },
                            },
                        },
                    },
                    reviewedBy: { select: { id: true, name: true } },
                },
            }),
        ]);
        return {
            data,
            meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
        };
    }
    async createClaim(customerId, orderId, dto) {
        const { tempImageIds, items, ...claimData } = dto;
        const tempRecords = tempImageIds?.length
            ? await Promise.all(tempImageIds.map((id) => this.imageRecord.findTempRecord(id, ENTITY_TYPE, IMAGE_ROLE)))
            : [];
        const claim = await this.prisma.$transaction(async (tx) => {
            const order = await tx.order.findFirst({
                where: { id: orderId, customerId },
                include: {
                    items: {
                        include: {
                            claimItems: {
                                where: {
                                    claim: {
                                        status: {
                                            notIn: [client_1.ClaimStatus.CANCELLED, client_1.ClaimStatus.REJECTED],
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            });
            if (!order)
                throw new common_1.NotFoundException('La orden no existe o no pertenece a este cliente');
            this.validateClaimForOrderStatus(order.status, claimData.type);
            const activeClaim = await tx.orderClaim.findFirst({
                where: {
                    orderId,
                    status: {
                        notIn: [
                            client_1.ClaimStatus.CANCELLED,
                            client_1.ClaimStatus.REJECTED,
                            client_1.ClaimStatus.COMPLETED,
                        ],
                    },
                },
                select: { claimNumber: true, status: true },
            });
            if (activeClaim) {
                throw new common_1.ConflictException(`Ya existe un reclamo activo (${activeClaim.claimNumber}, estado: ${order_labels_constants_1.CLAIM_STATUS_LABELS[activeClaim.status]})`);
            }
            for (const dtoItem of items) {
                const orderItem = order.items.find((oi) => oi.id === dtoItem.orderItemId);
                if (!orderItem)
                    throw new common_1.BadRequestException(`El ítem ${dtoItem.orderItemId} no pertenece a esta orden`);
                const alreadyClaimed = orderItem.claimItems.reduce((acc, ci) => acc + ci.quantity, 0);
                const available = orderItem.quantity - alreadyClaimed;
                if (dtoItem.quantity <= 0)
                    throw new common_1.BadRequestException('La cantidad a reclamar debe ser mayor a 0');
                if (dtoItem.quantity > available) {
                    throw new common_1.BadRequestException(`Ítem "${orderItem.productName}": solo ${available} unidades disponibles (compradas: ${orderItem.quantity}, ya procesadas: ${alreadyClaimed})`);
                }
            }
            const claimNumber = await this.generateClaimNumber(tx);
            const created = await tx.orderClaim.create({
                data: {
                    claimNumber,
                    orderId,
                    customerId,
                    type: claimData.type,
                    reasonCategory: claimData.reasonCategory,
                    description: claimData.description,
                    internalNote: claimData.internalNote,
                    status: client_1.ClaimStatus.PENDING,
                    items: {
                        create: items.map((item) => ({
                            orderItemId: item.orderItemId,
                            quantity: item.quantity,
                        })),
                    },
                    ...(dto.refundMethod && {
                        refundMethod: dto.refundMethod,
                        refundAccountDetails: dto.refundAccountDetails ?? null,
                    }),
                },
                include: {
                    items: {
                        include: {
                            orderItem: { select: { productName: true, productSku: true } },
                        },
                    },
                    customer: {
                        select: { firstName: true, lastName: true, email: true },
                    },
                    order: { select: { orderNumber: true } },
                },
            });
            if (tempRecords.length > 0) {
                const movedList = [];
                try {
                    for (let i = 0; i < tempRecords.length; i++) {
                        const moved = await this.imageRecord.moveToFinal(tempRecords[i], ENTITY_TYPE, created.id, IMAGE_ROLE, i);
                        movedList.push(moved);
                    }
                    for (const moved of movedList)
                        await this.imageRecord.confirmInDb(moved, tx);
                }
                catch (err) {
                    await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
                    throw err;
                }
            }
            return created;
        });
        if (claim.customer?.email) {
            try {
                await this.mailService.sendClaimCreated(claim.customer.email, {
                    customerName: `${claim.customer.firstName} ${claim.customer.lastName}`,
                    claimNumber: claim.claimNumber,
                    claimTypeLabel: order_labels_constants_1.CLAIM_TYPE_LABELS[claimData.type] ?? claimData.type,
                    orderNumber: claim.order.orderNumber,
                    description: claimData.description,
                    items: claim.items.map((i) => ({
                        productName: i.orderItem.productName,
                        quantity: i.quantity,
                    })),
                });
            }
            catch (err) {
                console.error('[OrderClaimsService] Error enviando email de reclamo:', err);
            }
        }
        return claim;
    }
    async createClaimAsAdmin(orderId, dto, adminId) {
        const order = await this.prisma.order.findUnique({
            where: { id: orderId },
            select: { customerId: true, status: true },
        });
        if (!order)
            throw new common_1.NotFoundException('Pedido no encontrado');
        if (!order.customerId)
            throw new common_1.BadRequestException('Solo disponible para pedidos de clientes registrados');
        this.validateClaimForOrderStatus(order.status, dto.type);
        if (dto.autoApprove) {
            const claim = await this.createClaim(order.customerId, orderId, dto);
            return this.reviewClaim(claim.id, {
                action: 'APPROVED',
                reviewNote: dto.autoApproveNote ||
                    'Reclamo registrado y aprobado desde el CMS.',
                internalNote: dto.internalNote,
            }, adminId);
        }
        return this.createClaim(order.customerId, orderId, dto);
    }
    async reviewClaim(claimId, dto, adminId) {
        const claim = await this.findClaimById(claimId);
        if (claim.status !== client_1.ClaimStatus.PENDING) {
            throw new common_1.BadRequestException(`Solo se pueden revisar reclamos pendientes. Estado actual: "${order_labels_constants_1.CLAIM_STATUS_LABELS[claim.status]}"`);
        }
        if (dto.action === 'REJECTED' && !dto.reviewNote?.trim()) {
            throw new common_1.BadRequestException('El motivo del rechazo (reviewNote) es obligatorio');
        }
        if (dto.action === 'APPROVED' && claim.type === client_1.ClaimType.CANCELLATION) {
            if (['shipped', 'delivered'].includes(claim.order.status)) {
                throw new common_1.BadRequestException('No se puede cancelar un pedido que ya fue enviado o entregado.');
            }
        }
        const newStatus = dto.action === 'APPROVED' ? client_1.ClaimStatus.APPROVED : client_1.ClaimStatus.REJECTED;
        await this.prisma.$transaction(async (tx) => {
            await tx.orderClaim.update({
                where: { id: claimId },
                data: {
                    status: newStatus,
                    reviewedById: adminId,
                    reviewNote: dto.reviewNote,
                    internalNote: dto.internalNote,
                    reviewedAt: new Date(),
                },
            });
            if (dto.action === 'APPROVED') {
                if (claim.type === client_1.ClaimType.CANCELLATION) {
                    const claimApproved = {
                        ...claim,
                        status: client_1.ClaimStatus.APPROVED,
                    };
                    await this.handleCancellation(tx, claimApproved, adminId);
                }
                else {
                    await this.createHistoryEntry(tx, claim, adminId, 'Aprobado · Pendiente de recibir el producto');
                }
            }
        });
        await this.sendReviewEmail(claim, dto).catch((err) => console.error('[OrderClaimsService] Error enviando email de revisión:', err));
        return { ...claim, status: newStatus };
    }
    async handleCancellation(tx, claim, adminId) {
        for (const item of claim.items) {
            await tx.product.update({
                where: { id: item.orderItem.product.id },
                data: { stock: { increment: item.quantity } },
            });
        }
        const isFull = await this.isFullCancellation(tx, claim);
        if (isFull) {
            await tx.order.update({
                where: { id: claim.order.id },
                data: { status: client_1.OrderStatus.cancelled, cancelledAt: new Date() },
            });
            await this.createHistoryEntry(tx, claim, adminId, 'Cancelación total aprobada');
        }
        else {
            const amount = this.calculateCancelledAmount(claim);
            await this.createHistoryEntry(tx, claim, adminId, `Cancelación parcial · ${claim.items.length} ítem(s) · S/ ${amount.toFixed(2)}`);
        }
        const needsRefund = this.orderRefundService.isClaimReadyForRefund(claim);
        if (needsRefund) {
            await this.createHistoryEntry(tx, claim, adminId, 'Pendiente de reembolso');
        }
        else {
            await tx.orderClaim.update({
                where: { id: claim.id },
                data: { status: client_1.ClaimStatus.COMPLETED, completedAt: new Date() },
            });
        }
    }
    async markClaimReceived(claimId, dto, adminId) {
        const claim = await this.prisma.orderClaim.findUnique({
            where: { id: claimId },
            include: {
                order: { include: { items: true } },
                items: {
                    include: {
                        orderItem: {
                            include: {
                                product: { select: { id: true, name: true, stock: true } },
                            },
                        },
                    },
                },
            },
        });
        if (!claim)
            throw new common_1.NotFoundException('Reclamo no encontrado');
        if (claim.status !== client_1.ClaimStatus.APPROVED)
            throw new common_1.BadRequestException(`Debe estar APROBADO. Actual: "${order_labels_constants_1.CLAIM_STATUS_LABELS[claim.status]}"`);
        if (claim.type === client_1.ClaimType.CANCELLATION)
            throw new common_1.BadRequestException('Los reclamos de cancelación no requieren recepción.');
        if (claim.type === client_1.ClaimType.REFUND && !claim.refundMethod)
            throw new common_1.BadRequestException('Falta el método de reembolso.');
        await this.prisma.$transaction(async (tx) => {
            await tx.orderClaim.update({
                where: { id: claimId },
                data: {
                    status: client_1.ClaimStatus.RECEIVED,
                    receivedAt: new Date(),
                    receivedProductCondition: dto.productCondition,
                    internalDamageNote: dto.internalDamageNote,
                    receivedAdminNote: dto.adminNote,
                },
            });
            if (dto.productCondition === client_1.ReturnedProductCondition.RESELLABLE) {
                for (const item of claim.items) {
                    await tx.product.update({
                        where: { id: item.orderItem.product.id },
                        data: { stock: { increment: item.quantity } },
                    });
                }
            }
            await this.createHistoryEntry(tx, claim, adminId, `Producto recibido · ${order_labels_constants_1.RETURNED_CONDITION_LABELS[dto.productCondition]}`);
        });
        return { success: true, claimId };
    }
    async completeReplacement(claimId, adminId) {
        const claim = await this.prisma.orderClaim.findUnique({
            where: { id: claimId },
            include: {
                customer: { select: { id: true, firstName: true, email: true } },
                order: {
                    include: {
                        shippingAddress: true,
                        shippingRate: { select: { id: true, price: true } },
                        paymentMethod: { select: { id: true } },
                        items: {
                            include: {
                                product: { select: { id: true, stock: true, name: true } },
                            },
                        },
                    },
                },
                items: {
                    include: {
                        orderItem: {
                            select: {
                                productId: true,
                                unitPrice: true,
                                productName: true,
                                productSku: true,
                            },
                        },
                    },
                },
            },
        });
        if (!claim)
            throw new common_1.NotFoundException('Reclamo no encontrado');
        if (claim.type !== client_1.ClaimType.REPLACEMENT)
            throw new common_1.BadRequestException('Solo aplica a REEMPLAZO');
        if (claim.status !== client_1.ClaimStatus.RECEIVED)
            throw new common_1.BadRequestException(`Debe estar RECIBIDO. Actual: "${order_labels_constants_1.CLAIM_STATUS_LABELS[claim.status]}"`);
        if (claim.replacementOrderId)
            throw new common_1.ConflictException(`Ya existe orden de reemplazo (${claim.replacementOrderId})`);
        for (const ci of claim.items) {
            const product = claim.order.items.find((i) => i.productId === ci.orderItem.productId)?.product;
            if (product && product.stock < ci.quantity) {
                throw new common_1.BadRequestException(`Stock insuficiente para "${product.name}". Disponible: ${product.stock}, requerido: ${ci.quantity}.`);
            }
        }
        const result = await this.prisma.$transaction(async (tx) => {
            const orderNumber = `${claim.order.orderNumber}-RPL`;
            const storeCovers = claim.reasonCategory !== client_1.ClaimReasonCategory.CUSTOMER_DECISION;
            const replacementItems = claim.items.map((ci) => ({
                productId: ci.orderItem.productId,
                productName: ci.orderItem.productName,
                productSku: ci.orderItem.productSku,
                quantity: ci.quantity,
                unitPrice: ci.orderItem.unitPrice,
                lineTotal: Number(ci.orderItem.unitPrice) * ci.quantity,
                discountAmount: 0,
            }));
            const subtotal = replacementItems.reduce((s, i) => s + i.lineTotal, 0);
            const shipping = storeCovers
                ? 0
                : Number(claim.order.shippingRate?.price ?? 0);
            const replacement = await tx.order.create({
                data: {
                    orderNumber,
                    customerId: claim.order.customerId ?? undefined,
                    status: storeCovers
                        ? client_1.OrderStatus.processing
                        : client_1.OrderStatus.pending_payment,
                    paidAt: storeCovers ? new Date() : null,
                    subtotal,
                    shippingAmount: shipping,
                    total: storeCovers ? 0 : shipping,
                    paymentMethodId: claim.order.paymentMethod.id,
                    shippingRateId: claim.order.shippingRate?.id ?? undefined,
                    parentOrderId: claim.order.id,
                    adminNotes: `Orden de reemplazo por reclamo ${claim.claimNumber}`,
                    claimAsReplacementId: claimId,
                    items: { createMany: { data: replacementItems } },
                    ...(claim.order.shippingAddress && {
                        shippingAddress: {
                            create: {
                                recipientName: claim.order.shippingAddress.recipientName,
                                phone: claim.order.shippingAddress.phone ?? undefined,
                                departmentId: claim.order.shippingAddress.departmentId,
                                provinceId: claim.order.shippingAddress.provinceId,
                                districtId: claim.order.shippingAddress.districtId,
                                addressLine: claim.order.shippingAddress.addressLine,
                                reference: claim.order.shippingAddress.reference ?? undefined,
                                alias: claim.order.shippingAddress.alias ?? undefined,
                                latitude: claim.order.shippingAddress.latitude ?? undefined,
                                longitude: claim.order.shippingAddress.longitude ?? undefined,
                            },
                        },
                    }),
                },
            });
            await tx.orderLogistics.create({
                data: {
                    orderId: replacement.id,
                    deliveryType: client_1.DeliveryType.COURIER,
                    estimatedShipping: 0,
                },
            });
            for (const ci of claim.items) {
                await tx.product.update({
                    where: { id: ci.orderItem.productId },
                    data: { stock: { decrement: ci.quantity } },
                });
            }
            await tx.orderClaim.update({
                where: { id: claimId },
                data: {
                    status: client_1.ClaimStatus.COMPLETED,
                    completedAt: new Date(),
                    replacementOrderId: replacement.id,
                },
            });
            await tx.orderStatusHistory.create({
                data: {
                    orderId: claim.orderId,
                    fromStatus: claim.order.status,
                    toStatus: claim.order.status,
                    changedById: adminId,
                    comment: `Reemplazo completado. Nueva orden: ${orderNumber}.`,
                },
            });
            await tx.orderStatusHistory.create({
                data: {
                    orderId: replacement.id,
                    fromStatus: null,
                    toStatus: client_1.OrderStatus.processing,
                    changedById: adminId,
                    comment: `Orden de reemplazo creada por reclamo ${claim.claimNumber}.`,
                },
            });
            return { replacementOrderId: replacement.id };
        });
        if (claim.customer?.email) {
            try {
                await this.mailService.sendClaimCompleted(claim.customer.email, {
                    customerName: claim.customer.firstName ?? 'Cliente',
                    claimNumber: claim.claimNumber,
                    type: claim.type,
                    totalRefundedAmount: undefined,
                    completedAt: new Date(),
                });
            }
            catch (err) {
                console.error('[OrderClaimsService] Error enviando email de reemplazo:', err);
            }
        }
        return {
            success: true,
            claimId,
            replacementOrderId: result.replacementOrderId,
        };
    }
    async cancelClaim(claimId, customerId) {
        const claim = await this.prisma.orderClaim.findUnique({
            where: { id: claimId },
            include: { order: { select: { id: true, status: true } } },
        });
        if (!claim)
            throw new common_1.NotFoundException('Reclamo no encontrado');
        if (claim.customerId !== customerId)
            throw new common_1.BadRequestException('No tienes permiso');
        if (claim.status !== client_1.ClaimStatus.PENDING)
            throw new common_1.BadRequestException(`Solo PENDING. Actual: "${order_labels_constants_1.CLAIM_STATUS_LABELS[claim.status]}"`);
        await this.prisma.$transaction(async (tx) => {
            await tx.orderClaim.update({
                where: { id: claimId },
                data: { status: client_1.ClaimStatus.CANCELLED },
            });
            await this.createHistoryEntry(tx, claim, '', `Reclamo ${claim.claimNumber} cancelado por el cliente.`);
        });
        return { success: true, claimId };
    }
    async deleteClaim(claimId) {
        const claim = await this.prisma.orderClaim.findUnique({
            where: { id: claimId },
            select: { id: true, status: true },
        });
        if (!claim)
            throw new common_1.NotFoundException('Reclamo no encontrado');
        const statusList = [
            client_1.ClaimStatus.CANCELLED,
            client_1.ClaimStatus.REJECTED,
        ];
        if (!statusList.includes(claim.status)) {
            throw new common_1.BadRequestException(`Solo CANCELLED o REJECTED. Actual: "${order_labels_constants_1.CLAIM_STATUS_LABELS[claim.status]}"`);
        }
        await this.imageRecord.deleteEntityImages(ENTITY_TYPE, claimId);
        await this.prisma.orderClaim.delete({ where: { id: claimId } });
        return { success: true };
    }
    async confirmClaimShipment(claimId, dto, customerId) {
        const claim = await this.prisma.orderClaim.findFirst({
            where: {
                id: claimId,
                customerId,
                status: client_1.ClaimStatus.APPROVED,
                type: { in: [client_1.ClaimType.REFUND, client_1.ClaimType.REPLACEMENT] },
            },
            include: {
                customer: { select: { firstName: true, lastName: true, email: true } },
                order: { select: { id: true, orderNumber: true, status: true } },
                items: {
                    include: {
                        orderItem: { select: { productName: true, productSku: true } },
                    },
                },
            },
        });
        if (!claim)
            throw new common_1.NotFoundException('Reclamo no encontrado o no está aprobado');
        if (claim.returnShipmentConfirmedAt)
            throw new common_1.ConflictException('Ya confirmaste el envío');
        const tempRecords = dto.tempImageIds?.length
            ? await Promise.all(dto.tempImageIds.map((id) => this.imageRecord.findTempRecord(id, ENTITY_TYPE_RETURN, IMAGE_ROLE_RETURN)))
            : [];
        const movedList = [];
        try {
            for (let i = 0; i < tempRecords.length; i++) {
                movedList.push(await this.imageRecord.moveToFinal(tempRecords[i], ENTITY_TYPE_RETURN, '', IMAGE_ROLE_RETURN, i));
            }
        }
        catch (err) {
            await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
            throw err;
        }
        try {
            await this.prisma.$transaction(async (tx) => {
                await tx.orderClaim.update({
                    where: { id: claimId },
                    data: {
                        returnCourierName: dto.returnCourierName,
                        returnTrackingNumber: dto.returnTrackingNumber,
                        returnShipmentNotes: dto.returnShipmentNotes,
                        returnShipmentConfirmedAt: new Date(),
                        ...(claim.type === client_1.ClaimType.REFUND && {
                            refundMethod: dto.refundMethod,
                            refundAccountDetails: dto.refundAccountDetails,
                        }),
                    },
                });
                for (const moved of movedList)
                    await this.imageRecord.confirmInDb({ ...moved, entityId: claimId }, tx);
                await this.createHistoryEntry(tx, claim, '', `Envío confirmado · ${dto.returnCourierName} · ${dto.returnTrackingNumber}`);
            });
            const adminEmails = await this.getAdminEmails();
            if (adminEmails.length > 0) {
                const name = claim.customer
                    ? `${claim.customer.firstName} ${claim.customer.lastName}`.trim()
                    : 'Cliente';
                await this.mailService
                    .sendClaimShippedAdmin(adminEmails, {
                    claimNumber: claim.claimNumber,
                    orderNumber: claim.order.orderNumber,
                    customerName: name,
                    claimType: order_labels_constants_1.CLAIM_TYPE_LABELS[claim.type] ?? claim.type,
                    courierName: dto.returnCourierName,
                    trackingNumber: dto.returnTrackingNumber,
                    items: claim.items.map((i) => i.orderItem.productName).join(', '),
                    shippingCost: dto.returnShippingCost,
                })
                    .catch(() => { });
            }
            if (claim.customer?.email) {
                await this.mailService
                    .sendClaimShipmentConfirmed(claim.customer.email, {
                    customerName: claim.customer.firstName,
                    claimNumber: claim.claimNumber,
                    claimType: order_labels_constants_1.CLAIM_TYPE_LABELS[claim.type] ?? claim.type,
                    orderNumber: claim.order.orderNumber,
                    trackingNumber: dto.returnTrackingNumber,
                    courierName: dto.returnCourierName,
                })
                    .catch(() => { });
            }
            return { success: true, claimId, status: client_1.ClaimStatus.APPROVED };
        }
        catch (err) {
            await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
            throw err;
        }
    }
    async registerReturnShipment(claimId, dto, adminId) {
        const claim = await this.prisma.orderClaim.findUnique({
            where: { id: claimId },
            include: { order: { select: { id: true, status: true } } },
        });
        if (!claim)
            throw new common_1.NotFoundException('Reclamo no encontrado');
        if (claim.status !== client_1.ClaimStatus.APPROVED)
            throw new common_1.BadRequestException(`Debe estar APROBADO. Actual: "${claim.status}"`);
        if (claim.type !== client_1.ClaimType.REFUND && claim.type !== client_1.ClaimType.REPLACEMENT)
            throw new common_1.BadRequestException('Solo REFUND o REPLACEMENT');
        if (dto.customerVoucherAmount &&
            dto.customerVoucherAmount > 0 &&
            claim.reasonCategory === client_1.ClaimReasonCategory.CUSTOMER_DECISION) {
            throw new common_1.BadRequestException('El voucher no aplica para decisión del cliente');
        }
        const tempRecords = dto.tempImageIds?.length
            ? await Promise.all(dto.tempImageIds.map((id) => this.imageRecord.findTempRecord(id, ENTITY_TYPE_RETURN, IMAGE_ROLE_RETURN)))
            : [];
        const movedList = [];
        try {
            for (let i = 0; i < tempRecords.length; i++) {
                movedList.push(await this.imageRecord.moveToFinal(tempRecords[i], ENTITY_TYPE_RETURN, claimId, IMAGE_ROLE_RETURN, i));
            }
        }
        catch (err) {
            await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
            throw err;
        }
        try {
            return await this.prisma.$transaction(async (tx) => {
                const updated = await tx.orderClaim.update({
                    where: { id: claimId },
                    data: {
                        returnCourierName: dto.courierName,
                        returnTrackingNumber: dto.trackingNumber,
                        returnShipmentNotes: dto.notes,
                        returnShipmentConfirmedAt: new Date(),
                        ...(dto.customerVoucherAmount !== undefined && {
                            customerVoucherAmount: dto.customerVoucherAmount,
                        }),
                        ...(claim.type === client_1.ClaimType.REFUND &&
                            dto.refundMethod && {
                            refundMethod: dto.refundMethod,
                            refundAccountDetails: dto.refundAccountDetails ?? null,
                        }),
                    },
                    include: {
                        customer: {
                            select: { firstName: true, lastName: true, email: true },
                        },
                        order: { select: { orderNumber: true } },
                    },
                });
                for (const moved of movedList)
                    await this.imageRecord.confirmInDb({ ...moved, entityId: claimId }, tx);
                await this.createHistoryEntry(tx, claim, adminId, `Envío registrado · ${dto.courierName} · ${dto.trackingNumber}`);
                return updated;
            });
        }
        catch (err) {
            await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
            throw err;
        }
    }
    async isFullCancellation(tx, claim) {
        const previous = await tx.orderClaim.findMany({
            where: {
                orderId: claim.order.id,
                type: client_1.ClaimType.CANCELLATION,
                status: { in: [client_1.ClaimStatus.APPROVED, client_1.ClaimStatus.COMPLETED] },
                id: { not: claim.id },
            },
            include: { items: { select: { orderItemId: true, quantity: true } } },
        });
        const map = new Map();
        for (const prev of previous) {
            for (const item of prev.items)
                map.set(item.orderItemId, (map.get(item.orderItemId) ?? 0) + item.quantity);
        }
        for (const item of claim.items)
            map.set(item.orderItemId, (map.get(item.orderItemId) ?? 0) + item.quantity);
        return claim.order.items.every((oi) => (map.get(oi.id) ?? 0) >= oi.quantity);
    }
    calculateCancelledAmount(claim) {
        return claim.items.reduce((acc, ci) => {
            const oi = claim.order.items.find((i) => i.id === ci.orderItemId);
            if (!oi)
                return acc;
            const unitNet = Number(oi.unitPrice) -
                Number(oi.discountAmount ?? 0) / Math.max(1, oi.quantity);
            return acc + unitNet * ci.quantity;
        }, 0);
    }
    async createHistoryEntry(tx, claim, adminId, action) {
        const claimRef = `[${claim.claimNumber}]`;
        const existing = await tx.orderStatusHistory.findFirst({
            where: {
                orderId: claim.order.id,
                comment: { startsWith: claimRef },
            },
            orderBy: { createdAt: 'desc' },
        });
        const summary = this.buildTimelineSummary(claim, action);
        if (existing) {
            await tx.orderStatusHistory.update({
                where: { id: existing.id },
                data: {
                    comment: `${claimRef} ${summary}`,
                    changedById: adminId || existing.changedById,
                    createdAt: new Date(),
                },
            });
        }
        else {
            await tx.orderStatusHistory.create({
                data: {
                    orderId: claim.order.id,
                    fromStatus: claim.order.status,
                    toStatus: claim.order.status,
                    changedById: adminId || undefined,
                    comment: `${claimRef} ${summary}`,
                },
            });
        }
    }
    buildTimelineSummary(claim, action) {
        const type = order_labels_constants_1.CLAIM_TYPE_LABELS[claim.type] ?? claim.type;
        const status = order_labels_constants_1.CLAIM_STATUS_LABELS[claim.status] ?? claim.status;
        const itemsCount = claim.items?.length ?? 0;
        const base = itemsCount > 0
            ? `${type} · ${itemsCount} producto(s) · ${status}`
            : `${type} · ${status}`;
        return action ? `${base} · ${action}` : base;
    }
    validateClaimForOrderStatus(orderStatus, type) {
        if (orderStatus === client_1.OrderStatus.shipped)
            throw new common_1.BadRequestException('No se pueden crear reclamos para pedidos en camino.');
        if (type === client_1.ClaimType.CANCELLATION &&
            !['pending_payment', 'paid', 'processing'].includes(orderStatus)) {
            throw new common_1.BadRequestException(`No se puede cancelar. Estado: "${order_labels_constants_1.ORDER_STATUS_LABELS[orderStatus]}".`);
        }
        if ((type === client_1.ClaimType.REFUND || type === client_1.ClaimType.REPLACEMENT) &&
            orderStatus !== client_1.OrderStatus.delivered) {
            throw new common_1.BadRequestException(`Solo disponible para pedidos entregados. Estado: "${order_labels_constants_1.ORDER_STATUS_LABELS[orderStatus]}".`);
        }
    }
    async sendReviewEmail(claim, dto) {
        const customer = claim.customer;
        if (!customer?.email)
            return;
        const name = `${customer.firstName} ${customer.lastName}`;
        if (dto.action === 'APPROVED') {
            await this.mailService.sendClaimApproved(customer.email, {
                customerName: name,
                claimNumber: claim.claimNumber,
                type: claim.type,
                orderNumber: claim.order.orderNumber,
                reviewNote: dto.reviewNote,
            });
        }
        else {
            let note = dto.reviewNote ?? '';
            if (claim.type === client_1.ClaimType.CANCELLATION &&
                ['shipped', 'delivered'].includes(claim.order.status)) {
                note = `No es posible cancelar porque ya fue enviado. ${note} Puedes solicitar una devolución al recibirlo.`;
            }
            await this.mailService.sendClaimRejected(customer.email, {
                customerName: name,
                claimNumber: claim.claimNumber,
                orderNumber: claim.order.orderNumber,
                reviewNote: note,
            });
        }
    }
    async getAdminEmails() {
        const config = await this.prisma.siteConfig.findFirst({
            select: { storeEmail: true, supportEmail: true },
        });
        return [config?.storeEmail, config?.supportEmail].filter((e) => Boolean(e));
    }
    async generateClaimNumber(tx) {
        const date = new Date();
        const datePart = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
        const seq = await tx.$queryRaw `
      INSERT INTO claim_sequence (id, "lastSeq") VALUES ('global', 1)
      ON CONFLICT (id) DO UPDATE SET "lastSeq" = claim_sequence."lastSeq" + 1
      RETURNING "lastSeq" as lastseq
    `;
        return `REC-${datePart}-${String(seq[0].lastseq).padStart(4, '0')}`;
    }
};
exports.OrderClaimsService = OrderClaimsService;
exports.OrderClaimsService = OrderClaimsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        image_record_service_1.ImageRecordService,
        mail_service_1.MailService,
        order_refund_service_1.OrderRefundService])
], OrderClaimsService);
//# sourceMappingURL=order-claims.service.js.map
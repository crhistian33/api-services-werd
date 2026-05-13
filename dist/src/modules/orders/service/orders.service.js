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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../../../generated/prisma/client");
const prisma_service_1 = require("../../../prisma/prisma.service");
const base_service_1 = require("../../../common/services/base.service");
const mail_service_1 = require("../../mail/service/mail.service");
const image_record_service_1 = require("../../images/services/image-record.service");
const config_1 = require("@nestjs/config");
const order_labels_constants_1 = require("../constants/order-labels.constants");
const ORDER_INCLUDE = {
    customer: {
        select: { id: true, firstName: true, lastName: true, email: true },
    },
    shippingAddress: {
        include: {
            department: { select: { id: true, name: true } },
            province: { select: { id: true, name: true } },
            district: { select: { id: true, name: true } },
        },
    },
    shippingRate: {
        include: {
            zone: { select: { id: true, name: true } },
        },
    },
    paymentMethod: {
        select: {
            id: true,
            name: true,
            code: true,
            type: true,
            instructions: true,
        },
    },
    coupon: {
        select: { id: true, code: true, discountType: true, discountValue: true },
    },
    items: {
        include: {
            product: { select: { id: true, name: true, slug: true } },
            promotion: { select: { id: true, name: true } },
            refundItems: true,
        },
    },
    transactions: { orderBy: { createdAt: 'desc' } },
    statusHistory: { orderBy: { createdAt: 'desc' } },
    claims: {
        include: {
            items: {
                include: {
                    orderItem: true,
                },
            },
        },
    },
    refunds: { include: { items: true } },
    logistics: {
        include: {
            deliveredBy: { select: { id: true, name: true } },
            dispatchedBy: { select: { id: true, name: true } },
        },
    },
};
const VALID_TRANSITIONS = {
    pending_payment: [client_1.OrderStatus.paid, client_1.OrderStatus.cancelled],
    paid: [client_1.OrderStatus.processing, client_1.OrderStatus.cancelled],
    processing: [client_1.OrderStatus.shipped, client_1.OrderStatus.cancelled],
    shipped: [client_1.OrderStatus.delivered],
    delivered: [],
    cancelled: [],
    refunded: [],
};
const DEFAULT_EXPIRY_HOURS = {
    [client_1.PaymentMethodType.card]: null,
    [client_1.PaymentMethodType.wallet]: 24,
    [client_1.PaymentMethodType.cash_code]: 48,
    [client_1.PaymentMethodType.cash_on_delivery]: null,
};
function resolvePaymentExpiresAt(paymentMethod) {
    const config = paymentMethod.config &&
        typeof paymentMethod.config === 'object' &&
        !Array.isArray(paymentMethod.config)
        ? paymentMethod.config
        : {};
    const configHours = typeof config.paymentExpireHours === 'number'
        ? config.paymentExpireHours
        : null;
    const hours = configHours ?? DEFAULT_EXPIRY_HOURS[paymentMethod.type] ?? null;
    if (hours === null)
        return null;
    return new Date(Date.now() + hours * 60 * 60 * 1000);
}
let OrdersService = class OrdersService extends base_service_1.BaseService {
    imageRecordService;
    mailService;
    config;
    nameField = 'orderNumber';
    constructor(prisma, imageRecordService, mailService, config) {
        super(prisma, 'order');
        this.imageRecordService = imageRecordService;
        this.mailService = mailService;
        this.config = config;
    }
    get storeFrontendUrl() {
        return this.config.get('STORE_FRONTEND_URL', 'https://werd.com');
    }
    async findAllOrders(query) {
        const { search, status, customerId, paymentMethodId, page, limit } = query;
        return this.findAll({
            where: {
                ...(status !== undefined && { status }),
                ...(customerId !== undefined && { customerId }),
                ...(paymentMethodId !== undefined && { paymentMethodId }),
                ...(search && {
                    OR: [
                        { orderNumber: { contains: search, mode: 'insensitive' } },
                        { guestEmail: { contains: search, mode: 'insensitive' } },
                        { guestName: { contains: search, mode: 'insensitive' } },
                        {
                            customer: {
                                OR: [
                                    { firstName: { contains: search, mode: 'insensitive' } },
                                    { lastName: { contains: search, mode: 'insensitive' } },
                                    { email: { contains: search, mode: 'insensitive' } },
                                ],
                            },
                        },
                    ],
                }),
            },
            orderBy: { placedAt: 'desc' },
            include: ORDER_INCLUDE,
            pagination: { page, limit },
        });
    }
    async findOrderById(id) {
        const order = await this.findOne(id, ORDER_INCLUDE);
        if (!order)
            return null;
        const claimProductIds = order.claims.flatMap((c) => c.items.map((i) => i.orderItem.productId));
        const productIds = [
            ...new Set([...order.items.map((i) => i.productId), ...claimProductIds]),
        ];
        const allImages = await this.imageRecordService.getEntitiesImages('PRODUCT', productIds);
        const imagesByProductId = new Map();
        for (const img of allImages) {
            const list = imagesByProductId.get(img.entityId) ?? [];
            list.push(img);
            imagesByProductId.set(img.entityId, list);
        }
        const itemsWithThumbnails = order.items.map((item) => {
            const images = imagesByProductId.get(item.productId) ?? [];
            const main = images.find((img) => img.imageRole === 'main');
            return {
                ...item,
                productImageUrl: main?.variants?.thumb ?? main?.url ?? item.productImageUrl,
            };
        });
        let logisticsWithImages = order.logistics;
        let logisticsImages = [];
        let deliveryImages = [];
        if (!logisticsWithImages) {
            logisticsWithImages = await this.prisma.orderLogistics.findUnique({
                where: { orderId: order.id },
                include: {
                    deliveredBy: { select: { id: true, name: true } },
                    dispatchedBy: { select: { id: true, name: true } },
                },
            });
        }
        if (logisticsWithImages) {
            logisticsImages = await this.imageRecordService.getEntitiesImages('ORDER_LOGISTICS', [order.id, logisticsWithImages.id]);
            deliveryImages = await this.imageRecordService.getEntitiesImages('ORDER_DELIVERY', [order.id, logisticsWithImages.id]);
        }
        const logistics = {
            ...(logisticsWithImages || {}),
            images: [...logisticsImages, ...deliveryImages],
        };
        const claimIds = order.claims.map((c) => c.id);
        const claimImages = claimIds.length
            ? await this.imageRecordService.getEntitiesImages('ORDER_CLAIM', claimIds)
            : [];
        const refundIds = order.refunds.map((r) => r.id);
        const refundImages = refundIds.length
            ? await this.imageRecordService.getEntitiesImages('ORDER_REFUND', refundIds)
            : [];
        const claims = order.claims.map((claim) => ({
            ...claim,
            images: claimImages.filter((img) => img.entityId === claim.id),
            items: claim.items.map((item) => {
                const images = imagesByProductId.get(item.orderItem.productId) ?? [];
                const main = images.find((img) => img.imageRole === 'main');
                return {
                    ...item,
                    orderItem: {
                        ...item.orderItem,
                        productImageUrl: main?.variants?.thumb ??
                            main?.url ??
                            item.orderItem.productImageUrl,
                    },
                };
            }),
        }));
        const refunds = order.refunds.map((refund) => ({
            ...refund,
            images: refundImages.filter((img) => img.entityId === refund.id),
        }));
        return {
            ...order,
            items: itemsWithThumbnails,
            logistics,
            claims,
            refunds,
        };
    }
    async findOrderByNumber(orderNumber) {
        const record = (await this.prisma.order.findUnique({
            where: { orderNumber },
            include: ORDER_INCLUDE,
        }));
        if (!record) {
            throw new common_1.NotFoundException(`Pedido con número "${orderNumber}" no encontrado`);
        }
        return record;
    }
    async findMyOrderById(id, customerId) {
        const record = (await this.prisma.order.findFirst({
            where: { id, customerId },
            include: ORDER_INCLUDE,
        }));
        if (!record) {
            throw new common_1.NotFoundException(`Pedido con id "${id}" no encontrado`);
        }
        return record;
    }
    async findMyOrders(customerId, query) {
        return this.findAll({
            where: { customerId, ...(query.status && { status: query.status }) },
            orderBy: { placedAt: 'desc' },
            include: {
                items: {
                    include: {
                        product: { select: { id: true, name: true, slug: true } },
                        refundItems: true,
                    },
                },
                shippingAddress: true,
                shippingRate: {
                    include: { zone: { select: { id: true, name: true } } },
                },
                paymentMethod: {
                    select: { id: true, name: true, code: true, type: true },
                },
                refunds: true,
            },
            pagination: { page: query.page, limit: query.limit },
        });
    }
    async createOrder(dto, adminId) {
        const { shippingAddressId, shippingAddress: shippingAddressDto, saveAddressToProfile, items, couponId, paymentMethodId, shippingRateId, customerId, guestEmail, guestName, guestPhone, notes, ipAddress, } = dto;
        if (customerId && guestEmail) {
            throw new common_1.BadRequestException('Un pedido no puede tener a la vez customerId y guestEmail');
        }
        if (!customerId && !guestEmail) {
            throw new common_1.BadRequestException('Debe proporcionar customerId (cliente registrado) o guestEmail (guest)');
        }
        const createdOrder = await this.prisma.$transaction(async (tx) => {
            const { orderItems, subtotal, promotionDiscount } = await this.processItems(tx, items);
            const addressData = await this.resolveShippingAddress(tx, shippingAddressId, shippingAddressDto);
            let resolvedRateId;
            let shippingAmount = 0;
            if (shippingRateId) {
                const rate = await tx.shippingRate.findUnique({
                    where: { id: shippingRateId },
                });
                if (!rate || !rate.isActive) {
                    throw new common_1.BadRequestException('La tarifa de envío seleccionada no existe o está inactiva');
                }
                const exceedsFreeThreshold = rate.freeShippingThreshold !== null &&
                    subtotal >= Number(rate.freeShippingThreshold);
                shippingAmount = exceedsFreeThreshold ? 0 : Number(rate.price);
                resolvedRateId = rate.id;
            }
            const { couponDiscount } = await this.resolveCoupon(tx, couponId, customerId, subtotal, shippingAmount);
            const taxAmount = 0;
            const total = Math.max(0, subtotal -
                promotionDiscount -
                couponDiscount +
                shippingAmount +
                taxAmount);
            const orderNumber = await this.generateOrderNumber(tx);
            const paymentMethod = await tx.paymentMethod.findFirst({
                where: {
                    id: paymentMethodId,
                    isActive: true,
                },
                select: {
                    id: true,
                    type: true,
                    config: true,
                    name: true,
                    instructions: true,
                },
            });
            if (!paymentMethod) {
                throw new common_1.BadRequestException('El método de pago seleccionado no existe o no está disponible');
            }
            const isCashOnDelivery = paymentMethod.type === client_1.PaymentMethodType.cash_on_delivery;
            const paymentExpiresAt = resolvePaymentExpiresAt(paymentMethod);
            const initialPaidAt = null;
            const order = await tx.order.create({
                data: {
                    orderNumber,
                    status: client_1.OrderStatus.pending_payment,
                    paidAt: initialPaidAt,
                    paymentExpiresAt,
                    ...(customerId && { customer: { connect: { id: customerId } } }),
                    guestEmail,
                    guestName,
                    guestPhone,
                    subtotal,
                    discountAmount: promotionDiscount,
                    couponDiscount,
                    shippingAmount,
                    taxAmount,
                    total,
                    paymentMethod: { connect: { id: paymentMethodId } },
                    ...(resolvedRateId && {
                        shippingRate: { connect: { id: resolvedRateId } },
                    }),
                    ...(couponId && { coupon: { connect: { id: couponId } } }),
                    notes,
                    ipAddress,
                    shippingAddress: { create: addressData },
                    items: { create: orderItems },
                },
                include: ORDER_INCLUDE,
            });
            await this.decrementStock(tx, orderItems);
            if (customerId && shippingAddressDto && saveAddressToProfile) {
                await tx.customerAddress.create({
                    data: {
                        customerId,
                        recipientName: shippingAddressDto.recipientName,
                        phone: shippingAddressDto.phone ?? null,
                        addressLine: shippingAddressDto.addressLine,
                        reference: shippingAddressDto.reference ?? null,
                        latitude: shippingAddressDto.latitude ?? null,
                        longitude: shippingAddressDto.longitude ?? null,
                        departmentId: shippingAddressDto.departmentId,
                        provinceId: shippingAddressDto.provinceId,
                        districtId: shippingAddressDto.districtId,
                        isDefault: false,
                    },
                });
            }
            if (couponId && couponDiscount > 0) {
                await tx.couponUsage.create({
                    data: {
                        couponId,
                        orderId: order.id,
                        customerId: customerId ?? null,
                        guestEmail: guestEmail ?? null,
                        discountApplied: couponDiscount,
                    },
                });
                await tx.coupon.update({
                    where: { id: couponId },
                    data: { timesUsed: { increment: 1 } },
                });
            }
            await tx.orderStatusHistory.create({
                data: {
                    orderId: order.id,
                    fromStatus: null,
                    toStatus: client_1.OrderStatus.pending_payment,
                    changedById: adminId ?? null,
                    comment: isCashOnDelivery
                        ? 'Pedido creado con pago contra entrega'
                        : `Pedido creado. ${order_labels_constants_1.ORDER_STATUS_LABELS.pending_payment}.`,
                },
            });
            let defaultDeliveryType = client_1.DeliveryType.COURIER;
            if (resolvedRateId) {
                const shippingRate = await tx.shippingRate.findUnique({
                    where: { id: resolvedRateId },
                    include: {
                        zone: { select: { areas: { select: { deliveryType: true } } } },
                    },
                });
                const areas = shippingRate?.zone?.areas ?? [];
                const uniqueTypes = [...new Set(areas.map((a) => a.deliveryType))];
                if (uniqueTypes.length === 1) {
                    defaultDeliveryType = uniqueTypes[0];
                }
            }
            await tx.orderLogistics.create({
                data: {
                    orderId: order.id,
                    deliveryType: defaultDeliveryType,
                    estimatedShipping: shippingAmount,
                },
            });
            await tx.orderPaymentTransaction.create({
                data: {
                    orderId: order.id,
                    paymentMethodId,
                    status: isCashOnDelivery
                        ? client_1.TransactionStatus.pending
                        : client_1.TransactionStatus.pending,
                    amount: total,
                },
            });
            return order;
        });
        await this.sendOrderCreationEmails(createdOrder).catch((err) => console.error('[OrdersService] Error enviando emails de creación:', err));
        return createdOrder;
    }
    async markAsProcessing(orderId, adminId) {
        const order = await this.prisma.order.findUnique({
            where: { id: orderId },
            include: { paymentMethod: true },
        });
        if (!order)
            throw new common_1.NotFoundException('Pedido no encontrado');
        const isPaid = order.status === client_1.OrderStatus.paid;
        const isCod = order.paymentMethod?.type === client_1.PaymentMethodType.cash_on_delivery;
        if (!isPaid && !isCod) {
            throw new common_1.BadRequestException('La orden debe estar pagada para iniciar la preparación, a menos que sea Pago Contraentrega.');
        }
        await this.prisma.$transaction(async (tx) => {
            await tx.order.update({
                where: { id: orderId },
                data: { status: client_1.OrderStatus.processing },
            });
            await tx.orderStatusHistory.create({
                data: {
                    orderId,
                    fromStatus: order.status,
                    toStatus: client_1.OrderStatus.processing,
                    changedById: adminId,
                    comment: 'Pedido en preparación.',
                },
            });
        });
        return { success: true, orderId, newStatus: client_1.OrderStatus.processing };
    }
    async cancelOrder(orderId, dto, adminId) {
        const order = await this.prisma.order.findUnique({
            where: { id: orderId },
            include: {
                items: { select: { productId: true, quantity: true } },
                customer: { select: { firstName: true, email: true } },
                paymentMethod: { select: { type: true } },
            },
        });
        if (!order)
            throw new common_1.NotFoundException('Pedido no encontrado');
        if (order.status === client_1.OrderStatus.shipped ||
            order.status === client_1.OrderStatus.delivered) {
            throw new common_1.BadRequestException(`No es posible cancelar un pedido en estado "${order_labels_constants_1.ORDER_STATUS_LABELS[order.status]}". ` +
                `El pedido ya fue enviado o entregado. Si el cliente necesita devolver ` +
                `el producto, debe solicitar un reclamo de devolución.`);
        }
        const allowed = VALID_TRANSITIONS[order.status];
        if (!allowed.includes(client_1.OrderStatus.cancelled)) {
            throw new common_1.BadRequestException(`No es posible cancelar un pedido en estado "${order_labels_constants_1.ORDER_STATUS_LABELS[order.status]}".`);
        }
        const wasPaid = (order.status === client_1.OrderStatus.paid ||
            order.status === client_1.OrderStatus.processing ||
            !!order.paidAt) &&
            order.paymentMethod?.type !== client_1.PaymentMethodType.cash_on_delivery;
        await this.prisma.$transaction(async (tx) => {
            await tx.order.update({
                where: { id: orderId },
                data: {
                    status: client_1.OrderStatus.cancelled,
                    cancelledAt: new Date(),
                    ...(dto.adminNotes && { adminNotes: dto.adminNotes }),
                },
            });
            await this.incrementStock(tx, order.items);
            if (order.couponId) {
                await tx.couponUsage.deleteMany({ where: { orderId } });
                await tx.coupon.update({
                    where: { id: order.couponId },
                    data: { timesUsed: { decrement: 1 } },
                });
            }
            await tx.orderPaymentTransaction.updateMany({
                where: { orderId, status: client_1.TransactionStatus.pending },
                data: { status: client_1.TransactionStatus.failed },
            });
            const mappedReason = order_labels_constants_1.CANCELLATION_REASON_LABELS[dto.reason] || dto.reason;
            const historyComment = wasPaid
                ? `Cancelado por administrador. Motivo: ${mappedReason}. El cliente pagó — el reembolso debe gestionarse mediante el flujo de reclamos.`
                : `Cancelado por administrador. Motivo: ${mappedReason}.`;
            await tx.orderStatusHistory.create({
                data: {
                    orderId,
                    fromStatus: order.status,
                    toStatus: client_1.OrderStatus.cancelled,
                    changedById: adminId,
                    comment: historyComment,
                },
            });
        });
        const recipientEmail = order.customer?.email ?? order.guestEmail;
        const recipientName = order.customer?.firstName ?? order.guestName ?? 'Cliente';
        if (recipientEmail) {
            try {
                const siteConfig = await this.prisma.siteConfig.findFirst({
                    select: {
                        supportEmail: true,
                        whatsappNumber: true,
                        phonePrimary: true,
                    },
                });
                const friendlyReason = this.getFriendlyCancellationReason(dto.reason, dto.reasonDetail);
                await this.mailService.sendOrderCancelledByAdmin(recipientEmail, {
                    customerName: recipientName,
                    orderNumber: order.orderNumber,
                    cancellationReason: friendlyReason,
                    refundPending: wasPaid,
                    supportWhatsapp: siteConfig?.whatsappNumber || siteConfig?.phonePrimary || undefined,
                    supportEmail: siteConfig?.supportEmail || undefined,
                });
            }
            catch (err) {
                console.error('[OrdersService] Error enviando email de cancelación:', err);
            }
        }
        return { success: true, orderId, newStatus: client_1.OrderStatus.cancelled };
    }
    async updateOrderStatus(id, dto, adminId) {
        const { status, adminNotes, statusComment } = dto;
        return this.prisma.$transaction(async (tx) => {
            const currentOrder = (await tx.order.findFirst({
                where: { id },
                select: { id: true, status: true, items: true },
            }));
            if (!currentOrder) {
                throw new common_1.NotFoundException(`Pedido con id "${id}" no encontrado`);
            }
            if (status && status !== currentOrder.status) {
                const allowed = VALID_TRANSITIONS[currentOrder.status];
                if (!allowed.includes(status)) {
                    throw new common_1.BadRequestException(`Transición inválida: "${currentOrder.status}" → "${status}". ` +
                        `Permitidas: [${allowed.join(', ') || 'ninguna'}]`);
                }
                if (status === client_1.OrderStatus.cancelled) {
                    await this.incrementStock(tx, currentOrder.items);
                }
                await tx.orderStatusHistory.create({
                    data: {
                        orderId: id,
                        fromStatus: currentOrder.status,
                        toStatus: status,
                        changedById: adminId ?? null,
                        comment: statusComment ??
                            `Estado actualizado a "${order_labels_constants_1.ORDER_STATUS_LABELS[status] || status}"`,
                    },
                });
                const dateUpdates = {};
                if (status === client_1.OrderStatus.paid)
                    dateUpdates.paidAt = new Date();
                if (status === client_1.OrderStatus.shipped)
                    dateUpdates.shippedAt = new Date();
                if (status === client_1.OrderStatus.delivered)
                    dateUpdates.deliveredAt = new Date();
                if (status === client_1.OrderStatus.cancelled)
                    dateUpdates.cancelledAt = new Date();
                return tx.order.update({
                    where: { id },
                    data: { status, adminNotes, ...dateUpdates },
                    include: ORDER_INCLUDE,
                });
            }
            return tx.order.update({
                where: { id },
                data: { adminNotes },
                include: ORDER_INCLUDE,
            });
        });
    }
    async handlePaymentConfirmed(orderId, gatewayTransactionId, gatewayResponse) {
        const updatedOrder = await this.prisma.$transaction(async (tx) => {
            const order = await tx.order.findFirst({
                where: { id: orderId },
                include: {
                    customer: { select: { firstName: true, email: true } },
                    items: true,
                    paymentMethod: { select: { name: true } },
                },
            });
            if (!order)
                throw new common_1.NotFoundException(`Pedido "${orderId}" no encontrado`);
            if (order.status === client_1.OrderStatus.paid)
                return order;
            if (order.status !== client_1.OrderStatus.pending_payment) {
                throw new common_1.ConflictException(`No se puede confirmar el pago de un pedido en estado "${order.status}"`);
            }
            await tx.orderPaymentTransaction.updateMany({
                where: { orderId, status: client_1.TransactionStatus.pending },
                data: {
                    status: client_1.TransactionStatus.completed,
                    gatewayTransactionId,
                    gatewayResponse: gatewayResponse,
                    paidAt: new Date(),
                },
            });
            await tx.order.update({
                where: { id: orderId },
                data: { status: client_1.OrderStatus.paid, paidAt: new Date() },
            });
            await tx.orderStatusHistory.create({
                data: {
                    orderId,
                    fromStatus: client_1.OrderStatus.pending_payment,
                    toStatus: client_1.OrderStatus.paid,
                    comment: `Pago confirmado vía pasarela. ID: ${gatewayTransactionId}`,
                },
            });
            return order;
        });
        const recipientEmail = updatedOrder.customer?.email ?? updatedOrder.guestEmail;
        const recipientName = updatedOrder.customer?.firstName ?? updatedOrder.guestName ?? 'Cliente';
        if (recipientEmail) {
            try {
                await this.mailService.sendOrderConfirmed(recipientEmail, {
                    customerName: recipientName,
                    orderNumber: updatedOrder.orderNumber,
                    placedAt: updatedOrder.placedAt.toLocaleDateString('es-PE'),
                    items: updatedOrder.items.map((i) => ({
                        productName: i.productName,
                        productSku: i.productSku,
                        quantity: i.quantity,
                        lineTotal: Number(i.lineTotal).toFixed(2),
                    })),
                    total: Number(updatedOrder.total).toFixed(2),
                    trackingUrl: `${this.storeFrontendUrl}/mis-pedidos/${updatedOrder.id}`,
                });
            }
            catch (err) {
                console.error('[OrdersService] Error enviando email de confirmación de pago:', err);
            }
        }
    }
    async sendOrderCreationEmails(order) {
        const recipientEmail = order.customer?.email ?? order.guestEmail;
        const recipientName = order.customer?.firstName ?? order.guestName ?? 'Cliente';
        if (!recipientEmail)
            return;
        const paymentMethod = order.paymentMethod;
        const isCashOnDelivery = paymentMethod?.type === client_1.PaymentMethodType.cash_on_delivery;
        const isCardPayment = paymentMethod?.type === client_1.PaymentMethodType.card;
        if (isCashOnDelivery || isCardPayment) {
            await this.mailService.sendOrderConfirmed(recipientEmail, {
                customerName: recipientName,
                orderNumber: order.orderNumber,
                placedAt: order.placedAt.toLocaleDateString('es-PE'),
                items: order.items.map((i) => ({
                    productName: i.productName,
                    productSku: i.productSku,
                    quantity: i.quantity,
                    lineTotal: Number(i.lineTotal).toFixed(2),
                })),
                total: Number(order.total).toFixed(2),
                trackingUrl: `${this.storeFrontendUrl}/mis-pedidos/${order.id}`,
                isCashOnDelivery,
            });
        }
        else {
            const siteConfig = await this.prisma.siteConfig.findFirst({
                select: { whatsappNumber: true },
            });
            await this.mailService.sendOrderPendingPayment(recipientEmail, {
                customerName: recipientName,
                orderNumber: order.orderNumber,
                total: Number(order.total).toFixed(2),
                paymentMethodName: paymentMethod?.name ?? 'Pago manual',
                paymentInstructions: paymentMethod?.instructions ?? undefined,
                whatsappNumber: siteConfig?.whatsappNumber ?? undefined,
                paymentExpiresAt: order.paymentExpiresAt
                    ? order.paymentExpiresAt.toLocaleString('es-PE', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                    })
                    : 'Sin fecha límite',
            });
        }
        const siteConfig = await this.prisma.siteConfig.findFirst({
            select: { storeEmail: true, supportEmail: true },
        });
        const adminEmails = [
            siteConfig?.storeEmail,
            siteConfig?.supportEmail,
        ].filter((e) => Boolean(e));
        if (adminEmails.length > 0) {
            const paymentStatusLabel = isCashOnDelivery
                ? 'Pago contra entrega'
                : isCardPayment
                    ? 'Pago con tarjeta (confirmado)'
                    : 'Pendiente de confirmación manual';
            const methodLabel = order_labels_constants_1.PAYMENT_METHOD_TYPE_LABELS[paymentMethod?.type] ||
                paymentMethod?.name ||
                'No especificado';
            await this.mailService.sendOrderNewAdmin(adminEmails, {
                orderNumber: order.orderNumber,
                total: Number(order.total).toFixed(2),
                customerName: recipientName,
                paymentMethod: `${methodLabel} — ${paymentStatusLabel}`,
                items: order.items.map((i) => ({
                    productName: i.productName,
                    quantity: i.quantity,
                    lineTotal: Number(i.lineTotal).toFixed(2),
                })),
            });
        }
    }
    async resolveShippingAddress(tx, shippingAddressId, shippingAddressDto) {
        if (shippingAddressId) {
            const customerAddr = await tx.customerAddress.findUnique({
                where: { id: shippingAddressId },
            });
            if (!customerAddr) {
                throw new common_1.NotFoundException(`Dirección con ID "${shippingAddressId}" no encontrada`);
            }
            return {
                alias: customerAddr.alias,
                recipientName: customerAddr.recipientName,
                phone: customerAddr.phone,
                addressLine: customerAddr.addressLine,
                reference: customerAddr.reference,
                latitude: customerAddr.latitude,
                longitude: customerAddr.longitude,
                department: { connect: { id: customerAddr.departmentId } },
                province: { connect: { id: customerAddr.provinceId } },
                district: { connect: { id: customerAddr.districtId } },
            };
        }
        if (shippingAddressDto) {
            const { departmentId, provinceId, districtId, ...rest } = shippingAddressDto;
            return {
                ...rest,
                department: { connect: { id: departmentId } },
                province: { connect: { id: provinceId } },
                district: { connect: { id: districtId } },
            };
        }
        throw new common_1.BadRequestException('Debe proporcionar shippingAddressId o un objeto shippingAddress completo');
    }
    async processItems(tx, items) {
        let subtotal = 0;
        let promotionDiscount = 0;
        const orderItems = [];
        for (const item of items) {
            const product = await tx.product.findFirst({
                where: {
                    id: item.productId,
                    deletedAt: null,
                    status: client_1.ProductStatus.active,
                },
                include: { price: true },
            });
            if (!product || !product.price) {
                throw new common_1.NotFoundException(`Producto con ID "${item.productId}" no disponible`);
            }
            if (product.stock < item.quantity) {
                throw new common_1.BadRequestException(`Stock insuficiente para "${product.name}". ` +
                    `Disponible: ${product.stock}, solicitado: ${item.quantity}`);
            }
            const unitPrice = Number(product.price.price);
            const unitCost = product.price.cost
                ? Number(product.price.cost)
                : undefined;
            let itemDiscount = 0;
            if (item.promotionId) {
                const promo = await tx.promotion.findFirst({
                    where: {
                        id: item.promotionId,
                        isActive: true,
                        deletedAt: null,
                        startsAt: { lte: new Date() },
                        OR: [{ endsAt: null }, { endsAt: { gte: new Date() } }],
                    },
                });
                if (promo) {
                    if (promo.appliesTo === 'product' &&
                        !promo.targetIds.includes(product.id)) {
                        throw new common_1.BadRequestException(`La promoción "${promo.name}" no aplica al producto "${product.name}"`);
                    }
                    if (promo.appliesTo === 'category' &&
                        !promo.targetIds.includes(product.categoryId)) {
                        throw new common_1.BadRequestException(`La promoción "${promo.name}" no aplica a la categoría del producto "${product.name}"`);
                    }
                    if (promo.discountType === 'percentage') {
                        itemDiscount =
                            ((unitPrice * Number(promo.discountValue)) / 100) * item.quantity;
                    }
                    else if (promo.discountType === 'fixed_amount') {
                        itemDiscount = Math.min(Number(promo.discountValue) * item.quantity, unitPrice * item.quantity);
                    }
                }
            }
            const lineTotal = unitPrice * item.quantity - itemDiscount;
            subtotal += unitPrice * item.quantity;
            promotionDiscount += itemDiscount;
            orderItems.push({
                productId: product.id,
                productName: product.name,
                productSku: product.sku,
                productImageUrl: undefined,
                quantity: item.quantity,
                unitPrice,
                unitCost,
                discountAmount: itemDiscount,
                lineTotal,
                promotionId: item.promotionId ?? null,
            });
        }
        return { orderItems, subtotal, promotionDiscount };
    }
    async resolveCoupon(tx, couponId, customerId, subtotal, shippingAmount) {
        if (!couponId)
            return { couponDiscount: 0 };
        const coupon = await tx.coupon.findFirst({
            where: {
                id: couponId,
                isActive: true,
                deletedAt: null,
                OR: [{ expiresAt: null }, { expiresAt: { gte: new Date() } }],
                AND: [{ OR: [{ startsAt: null }, { startsAt: { lte: new Date() } }] }],
            },
            include: {
                usages: customerId ? { where: { customerId } } : false,
            },
        });
        if (!coupon)
            throw new common_1.BadRequestException('Cupón inválido o expirado');
        if (subtotal < Number(coupon.minOrderAmount)) {
            throw new common_1.BadRequestException(`El pedido no alcanza el monto mínimo para este cupón (S/. ${coupon.minOrderAmount.toFixed(2)})`);
        }
        if (coupon.usageLimit && coupon.timesUsed >= coupon.usageLimit) {
            throw new common_1.BadRequestException('El cupón ha alcanzado su límite de usos');
        }
        if (customerId && coupon.usages) {
            const userUsages = coupon.usages.filter((u) => u.customerId === customerId).length;
            if (userUsages >= coupon.usageLimitPerUser) {
                throw new common_1.BadRequestException('Ya usaste este cupón el número máximo de veces permitido');
            }
        }
        let couponDiscount = 0;
        if (coupon.discountType === client_1.DiscountType.percentage) {
            couponDiscount = (subtotal * Number(coupon.discountValue)) / 100;
            if (coupon.maxDiscountAmount) {
                couponDiscount = Math.min(couponDiscount, Number(coupon.maxDiscountAmount));
            }
        }
        else if (coupon.discountType === client_1.DiscountType.fixed_amount) {
            couponDiscount = Math.min(Number(coupon.discountValue), subtotal);
        }
        else if (coupon.discountType === client_1.DiscountType.free_shipping) {
            couponDiscount = shippingAmount;
        }
        return { couponDiscount };
    }
    async decrementStock(tx, items) {
        for (const { productId, quantity } of items) {
            const result = await tx.$executeRaw `
      UPDATE products
      SET stock = stock - ${quantity}
      WHERE id = ${productId} AND stock >= ${quantity}
    `;
            if (result === 0) {
                const product = await tx.product.findUnique({
                    where: { id: productId },
                    select: { name: true },
                });
                throw new common_1.ConflictException(`Stock insuficiente para "${product?.name}". Intenta nuevamente.`);
            }
        }
    }
    async incrementStock(tx, items) {
        for (const { productId, quantity } of items) {
            await tx.product.update({
                where: { id: productId },
                data: { stock: { increment: quantity } },
            });
        }
    }
    async generateOrderNumber(tx) {
        const date = new Date();
        const datePart = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
        const seq = await tx.$queryRaw `
      INSERT INTO order_sequence (id, "lastSeq")
      VALUES ('global', 1)
      ON CONFLICT (id) DO UPDATE 
      SET "lastSeq" = order_sequence."lastSeq" + 1
      RETURNING "lastSeq" as lastseq
    `;
        return `ORD-${datePart}-${String(seq[0].lastseq).padStart(4, '0')}`;
    }
    getFriendlyCancellationReason(internalReason, detail) {
        const reasonMap = {
            customer_request: 'Cancelado a petición del cliente',
            no_payment: 'No se recibió el pago dentro del plazo establecido',
            no_stock: 'Producto fuera de stock',
            fraud: 'Por razones de seguridad, no pudimos procesar tu pedido',
            wrong_address: 'La dirección de envío no es válida o está incompleta',
            damaged_in_warehouse: 'El producto sufrió daños antes del envío',
            other: 'Por razones administrativas',
        };
        let friendlyReason = reasonMap[internalReason] || internalReason;
        if (detail) {
            friendlyReason += ` (${detail})`;
        }
        return friendlyReason;
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        image_record_service_1.ImageRecordService,
        mail_service_1.MailService,
        config_1.ConfigService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map
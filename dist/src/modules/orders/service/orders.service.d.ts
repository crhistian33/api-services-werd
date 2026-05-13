import { Prisma, OrderStatus, PaymentMethodType, DeliveryType, TransactionStatus, DiscountType } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { BaseService } from '../../../common/services/base.service';
import { MailService } from '../../mail/service/mail.service';
import { ImageDto, ImageRecordService } from '../../images/services/image-record.service';
import { CreateOrderDto, UpdateOrderDto, QueryOrderDto, CancelOrderDto } from '../dto';
import { PaginatedResult } from '../../../common/interfaces/pagination.interface';
import { ConfigService } from '@nestjs/config';
type OrderEntity = Prisma.OrderGetPayload<{
    include: typeof ORDER_INCLUDE;
}>;
declare const ORDER_INCLUDE: {
    readonly customer: {
        readonly select: {
            readonly id: true;
            readonly firstName: true;
            readonly lastName: true;
            readonly email: true;
        };
    };
    readonly shippingAddress: {
        readonly include: {
            readonly department: {
                readonly select: {
                    readonly id: true;
                    readonly name: true;
                };
            };
            readonly province: {
                readonly select: {
                    readonly id: true;
                    readonly name: true;
                };
            };
            readonly district: {
                readonly select: {
                    readonly id: true;
                    readonly name: true;
                };
            };
        };
    };
    readonly shippingRate: {
        readonly include: {
            readonly zone: {
                readonly select: {
                    readonly id: true;
                    readonly name: true;
                };
            };
        };
    };
    readonly paymentMethod: {
        readonly select: {
            readonly id: true;
            readonly name: true;
            readonly code: true;
            readonly type: true;
            readonly instructions: true;
        };
    };
    readonly coupon: {
        readonly select: {
            readonly id: true;
            readonly code: true;
            readonly discountType: true;
            readonly discountValue: true;
        };
    };
    readonly items: {
        readonly include: {
            readonly product: {
                readonly select: {
                    readonly id: true;
                    readonly name: true;
                    readonly slug: true;
                };
            };
            readonly promotion: {
                readonly select: {
                    readonly id: true;
                    readonly name: true;
                };
            };
            readonly refundItems: true;
        };
    };
    readonly transactions: {
        readonly orderBy: {
            readonly createdAt: "desc";
        };
    };
    readonly statusHistory: {
        readonly orderBy: {
            readonly createdAt: "desc";
        };
    };
    readonly claims: {
        readonly include: {
            readonly items: {
                readonly include: {
                    readonly orderItem: true;
                };
            };
        };
    };
    readonly refunds: {
        readonly include: {
            readonly items: true;
        };
    };
    readonly logistics: {
        readonly include: {
            readonly deliveredBy: {
                readonly select: {
                    readonly id: true;
                    readonly name: true;
                };
            };
            readonly dispatchedBy: {
                readonly select: {
                    readonly id: true;
                    readonly name: true;
                };
            };
        };
    };
};
export declare class OrdersService extends BaseService<OrderEntity, CreateOrderDto, UpdateOrderDto, Prisma.OrderWhereInput, Prisma.OrderOrderByWithRelationInput> {
    private readonly imageRecordService;
    private readonly mailService;
    private readonly config;
    protected nameField: string;
    constructor(prisma: PrismaService, imageRecordService: ImageRecordService, mailService: MailService, config: ConfigService);
    private get storeFrontendUrl();
    findAllOrders(query: QueryOrderDto): Promise<PaginatedResult<OrderEntity>>;
    findOrderById(id: string): Promise<{
        items: {
            productImageUrl: string | null;
            product: {
                id: string;
                name: string;
                slug: string;
            };
            promotion: {
                id: string;
                name: string;
            } | null;
            refundItems: {
                id: string;
                quantity: number;
                amount: import("@prisma/client-runtime-utils").Decimal;
                orderItemId: string;
                refundId: string;
                restockQuantity: boolean;
            }[];
            id: string;
            productId: string;
            orderId: string;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            discountAmount: import("@prisma/client-runtime-utils").Decimal;
            productName: string;
            productSku: string;
            unitCost: import("@prisma/client-runtime-utils").Decimal | null;
            lineTotal: import("@prisma/client-runtime-utils").Decimal;
            promotionId: string | null;
        }[];
        logistics: {
            images: ImageDto[];
            dispatchedBy?: {
                id: string;
                name: string;
            } | null | undefined;
            deliveredBy?: {
                id: string;
                name: string;
            } | null | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
            orderId?: string | undefined;
            deliveredAt?: Date | null | undefined;
            deliveryType?: DeliveryType | undefined;
            estimatedShipping?: import("@prisma/client-runtime-utils").Decimal | undefined;
            actualShippingCost?: import("@prisma/client-runtime-utils").Decimal | null | undefined;
            internalTransportCost?: import("@prisma/client-runtime-utils").Decimal | null | undefined;
            trackingNumber?: string | null | undefined;
            courierName?: string | null | undefined;
            dispatchedAt?: Date | null | undefined;
            dispatchedById?: string | null | undefined;
            deliveredById?: string | null | undefined;
            deliveryEvidenceNote?: string | null | undefined;
        };
        claims: {
            images: ImageDto[];
            items: {
                orderItem: {
                    productImageUrl: string | null;
                    id: string;
                    productId: string;
                    orderId: string;
                    quantity: number;
                    unitPrice: import("@prisma/client-runtime-utils").Decimal;
                    discountAmount: import("@prisma/client-runtime-utils").Decimal;
                    productName: string;
                    productSku: string;
                    unitCost: import("@prisma/client-runtime-utils").Decimal | null;
                    lineTotal: import("@prisma/client-runtime-utils").Decimal;
                    promotionId: string | null;
                };
                id: string;
                reason: string | null;
                quantity: number;
                claimId: string;
                orderItemId: string;
            }[];
            id: string;
            createdAt: Date;
            updatedAt: Date;
            description: string;
            status: import("generated/prisma/client").ClaimStatus;
            orderId: string;
            customerId: string;
            adminNotes: string | null;
            type: import("generated/prisma/client").ClaimType;
            claimNumber: string;
            reasonCategory: import("generated/prisma/client").ClaimReasonCategory;
            customerVoucherAmount: import("@prisma/client-runtime-utils").Decimal | null;
            replacementOrderId: string | null;
            returnCourierName: string | null;
            returnTrackingNumber: string | null;
            returnShipmentNotes: string | null;
            returnShipmentConfirmedAt: Date | null;
            receivedProductCondition: import("generated/prisma/client").ReturnedProductCondition | null;
            internalDamageNote: string | null;
            receivedAdminNote: string | null;
            refundMethod: import("generated/prisma/client").RefundMethod | null;
            refundAccountDetails: string | null;
            reviewedById: string | null;
            reviewNote: string | null;
            internalNote: string | null;
            reviewedAt: Date | null;
            receivedAt: Date | null;
            completedAt: Date | null;
        }[];
        refunds: {
            images: ImageDto[];
            items: {
                id: string;
                quantity: number;
                amount: import("@prisma/client-runtime-utils").Decimal;
                orderItemId: string;
                refundId: string;
                restockQuantity: boolean;
            }[];
            id: string;
            createdAt: Date;
            updatedAt: Date;
            createdById: string | null;
            status: import("generated/prisma/client").RefundStatus;
            reason: string | null;
            orderId: string;
            adminNotes: string | null;
            amount: import("@prisma/client-runtime-utils").Decimal;
            claimId: string | null;
            method: import("generated/prisma/client").RefundMethod;
            processedById: string | null;
            gatewayRefundId: string | null;
        }[];
        coupon: {
            id: string;
            discountType: DiscountType;
            discountValue: import("@prisma/client-runtime-utils").Decimal;
            code: string;
        } | null;
        customer: {
            id: string;
            firstName: string;
            lastName: string;
            email: string;
        } | null;
        paymentMethod: {
            id: string;
            name: string;
            code: string;
            type: PaymentMethodType;
            instructions: string | null;
        };
        shippingRate: ({
            zone: {
                id: string;
                name: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            isActive: boolean;
            sortOrder: number;
            createdById: string | null;
            updatedById: string | null;
            price: import("@prisma/client-runtime-utils").Decimal;
            minOrderAmount: import("@prisma/client-runtime-utils").Decimal;
            zoneId: string;
            freeShippingThreshold: import("@prisma/client-runtime-utils").Decimal | null;
            estimatedMin: number | null;
            estimatedMax: number | null;
            estimatedUnit: import("generated/prisma/client").DeliveryUnit;
        }) | null;
        shippingAddress: ({
            department: {
                id: string;
                name: string;
            };
            province: {
                id: string;
                name: string;
            };
            district: {
                id: string;
                name: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            orderId: string;
            phone: string | null;
            alias: string | null;
            recipientName: string;
            departmentId: string;
            provinceId: string;
            districtId: string;
            addressLine: string;
            reference: string | null;
            latitude: import("@prisma/client-runtime-utils").Decimal | null;
            longitude: import("@prisma/client-runtime-utils").Decimal | null;
            sourceAddressId: string | null;
        }) | null;
        transactions: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: TransactionStatus;
            currency: string;
            orderId: string;
            paymentMethodId: string;
            paidAt: Date | null;
            amount: import("@prisma/client-runtime-utils").Decimal;
            gatewayTransactionId: string | null;
            cipCode: string | null;
            cipExpiresAt: Date | null;
            gatewayResponse: import("@prisma/client/runtime/client").JsonValue;
            operationNumber: string | null;
            confirmedById: string | null;
            paidAmount: import("@prisma/client-runtime-utils").Decimal | null;
        }[];
        statusHistory: {
            id: string;
            createdAt: Date;
            changedById: string | null;
            orderId: string;
            comment: string | null;
            fromStatus: OrderStatus | null;
            toStatus: OrderStatus;
        }[];
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: OrderStatus;
        couponId: string | null;
        customerId: string | null;
        guestEmail: string | null;
        orderNumber: string;
        guestName: string | null;
        guestPhone: string | null;
        subtotal: import("@prisma/client-runtime-utils").Decimal;
        discountAmount: import("@prisma/client-runtime-utils").Decimal;
        shippingAmount: import("@prisma/client-runtime-utils").Decimal;
        taxAmount: import("@prisma/client-runtime-utils").Decimal;
        total: import("@prisma/client-runtime-utils").Decimal;
        couponDiscount: import("@prisma/client-runtime-utils").Decimal;
        paymentMethodId: string;
        shippingRateId: string | null;
        claimAsReplacementId: string | null;
        notes: string | null;
        adminNotes: string | null;
        ipAddress: string | null;
        placedAt: Date;
        paidAt: Date | null;
        shippedAt: Date | null;
        deliveredAt: Date | null;
        cancelledAt: Date | null;
        refundedAt: Date | null;
        paymentExpiresAt: Date | null;
        paymentReminderSentAt: Date | null;
        paymentConfirmedById: string | null;
        paymentConfirmedAt: Date | null;
        parentOrderId: string | null;
    } | null>;
    findOrderByNumber(orderNumber: string): Promise<OrderEntity>;
    findMyOrderById(id: string, customerId: string): Promise<OrderEntity>;
    findMyOrders(customerId: string, query: QueryOrderDto): Promise<PaginatedResult<{
        coupon: {
            id: string;
            discountType: DiscountType;
            discountValue: import("@prisma/client-runtime-utils").Decimal;
            code: string;
        } | null;
        customer: {
            id: string;
            firstName: string;
            lastName: string;
            email: string;
        } | null;
        paymentMethod: {
            id: string;
            name: string;
            code: string;
            type: PaymentMethodType;
            instructions: string | null;
        };
        shippingRate: ({
            zone: {
                id: string;
                name: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            isActive: boolean;
            sortOrder: number;
            createdById: string | null;
            updatedById: string | null;
            price: import("@prisma/client-runtime-utils").Decimal;
            minOrderAmount: import("@prisma/client-runtime-utils").Decimal;
            zoneId: string;
            freeShippingThreshold: import("@prisma/client-runtime-utils").Decimal | null;
            estimatedMin: number | null;
            estimatedMax: number | null;
            estimatedUnit: import("generated/prisma/client").DeliveryUnit;
        }) | null;
        items: ({
            product: {
                id: string;
                name: string;
                slug: string;
            };
            promotion: {
                id: string;
                name: string;
            } | null;
            refundItems: {
                id: string;
                quantity: number;
                amount: import("@prisma/client-runtime-utils").Decimal;
                orderItemId: string;
                refundId: string;
                restockQuantity: boolean;
            }[];
        } & {
            id: string;
            productId: string;
            orderId: string;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            discountAmount: import("@prisma/client-runtime-utils").Decimal;
            productName: string;
            productSku: string;
            productImageUrl: string | null;
            unitCost: import("@prisma/client-runtime-utils").Decimal | null;
            lineTotal: import("@prisma/client-runtime-utils").Decimal;
            promotionId: string | null;
        })[];
        shippingAddress: ({
            department: {
                id: string;
                name: string;
            };
            province: {
                id: string;
                name: string;
            };
            district: {
                id: string;
                name: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            orderId: string;
            phone: string | null;
            alias: string | null;
            recipientName: string;
            departmentId: string;
            provinceId: string;
            districtId: string;
            addressLine: string;
            reference: string | null;
            latitude: import("@prisma/client-runtime-utils").Decimal | null;
            longitude: import("@prisma/client-runtime-utils").Decimal | null;
            sourceAddressId: string | null;
        }) | null;
        transactions: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: TransactionStatus;
            currency: string;
            orderId: string;
            paymentMethodId: string;
            paidAt: Date | null;
            amount: import("@prisma/client-runtime-utils").Decimal;
            gatewayTransactionId: string | null;
            cipCode: string | null;
            cipExpiresAt: Date | null;
            gatewayResponse: import("@prisma/client/runtime/client").JsonValue;
            operationNumber: string | null;
            confirmedById: string | null;
            paidAmount: import("@prisma/client-runtime-utils").Decimal | null;
        }[];
        statusHistory: {
            id: string;
            createdAt: Date;
            changedById: string | null;
            orderId: string;
            comment: string | null;
            fromStatus: OrderStatus | null;
            toStatus: OrderStatus;
        }[];
        logistics: ({
            dispatchedBy: {
                id: string;
                name: string;
            } | null;
            deliveredBy: {
                id: string;
                name: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            orderId: string;
            deliveredAt: Date | null;
            deliveryType: DeliveryType;
            estimatedShipping: import("@prisma/client-runtime-utils").Decimal;
            actualShippingCost: import("@prisma/client-runtime-utils").Decimal | null;
            internalTransportCost: import("@prisma/client-runtime-utils").Decimal | null;
            trackingNumber: string | null;
            courierName: string | null;
            dispatchedAt: Date | null;
            dispatchedById: string | null;
            deliveredById: string | null;
            deliveryEvidenceNote: string | null;
        }) | null;
        claims: ({
            items: ({
                orderItem: {
                    id: string;
                    productId: string;
                    orderId: string;
                    quantity: number;
                    unitPrice: import("@prisma/client-runtime-utils").Decimal;
                    discountAmount: import("@prisma/client-runtime-utils").Decimal;
                    productName: string;
                    productSku: string;
                    productImageUrl: string | null;
                    unitCost: import("@prisma/client-runtime-utils").Decimal | null;
                    lineTotal: import("@prisma/client-runtime-utils").Decimal;
                    promotionId: string | null;
                };
            } & {
                id: string;
                reason: string | null;
                quantity: number;
                claimId: string;
                orderItemId: string;
            })[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            description: string;
            status: import("generated/prisma/client").ClaimStatus;
            orderId: string;
            customerId: string;
            adminNotes: string | null;
            type: import("generated/prisma/client").ClaimType;
            claimNumber: string;
            reasonCategory: import("generated/prisma/client").ClaimReasonCategory;
            customerVoucherAmount: import("@prisma/client-runtime-utils").Decimal | null;
            replacementOrderId: string | null;
            returnCourierName: string | null;
            returnTrackingNumber: string | null;
            returnShipmentNotes: string | null;
            returnShipmentConfirmedAt: Date | null;
            receivedProductCondition: import("generated/prisma/client").ReturnedProductCondition | null;
            internalDamageNote: string | null;
            receivedAdminNote: string | null;
            refundMethod: import("generated/prisma/client").RefundMethod | null;
            refundAccountDetails: string | null;
            reviewedById: string | null;
            reviewNote: string | null;
            internalNote: string | null;
            reviewedAt: Date | null;
            receivedAt: Date | null;
            completedAt: Date | null;
        })[];
        refunds: ({
            items: {
                id: string;
                quantity: number;
                amount: import("@prisma/client-runtime-utils").Decimal;
                orderItemId: string;
                refundId: string;
                restockQuantity: boolean;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            createdById: string | null;
            status: import("generated/prisma/client").RefundStatus;
            reason: string | null;
            orderId: string;
            adminNotes: string | null;
            amount: import("@prisma/client-runtime-utils").Decimal;
            claimId: string | null;
            method: import("generated/prisma/client").RefundMethod;
            processedById: string | null;
            gatewayRefundId: string | null;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: OrderStatus;
        couponId: string | null;
        customerId: string | null;
        guestEmail: string | null;
        orderNumber: string;
        guestName: string | null;
        guestPhone: string | null;
        subtotal: import("@prisma/client-runtime-utils").Decimal;
        discountAmount: import("@prisma/client-runtime-utils").Decimal;
        shippingAmount: import("@prisma/client-runtime-utils").Decimal;
        taxAmount: import("@prisma/client-runtime-utils").Decimal;
        total: import("@prisma/client-runtime-utils").Decimal;
        couponDiscount: import("@prisma/client-runtime-utils").Decimal;
        paymentMethodId: string;
        shippingRateId: string | null;
        claimAsReplacementId: string | null;
        notes: string | null;
        adminNotes: string | null;
        ipAddress: string | null;
        placedAt: Date;
        paidAt: Date | null;
        shippedAt: Date | null;
        deliveredAt: Date | null;
        cancelledAt: Date | null;
        refundedAt: Date | null;
        paymentExpiresAt: Date | null;
        paymentReminderSentAt: Date | null;
        paymentConfirmedById: string | null;
        paymentConfirmedAt: Date | null;
        parentOrderId: string | null;
    }>>;
    createOrder(dto: CreateOrderDto, adminId?: string): Promise<{
        coupon: {
            id: string;
            discountType: DiscountType;
            discountValue: import("@prisma/client-runtime-utils").Decimal;
            code: string;
        } | null;
        customer: {
            id: string;
            firstName: string;
            lastName: string;
            email: string;
        } | null;
        paymentMethod: {
            id: string;
            name: string;
            code: string;
            type: PaymentMethodType;
            instructions: string | null;
        };
        shippingRate: ({
            zone: {
                id: string;
                name: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            isActive: boolean;
            sortOrder: number;
            createdById: string | null;
            updatedById: string | null;
            price: import("@prisma/client-runtime-utils").Decimal;
            minOrderAmount: import("@prisma/client-runtime-utils").Decimal;
            zoneId: string;
            freeShippingThreshold: import("@prisma/client-runtime-utils").Decimal | null;
            estimatedMin: number | null;
            estimatedMax: number | null;
            estimatedUnit: import("generated/prisma/client").DeliveryUnit;
        }) | null;
        items: ({
            product: {
                id: string;
                name: string;
                slug: string;
            };
            promotion: {
                id: string;
                name: string;
            } | null;
            refundItems: {
                id: string;
                quantity: number;
                amount: import("@prisma/client-runtime-utils").Decimal;
                orderItemId: string;
                refundId: string;
                restockQuantity: boolean;
            }[];
        } & {
            id: string;
            productId: string;
            orderId: string;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            discountAmount: import("@prisma/client-runtime-utils").Decimal;
            productName: string;
            productSku: string;
            productImageUrl: string | null;
            unitCost: import("@prisma/client-runtime-utils").Decimal | null;
            lineTotal: import("@prisma/client-runtime-utils").Decimal;
            promotionId: string | null;
        })[];
        shippingAddress: ({
            department: {
                id: string;
                name: string;
            };
            province: {
                id: string;
                name: string;
            };
            district: {
                id: string;
                name: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            orderId: string;
            phone: string | null;
            alias: string | null;
            recipientName: string;
            departmentId: string;
            provinceId: string;
            districtId: string;
            addressLine: string;
            reference: string | null;
            latitude: import("@prisma/client-runtime-utils").Decimal | null;
            longitude: import("@prisma/client-runtime-utils").Decimal | null;
            sourceAddressId: string | null;
        }) | null;
        transactions: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: TransactionStatus;
            currency: string;
            orderId: string;
            paymentMethodId: string;
            paidAt: Date | null;
            amount: import("@prisma/client-runtime-utils").Decimal;
            gatewayTransactionId: string | null;
            cipCode: string | null;
            cipExpiresAt: Date | null;
            gatewayResponse: import("@prisma/client/runtime/client").JsonValue;
            operationNumber: string | null;
            confirmedById: string | null;
            paidAmount: import("@prisma/client-runtime-utils").Decimal | null;
        }[];
        statusHistory: {
            id: string;
            createdAt: Date;
            changedById: string | null;
            orderId: string;
            comment: string | null;
            fromStatus: OrderStatus | null;
            toStatus: OrderStatus;
        }[];
        logistics: ({
            dispatchedBy: {
                id: string;
                name: string;
            } | null;
            deliveredBy: {
                id: string;
                name: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            orderId: string;
            deliveredAt: Date | null;
            deliveryType: DeliveryType;
            estimatedShipping: import("@prisma/client-runtime-utils").Decimal;
            actualShippingCost: import("@prisma/client-runtime-utils").Decimal | null;
            internalTransportCost: import("@prisma/client-runtime-utils").Decimal | null;
            trackingNumber: string | null;
            courierName: string | null;
            dispatchedAt: Date | null;
            dispatchedById: string | null;
            deliveredById: string | null;
            deliveryEvidenceNote: string | null;
        }) | null;
        claims: ({
            items: ({
                orderItem: {
                    id: string;
                    productId: string;
                    orderId: string;
                    quantity: number;
                    unitPrice: import("@prisma/client-runtime-utils").Decimal;
                    discountAmount: import("@prisma/client-runtime-utils").Decimal;
                    productName: string;
                    productSku: string;
                    productImageUrl: string | null;
                    unitCost: import("@prisma/client-runtime-utils").Decimal | null;
                    lineTotal: import("@prisma/client-runtime-utils").Decimal;
                    promotionId: string | null;
                };
            } & {
                id: string;
                reason: string | null;
                quantity: number;
                claimId: string;
                orderItemId: string;
            })[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            description: string;
            status: import("generated/prisma/client").ClaimStatus;
            orderId: string;
            customerId: string;
            adminNotes: string | null;
            type: import("generated/prisma/client").ClaimType;
            claimNumber: string;
            reasonCategory: import("generated/prisma/client").ClaimReasonCategory;
            customerVoucherAmount: import("@prisma/client-runtime-utils").Decimal | null;
            replacementOrderId: string | null;
            returnCourierName: string | null;
            returnTrackingNumber: string | null;
            returnShipmentNotes: string | null;
            returnShipmentConfirmedAt: Date | null;
            receivedProductCondition: import("generated/prisma/client").ReturnedProductCondition | null;
            internalDamageNote: string | null;
            receivedAdminNote: string | null;
            refundMethod: import("generated/prisma/client").RefundMethod | null;
            refundAccountDetails: string | null;
            reviewedById: string | null;
            reviewNote: string | null;
            internalNote: string | null;
            reviewedAt: Date | null;
            receivedAt: Date | null;
            completedAt: Date | null;
        })[];
        refunds: ({
            items: {
                id: string;
                quantity: number;
                amount: import("@prisma/client-runtime-utils").Decimal;
                orderItemId: string;
                refundId: string;
                restockQuantity: boolean;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            createdById: string | null;
            status: import("generated/prisma/client").RefundStatus;
            reason: string | null;
            orderId: string;
            adminNotes: string | null;
            amount: import("@prisma/client-runtime-utils").Decimal;
            claimId: string | null;
            method: import("generated/prisma/client").RefundMethod;
            processedById: string | null;
            gatewayRefundId: string | null;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: OrderStatus;
        couponId: string | null;
        customerId: string | null;
        guestEmail: string | null;
        orderNumber: string;
        guestName: string | null;
        guestPhone: string | null;
        subtotal: import("@prisma/client-runtime-utils").Decimal;
        discountAmount: import("@prisma/client-runtime-utils").Decimal;
        shippingAmount: import("@prisma/client-runtime-utils").Decimal;
        taxAmount: import("@prisma/client-runtime-utils").Decimal;
        total: import("@prisma/client-runtime-utils").Decimal;
        couponDiscount: import("@prisma/client-runtime-utils").Decimal;
        paymentMethodId: string;
        shippingRateId: string | null;
        claimAsReplacementId: string | null;
        notes: string | null;
        adminNotes: string | null;
        ipAddress: string | null;
        placedAt: Date;
        paidAt: Date | null;
        shippedAt: Date | null;
        deliveredAt: Date | null;
        cancelledAt: Date | null;
        refundedAt: Date | null;
        paymentExpiresAt: Date | null;
        paymentReminderSentAt: Date | null;
        paymentConfirmedById: string | null;
        paymentConfirmedAt: Date | null;
        parentOrderId: string | null;
    }>;
    markAsProcessing(orderId: string, adminId: string): Promise<{
        success: boolean;
        orderId: string;
        newStatus: string;
    }>;
    cancelOrder(orderId: string, dto: CancelOrderDto, adminId: string): Promise<{
        success: boolean;
        orderId: string;
        newStatus: string;
    }>;
    updateOrderStatus(id: string, dto: UpdateOrderDto, adminId?: string): Promise<OrderEntity>;
    handlePaymentConfirmed(orderId: string, gatewayTransactionId: string, gatewayResponse: Record<string, unknown>): Promise<void>;
    private sendOrderCreationEmails;
    private resolveShippingAddress;
    private processItems;
    private resolveCoupon;
    private decrementStock;
    private incrementStock;
    private generateOrderNumber;
    private getFriendlyCancellationReason;
}
export {};

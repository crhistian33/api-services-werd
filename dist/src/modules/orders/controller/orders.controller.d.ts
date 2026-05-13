import type { Request } from 'express';
import { OrdersService } from '../service/orders.service';
import { OrderLogisticsService } from '../service/order-logistics.service';
import { OrderClaimsService } from '../service/order-claims.service';
import { OrderRefundService } from '../service/order-refund.service';
import { OrderPaymentConfirmationService } from '../service/order-payment-confirmation.service';
import { CreateOrderDto, QueryOrderDto, UpdateLogisticsDto, CreateOrderClaimDto, ReviewClaimDto, QueryClaimDto, CancelOrderDto, ConfirmClaimShipmentDto, ConfirmReturnShipmentDto } from '../dto';
import { ConfirmManualPaymentDto } from '../dto/confirm-payment.dto';
import { MarkDeliveredDto } from '../dto/mark-delivered.dto';
import { MarkClaimReceivedDto } from '../dto/mark-claim-received.dto';
import { CompleteRefundDto } from '../dto/complete-refund.dto';
import { CreateRefundDto } from '../dto/create-refund.dto';
import type { AdminJwtPayload, CustomerJwtPayload } from '../../../common/interfaces/jwt-payload.interface';
export declare class OrdersController {
    private readonly ordersService;
    private readonly logisticsService;
    private readonly claimsService;
    private readonly refundService;
    private readonly paymentConfirmationService;
    constructor(ordersService: OrdersService, logisticsService: OrderLogisticsService, claimsService: OrderClaimsService, refundService: OrderRefundService, paymentConfirmationService: OrderPaymentConfirmationService);
    confirmClaimShipment(orderId: string, claimId: string, dto: ConfirmClaimShipmentDto, customer: CustomerJwtPayload): Promise<{
        success: boolean;
        claimId: string;
        status: "APPROVED";
    }>;
    createClaimFromStorefront(orderId: string, dto: CreateOrderClaimDto, customer: CustomerJwtPayload): Promise<{
        order: {
            orderNumber: string;
        };
        customer: {
            firstName: string;
            lastName: string;
            email: string;
        };
        items: ({
            orderItem: {
                productName: string;
                productSku: string;
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
        status: import("../../../../generated/prisma/enums").ClaimStatus;
        orderId: string;
        customerId: string;
        adminNotes: string | null;
        type: import("../../../../generated/prisma/enums").ClaimType;
        claimNumber: string;
        reasonCategory: import("../../../../generated/prisma/enums").ClaimReasonCategory;
        customerVoucherAmount: import("@prisma/client-runtime-utils").Decimal | null;
        replacementOrderId: string | null;
        returnCourierName: string | null;
        returnTrackingNumber: string | null;
        returnShipmentNotes: string | null;
        returnShipmentConfirmedAt: Date | null;
        receivedProductCondition: import("../../../../generated/prisma/enums").ReturnedProductCondition | null;
        internalDamageNote: string | null;
        receivedAdminNote: string | null;
        refundMethod: import("../../../../generated/prisma/enums").RefundMethod | null;
        refundAccountDetails: string | null;
        reviewedById: string | null;
        reviewNote: string | null;
        internalNote: string | null;
        reviewedAt: Date | null;
        receivedAt: Date | null;
        completedAt: Date | null;
    }>;
    createOrderFromStorefront(dto: CreateOrderDto, req: Request, ip: string): Promise<{
        coupon: {
            id: string;
            discountType: import("../../../../generated/prisma/enums").DiscountType;
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
            type: import("../../../../generated/prisma/enums").PaymentMethodType;
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
            estimatedUnit: import("../../../../generated/prisma/enums").DeliveryUnit;
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
            status: import("../../../../generated/prisma/enums").TransactionStatus;
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
            fromStatus: import("../../../../generated/prisma/enums").OrderStatus | null;
            toStatus: import("../../../../generated/prisma/enums").OrderStatus;
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
            deliveryType: import("../../../../generated/prisma/enums").DeliveryType;
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
            status: import("../../../../generated/prisma/enums").ClaimStatus;
            orderId: string;
            customerId: string;
            adminNotes: string | null;
            type: import("../../../../generated/prisma/enums").ClaimType;
            claimNumber: string;
            reasonCategory: import("../../../../generated/prisma/enums").ClaimReasonCategory;
            customerVoucherAmount: import("@prisma/client-runtime-utils").Decimal | null;
            replacementOrderId: string | null;
            returnCourierName: string | null;
            returnTrackingNumber: string | null;
            returnShipmentNotes: string | null;
            returnShipmentConfirmedAt: Date | null;
            receivedProductCondition: import("../../../../generated/prisma/enums").ReturnedProductCondition | null;
            internalDamageNote: string | null;
            receivedAdminNote: string | null;
            refundMethod: import("../../../../generated/prisma/enums").RefundMethod | null;
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
            status: import("../../../../generated/prisma/enums").RefundStatus;
            reason: string | null;
            orderId: string;
            adminNotes: string | null;
            amount: import("@prisma/client-runtime-utils").Decimal;
            claimId: string | null;
            method: import("../../../../generated/prisma/enums").RefundMethod;
            processedById: string | null;
            gatewayRefundId: string | null;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../../../generated/prisma/enums").OrderStatus;
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
    createOrderFromAdmin(dto: CreateOrderDto, admin: AdminJwtPayload): Promise<{
        coupon: {
            id: string;
            discountType: import("../../../../generated/prisma/enums").DiscountType;
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
            type: import("../../../../generated/prisma/enums").PaymentMethodType;
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
            estimatedUnit: import("../../../../generated/prisma/enums").DeliveryUnit;
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
            status: import("../../../../generated/prisma/enums").TransactionStatus;
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
            fromStatus: import("../../../../generated/prisma/enums").OrderStatus | null;
            toStatus: import("../../../../generated/prisma/enums").OrderStatus;
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
            deliveryType: import("../../../../generated/prisma/enums").DeliveryType;
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
            status: import("../../../../generated/prisma/enums").ClaimStatus;
            orderId: string;
            customerId: string;
            adminNotes: string | null;
            type: import("../../../../generated/prisma/enums").ClaimType;
            claimNumber: string;
            reasonCategory: import("../../../../generated/prisma/enums").ClaimReasonCategory;
            customerVoucherAmount: import("@prisma/client-runtime-utils").Decimal | null;
            replacementOrderId: string | null;
            returnCourierName: string | null;
            returnTrackingNumber: string | null;
            returnShipmentNotes: string | null;
            returnShipmentConfirmedAt: Date | null;
            receivedProductCondition: import("../../../../generated/prisma/enums").ReturnedProductCondition | null;
            internalDamageNote: string | null;
            receivedAdminNote: string | null;
            refundMethod: import("../../../../generated/prisma/enums").RefundMethod | null;
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
            status: import("../../../../generated/prisma/enums").RefundStatus;
            reason: string | null;
            orderId: string;
            adminNotes: string | null;
            amount: import("@prisma/client-runtime-utils").Decimal;
            claimId: string | null;
            method: import("../../../../generated/prisma/enums").RefundMethod;
            processedById: string | null;
            gatewayRefundId: string | null;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../../../generated/prisma/enums").OrderStatus;
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
    findAll(query: QueryOrderDto): Promise<import("../../../common/interfaces").PaginatedResult<{
        coupon: {
            id: string;
            discountType: import("../../../../generated/prisma/enums").DiscountType;
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
            type: import("../../../../generated/prisma/enums").PaymentMethodType;
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
            estimatedUnit: import("../../../../generated/prisma/enums").DeliveryUnit;
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
            status: import("../../../../generated/prisma/enums").TransactionStatus;
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
            fromStatus: import("../../../../generated/prisma/enums").OrderStatus | null;
            toStatus: import("../../../../generated/prisma/enums").OrderStatus;
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
            deliveryType: import("../../../../generated/prisma/enums").DeliveryType;
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
            status: import("../../../../generated/prisma/enums").ClaimStatus;
            orderId: string;
            customerId: string;
            adminNotes: string | null;
            type: import("../../../../generated/prisma/enums").ClaimType;
            claimNumber: string;
            reasonCategory: import("../../../../generated/prisma/enums").ClaimReasonCategory;
            customerVoucherAmount: import("@prisma/client-runtime-utils").Decimal | null;
            replacementOrderId: string | null;
            returnCourierName: string | null;
            returnTrackingNumber: string | null;
            returnShipmentNotes: string | null;
            returnShipmentConfirmedAt: Date | null;
            receivedProductCondition: import("../../../../generated/prisma/enums").ReturnedProductCondition | null;
            internalDamageNote: string | null;
            receivedAdminNote: string | null;
            refundMethod: import("../../../../generated/prisma/enums").RefundMethod | null;
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
            status: import("../../../../generated/prisma/enums").RefundStatus;
            reason: string | null;
            orderId: string;
            adminNotes: string | null;
            amount: import("@prisma/client-runtime-utils").Decimal;
            claimId: string | null;
            method: import("../../../../generated/prisma/enums").RefundMethod;
            processedById: string | null;
            gatewayRefundId: string | null;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../../../generated/prisma/enums").OrderStatus;
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
    findAllClaims(query: QueryClaimDto): Promise<{
        data: ({
            order: {
                id: string;
                status: import("../../../../generated/prisma/enums").OrderStatus;
                orderNumber: string;
                total: import("@prisma/client-runtime-utils").Decimal;
            };
            customer: {
                id: string;
                firstName: string;
                lastName: string;
                email: string;
            };
            items: ({
                orderItem: {
                    quantity: number;
                    unitPrice: import("@prisma/client-runtime-utils").Decimal;
                    productName: string;
                    productSku: string;
                    productImageUrl: string | null;
                };
            } & {
                id: string;
                reason: string | null;
                quantity: number;
                claimId: string;
                orderItemId: string;
            })[];
            reviewedBy: {
                id: string;
                name: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            description: string;
            status: import("../../../../generated/prisma/enums").ClaimStatus;
            orderId: string;
            customerId: string;
            adminNotes: string | null;
            type: import("../../../../generated/prisma/enums").ClaimType;
            claimNumber: string;
            reasonCategory: import("../../../../generated/prisma/enums").ClaimReasonCategory;
            customerVoucherAmount: import("@prisma/client-runtime-utils").Decimal | null;
            replacementOrderId: string | null;
            returnCourierName: string | null;
            returnTrackingNumber: string | null;
            returnShipmentNotes: string | null;
            returnShipmentConfirmedAt: Date | null;
            receivedProductCondition: import("../../../../generated/prisma/enums").ReturnedProductCondition | null;
            internalDamageNote: string | null;
            receivedAdminNote: string | null;
            refundMethod: import("../../../../generated/prisma/enums").RefundMethod | null;
            refundAccountDetails: string | null;
            reviewedById: string | null;
            reviewNote: string | null;
            internalNote: string | null;
            reviewedAt: Date | null;
            receivedAt: Date | null;
            completedAt: Date | null;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    registerReturnShipment(claimId: string, dto: ConfirmReturnShipmentDto, admin: AdminJwtPayload): Promise<{
        order: {
            orderNumber: string;
        };
        customer: {
            firstName: string;
            lastName: string;
            email: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        status: import("../../../../generated/prisma/enums").ClaimStatus;
        orderId: string;
        customerId: string;
        adminNotes: string | null;
        type: import("../../../../generated/prisma/enums").ClaimType;
        claimNumber: string;
        reasonCategory: import("../../../../generated/prisma/enums").ClaimReasonCategory;
        customerVoucherAmount: import("@prisma/client-runtime-utils").Decimal | null;
        replacementOrderId: string | null;
        returnCourierName: string | null;
        returnTrackingNumber: string | null;
        returnShipmentNotes: string | null;
        returnShipmentConfirmedAt: Date | null;
        receivedProductCondition: import("../../../../generated/prisma/enums").ReturnedProductCondition | null;
        internalDamageNote: string | null;
        receivedAdminNote: string | null;
        refundMethod: import("../../../../generated/prisma/enums").RefundMethod | null;
        refundAccountDetails: string | null;
        reviewedById: string | null;
        reviewNote: string | null;
        internalNote: string | null;
        reviewedAt: Date | null;
        receivedAt: Date | null;
        completedAt: Date | null;
    }>;
    reviewClaim(claimId: string, dto: ReviewClaimDto, admin: AdminJwtPayload): Promise<{
        status: "APPROVED" | "REJECTED";
        order: {
            paymentMethod: {
                type: import("../../../../generated/prisma/enums").PaymentMethodType;
            };
            items: ({
                product: {
                    id: string;
                    name: string;
                    sku: string;
                    stock: number;
                };
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
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import("../../../../generated/prisma/enums").OrderStatus;
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
        };
        customer: {
            firstName: string;
            lastName: string;
            email: string;
        };
        items: ({
            orderItem: {
                product: {
                    id: string;
                    name: string;
                    sku: string;
                };
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
            };
        } & {
            id: string;
            reason: string | null;
            quantity: number;
            claimId: string;
            orderItemId: string;
        })[];
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        orderId: string;
        customerId: string;
        adminNotes: string | null;
        type: import("../../../../generated/prisma/enums").ClaimType;
        claimNumber: string;
        reasonCategory: import("../../../../generated/prisma/enums").ClaimReasonCategory;
        customerVoucherAmount: import("@prisma/client-runtime-utils").Decimal | null;
        replacementOrderId: string | null;
        returnCourierName: string | null;
        returnTrackingNumber: string | null;
        returnShipmentNotes: string | null;
        returnShipmentConfirmedAt: Date | null;
        receivedProductCondition: import("../../../../generated/prisma/enums").ReturnedProductCondition | null;
        internalDamageNote: string | null;
        receivedAdminNote: string | null;
        refundMethod: import("../../../../generated/prisma/enums").RefundMethod | null;
        refundAccountDetails: string | null;
        reviewedById: string | null;
        reviewNote: string | null;
        internalNote: string | null;
        reviewedAt: Date | null;
        receivedAt: Date | null;
        completedAt: Date | null;
    }>;
    markClaimReceived(claimId: string, dto: MarkClaimReceivedDto, admin: AdminJwtPayload): Promise<{
        success: boolean;
        claimId: string;
    }>;
    completeRefund(claimId: string, dto: CompleteRefundDto, admin: AdminJwtPayload): Promise<{
        success: boolean;
        claimId: string;
        refundId: string;
    }>;
    completeReplacement(claimId: string, admin: AdminJwtPayload): Promise<{
        success: boolean;
        claimId: string;
        replacementOrderId: string;
    }>;
    cancelClaim(claimId: string, customer: CustomerJwtPayload): Promise<{
        success: boolean;
        claimId: string;
    }>;
    deleteClaim(claimId: string): Promise<{
        success: boolean;
    }>;
    createClaimFromAdmin(orderId: string, dto: CreateOrderClaimDto, admin: AdminJwtPayload): Promise<{
        order: {
            orderNumber: string;
        };
        customer: {
            firstName: string;
            lastName: string;
            email: string;
        };
        items: ({
            orderItem: {
                productName: string;
                productSku: string;
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
        status: import("../../../../generated/prisma/enums").ClaimStatus;
        orderId: string;
        customerId: string;
        adminNotes: string | null;
        type: import("../../../../generated/prisma/enums").ClaimType;
        claimNumber: string;
        reasonCategory: import("../../../../generated/prisma/enums").ClaimReasonCategory;
        customerVoucherAmount: import("@prisma/client-runtime-utils").Decimal | null;
        replacementOrderId: string | null;
        returnCourierName: string | null;
        returnTrackingNumber: string | null;
        returnShipmentNotes: string | null;
        returnShipmentConfirmedAt: Date | null;
        receivedProductCondition: import("../../../../generated/prisma/enums").ReturnedProductCondition | null;
        internalDamageNote: string | null;
        receivedAdminNote: string | null;
        refundMethod: import("../../../../generated/prisma/enums").RefundMethod | null;
        refundAccountDetails: string | null;
        reviewedById: string | null;
        reviewNote: string | null;
        internalNote: string | null;
        reviewedAt: Date | null;
        receivedAt: Date | null;
        completedAt: Date | null;
    }>;
    findOne(id: string): Promise<{
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
            images: import("../../images/services/image-record.service").ImageDto[];
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
            deliveryType?: import("../../../../generated/prisma/enums").DeliveryType | undefined;
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
            images: import("../../images/services/image-record.service").ImageDto[];
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
            status: import("../../../../generated/prisma/enums").ClaimStatus;
            orderId: string;
            customerId: string;
            adminNotes: string | null;
            type: import("../../../../generated/prisma/enums").ClaimType;
            claimNumber: string;
            reasonCategory: import("../../../../generated/prisma/enums").ClaimReasonCategory;
            customerVoucherAmount: import("@prisma/client-runtime-utils").Decimal | null;
            replacementOrderId: string | null;
            returnCourierName: string | null;
            returnTrackingNumber: string | null;
            returnShipmentNotes: string | null;
            returnShipmentConfirmedAt: Date | null;
            receivedProductCondition: import("../../../../generated/prisma/enums").ReturnedProductCondition | null;
            internalDamageNote: string | null;
            receivedAdminNote: string | null;
            refundMethod: import("../../../../generated/prisma/enums").RefundMethod | null;
            refundAccountDetails: string | null;
            reviewedById: string | null;
            reviewNote: string | null;
            internalNote: string | null;
            reviewedAt: Date | null;
            receivedAt: Date | null;
            completedAt: Date | null;
        }[];
        refunds: {
            images: import("../../images/services/image-record.service").ImageDto[];
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
            status: import("../../../../generated/prisma/enums").RefundStatus;
            reason: string | null;
            orderId: string;
            adminNotes: string | null;
            amount: import("@prisma/client-runtime-utils").Decimal;
            claimId: string | null;
            method: import("../../../../generated/prisma/enums").RefundMethod;
            processedById: string | null;
            gatewayRefundId: string | null;
        }[];
        coupon: {
            id: string;
            discountType: import("../../../../generated/prisma/enums").DiscountType;
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
            type: import("../../../../generated/prisma/enums").PaymentMethodType;
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
            estimatedUnit: import("../../../../generated/prisma/enums").DeliveryUnit;
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
            status: import("../../../../generated/prisma/enums").TransactionStatus;
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
            fromStatus: import("../../../../generated/prisma/enums").OrderStatus | null;
            toStatus: import("../../../../generated/prisma/enums").OrderStatus;
        }[];
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../../../generated/prisma/enums").OrderStatus;
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
    confirmPayment(id: string, dto: ConfirmManualPaymentDto, admin: AdminJwtPayload): Promise<{
        success: boolean;
        orderId: string;
        newStatus: string;
    }>;
    markProcessing(id: string, admin: AdminJwtPayload): Promise<{
        success: boolean;
        orderId: string;
        newStatus: string;
    }>;
    cancelOrder(id: string, dto: CancelOrderDto, admin: AdminJwtPayload): Promise<{
        success: boolean;
        orderId: string;
        newStatus: string;
    }>;
    markShipped(id: string, dto: UpdateLogisticsDto, admin: AdminJwtPayload): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        orderId: string;
        deliveredAt: Date | null;
        deliveryType: import("../../../../generated/prisma/enums").DeliveryType;
        estimatedShipping: import("@prisma/client-runtime-utils").Decimal;
        actualShippingCost: import("@prisma/client-runtime-utils").Decimal | null;
        internalTransportCost: import("@prisma/client-runtime-utils").Decimal | null;
        trackingNumber: string | null;
        courierName: string | null;
        dispatchedAt: Date | null;
        dispatchedById: string | null;
        deliveredById: string | null;
        deliveryEvidenceNote: string | null;
    }>;
    markDelivered(id: string, dto: MarkDeliveredDto, admin: AdminJwtPayload): Promise<{
        success: boolean;
        orderId: string;
        newStatus: string;
    }>;
    createRefund(orderId: string, dto: CreateRefundDto, admin: AdminJwtPayload): Promise<{
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
        status: import("../../../../generated/prisma/enums").RefundStatus;
        reason: string | null;
        orderId: string;
        adminNotes: string | null;
        amount: import("@prisma/client-runtime-utils").Decimal;
        claimId: string | null;
        method: import("../../../../generated/prisma/enums").RefundMethod;
        processedById: string | null;
        gatewayRefundId: string | null;
    }>;
    getRefunds(orderId: string): Promise<({
        items: ({
            orderItem: {
                product: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    slug: string;
                    description: string | null;
                    createdById: string | null;
                    updatedById: string | null;
                    deletedById: string | null;
                    deletedAt: Date | null;
                    sku: string;
                    shortDescription: string | null;
                    categoryId: string;
                    brandId: string | null;
                    status: import("../../../../generated/prisma/enums").ProductStatus;
                    isFeatured: boolean;
                    stock: number;
                    weight: import("@prisma/client-runtime-utils").Decimal | null;
                    metaTitle: string | null;
                    metaDescription: string | null;
                };
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
            };
        } & {
            id: string;
            quantity: number;
            amount: import("@prisma/client-runtime-utils").Decimal;
            orderItemId: string;
            refundId: string;
            restockQuantity: boolean;
        })[];
        createdBy: {
            name: string;
            email: string;
        } | null;
        processedBy: {
            name: string;
            email: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        createdById: string | null;
        status: import("../../../../generated/prisma/enums").RefundStatus;
        reason: string | null;
        orderId: string;
        adminNotes: string | null;
        amount: import("@prisma/client-runtime-utils").Decimal;
        claimId: string | null;
        method: import("../../../../generated/prisma/enums").RefundMethod;
        processedById: string | null;
        gatewayRefundId: string | null;
    })[]>;
    processRefund(refundId: string, dto: CompleteRefundDto, admin: AdminJwtPayload): Promise<{
        success: boolean;
        refundId: string;
    }>;
}

import { ImageRecordService } from '../../images/services/image-record.service';
import { MailService } from '../../mail/service/mail.service';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateOrderClaimDto, ReviewClaimDto, QueryClaimDto, ConfirmClaimShipmentDto, ConfirmReturnShipmentDto } from '../dto';
import { MarkClaimReceivedDto } from '../dto/mark-claim-received.dto';
import { Prisma, ClaimType, OrderStatus, ReturnedProductCondition, RefundMethod, ClaimStatus, ClaimReasonCategory } from 'generated/prisma/client';
import { OrderRefundService } from './order-refund.service';
export type ClaimWithRelations = Prisma.OrderClaimGetPayload<{
    include: typeof CLAIM_INCLUDE;
}>;
export declare const CLAIM_INCLUDE: {
    readonly customer: {
        readonly select: {
            readonly firstName: true;
            readonly lastName: true;
            readonly email: true;
        };
    };
    readonly order: {
        readonly include: {
            readonly items: {
                readonly include: {
                    readonly product: {
                        readonly select: {
                            readonly id: true;
                            readonly name: true;
                            readonly stock: true;
                            readonly sku: true;
                        };
                    };
                };
            };
            readonly paymentMethod: {
                readonly select: {
                    readonly type: true;
                };
            };
        };
    };
    readonly items: {
        readonly include: {
            readonly orderItem: {
                readonly include: {
                    readonly product: {
                        readonly select: {
                            readonly id: true;
                            readonly name: true;
                            readonly sku: true;
                        };
                    };
                };
            };
        };
    };
};
export declare class OrderClaimsService {
    private readonly prisma;
    private readonly imageRecord;
    private readonly mailService;
    private readonly orderRefundService;
    constructor(prisma: PrismaService, imageRecord: ImageRecordService, mailService: MailService, orderRefundService: OrderRefundService);
    private findClaimById;
    findAll(query: QueryClaimDto): Promise<{
        data: ({
            order: {
                id: string;
                status: OrderStatus;
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
            status: ClaimStatus;
            orderId: string;
            customerId: string;
            adminNotes: string | null;
            type: ClaimType;
            claimNumber: string;
            reasonCategory: ClaimReasonCategory;
            customerVoucherAmount: import("@prisma/client-runtime-utils").Decimal | null;
            replacementOrderId: string | null;
            returnCourierName: string | null;
            returnTrackingNumber: string | null;
            returnShipmentNotes: string | null;
            returnShipmentConfirmedAt: Date | null;
            receivedProductCondition: ReturnedProductCondition | null;
            internalDamageNote: string | null;
            receivedAdminNote: string | null;
            refundMethod: RefundMethod | null;
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
    createClaim(customerId: string, orderId: string, dto: CreateOrderClaimDto): Promise<{
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
        status: ClaimStatus;
        orderId: string;
        customerId: string;
        adminNotes: string | null;
        type: ClaimType;
        claimNumber: string;
        reasonCategory: ClaimReasonCategory;
        customerVoucherAmount: import("@prisma/client-runtime-utils").Decimal | null;
        replacementOrderId: string | null;
        returnCourierName: string | null;
        returnTrackingNumber: string | null;
        returnShipmentNotes: string | null;
        returnShipmentConfirmedAt: Date | null;
        receivedProductCondition: ReturnedProductCondition | null;
        internalDamageNote: string | null;
        receivedAdminNote: string | null;
        refundMethod: RefundMethod | null;
        refundAccountDetails: string | null;
        reviewedById: string | null;
        reviewNote: string | null;
        internalNote: string | null;
        reviewedAt: Date | null;
        receivedAt: Date | null;
        completedAt: Date | null;
    }>;
    createClaimAsAdmin(orderId: string, dto: CreateOrderClaimDto, adminId: string): Promise<{
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
        status: ClaimStatus;
        orderId: string;
        customerId: string;
        adminNotes: string | null;
        type: ClaimType;
        claimNumber: string;
        reasonCategory: ClaimReasonCategory;
        customerVoucherAmount: import("@prisma/client-runtime-utils").Decimal | null;
        replacementOrderId: string | null;
        returnCourierName: string | null;
        returnTrackingNumber: string | null;
        returnShipmentNotes: string | null;
        returnShipmentConfirmedAt: Date | null;
        receivedProductCondition: ReturnedProductCondition | null;
        internalDamageNote: string | null;
        receivedAdminNote: string | null;
        refundMethod: RefundMethod | null;
        refundAccountDetails: string | null;
        reviewedById: string | null;
        reviewNote: string | null;
        internalNote: string | null;
        reviewedAt: Date | null;
        receivedAt: Date | null;
        completedAt: Date | null;
    }>;
    reviewClaim(claimId: string, dto: ReviewClaimDto, adminId: string): Promise<{
        status: "APPROVED" | "REJECTED";
        order: {
            paymentMethod: {
                type: import("generated/prisma/client").PaymentMethodType;
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
        type: ClaimType;
        claimNumber: string;
        reasonCategory: ClaimReasonCategory;
        customerVoucherAmount: import("@prisma/client-runtime-utils").Decimal | null;
        replacementOrderId: string | null;
        returnCourierName: string | null;
        returnTrackingNumber: string | null;
        returnShipmentNotes: string | null;
        returnShipmentConfirmedAt: Date | null;
        receivedProductCondition: ReturnedProductCondition | null;
        internalDamageNote: string | null;
        receivedAdminNote: string | null;
        refundMethod: RefundMethod | null;
        refundAccountDetails: string | null;
        reviewedById: string | null;
        reviewNote: string | null;
        internalNote: string | null;
        reviewedAt: Date | null;
        receivedAt: Date | null;
        completedAt: Date | null;
    }>;
    private handleCancellation;
    markClaimReceived(claimId: string, dto: MarkClaimReceivedDto, adminId: string): Promise<{
        success: boolean;
        claimId: string;
    }>;
    completeReplacement(claimId: string, adminId: string): Promise<{
        success: boolean;
        claimId: string;
        replacementOrderId: string;
    }>;
    cancelClaim(claimId: string, customerId: string): Promise<{
        success: boolean;
        claimId: string;
    }>;
    deleteClaim(claimId: string): Promise<{
        success: boolean;
    }>;
    confirmClaimShipment(claimId: string, dto: ConfirmClaimShipmentDto, customerId: string): Promise<{
        success: boolean;
        claimId: string;
        status: "APPROVED";
    }>;
    registerReturnShipment(claimId: string, dto: ConfirmReturnShipmentDto, adminId: string): Promise<{
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
        status: ClaimStatus;
        orderId: string;
        customerId: string;
        adminNotes: string | null;
        type: ClaimType;
        claimNumber: string;
        reasonCategory: ClaimReasonCategory;
        customerVoucherAmount: import("@prisma/client-runtime-utils").Decimal | null;
        replacementOrderId: string | null;
        returnCourierName: string | null;
        returnTrackingNumber: string | null;
        returnShipmentNotes: string | null;
        returnShipmentConfirmedAt: Date | null;
        receivedProductCondition: ReturnedProductCondition | null;
        internalDamageNote: string | null;
        receivedAdminNote: string | null;
        refundMethod: RefundMethod | null;
        refundAccountDetails: string | null;
        reviewedById: string | null;
        reviewNote: string | null;
        internalNote: string | null;
        reviewedAt: Date | null;
        receivedAt: Date | null;
        completedAt: Date | null;
    }>;
    private isFullCancellation;
    private calculateCancelledAmount;
    private createHistoryEntry;
    private buildTimelineSummary;
    private validateClaimForOrderStatus;
    private sendReviewEmail;
    private getAdminEmails;
    private generateClaimNumber;
}

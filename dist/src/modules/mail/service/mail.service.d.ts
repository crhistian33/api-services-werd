import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { ClaimType } from 'generated/prisma/client';
interface OrderConfirmedContext {
    customerName: string;
    orderNumber: string;
    placedAt: string;
    items: {
        productName: string;
        productSku: string;
        quantity: number;
        lineTotal: string;
    }[];
    total: string;
    trackingUrl: string;
    isCashOnDelivery?: boolean;
    cashOnDeliveryInstructions?: string;
}
interface OrderShippedContext {
    customerName: string;
    orderNumber: string;
    deliveryType: 'COURIER' | 'LOCAL_MOTORIZED';
    trackingNumber?: string;
    courierName?: string;
    estimatedDelivery?: string;
}
interface OrderDeliveredContext {
    customerName: string;
    orderNumber: string;
}
interface ClaimCreatedContext {
    customerName: string;
    claimNumber: string;
    claimTypeLabel: string;
    orderNumber: string;
    description: string;
    items: {
        productName: string;
        quantity: number;
    }[];
}
interface ClaimRejectedContext {
    customerName: string;
    claimNumber: string;
    orderNumber: string;
    reviewNote: string;
}
interface OrderPendingPaymentContext {
    customerName: string;
    orderNumber: string;
    total: string;
    paymentMethodName: string;
    paymentInstructions?: string;
    whatsappNumber?: string;
    paymentExpiresAt: string;
}
interface OrderPaymentReminderContext {
    customerName: string;
    orderNumber: string;
    total: string;
    paymentMethod: string;
    horasRestantes: number;
    paymentExpiresAt: string;
    whatsappNumber?: string;
}
interface OrderPaymentConfirmedContext {
    customerName: string;
    orderNumber: string;
    total: string;
    operationNumber: string;
    paymentMethod: string;
    confirmedAt: string;
}
interface OrderCancelledNoPaymentContext {
    customerName: string;
    orderNumber: string;
    paymentMethod: string;
    total: string;
}
interface OrderCancelledByAdminContext {
    customerName: string;
    orderNumber: string;
    cancellationReason: string;
    refundPending?: boolean;
    supportWhatsapp?: string | null;
    supportEmail?: string | null;
    canReorder?: boolean;
    storeUrl?: string;
}
interface OrderProcessingContext {
    customerName: string;
    orderNumber: string;
    estimatedDays?: string;
}
interface OrderNewAdminContext {
    orderNumber: string;
    total: string;
    customerName: string;
    paymentMethod: string;
    items: {
        productName: string;
        quantity: number;
        lineTotal: string;
    }[];
}
interface OrderRefundedContext {
    customerName: string;
    orderNumber: string;
    refundAmount: number;
    refundMethod: string;
    refundDate: string;
    evidenceImageUrl?: string;
}
interface ClaimShippedAdminContext {
    claimNumber: string;
    orderNumber: string;
    customerName: string;
    claimType: string;
    courierName: string;
    trackingNumber: string;
    items: string;
    shippingCost?: number;
}
interface ClaimShipmentConfirmedContext {
    customerName: string;
    claimNumber: string;
    claimType: string;
    orderNumber: string;
    trackingNumber: string;
    courierName: string;
}
export declare class MailService {
    private readonly mailerService;
    private readonly config;
    constructor(mailerService: MailerService, config: ConfigService);
    private get storeFrontendUrl();
    private get storeReturnAddress();
    private send;
    sendVerificationEmail(email: string, code: string): Promise<void>;
    sendPasswordResetEmail(email: string, code: string): Promise<void>;
    sendOrderConfirmed(email: string, ctx: OrderConfirmedContext): Promise<void>;
    sendOrderShipped(email: string, ctx: OrderShippedContext): Promise<void>;
    sendOrderDelivered(email: string, ctx: OrderDeliveredContext): Promise<void>;
    sendOrderPendingPayment(email: string, ctx: OrderPendingPaymentContext): Promise<void>;
    sendPaymentReminder(email: string, ctx: OrderPaymentReminderContext): Promise<void>;
    sendOrderPaymentConfirmed(email: string, ctx: OrderPaymentConfirmedContext): Promise<void>;
    sendOrderCancelledNoPayment(email: string, ctx: OrderCancelledNoPaymentContext): Promise<void>;
    sendOrderCancelledByAdmin(email: string, ctx: OrderCancelledByAdminContext): Promise<void>;
    sendOrderProcessing(email: string, ctx: OrderProcessingContext): Promise<void>;
    sendOrderNewAdmin(emails: string[], ctx: OrderNewAdminContext): Promise<void>;
    sendClaimCreated(email: string, ctx: ClaimCreatedContext): Promise<void>;
    sendClaimApproved(email: string, claim: {
        customerName: string;
        claimNumber: string;
        type: ClaimType;
        orderNumber: string;
        reviewNote?: string;
        totalRefundedAmount?: number;
    }): Promise<void>;
    sendClaimRejected(email: string, ctx: ClaimRejectedContext): Promise<void>;
    sendClaimCompleted(email: string, claim: {
        customerName: string;
        claimNumber: string;
        type: ClaimType;
        totalRefundedAmount?: number;
        completedAt: Date;
    }): Promise<void>;
    sendOrderRefunded(email: string, ctx: OrderRefundedContext): Promise<void>;
    sendClaimShippedAdmin(emails: string[], ctx: ClaimShippedAdminContext): Promise<void>;
    sendClaimShipmentConfirmed(email: string, ctx: ClaimShipmentConfirmedContext): Promise<void>;
}
export {};

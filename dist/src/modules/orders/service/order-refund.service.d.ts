import { PrismaService } from '../../../prisma/prisma.service';
import { MailService } from '../../mail/service/mail.service';
import { CreateRefundDto } from '../dto/create-refund.dto';
import { Prisma, RefundStatus } from 'generated/prisma/client';
import { CompleteRefundDto } from '../dto';
import { ImageRecordService } from '../../images/services/image-record.service';
export type ClaimForRefund = Prisma.OrderClaimGetPayload<{
    include: {
        customer: {
            select: {
                firstName: true;
                email: true;
            };
        };
        order: {
            include: {
                items: {
                    include: {
                        refundItems: true;
                    };
                };
                paymentMethod: {
                    select: {
                        type: true;
                    };
                };
            };
        };
        items: {
            include: {
                orderItem: {
                    select: {
                        id: true;
                        unitPrice: true;
                        quantity: true;
                        productName: true;
                    };
                };
            };
        };
    };
}>;
export declare class OrderRefundService {
    private readonly prisma;
    private readonly mailService;
    private readonly imageRecord;
    constructor(prisma: PrismaService, mailService: MailService, imageRecord: ImageRecordService);
    isClaimReadyForRefund(claim: ClaimForRefund): boolean;
    processClaimRefund(claimId: string, dto: CompleteRefundDto, adminId: string): Promise<{
        success: boolean;
        claimId: string;
        refundId: string;
    }>;
    createRefund(orderId: string, dto: CreateRefundDto, adminId: string): Promise<{
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
        status: RefundStatus;
        reason: string | null;
        orderId: string;
        adminNotes: string | null;
        amount: import("@prisma/client-runtime-utils").Decimal;
        claimId: string | null;
        method: import("generated/prisma/client").RefundMethod;
        processedById: string | null;
        gatewayRefundId: string | null;
    }>;
    private checkIfTotalRefund;
    getRefundsByOrder(orderId: string): Promise<({
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
                    status: import("generated/prisma/client").ProductStatus;
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
        status: RefundStatus;
        reason: string | null;
        orderId: string;
        adminNotes: string | null;
        amount: import("@prisma/client-runtime-utils").Decimal;
        claimId: string | null;
        method: import("generated/prisma/client").RefundMethod;
        processedById: string | null;
        gatewayRefundId: string | null;
    })[]>;
    processRefund(refundId: string, dto: CompleteRefundDto, adminId: string): Promise<{
        success: boolean;
        refundId: string;
    }>;
}

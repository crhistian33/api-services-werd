import { ClaimType, ClaimReasonCategory, ClaimStatus } from 'generated/prisma/client';
export declare class ClaimItemDto {
    orderItemId: string;
    quantity: number;
}
export declare class CreateOrderClaimDto {
    type: ClaimType;
    reasonCategory: ClaimReasonCategory;
    description: string;
    adminNotes?: string;
    items: ClaimItemDto[];
    tempImageIds?: string[];
    internalNote?: string;
    autoApprove?: boolean;
    autoApproveNote?: string;
    refundMethod?: string;
    refundAccountDetails?: string;
}
export declare class ReviewClaimDto {
    action: 'APPROVED' | 'REJECTED';
    reviewNote?: string;
    internalNote?: string;
}
export declare class QueryClaimDto {
    status?: ClaimStatus;
    type?: ClaimType;
    search?: string;
    page?: number;
    limit?: number;
}

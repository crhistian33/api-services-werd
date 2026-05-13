import { RefundMethod } from 'generated/prisma/client';
export declare class CompleteRefundDto {
    refundMethod: RefundMethod;
    reason?: string;
    gatewayRefundId?: string;
    adminNotes?: string;
    tempImageIds?: string[];
}

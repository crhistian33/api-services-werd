export declare class RefundRequestItemDto {
    orderItemId: string;
    quantity: number;
    reason?: string;
}
export declare class CreateRefundRequestDto {
    reason: string;
    items: RefundRequestItemDto[];
}
export declare class ReviewRefundRequestDto {
    action: 'approved' | 'rejected';
    reviewNote?: string;
}

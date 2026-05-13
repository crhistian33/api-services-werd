export declare class RefundItemDto {
    orderItemId: string;
    quantity: number;
}
export declare class CreateRefundDto {
    reason?: string;
    items: RefundItemDto[];
}

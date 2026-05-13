import { OrderAddressDto } from './order-address.dto';
export declare class CreateOrderItemDto {
    productId: string;
    quantity: number;
    promotionId?: string;
}
export declare class CreateOrderDto {
    customerId?: string;
    guestEmail?: string;
    guestName?: string;
    guestPhone?: string;
    shippingAddressId?: string;
    shippingAddress?: OrderAddressDto;
    saveAddressToProfile?: boolean;
    shippingRateId: string;
    paymentMethodId: string;
    couponId?: string;
    items: CreateOrderItemDto[];
    notes?: string;
    ipAddress?: string;
}

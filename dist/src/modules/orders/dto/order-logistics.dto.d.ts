import { DeliveryType } from 'generated/prisma/client';
export declare class UpdateLogisticsDto {
    deliveryType: DeliveryType;
    courierName?: string;
    trackingNumber?: string;
    actualShippingCost?: number;
    internalTransportCost?: number;
    tempImageIds?: string[];
}

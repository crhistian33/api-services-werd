import { DeliveryUnit } from 'generated/prisma/client';
export declare class CreateShippingRateDto {
    name: string;
    price: number;
    minOrderAmount?: number;
    freeShippingThreshold?: number;
    estimatedMin?: number;
    estimatedMax?: number;
    estimatedUnit?: DeliveryUnit;
    sortOrder?: number;
    isActive?: boolean;
}

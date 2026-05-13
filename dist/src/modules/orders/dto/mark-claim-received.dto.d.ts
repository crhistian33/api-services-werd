import { ReturnedProductCondition } from 'generated/prisma/client';
export declare class MarkClaimReceivedDto {
    productCondition: ReturnedProductCondition;
    internalDamageNote?: string;
    adminNote?: string;
}

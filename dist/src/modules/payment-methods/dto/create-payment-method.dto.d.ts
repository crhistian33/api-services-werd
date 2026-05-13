import { PaymentMethodType } from 'generated/prisma/client';
export declare class CreatePaymentMethodDto {
    code: string;
    name: string;
    type: PaymentMethodType;
    config?: Record<string, any>;
    instructions?: string;
    isActive?: boolean;
    sortOrder?: number;
}

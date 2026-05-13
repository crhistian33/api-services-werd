import { OrderStatus } from 'generated/prisma/client';
export declare class UpdateOrderDto {
    status?: OrderStatus;
    adminNotes?: string;
    statusComment?: string;
}

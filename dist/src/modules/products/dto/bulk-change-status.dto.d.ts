import { ProductStatus } from 'generated/prisma/enums';
export declare class BulkChangeStatusProductDto {
    ids: string[];
    status: ProductStatus;
}

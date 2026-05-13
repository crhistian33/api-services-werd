import { OrderStatus } from 'generated/prisma/client';
import { PaginationDto } from '../../../common/dto/pagination.dto';
export declare class QueryOrderDto extends PaginationDto {
    status?: OrderStatus;
    customerId?: string;
    paymentMethodId?: string;
}

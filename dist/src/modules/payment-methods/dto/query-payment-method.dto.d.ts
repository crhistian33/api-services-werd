import { PaginationDto } from 'src/common/dto/pagination.dto';
import { PaymentMethodType } from 'generated/prisma/client';
export declare class QueryPaymentMethodDto extends PaginationDto {
    isActive?: boolean;
    type?: PaymentMethodType;
    onlyTrash?: boolean;
}

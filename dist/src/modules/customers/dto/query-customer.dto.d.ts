import { PaginationDto } from 'src/common/dto/pagination.dto';
export declare class QueryCustomerDto extends PaginationDto {
    isActive?: boolean;
    isVerified?: boolean;
    onlyTrash?: boolean;
}

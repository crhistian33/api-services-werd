import { ProductStatus } from 'generated/prisma/client';
import { PaginationDto } from 'src/common/dto/pagination.dto';
export declare class QueryProductDto extends PaginationDto {
    categoryId?: string;
    brandId?: string;
    status?: ProductStatus;
    isFeatured?: boolean;
    onlyTrash?: boolean;
}

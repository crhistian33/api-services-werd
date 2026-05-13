import { PageStatus } from 'generated/prisma/enums';
import { PaginationDto } from 'src/common/dto/pagination.dto';
export declare class QueryPageDto extends PaginationDto {
    status?: PageStatus;
    onlyTrash?: boolean;
}

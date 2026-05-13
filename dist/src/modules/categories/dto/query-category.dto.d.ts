import { PaginationDto } from '../../../common/dto/pagination.dto';
export declare class QueryCategoryDto extends PaginationDto {
    isActive?: boolean;
    parentId?: string;
    onlyTrash?: boolean;
}

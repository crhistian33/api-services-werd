import { LinkType } from 'generated/prisma/client';
import { PaginationDto } from '../../../common/dto/pagination.dto';
export declare class QueryHeroSlideDto extends PaginationDto {
    isActive?: boolean;
    linkType?: LinkType;
    onlyTrash?: boolean;
}

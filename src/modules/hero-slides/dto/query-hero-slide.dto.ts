import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional, IsEnum } from 'class-validator';
import { LinkType } from 'generated/prisma/client';
import { PaginationDto } from '../../../common/dto/pagination.dto';

export class QueryHeroSlideDto extends PaginationDto {
  @ApiPropertyOptional({ type: Boolean, example: true })
  @IsOptional()
  @Transform(({ value }) => {
    if (value === '' || value === undefined || value === null) return undefined;
    if (value === 'true' || value === true) return true;
    if (value === 'false' || value === false) return false;
    return undefined;
  })
  isActive?: boolean;

  @ApiPropertyOptional({
    example: LinkType.product,
    enum: Object.values(LinkType),
  })
  @IsOptional()
  @IsEnum(LinkType)
  linkType?: LinkType;

  @ApiPropertyOptional({
    example: true,
    description: 'Filtrar solo destacados eliminados (soft-deleted)',
  })
  @IsOptional()
  @Transform(({ value }) => {
    if (value === '' || value === undefined || value === null) return undefined;
    if (value === 'true' || value === true) return true;
    if (value === 'false' || value === false) return false;
    return undefined;
  })
  onlyTrash?: boolean;
}

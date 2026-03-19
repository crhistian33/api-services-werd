import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsBoolean, IsInt, Min, IsEnum } from 'class-validator';
import { LinkType } from 'generated/prisma/client';
import { PaginationDto } from 'src/common/dto/pagination.dto';

export class QueryHeroSlideDto extends PaginationDto {
  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({
    example: LinkType.product,
    enum: Object.values(LinkType),
  })
  @IsOptional()
  @IsEnum(LinkType)
  linkType?: LinkType;

  @ApiPropertyOptional({ example: 0 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  sortOrder?: number;
}

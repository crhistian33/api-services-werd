import { ApiPropertyOptional } from '@nestjs/swagger';
import { PaginationDto } from '../../../common/dto/pagination.dto';
import { Type } from 'class-transformer';
import { IsBoolean, IsOptional, IsUUID } from 'class-validator';

export class QueryCategoryDto extends PaginationDto {
  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @Type(() => Boolean) // para query params: "true" → true
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({
    example: 'uuid-padre',
    description: 'Filtrar por categoría padre',
  })
  @IsOptional()
  @IsUUID()
  parentId?: string;
}

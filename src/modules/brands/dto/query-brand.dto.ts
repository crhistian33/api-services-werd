import { ApiPropertyOptional } from '@nestjs/swagger';
import { PaginationDto } from '../../../common/dto/pagination.dto';
import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';

export class QueryBrandDto extends PaginationDto {
  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @Type(() => Boolean) // para query params: "true" → true
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({
    example: true,
    description: 'Filtrar solo categorías eliminadas (soft-deleted)',
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

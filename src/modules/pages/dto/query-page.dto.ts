import { ApiPropertyOptional } from '@nestjs/swagger';
import { PageStatus } from 'generated/prisma/enums';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { IsEnum, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class QueryPageDto extends PaginationDto {
  @ApiPropertyOptional({
    example: PageStatus.published,
    enum: Object.values(PageStatus),
  })
  @IsOptional()
  @IsEnum(PageStatus)
  status?: PageStatus;

  @ApiPropertyOptional({
    example: true,
    description: 'Filtrar solo páginas eliminadas (soft-deleted)',
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

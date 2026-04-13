import { PaginationDto } from 'src/common/dto/pagination.dto';
import { IsBoolean, IsEnum, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { PaymentMethodType } from 'generated/prisma/client';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class QueryPaymentMethodDto extends PaginationDto {
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  isActive?: boolean;

  @IsOptional()
  @IsEnum(['card', 'wallet', 'cash_code', 'cash_on_delivery'])
  type?: PaymentMethodType;

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

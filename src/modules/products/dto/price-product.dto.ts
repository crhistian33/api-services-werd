import { IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class SetPriceDto {
  @ApiProperty({ example: 299.99 })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiPropertyOptional({
    example: 349.99,
    description: 'Precio tachado — debe ser mayor al precio actual',
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  compareAtPrice?: number;

  @ApiPropertyOptional({ example: 150.0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  cost?: number;

  @ApiPropertyOptional({
    example: 'uuid-del-admin',
    description: 'ID del admin que realiza el cambio (para historial)',
  })
  @IsOptional()
  @IsUUID()
  changedById?: string;

  @ApiPropertyOptional({
    example: 'Ajuste por temporada de verano',
    description: 'Motivo del cambio de precio',
  })
  @IsOptional()
  @IsString()
  reason?: string;
}

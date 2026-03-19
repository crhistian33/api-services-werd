import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiPropertyOptional({
    example: 'uuid-del-admin',
    description:
      'ID del admin que realiza el cambio (para historial de precio)',
  })
  @IsOptional()
  @IsUUID()
  changedById?: string;

  @ApiPropertyOptional({
    example: 'Corrección de precio por error de carga',
    description: 'Motivo del cambio de precio',
  })
  @IsOptional()
  @IsString()
  reason?: string;
}

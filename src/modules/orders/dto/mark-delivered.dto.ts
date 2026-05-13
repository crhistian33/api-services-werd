import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, Min, IsUUID } from 'class-validator';

export class MarkDeliveredDto {
  @ApiPropertyOptional({
    description: 'Nota de evidencia de entrega',
    example: 'Entregado en perfecto estado al cliente',
  })
  @IsOptional()
  @IsString()
  deliveryEvidenceNote?: string;

  @ApiPropertyOptional({
    description: 'IDs de imágenes de evidencia de entrega',
    example: ['550e8400-e29b-41d4-a716-446655440000'],
  })
  @IsOptional()
  @IsUUID('4', { each: true })
  tempImageIds?: string[];

  @ApiPropertyOptional({
    description: 'Monto cobrado al cliente (solo contraentrega)',
    example: 150.0,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  cashCollectedAmount?: number;
}

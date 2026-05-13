import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  Min,
  IsUUID,
} from 'class-validator';

export class ConfirmClaimShipmentDto {
  @ApiProperty({
    description: 'Nombre de la empresa de envío (courier)',
    example: 'Olva Courier',
  })
  @IsString()
  @IsNotEmpty()
  returnCourierName: string;

  @ApiProperty({
    description: 'Número de tracking del envío de retorno',
    example: 'TRK-982347234',
  })
  @IsString()
  @IsNotEmpty()
  returnTrackingNumber: string;

  @ApiPropertyOptional({
    description: 'Notas adicionales sobre el envío de retorno',
  })
  @IsOptional()
  @IsString()
  returnShipmentNotes?: string;

  @ApiPropertyOptional({
    description:
      'Costo del envío de retorno. Solo aplica si la tienda asume este gasto (product_fault o store_error)',
    example: 15.0,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  returnShippingCost?: number;

  @ApiPropertyOptional({
    description:
      'IDs de imágenes temporales del comprobante de envío (voucher, foto del paquete)',
    type: [String],
    example: ['550e8400-e29b-41d4-a716-446655440000'],
  })
  @IsOptional()
  @IsUUID('4', { each: true })
  tempImageIds?: string[];

  @ApiPropertyOptional({
    description:
      'Método preferido para recibir el reembolso (si aplica refund)',
    example: 'BANK_TRANSFER',
  })
  @IsOptional()
  @IsString()
  refundMethod?: string;

  @ApiPropertyOptional({
    description: 'Número de cuenta o celular para el reembolso (si aplica)',
    example: '987654321',
  })
  @IsOptional()
  @IsString()
  refundAccountDetails?: string;
}

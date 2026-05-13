import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsUUID, IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class ConfirmReturnShipmentDto {
  @ApiProperty({ description: 'Nombre del courier o empresa de envío' })
  @IsString()
  courierName: string;

  @ApiProperty({ description: 'Número de tracking del envío de retorno' })
  @IsString()
  trackingNumber: string;

  @ApiPropertyOptional({
    description: 'IDs de imágenes del comprobante de envío',
  })
  @IsOptional()
  @IsUUID('4', { each: true })
  tempImageIds?: string[];

  @ApiPropertyOptional({ description: 'Monto del envío de retorno (voucher)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  customerVoucherAmount?: number;

  @ApiPropertyOptional({ description: 'Notas adicionales' })
  @IsOptional()
  @IsString()
  notes?: string;

  // ✅ Nuevos campos para reembolso
  @ApiPropertyOptional({ description: 'Método de reembolso preferido' })
  @IsOptional()
  @IsString()
  refundMethod?: string;

  @ApiPropertyOptional({ description: 'Datos para el reembolso' })
  @IsOptional()
  @IsString()
  refundAccountDetails?: string;
}

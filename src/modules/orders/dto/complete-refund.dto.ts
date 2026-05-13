import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { RefundMethod } from 'generated/prisma/client';

export class CompleteRefundDto {
  @ApiProperty({
    enum: RefundMethod,
    description:
      'CARD: Extorno en tarjeta. ' +
      'WALLET: reembolso al método que pagó con billetera digital. ' +
      'STORE_CREDIT: crédito en la tienda (cupón). ' +
      'BANK_TRANSFER: transferencia bancaria manual.',
  })
  @IsEnum(RefundMethod)
  refundMethod: RefundMethod;

  @ApiPropertyOptional({
    example: 'Reembolso procesado. Nro. de transferencia: 0012345.',
    description:
      'Notas internas del admin sobre el procesamiento del reembolso.',
  })
  @IsOptional()
  @IsString()
  reason?: string;

  @ApiPropertyOptional({
    example: 'CULQI-REF-20250422-001',
    description:
      'ID de la transacción de reembolso generada por la pasarela de pago (si aplica).',
  })
  @IsOptional()
  @IsString()
  gatewayRefundId?: string;

  @ApiPropertyOptional({
    example: 'Reembolso procesado. Nro. de transferencia: 0012345.',
    description:
      'Notas internas del admin sobre el procesamiento del reembolso.',
  })
  @IsOptional()
  @IsString()
  adminNotes?: string;

  @ApiPropertyOptional({
    description: 'IDs de imágenes de evidencia del reembolso',
    type: [String],
  })
  @IsOptional()
  @IsUUID('4', { each: true })
  tempImageIds?: string[];
}

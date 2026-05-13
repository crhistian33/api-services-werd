import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class ConfirmManualPaymentDto {
  @ApiProperty({
    example: 'YAP-2025042200123',
    description:
      'Número de operación / código de transacción proporcionado por el cliente. ' +
      'Para YAPE/PLIN: el código de 6 u 8 dígitos. Para transferencia: el número de operación del banco.',
  })
  @IsString()
  operationNumber: string;

  @ApiProperty({
    example: 299.99,
    description:
      'Monto que el cliente efectivamente pagó. ' +
      'Debe coincidir con el total del pedido. Se registra para auditoría financiera.',
  })
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  paidAmount: number;

  @ApiPropertyOptional({
    example: 'Pago recibido vía YAPE. Captura validada.',
    description: 'Notas internas del admin (no visibles al cliente).',
  })
  @IsOptional()
  @IsString()
  adminNotes?: string;
}

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CancelOrderDto {
  @ApiProperty({
    enum: [
      'customer_request',
      'no_payment',
      'no_stock',
      'fraud',
      'wrong_address',
      'damaged_in_warehouse',
      'other',
    ],
    description: 'Motivo de cancelación',
    example: 'customer_request',
  })
  @IsString()
  reason: string;

  @ApiPropertyOptional({
    description: 'Detalle adicional del motivo',
    example: 'El cliente llamó para cancelar porque encontró mejor precio',
  })
  @IsOptional()
  @IsString()
  reasonDetail?: string;

  @ApiPropertyOptional({
    description: 'Notas internas del admin',
    example: 'Cliente VIP, ofrecer descuento en próxima compra',
  })
  @IsOptional()
  @IsString()
  adminNotes?: string;
}

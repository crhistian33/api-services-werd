import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsInt,
  IsPositive,
  IsString,
  IsUUID,
  ArrayMinSize,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

export class RefundItemDto {
  @ApiProperty({ description: 'UUID del OrderItem a devolver' })
  @IsUUID()
  orderItemId: string;

  @ApiProperty({ description: 'Cantidad de unidades a devolver', example: 1 })
  @IsInt()
  @IsPositive()
  quantity: number;
}

export class CreateRefundDto {
  @ApiProperty({
    description: 'Motivo de la devolución',
    example: 'Producto llegó defectuoso',
  })
  @IsString()
  @IsOptional()
  reason?: string;

  @ApiProperty({
    type: [RefundItemDto],
    description:
      'Ítems a devolver. Puede ser un subconjunto del pedido (devolución parcial). ' +
      'Si cubre el 100% de todos los ítems, el pedido pasa a estado "refunded".',
  })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => RefundItemDto)
  items: RefundItemDto[];
}

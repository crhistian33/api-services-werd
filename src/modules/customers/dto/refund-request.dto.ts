import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsUUID,
  IsInt,
  IsPositive,
  IsOptional,
  IsArray,
  ArrayMinSize,
  ValidateNested,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';

// ── DTO del cliente para solicitar devolución ─────────────────

export class RefundRequestItemDto {
  @ApiProperty({ description: 'UUID del OrderItem a devolver' })
  @IsUUID()
  orderItemId: string;

  @ApiProperty({ description: 'Cantidad de unidades a devolver', example: 1 })
  @IsInt()
  @IsPositive()
  quantity: number;

  @ApiPropertyOptional({ description: 'Motivo específico de este ítem' })
  @IsOptional()
  @IsString()
  reason?: string;
}

export class CreateRefundRequestDto {
  @ApiProperty({
    description: 'Motivo general de la devolución',
    example: 'Producto defectuoso',
  })
  @IsString()
  reason: string;

  @ApiProperty({
    type: [RefundRequestItemDto],
    description: 'Ítems a devolver',
  })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => RefundRequestItemDto)
  items: RefundRequestItemDto[];
}

// ── DTO del admin para revisar una solicitud ──────────────────

export class ReviewRefundRequestDto {
  @ApiProperty({ enum: ['approved', 'rejected'] })
  @IsEnum(['approved', 'rejected'])
  action: 'approved' | 'rejected';

  @ApiPropertyOptional({
    description: 'Nota del admin al cliente (motivo de aprobación o rechazo)',
  })
  @IsOptional()
  @IsString()
  reviewNote?: string;
}

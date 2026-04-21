import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  ArrayMinSize,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import {
  ClaimType,
  ClaimReasonCategory,
  ClaimStatus,
} from 'generated/prisma/client';

// ─────────────────────────────────────────────────────────────
// Sub-DTO: ítem individual de la reclamación
// ─────────────────────────────────────────────────────────────

export class ClaimItemDto {
  @ApiProperty({ description: 'UUID del OrderItem a reclamar' })
  @IsUUID()
  orderItemId: string;

  @ApiProperty({ description: 'Cantidad física a reclamar', example: 1 })
  @IsInt()
  @IsPositive()
  quantity: number;
}

// ─────────────────────────────────────────────────────────────
// DTO de creación (cliente → storefront)
// ─────────────────────────────────────────────────────────────

export class CreateOrderClaimDto {
  @ApiProperty({
    enum: ClaimType,
    description:
      'CANCELLATION: solo antes del envío. REFUND / REPLACEMENT: solo después del envío.',
  })
  @IsEnum(ClaimType)
  type: ClaimType;

  @ApiProperty({ enum: ClaimReasonCategory })
  @IsEnum(ClaimReasonCategory)
  reasonCategory: ClaimReasonCategory;

  @ApiProperty({ description: 'Descripción detallada del motivo del reclamo' })
  @IsString()
  description: string;

  @ApiProperty({
    type: [ClaimItemDto],
    description: 'Ítems a reclamar (mínimo 1)',
  })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ClaimItemDto)
  items: ClaimItemDto[];

  @ApiPropertyOptional({
    description:
      'IDs de imágenes subidas previamente como TEMP (evidencia fotográfica del reclamo). ' +
      'Usar el endpoint de upload de imágenes para obtener estos IDs.',
  })
  @IsOptional()
  @IsUUID('4', { each: true })
  tempImageIds?: string[];

  @ApiPropertyOptional({
    description:
      'Monto que el cliente pagó para enviar el producto de retorno. ' +
      'Solo aplica en PRODUCT_FAULT o STORE_ERROR cuando la tienda asume ese gasto.',
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  customerVoucherAmount?: number;
}

// ─────────────────────────────────────────────────────────────
// DTO de revisión (admin → CMS)
//
// CRÍTICO: Solo APPROVED o REJECTED.
// NO se expone el enum completo ClaimStatus porque el admin no puede
// marcar directamente RECEIVED, COMPLETED o CANCELLED desde este endpoint.
// Esos estados los gestiona el sistema automáticamente:
//   RECEIVED  → endpoint separado de confirmación de recepción física
//   COMPLETED → se setea internamente al procesar el Refund
//   CANCELLED → solo el cliente puede cancelar antes de que se revise
// ─────────────────────────────────────────────────────────────

export class ReviewClaimDto {
  @ApiProperty({
    enum: ['APPROVED', 'REJECTED'],
    description:
      'APPROVED: para CANCELLATION se procesa inmediatamente. ' +
      'Para REFUND/REPLACEMENT pasa a espera de recepción física del producto. ' +
      'REJECTED: el motivo (reviewNote) es obligatorio y se envía al cliente.',
  })
  @IsEnum(['APPROVED', 'REJECTED'])
  action: 'APPROVED' | 'REJECTED';

  @ApiPropertyOptional({
    description: 'Nota visible al cliente. Obligatoria si REJECTED.',
  })
  @IsOptional()
  @IsString()
  reviewNote?: string;

  @ApiPropertyOptional({
    description: 'Nota interna del equipo. No visible al cliente.',
  })
  @IsOptional()
  @IsString()
  internalNote?: string;
}

// ─────────────────────────────────────────────────────────────
// DTO de filtros para el listado admin
// ─────────────────────────────────────────────────────────────

export class QueryClaimDto {
  @ApiPropertyOptional({ enum: ClaimStatus, description: 'Filtrar por estado' })
  @IsOptional()
  @IsEnum(ClaimStatus)
  status?: ClaimStatus;

  @ApiPropertyOptional({
    enum: ClaimType,
    description: 'Filtrar por tipo (CANCELLATION, REFUND, REPLACEMENT)',
  })
  @IsOptional()
  @IsEnum(ClaimType)
  type?: ClaimType;

  @ApiPropertyOptional({
    description: 'Buscar por número de reclamo, nombre o email del cliente',
  })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({ default: 1 })
  @IsOptional()
  @Type(() => Number)
  page?: number = 1;

  @ApiPropertyOptional({ default: 10 })
  @IsOptional()
  @Type(() => Number)
  limit?: number = 10;
}

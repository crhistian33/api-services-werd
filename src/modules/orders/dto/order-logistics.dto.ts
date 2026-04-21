import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsUUID,
  IsNumber,
  IsEnum,
  Min,
  ValidateIf,
} from 'class-validator';
import { Type } from 'class-transformer';
import { DeliveryType } from 'generated/prisma/client';

// ─────────────────────────────────────────────────────────────
// UpdateLogisticsDto — para PATCH /:id/logistics/shipped
//
// Cambios respecto a la versión original:
//   + deliveryType (obligatorio) — determina las validaciones
//   + courierName y trackingNumber: solo obligatorios si COURIER
//   + internalTransportCost: solo relevante en LOCAL_MOTORIZED
// ─────────────────────────────────────────────────────────────

export class UpdateLogisticsDto {
  @ApiProperty({
    enum: DeliveryType,
    description:
      'COURIER: requiere courierName, trackingNumber y foto de guía (tempImageIds). ' +
      'LOCAL_MOTORIZED: no requiere tracking. Registrar internalTransportCost para el costo del motorizado.',
  })
  @IsEnum(DeliveryType)
  deliveryType: DeliveryType;

  // ── Campos de courier (obligatorios solo si deliveryType = COURIER) ──

  @ApiPropertyOptional({ example: 'Olva Courier' })
  @ValidateIf((o: UpdateLogisticsDto) => o.deliveryType === 'COURIER')
  @IsString()
  courierName?: string;

  @ApiPropertyOptional({ example: 'TRK-982347234' })
  @ValidateIf((o: UpdateLogisticsDto) => o.deliveryType === 'COURIER')
  @IsString()
  trackingNumber?: string;

  // ── Costos (opcionales en ambos tipos) ──────────────────────

  @ApiPropertyOptional({
    description:
      'Gasto real pagado al courier. Puede diferir del shippingAmount que pagó el cliente. ' +
      'La diferencia (estimado - real) es el margen de envío.',
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  actualShippingCost?: number;

  @ApiPropertyOptional({
    description:
      'Costo del motorizado local o primera milla (traslado almacén → punto de courier). ' +
      'Relevante principalmente en LOCAL_MOTORIZED pero puede aplicar en COURIER también.',
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  internalTransportCost?: number;

  // ── Evidencias ───────────────────────────────────────────────

  @ApiPropertyOptional({
    description:
      'IDs de imágenes subidas previamente como TEMP. ' +
      'COURIER: foto de la guía de remisión (obligatoria para el guard de despacho). ' +
      'LOCAL_MOTORIZED: foto del empaque (packing_process, opcional).',
  })
  @IsOptional()
  @IsUUID('4', { each: true })
  tempImageIds?: string[];
}

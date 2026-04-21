import {
  IsString,
  IsOptional,
  IsEmail,
  IsInt,
  IsPositive,
  IsUUID,
  IsIP,
  IsBoolean,
  ValidateNested,
  IsArray,
  ArrayMinSize,
  ValidateIf,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { OrderAddressDto } from './order-address.dto';

export class CreateOrderItemDto {
  @ApiProperty({ description: 'ID del producto' })
  @IsUUID()
  productId: string;

  @ApiProperty({ description: 'Cantidad del producto' })
  @IsInt() // ← era IsNumber (acepta decimales); corrección a entero
  @IsPositive() // ← agregado: cantidad mínima 1
  quantity: number;

  @ApiPropertyOptional({
    description: 'ID de la promoción aplicada a este ítem',
  })
  @IsOptional()
  @IsUUID()
  promotionId?: string;
}

export class CreateOrderDto {
  // ── Cliente o guest — mutuamente excluyentes ───────────────
  // La exclusividad se valida en el servicio.
  // Aquí: guestEmail es requerido solo cuando no viene customerId.

  @ApiPropertyOptional({ description: 'UUID del cliente registrado' })
  @IsOptional()
  @IsUUID()
  customerId?: string;

  @ApiPropertyOptional({
    description: 'Email del guest (requerido si no hay customerId)',
  })
  @ValidateIf((o: CreateOrderDto) => !o.customerId)
  @IsEmail()
  guestEmail?: string;

  @ApiPropertyOptional({ description: 'Nombre del guest' })
  @IsOptional()
  @IsString()
  guestName?: string;

  @ApiPropertyOptional({ description: 'Teléfono del guest' })
  @IsOptional()
  @IsString()
  guestPhone?: string;

  // ── Dirección de envío (una de las dos) ───────────────────

  @ApiPropertyOptional({
    description: 'UUID de una CustomerAddress guardada del cliente',
  })
  @IsOptional()
  @IsUUID()
  shippingAddressId?: string;

  @ApiPropertyOptional({
    type: OrderAddressDto,
    description:
      'Dirección de envío inline (guest o dirección nueva del cliente)',
  })
  @ValidateIf((o: CreateOrderDto) => !o.shippingAddressId) // requerido si no viene shippingAddressId
  @ValidateNested()
  @Type(() => OrderAddressDto)
  shippingAddress?: OrderAddressDto;

  @ApiPropertyOptional({
    description:
      'Solo aplica cuando se envía shippingAddress inline y el usuario es cliente registrado. ' +
      'Si true, guarda también la dirección en CustomerAddress para usos futuros.',
    default: false,
  })
  @IsOptional()
  @IsBoolean()
  saveAddressToProfile?: boolean;

  // ── Envío ──────────────────────────────────────────────────
  // shippingRateId reemplaza a shippingZoneId:
  // la zona se deriva automáticamente en el servicio desde la tarifa.

  @ApiProperty({
    description: 'UUID de la ShippingRate seleccionada en el checkout',
  })
  @IsUUID()
  shippingRateId: string;

  // ── Pago ──────────────────────────────────────────────────

  @ApiProperty({ description: 'UUID del método de pago' })
  @IsUUID()
  paymentMethodId: string;

  // ── Cupón ─────────────────────────────────────────────────

  @ApiPropertyOptional({ description: 'UUID del cupón a aplicar' })
  @IsOptional()
  @IsUUID() // ← era IsString; corregido ya que el id del cupón es uuid
  couponId?: string;

  // ── Ítems ─────────────────────────────────────────────────

  @ApiProperty({ type: [CreateOrderItemDto], description: 'Ítems del pedido' })
  @IsArray()
  @ArrayMinSize(1) // ← agregado: al menos 1 ítem obligatorio
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  items: CreateOrderItemDto[];

  // ── Metadatos ─────────────────────────────────────────────

  @ApiPropertyOptional({ description: 'Notas del cliente' })
  @IsOptional()
  @IsString()
  notes?: string;

  // ipAddress no se expone a Swagger (sin @ApiProperty).
  // El controller la inyecta desde req después de capturarla del header.
  @IsOptional()
  @IsIP()
  ipAddress?: string;
}

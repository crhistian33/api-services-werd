import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsInt,
  IsNumber,
  Min,
  MinLength,
  MaxLength,
  IsEnum,
} from 'class-validator';
import { DeliveryUnit } from 'generated/prisma/client';

export class CreateShippingRateDto {
  @ApiProperty({ example: 'Envío estándar' })
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name: string;

  @ApiProperty({
    example: 10.0,
    description: 'Costo del envío en la moneda configurada',
  })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiPropertyOptional({
    example: 0,
    description: 'Monto mínimo de pedido para aplicar esta tarifa',
    default: 0,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  minOrderAmount?: number;

  @ApiPropertyOptional({
    example: 100,
    description: 'Monto a partir del cual el envío es gratuito (null = nunca)',
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  freeShippingThreshold?: number;

  @ApiPropertyOptional({
    example: 1,
    description: 'Tiempo mínimo estimado de entrega',
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  estimatedMin?: number;

  @ApiPropertyOptional({
    example: 3,
    description: 'Tiempo máximo estimado de entrega',
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  estimatedMax?: number;

  @ApiPropertyOptional({
    example: 'days',
    enum: DeliveryUnit,
    description: 'Unidad del tiempo estimado (minutes, hours, days)',
    default: DeliveryUnit.days,
  })
  @IsOptional()
  @IsEnum(DeliveryUnit)
  estimatedUnit?: DeliveryUnit;

  @ApiPropertyOptional({ example: 0, default: 0 })
  @IsOptional()
  @IsInt()
  @Min(0)
  sortOrder?: number;

  @ApiPropertyOptional({ example: true, default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

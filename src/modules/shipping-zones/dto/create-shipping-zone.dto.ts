import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsBoolean,
  MinLength,
  MaxLength,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateShippingZoneAreaDto } from './create-shipping-zone-area.dto';
import { CreateShippingRateDto } from './create-shipping-rate.dto';

// ── Zona de envío principal ────────────────────────────────────
export class CreateShippingZoneDto {
  @ApiProperty({ example: 'Lima Metropolitana' })
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name: string;

  @ApiPropertyOptional({ example: 'Cubre todos los distritos de Lima' })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;

  @ApiPropertyOptional({ example: true, default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  /**
   * Áreas geográficas que cubre esta zona.
   * Opcional en creación — se pueden agregar luego con el endpoint de áreas.
   */
  @ApiPropertyOptional({
    type: [CreateShippingZoneAreaDto],
    description: 'Áreas geográficas (ubigeo) que cubre la zona',
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateShippingZoneAreaDto)
  areas?: CreateShippingZoneAreaDto[];

  @ApiPropertyOptional({
    type: [CreateShippingRateDto],
    description: 'Tarifas de envío para esta zona',
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateShippingRateDto)
  rates?: CreateShippingRateDto[];
}

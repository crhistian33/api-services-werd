import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class OrderAddressDto {
  @ApiPropertyOptional({
    description: 'Alias de la dirección (ej: "Casa", "Trabajo")',
  })
  @IsOptional()
  @IsString()
  alias?: string;

  @ApiProperty({ description: 'Nombre del destinatario' })
  @IsNotEmpty()
  @IsString()
  recipientName: string;

  @ApiPropertyOptional({ description: 'Teléfono de contacto' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ description: 'Código de departamento (ej: "15")' })
  @IsNotEmpty()
  @IsString()
  departmentId: string;

  @ApiProperty({ description: 'Código de provincia (ej: "1501")' })
  @IsNotEmpty()
  @IsString()
  provinceId: string;

  @ApiProperty({ description: 'Código de distrito / ubigeo (ej: "150101")' })
  @IsNotEmpty()
  @IsString()
  districtId: string;

  @ApiProperty({ description: 'Dirección completa' })
  @IsNotEmpty()
  @IsString()
  addressLine: string;

  @ApiPropertyOptional({ description: 'Referencia (ej: "Frente al parque")' })
  @IsOptional()
  @IsString()
  reference?: string;

  // latitude y longitude: en el schema son Decimal pero llegan como número desde el cliente.
  // Prisma acepta number para campos Decimal, no hace falta @IsDecimal (que valida strings).
  @ApiPropertyOptional({ description: 'Latitud (coordenada GPS)' })
  @IsOptional()
  @Type(() => Number)
  latitude?: number; // ← era string con @IsDecimal; corregido a number

  @ApiPropertyOptional({ description: 'Longitud (coordenada GPS)' })
  @IsOptional()
  @Type(() => Number)
  longitude?: number; // ← era string con @IsDecimal; corregido a number
}

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCustomerAddressDto {
  @ApiPropertyOptional({
    description: 'Alias para identificar la dirección',
    example: 'Casa',
  })
  @IsOptional()
  @IsString()
  alias?: string;

  @ApiProperty({ example: 'Juan Pérez' })
  @IsString()
  @IsNotEmpty()
  recipientName: string;

  @ApiPropertyOptional({ example: '+51987654321' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ description: 'Código de departamento (ej: "15")' })
  @IsString()
  @IsNotEmpty()
  departmentId: string;

  @ApiProperty({ description: 'Código de provincia (ej: "1501")' })
  @IsString()
  @IsNotEmpty()
  provinceId: string;

  @ApiProperty({ description: 'Código de distrito / ubigeo (ej: "150101")' })
  @IsString()
  @IsNotEmpty()
  districtId: string;

  @ApiProperty({ example: 'Av. Universitaria 1234, Dpto 501' })
  @IsString()
  @IsNotEmpty()
  addressLine: string;

  @ApiPropertyOptional({ example: 'Frente al parque' })
  @IsOptional()
  @IsString()
  reference?: string;

  @ApiPropertyOptional({
    description: 'Marcar como dirección predeterminada',
    default: false,
  })
  @IsOptional()
  @IsBoolean()
  isDefault?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => Number)
  latitude?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => Number)
  longitude?: number;
}

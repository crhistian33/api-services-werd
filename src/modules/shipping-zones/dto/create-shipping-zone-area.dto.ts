import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateShippingZoneAreaDto {
  @ApiProperty({
    example: '15',
    description: 'ID del departamento (código ubigeo)',
  })
  @IsString()
  departmentId: string;

  @ApiPropertyOptional({
    example: '1501',
    description: 'ID de la provincia (null = aplica a todo el departamento)',
  })
  @IsOptional()
  @IsString()
  provinceId?: string;

  @ApiPropertyOptional({
    example: '150101',
    description: 'ID del distrito (null = aplica a toda la provincia)',
  })
  @IsOptional()
  @IsString()
  districtId?: string;
}

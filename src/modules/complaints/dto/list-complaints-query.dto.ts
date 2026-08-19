import { IsEnum, IsOptional, IsString, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { ComplaintStatus, ComplaintType } from 'generated/prisma/client';

export class ListComplaintsQueryDto {
  @ApiPropertyOptional({ description: 'Número de página', example: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @ApiPropertyOptional({ description: 'Registros por página', example: 20 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number = 20;

  @ApiPropertyOptional({
    enum: ComplaintStatus,
    description: 'Filtrar por estado',
  })
  @IsOptional()
  @IsEnum(ComplaintStatus)
  status?: ComplaintStatus;

  @ApiPropertyOptional({
    enum: ComplaintType,
    description: 'Filtrar por tipo (CLAIM o COMPLAINT)',
  })
  @IsOptional()
  @IsEnum(ComplaintType)
  type?: ComplaintType;

  @ApiPropertyOptional({
    description: 'Buscar por número de ticket, email o nombre del cliente',
  })
  @IsOptional()
  @IsString()
  search?: string;
}

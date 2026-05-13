import { IsOptional, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DashboardQueryDto {
  @ApiProperty({
    required: false,
    type: String,
    description: 'Fecha de inicio',
  })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiProperty({
    required: false,
    type: String,
    description: 'Fecha de fin',
  })
  @IsDateString()
  endDate?: string;
}

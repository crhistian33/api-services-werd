import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class CreateFaqDto {
  @ApiPropertyOptional({ example: '¿Cuál es su política de devoluciones?' })
  @IsString()
  question: string;

  @ApiPropertyOptional({ example: 'Nuestra política de devoluciones es...' })
  @IsString()
  answer: string;

  @ApiPropertyOptional({ example: 'Devoluciones' })
  @IsString()
  @IsOptional()
  category?: string;

  @ApiPropertyOptional({ example: 0 })
  @IsOptional()
  @IsInt()
  @Min(0)
  sortOrder?: number;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

import {
  IsString,
  IsOptional,
  IsBoolean,
  IsInt,
  IsUrl,
  MinLength,
  MaxLength,
  Min,
  IsUUID,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateSocialLinkDto {
  @ApiPropertyOptional({
    example: 'uuid-existente',
    description: 'Si viene = actualizar, si no viene = crear',
  })
  @IsOptional()
  @IsUUID()
  id?: string;

  @ApiProperty({ example: 'facebook' })
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  network: string;

  @ApiProperty({ example: 'Facebook' })
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name: string;

  @ApiPropertyOptional({ example: 'pi pi-facebook' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  icon?: string;

  @ApiProperty({ example: 'https://facebook.com/werd' })
  @IsUrl()
  url: string;

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

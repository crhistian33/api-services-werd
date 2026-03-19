import {
  IsString,
  IsOptional,
  IsInt,
  IsArray,
  ValidateNested,
  Min,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

// ── Spec individual (key / value) ────────────────────────────────────────────

export class SpecItemDto {
  @ApiProperty({ example: 'Procesador' })
  @IsString()
  @MinLength(1)
  specKey: string;

  @ApiProperty({ example: 'Intel Core i7 12va generación' })
  @IsString()
  @MinLength(1)
  specValue: string;

  @ApiPropertyOptional({ example: 0 })
  @IsOptional()
  @IsInt()
  @Min(0)
  sortOrder?: number;
}

// ── Feature individual (string simple) ──────────────────────────────────────

export class FeatureItemDto {
  @ApiProperty({ example: 'Pantalla Full HD antirreflejo' })
  @IsString()
  @MinLength(1)
  feature: string;

  @ApiPropertyOptional({ example: 0 })
  @IsOptional()
  @IsInt()
  @Min(0)
  sortOrder?: number;
}

// ── DTOs de conjunto (para endpoints dedicados PATCH /:id/specs) ─────────────

export class SetSpecsDto {
  @ApiProperty({ type: [SpecItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SpecItemDto)
  specs: SpecItemDto[];
}

export class SetFeaturesDto {
  @ApiProperty({ type: [FeatureItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FeatureItemDto)
  features: FeatureItemDto[];
}

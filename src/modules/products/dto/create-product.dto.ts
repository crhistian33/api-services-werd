import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsUUID,
  MinLength,
  MaxLength,
  IsEnum,
  IsInt,
  Min,
  IsNumber,
  IsArray,
} from 'class-validator';
import { ProductStatus } from 'generated/prisma/client';

export class CreateProductDto {
  @ApiProperty({ example: 'Notebook Gamer X' })
  @IsString()
  @MinLength(2)
  @MaxLength(255)
  name: string;

  @ApiPropertyOptional({ example: 'notebook-gamer-x' })
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(255)
  slug?: string;

  @ApiProperty({ example: 'NGX-001' })
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  sku: string;

  @ApiPropertyOptional({ example: 'Portátil de alto rendimiento para gaming' })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  shortDescription?: string;

  @ApiPropertyOptional({
    example: '<p>Descripción completa del producto...</p>',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 'uuid-de-categoria' })
  @IsUUID()
  categoryId: string;

  @ApiPropertyOptional({ example: 'uuid-de-marca' })
  @IsOptional()
  @IsUUID()
  brandId?: string;

  @ApiPropertyOptional({
    example: ProductStatus.draft,
    enum: Object.values(ProductStatus),
    default: ProductStatus.draft,
  })
  @IsOptional()
  @IsEnum(ProductStatus)
  status?: ProductStatus;

  @ApiPropertyOptional({ example: false, default: false })
  @IsOptional()
  @IsBoolean()
  isFeatured?: boolean;

  @ApiPropertyOptional({ example: 0, default: 0 })
  @IsOptional()
  @IsInt()
  @Min(0)
  stock?: number;

  @ApiPropertyOptional({ example: 1.25 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  weight?: number;

  @ApiPropertyOptional({
    example: 'Notebook Gamer X - Mejores especificaciones',
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  metaTitle?: string;

  @ApiPropertyOptional({ example: 'Notebook Gamer X con procesador ...' })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  metaDescription?: string;

  @ApiPropertyOptional({
    example: 'uuid-temporal-de-imagen',
    description: 'Id de la imagen principal temporal subido anteriormente',
  })
  @IsOptional()
  @IsUUID()
  tempMainImageId?: string;

  @ApiPropertyOptional({
    example: ['uuid-temporal-1', 'uuid-temporal-2'],
    description: 'Array de ids temporales para la galería de imágenes',
    type: [String],
  })
  @IsOptional()
  @IsArray()
  @IsUUID('4', { each: true })
  tempGalleryImageIds?: string[];
}

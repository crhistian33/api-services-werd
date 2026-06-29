import {
  IsInt,
  IsString,
  IsOptional,
  Min,
  Max,
  IsUUID,
  IsNotEmpty,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateReviewDto {
  @ApiProperty({
    description: 'UUID del producto a reseñar',
    example: 'b1a2c3d4-...',
  })
  @IsUUID()
  @IsNotEmpty()
  productId: string;

  @ApiProperty({
    description: 'Calificación del producto (1 a 5)',
    example: 4,
    minimum: 1,
    maximum: 5,
  })
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @ApiPropertyOptional({
    description: 'Título de la reseña',
    example: 'Excelente producto',
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({
    description: 'Comentario detallado de la reseña',
    example: 'Muy buena calidad, llegó antes de lo esperado.',
  })
  @IsOptional()
  @IsString()
  comment?: string;

  @ApiPropertyOptional({
    description:
      'UUID de la orden desde la cual se realiza la reseña (para validación de compra)',
    example: 'c4d5e6f7-...',
  })
  @IsOptional()
  @IsUUID()
  orderId?: string;
}

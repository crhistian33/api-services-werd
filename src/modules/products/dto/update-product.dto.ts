import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsArray,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiPropertyOptional({
    example: 'uuid-del-admin',
    description:
      'ID del admin que realiza el cambio (para historial de precio)',
  })
  @IsOptional()
  @IsUUID()
  changedById?: string;

  @ApiPropertyOptional({
    example: 'Corrección de precio por error de carga',
    description: 'Motivo del cambio de precio',
  })
  @IsOptional()
  @IsString()
  reason?: string;

  @ApiPropertyOptional({
    description:
      'ID del registro Image main a eliminar. Se envía cuando el usuario borra la imagen principal sin subir una nueva.',
    example: 'uuid-del-image-record',
  })
  @IsOptional()
  @IsUUID()
  removedMainImageId?: string;

  @ApiPropertyOptional({
    description:
      'IDs de registros Image de galería a eliminar individualmente.',
    type: [String],
    example: ['uuid1', 'uuid2'],
  })
  @IsOptional()
  @IsArray()
  @IsUUID('all', { each: true })
  @ArrayMinSize(1)
  removedGalleryImageIds?: string[];
}

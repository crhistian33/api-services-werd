import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { IsOptional, IsUUID } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @ApiPropertyOptional({
    description:
      'ID del registro Image a eliminar. Se envía cuando el usuario borra la imagen actual sin subir una nueva.',
    example: 'uuid-del-image-record',
  })
  @IsOptional()
  @IsUUID()
  removedImageId?: string;
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsUUID } from 'class-validator';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  @ApiPropertyOptional({
    description:
      'ID del registro Image a eliminar. Se envía cuando el usuario borra la imagen actual sin subir una nueva.',
    example: 'uuid-del-image-record',
  })
  @IsOptional()
  @IsUUID()
  removedImageId?: string;
}

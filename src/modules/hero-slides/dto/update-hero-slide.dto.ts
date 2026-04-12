import { PartialType } from '@nestjs/mapped-types';
import { CreateHeroSlideDto } from './create-hero-slide.dto';
import { IsOptional, IsUUID } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateHeroSlideDto extends PartialType(CreateHeroSlideDto) {
  @ApiPropertyOptional({
    description:
      'ID del registro Image Desktop a eliminar. Se envía cuando el usuario borra la imagen actual sin subir una nueva.',
    example: 'uuid-del-image-record',
  })
  @IsOptional()
  @IsUUID()
  removedDesktopImageId?: string;

  @ApiPropertyOptional({
    description:
      'ID del registro Image Mobile a eliminar. Se envía cuando el usuario borra la imagen actual sin subir una nueva.',
    example: 'uuid-del-image-record',
  })
  @IsOptional()
  @IsUUID()
  removedMobileImageId?: string;
}

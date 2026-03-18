import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsIn } from 'class-validator';

export class UploadImageDto {
  @ApiProperty({
    example: 'category',
    description:
      'Tipo de entidad: category, brand, product, site_config, hero_slide, user',
  })
  @IsString()
  @IsIn(['category', 'brand', 'product', 'site_config', 'hero_slide', 'user'])
  entityKey: string;

  @ApiProperty({
    example: 'main',
    description:
      'Rol de la imagen: main, gallery, logo, logo_header, logo_footer, desktop, mobile, avatar',
  })
  @IsString()
  imageRole: string;
}

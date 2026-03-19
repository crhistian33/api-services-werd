import {
  IsString,
  IsOptional,
  IsEmail,
  MaxLength,
  MinLength,
  IsUUID,
  ValidateNested,
  IsArray,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CreateSocialLinkDto } from './create-social-link.dto';
import { Type } from 'class-transformer';

export class UpdateSiteConfigDto {
  @ApiPropertyOptional({ example: 'Werd' })
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  storeName?: string;

  @ApiPropertyOptional({ example: 'contacto@werd.pe' })
  @IsOptional()
  @IsEmail()
  storeEmail?: string;

  @ApiPropertyOptional({ example: 'soporte@werd.pe' })
  @IsOptional()
  @IsEmail()
  supportEmail?: string;

  @ApiPropertyOptional({ example: '+51 999 999 999' })
  @IsOptional()
  @IsString()
  @MaxLength(20)
  phonePrimary?: string;

  @ApiPropertyOptional({ example: '+51 888 888 888' })
  @IsOptional()
  @IsString()
  @MaxLength(20)
  phoneSecondary?: string;

  @ApiPropertyOptional({
    example: '51999999999',
    description: 'Número de WhatsApp sin + ni espacios — formato internacional',
  })
  @IsOptional()
  @IsString()
  @MaxLength(20)
  whatsappNumber?: string;

  @ApiPropertyOptional({ example: 'Av. Principal 123, Lima' })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  address?: string;

  @ApiPropertyOptional({ example: 'Werd — Los mejores productos' })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  metaTitle?: string;

  @ApiPropertyOptional({ example: 'Encuentra los mejores productos...' })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  metaDescription?: string;

  @ApiPropertyOptional({ example: 'G-XXXXXXXXXX' })
  @IsOptional()
  @IsString()
  googleAnalyticsId?: string;

  @ApiPropertyOptional({ example: 'XXXXXXXXXXXXXXXXXX' })
  @IsOptional()
  @IsString()
  facebookPixelId?: string;

  @ApiPropertyOptional({
    example: 'uuid-temporal-logo-header',
    description: 'Id temporal del logo del header',
  })
  @IsOptional()
  @IsUUID()
  tempLogoHeaderId?: string;

  @ApiPropertyOptional({
    example: 'uuid-temporal-logo-footer',
    description: 'Id temporal del logo del footer',
  })
  @IsOptional()
  @IsUUID()
  tempLogoFooterId?: string;

  @ApiPropertyOptional({ type: [CreateSocialLinkDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSocialLinkDto)
  socialLinks?: CreateSocialLinkDto[];
}

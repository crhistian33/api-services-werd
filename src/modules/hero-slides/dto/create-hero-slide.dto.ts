import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsEnum,
  IsUUID,
  IsInt,
  Min,
  IsBoolean,
  IsISO8601,
} from 'class-validator';
import { LinkType } from 'generated/prisma/client';

export class CreateHeroSlideDto {
  @ApiPropertyOptional({ example: 'Super oferta de verano' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({ example: 'Descuento 30% en productos seleccionados' })
  @IsOptional()
  @IsString()
  subtitle?: string;

  @ApiPropertyOptional({
    example: LinkType.product,
    enum: Object.values(LinkType),
  })
  @IsOptional()
  @IsEnum(LinkType)
  linkType?: LinkType;

  @ApiPropertyOptional({ example: 'uuid-producto' })
  @IsOptional()
  @IsUUID()
  linkProductId?: string;

  @ApiPropertyOptional({ example: 'uuid-categoria' })
  @IsOptional()
  @IsUUID()
  linkCategoryId?: string;

  @ApiPropertyOptional({ example: 'https://example.com/oferta' })
  @IsOptional()
  @IsString()
  linkUrl?: string;

  @ApiPropertyOptional({ example: 'Ir a oferta' })
  @IsOptional()
  @IsString()
  linkText?: string;

  @ApiPropertyOptional({ example: 0 })
  @IsOptional()
  @IsInt()
  @Min(0)
  sortOrder?: number;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ example: '2026-01-01T00:00:00.000Z' })
  @IsOptional()
  @IsISO8601()
  startsAt?: string;

  @ApiPropertyOptional({ example: '2026-12-31T23:59:59.000Z' })
  @IsOptional()
  @IsISO8601()
  endsAt?: string;

  @ApiPropertyOptional({ example: 'uuid-temporal-desktop' })
  @IsOptional()
  @IsUUID()
  tempDesktopImageId?: string;

  @ApiPropertyOptional({ example: 'uuid-temporal-mobile' })
  @IsOptional()
  @IsUUID()
  tempMobileImageId?: string;
}

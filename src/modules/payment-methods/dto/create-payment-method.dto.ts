import {
  IsString,
  IsEnum,
  IsBoolean,
  IsOptional,
  IsInt,
  IsObject,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PaymentMethodType } from 'generated/prisma/client';

export class CreatePaymentMethodDto {
  @ApiProperty({ example: 'CULQI' })
  @IsString()
  code: string;

  @ApiProperty({ example: 'Tarjeta de Crédito' })
  @IsString()
  name: string;

  @ApiProperty({ enum: ['card', 'wallet', 'cash_code', 'cash_on_delivery'] })
  @IsEnum(['card', 'wallet', 'cash_code', 'cash_on_delivery'])
  type: PaymentMethodType;

  @ApiPropertyOptional({
    example: { publicKey: 'pk_...', privateKey: 'sk_...' },
  })
  @IsOptional()
  @IsObject()
  config?: Record<string, any>;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  instructions?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsInt()
  sortOrder?: number;
}

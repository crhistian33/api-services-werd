import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ReturnedProductCondition } from 'generated/prisma/client';

export class MarkClaimReceivedDto {
  @ApiProperty({
    enum: ReturnedProductCondition,
    description:
      'RESELLABLE: el producto llegó bien, vuelve al inventario. ' +
      'DAMAGED: producto con daños, no vuelve al stock (baja contable). ' +
      'DESTROYED: producto destruido o no se recibió (baja contable).',
  })
  @IsEnum(ReturnedProductCondition)
  productCondition: ReturnedProductCondition;

  @ApiPropertyOptional({
    example: 'Pantalla rota, embalaje dañado. No apto para reventa.',
    description: 'Descripción interna del estado del producto recibido.',
  })
  @IsOptional()
  @IsString()
  internalDamageNote?: string;

  @ApiPropertyOptional({
    description: 'Nota visible al cliente sobre la recepción del producto.',
  })
  @IsOptional()
  @IsString()
  adminNote?: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsUUID, Min } from 'class-validator';

export class CreateCartItemDto {
  @ApiProperty({ description: 'ID del producto a añadir' })
  @IsUUID()
  productId: string;

  @ApiProperty({ description: 'Cantidad a añadir', minimum: 1, default: 1 })
  @IsInt()
  @Min(1)
  quantity: number;
}

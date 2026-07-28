import { PartialType } from '@nestjs/swagger';
import { CreateCartItemDto } from './create-cart.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min } from 'class-validator';

export class UpdateCartItemDto extends PartialType(CreateCartItemDto) {
  @ApiProperty({
    description:
      'Nueva cantidad (mínimo 1; para eliminar el ítem usa DELETE /cart/items/:itemId)',
    minimum: 1,
  })
  @IsInt()
  @Min(1)
  quantity: number;
}

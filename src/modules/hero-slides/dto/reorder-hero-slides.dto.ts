import { IsArray, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ReorderHeroSlidesDto {
  @ApiProperty({
    example: ['uuid-1', 'uuid-2', 'uuid-3'],
    description: 'IDs de los slides en el nuevo orden',
    type: [String],
  })
  @IsArray()
  @IsUUID('4', { each: true })
  ids: string[];
}

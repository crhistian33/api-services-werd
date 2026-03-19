import { IsArray, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ReorderSocialLinksDto {
  @ApiProperty({
    example: ['uuid-1', 'uuid-2', 'uuid-3'],
    description: 'IDs de las redes sociales en el nuevo orden',
    type: [String],
  })
  @IsArray()
  @IsUUID('4', { each: true })
  ids: string[];
}

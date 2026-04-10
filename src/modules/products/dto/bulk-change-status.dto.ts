import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsUUID, ArrayMinSize, IsString } from 'class-validator';

export class BulkChangeStatusProductDto {
  @ApiProperty({ example: ['uuid1', 'uuid2'], type: [String] })
  @IsArray()
  @IsUUID('4', { each: true })
  @ArrayMinSize(1)
  ids: string[];

  @ApiProperty({ example: 'active' })
  @IsString()
  status: string;
}

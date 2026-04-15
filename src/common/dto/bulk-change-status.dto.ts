import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsUUID, ArrayMinSize, IsBoolean } from 'class-validator';

export class BulkChangeStatusDto {
  @ApiProperty({ example: ['uuid1', 'uuid2'], type: [String] })
  @IsArray()
  @IsUUID('4', { each: true })
  @ArrayMinSize(1)
  ids: string[];

  @ApiProperty({ example: true })
  @IsBoolean()
  status: boolean;
}

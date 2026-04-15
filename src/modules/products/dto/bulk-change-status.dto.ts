import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsUUID, ArrayMinSize, IsEnum } from 'class-validator';
import { ProductStatus } from 'generated/prisma/enums';

export class BulkChangeStatusProductDto {
  @ApiProperty({ example: ['uuid1', 'uuid2'], type: [String] })
  @IsArray()
  @IsUUID('4', { each: true })
  @ArrayMinSize(1)
  ids: string[];

  @ApiProperty({ example: ProductStatus.active })
  @IsEnum(ProductStatus)
  status: ProductStatus;
}

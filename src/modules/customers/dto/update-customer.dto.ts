import { PartialType, OmitType, ApiProperty } from '@nestjs/swagger';
import { CreateCustomerDto } from './create-customer.dto';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

// Omitimos password porque el cambio de contraseña va por otro método seguro
export class UpdateCustomerDto extends PartialType(
  OmitType(CreateCustomerDto, ['password'] as const),
) {
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpdateCustomerPasswordDto {
  @ApiProperty({ description: 'Contraseña actual del cliente' })
  @IsString()
  @IsNotEmpty()
  currentPassword: string;

  @ApiProperty({ description: 'Nueva contraseña' })
  @IsString()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'La nueva contraseña es demasiado débil',
  })
  newPassword: string;
}

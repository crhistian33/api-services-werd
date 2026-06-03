import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  Matches,
  MaxLength,
} from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty({ example: 'Juan' })
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  firstName: string;

  @ApiProperty({ example: 'Pérez' })
  @IsString()
  @IsNotEmpty({ message: 'El apellido es obligatorio' })
  lastName: string;

  @ApiProperty({ example: 'juan.perez@example.com' })
  @IsEmail({}, { message: 'El formato del correo es inválido' })
  email: string;

  @ApiProperty({ example: '987654321', required: false })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ example: '12345678', required: false })
  @IsOptional()
  @IsString()
  @MinLength(8, { message: 'El DNI debe tener al menos 8 caracteres' })
  @MaxLength(8, { message: 'El DNI debe tener al menos 8 caracteres' })
  dni?: string;

  @ApiProperty({
    example: 'Werd2026!',
    description:
      'Debe contener al menos 8 caracteres, una mayúscula y un número',
  })
  @IsString()
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'La contraseña es demasiado débil: debe incluir mayúsculas y números',
  })
  password: string;
}

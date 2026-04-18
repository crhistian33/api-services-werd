import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  Matches,
} from 'class-validator';

export class ForgotPasswordResetDto {
  @ApiProperty({
    example: 'cliente@ejemplo.com',
    description: 'Correo electrónico del cliente que solicitó la recuperación',
  })
  @IsEmail({}, { message: 'El formato del correo es inválido' })
  email: string;

  @ApiProperty({
    example: '123456',
    description: 'Código de 6 dígitos enviado al correo del cliente',
  })
  @IsString()
  @IsNotEmpty({ message: 'El código de verificación es obligatorio' })
  code: string;

  @ApiProperty({
    example: 'NuevaClave2026!',
    description:
      'Debe contener al menos 8 caracteres, una mayúscula y un número o carácter especial',
  })
  @IsString()
  @MinLength(8, {
    message: 'La nueva contraseña debe tener al menos 8 caracteres',
  })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'La nueva contraseña es demasiado débil: debe incluir mayúsculas y números o caracteres especiales',
  })
  newPassword: string;
}

export class ForgotPasswordDto {
  @ApiProperty({
    example: 'cliente@ejemplo.com',
    description: 'Correo electrónico del cliente para recuperación',
  })
  @IsEmail({}, { message: 'El formato del correo es inválido' })
  @IsNotEmpty({ message: 'El correo es obligatorio' })
  email: string;
}

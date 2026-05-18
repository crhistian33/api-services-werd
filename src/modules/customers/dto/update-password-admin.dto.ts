import { IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePasswordAsAdminDto {
  @ApiProperty({
    example: 'NuevaPass123*',
    description: 'Nueva contraseña para el cliente',
  })
  @IsString()
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  newPassword: string;
}

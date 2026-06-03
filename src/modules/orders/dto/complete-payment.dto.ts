import { IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CompletePaymentDto {
  @ApiProperty({
    description: 'Token generado por Culqi JS en el frontend',
    example: 'tkn_live_...',
  })
  @IsString()
  token: string;

  @ApiProperty({
    description: 'Email del cliente asociado al pago',
    example: 'cliente@email.com',
  })
  @IsEmail()
  email: string;
}

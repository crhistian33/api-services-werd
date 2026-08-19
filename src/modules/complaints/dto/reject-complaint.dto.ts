import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RejectComplaintDto {
  @ApiProperty({
    description:
      'Motivo por el cual el reclamo no procede. Se incluirá en el correo de notificación al cliente.',
    example:
      'Luego de revisar su reclamo, determinamos que el incidente reportado no corresponde a una responsabilidad de nuestra empresa ya que...',
    maxLength: 2000,
  })
  @IsString()
  @IsNotEmpty({ message: 'El motivo de rechazo es obligatorio.' })
  @MaxLength(2000)
  rejectionReason: string;
}

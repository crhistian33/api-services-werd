import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsOptional,
  IsUUID,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ResolveComplaintDto {
  @ApiProperty({
    description:
      'Contenido de la respuesta al reclamo. Se mostrará debajo de la descripción original en el correo.',
    example:
      'Estimado cliente, hemos revisado su reclamo y procedemos a informarle que...',
  })
  @IsString()
  @IsNotEmpty()
  responseContent: string;

  @ApiPropertyOptional({
    description:
      'Array de keys R2 temporales de los archivos adjuntos (imágenes y/o PDFs subidos previamente vía POST /images/upload/temp).',
    type: [String],
    example: ['temp/abc123.pdf', 'temp/xyz456.jpg'],
  })
  @IsOptional()
  @IsArray()
  @IsUUID('4', { each: true })
  attachmentTempKeys?: string[];
}

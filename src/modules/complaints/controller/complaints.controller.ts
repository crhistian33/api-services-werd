import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ComplaintsService } from '../service/complaints.service';
import { CreateComplaintDto } from '../dto/create-complaint.dto';
import { Public } from 'src/common/decorators/public.decorator';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Consultas')
@Controller('complaints')
export class ComplaintsController {
  constructor(private readonly complaintsService: ComplaintsService) {}

  /**
   * @POST /complaints
   * @description Registra una nueva hoja de reclamación virtual (CLAIM o COMPLAINT)
   * Conforme a la normativa de INDECOPI en Perú.
   */
  @Post()
  @Public()
  @ResponseMessage('Hoja de Reclamación creada exitosamente')
  @ApiOperation({
    summary: 'Crear una nueva hoja de reclamación (RECLAMO O QUEJA)',
    description:
      'Registra un reclamo o queja conforme a la normativa de INDECOPI. ' +
      'Incluye datos del consumidor, producto y descripción del reclamo.',
  })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createComplaintDto: CreateComplaintDto) {
    return await this.complaintsService.create(createComplaintDto);
  }
}

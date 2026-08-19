import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Get,
  Query,
  Param,
  Patch,
  UseGuards,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ComplaintsService } from '../service/complaints.service';
import { CreateComplaintDto } from '../dto/create-complaint.dto';
import { ListComplaintsQueryDto } from '../dto/list-complaints-query.dto';
import { ResolveComplaintDto } from '../dto/resolve-complaint.dto';
import { RejectComplaintDto } from '../dto/reject-complaint.dto';
import { Public } from 'src/common/decorators/public.decorator';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { AdminRole } from 'src/modules/auth/constants/admin-role.constant';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/modules/auth/guards/roles.guard';
import { CurrentUser } from 'src/modules/auth/decorators/current-user.decorator';
import type { AuthAccessPayload } from 'src/common/interfaces/jwt-payload.interface';

@ApiTags('Consultas')
@Controller()
export class ComplaintsController {
  constructor(private readonly complaintsService: ComplaintsService) {}

  /**
   * @POST /complaints
   * @description Registra una nueva hoja de reclamación virtual (CLAIM o COMPLAINT)
   * Conforme a la normativa de INDECOPI en Perú.
   */
  @Post('complaints')
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

  // ═══════════════════════════════════════════════════════════
  // ENDPOINTS ADMINISTRATIVOS
  // ═══════════════════════════════════════════════════════════

  @Get('admin/complaints')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Reclamos obtenidos exitosamente')
  @ApiOperation({ summary: 'Listar reclamos con paginación y filtros' })
  async findAll(@Query() query: ListComplaintsQueryDto) {
    return this.complaintsService.findAll(query);
  }

  @Get('admin/complaints/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Reclamo obtenido exitosamente')
  @ApiOperation({ summary: 'Obtener el detalle de un reclamo por ID' })
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.complaintsService.findComplaintById(id);
  }

  @Patch('admin/complaints/:id/review')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Estado actualizado a En Revisión')
  @ApiOperation({
    summary: 'Marcar el reclamo como EN REVISIÓN (OPEN -> IN_REVIEW)',
  })
  async markInReview(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() user: AuthAccessPayload,
  ) {
    return this.complaintsService.markInReview(id, user.sub);
  }

  @Post('admin/complaints/:id/resolve')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Reclamo resuelto y respuesta enviada al cliente')
  @ApiOperation({ summary: 'Responder y resolver el reclamo (-> RESOLVED)' })
  async resolve(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: ResolveComplaintDto,
    @CurrentUser() user: AuthAccessPayload,
  ) {
    return this.complaintsService.resolve(id, dto, user.sub);
  }

  @Post('admin/complaints/:id/reject')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Reclamo rechazado y notificación enviada al cliente')
  @ApiOperation({
    summary: 'Rechazar el reclamo (OPEN|IN_REVIEW -> REJECTED)',
    description:
      'Marca el reclamo como no procedente, envía un email de notificación al cliente ' +
      'con el motivo del rechazo. El reclamo puede cerrarse manualmente después con /close.',
  })
  async reject(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: RejectComplaintDto,
    @CurrentUser() user: AuthAccessPayload,
  ) {
    return this.complaintsService.reject(id, dto, user.sub);
  }

  @Patch('admin/complaints/:id/close')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Reclamo cerrado exitosamente')
  @ApiOperation({
    summary: 'Cerrar formalmente el reclamo (RESOLVED|REJECTED -> CLOSED)',
    description:
      'Archiva el reclamo definitivamente. Puede usarse tanto sobre reclamos RESOLVED ' +
      'como REJECTED. No se puede deshacer.',
  })
  async close(@Param('id', ParseUUIDPipe) id: string) {
    return this.complaintsService.close(id);
  }
}

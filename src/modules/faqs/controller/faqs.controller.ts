import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FaqsService } from '../service/faqs.service';
import {
  BulkChangeStatusFaqDto,
  BulkDeleteFaqDto,
  BulkReorderFaqsDto,
  CreateFaqDto,
  QueryFaqDto,
  UpdateFaqDto,
} from '../dto';
import { Roles } from '../../auth/decorators/roles.decorator';
import { AdminRole } from '../../auth/constants/admin-role.constant';
import { ResponseMessage } from '../../../common/decorators/response-message.decorator';
import { CurrentUser } from 'src/modules/auth/decorators/current-user.decorator';
import type { AdminJwtPayload } from 'src/common/interfaces/jwt-payload.interface';

@ApiTags('Faqs')
@Controller('faqs')
export class FaqsController {
  constructor(private readonly faqsService: FaqsService) {}

  // ═══════════════════════════════════════════════
  // BULK (ANTES DE :id)
  // ═══════════════════════════════════════════════

  @Patch('bulk-status')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN, AdminRole.EDITOR)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Estados actualizados exitosamente')
  @ApiOperation({ summary: 'Cambiar estado de múltiples categorías' })
  changeStatus(
    @Body() dto: BulkChangeStatusFaqDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.faqsService.changeStatusMany(dto.ids, dto.status, admin.sub);
  }

  @Patch('bulk/reorder')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Orden de preguntas frecuentes actualizado exitosamente')
  @ApiOperation({ summary: 'Reordenar preguntas frecuentes' })
  reorder(
    @Body() dto: BulkReorderFaqsDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.faqsService.reorder(dto, admin.sub);
  }

  @Delete('bulk')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Preguntas frecuentes eliminadas exitosamente')
  @ApiOperation({ summary: 'Eliminar múltiples preguntas frecuentes por IDs' })
  removeMany(@Body() dto: BulkDeleteFaqDto) {
    return this.faqsService.removeManyFaqs(dto.ids);
  }

  // ═══════════════════════════════════════════════
  // COLECCIÓN
  // ═══════════════════════════════════════════════

  @Get()
  @Roles(
    AdminRole.VIEWER,
    AdminRole.EDITOR,
    AdminRole.ADMIN,
    AdminRole.SUPER_ADMIN,
  )
  @ApiBearerAuth('access-token')
  @ResponseMessage('Preguntas frecuentes obtenidas exitosamente')
  @ApiOperation({ summary: 'Listado administrativo con filtros y paginación' })
  findAllFaqs(@Query() query: QueryFaqDto) {
    return this.faqsService.findAllFaqs(query);
  }

  @Post()
  @Roles(AdminRole.EDITOR, AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Página creada exitosamente')
  @ApiOperation({ summary: 'Crear una nueva página' })
  create(@Body() dto: CreateFaqDto, @CurrentUser() admin: AdminJwtPayload) {
    return this.faqsService.createFaq(dto, admin.sub);
  }

  // ═══════════════════════════════════════════════
  // RUTAS con id — siempre al final
  // ═══════════════════════════════════════════════

  @Get(':id')
  @Roles(AdminRole.EDITOR, AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Pregunta frecuente obtenida exitosamente')
  @ApiOperation({ summary: 'Obtener pregunta frecuente por ID' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.faqsService.findFaqById(id);
  }

  @Patch(':id')
  @Roles(AdminRole.EDITOR, AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Pregunta frecuente actualizada exitosamente')
  @ApiOperation({ summary: 'Actualizar pregunta frecuente por ID' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateFaqDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.faqsService.updateFaq(id, dto, admin.sub);
  }

  @Delete(':id')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Pregunta frecuente eliminada exitosamente')
  @ApiOperation({ summary: 'Eliminar pregunta frecuente por ID' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.faqsService.removeFaq(id);
  }
}

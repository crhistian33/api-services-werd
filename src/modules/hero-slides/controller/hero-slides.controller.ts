import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { HeroSlidesService } from '../service/hero-slides.service';
import {
  CreateHeroSlideDto,
  UpdateHeroSlideDto,
  QueryHeroSlideDto,
  BulkChangeStatusHeroSlideDto,
  BulkDeleteHeroSlideDto,
  BulkReorderHeroSlidesDto,
  BulkRestoreHeroSlideDto,
  BulkSoftDeleteHeroSlideDto,
} from '../dto';
import { ResponseMessage } from '../../../common/decorators/response-message.decorator';
import { Public } from '../../../common/decorators/public.decorator';
import { Roles } from '../../../modules/auth/decorators/roles.decorator';
import { AdminRole } from '../../../modules/auth/constants/admin-role.constant';
import { CurrentUser } from '../../../modules/auth/decorators/current-user.decorator';
import type { AdminJwtPayload } from '../../../common/interfaces/jwt-payload.interface';

@ApiTags('HeroSlides')
@Controller('hero-slides')
export class HeroSlidesController {
  constructor(private readonly heroSlidesService: HeroSlidesService) {}

  // ═══════════════════════════════════════════════
  // RUTAS PÚBLICAS (Accesibles por Clientes y CMS)
  // ═══════════════════════════════════════════════

  @Public()
  @Get('public')
  @ResponseMessage('Slides obtenidos exitosamente')
  @ApiOperation({
    summary: 'Listado público de slides con paginación y filtros',
  })
  @ApiOkResponse({ description: 'Lista paginada de slides' })
  findAllPublic(@Query() query: QueryHeroSlideDto) {
    return this.heroSlidesService.findAllPublic(query);
  }

  // ═══════════════════════════════════════════════
  // BULK (ANTES DE :id)
  // ═══════════════════════════════════════════════

  @Patch('bulk-status')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN, AdminRole.EDITOR)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Estados actualizados exitosamente')
  @ApiOperation({ summary: 'Cambiar estado de múltiples slides' })
  changeStatus(
    @Body() dto: BulkChangeStatusHeroSlideDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.heroSlidesService.changeStatusMany(
      dto.ids,
      dto.status,
      admin.sub,
    );
  }

  @Patch('bulk/soft-delete')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Slides enviados a la papelera')
  @ApiOperation({ summary: 'Desactivación masiva de slides' })
  softDeleteMany(
    @Body() dto: BulkSoftDeleteHeroSlideDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.heroSlidesService.softDeleteManyHeroSlides(dto.ids, admin.sub);
  }

  @Patch('bulk/restore')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Slides restaurados correctamente')
  @ApiOperation({ summary: 'Restauración masiva de slides' })
  restoreMany(
    @Body() dto: BulkRestoreHeroSlideDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.heroSlidesService.restoreManyHeroSlides(dto.ids, admin.sub);
  }

  @Patch('bulk/reorder')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN, AdminRole.EDITOR)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Orden de slides actualizado')
  @ApiOperation({ summary: 'Reordenar slides' })
  reorder(
    @Body() dto: BulkReorderHeroSlidesDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.heroSlidesService.reorder(dto, admin.sub);
  }

  @Delete('bulk')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Slides eliminados exitosamente')
  @ApiOperation({ summary: 'Eliminar múltiples slides' })
  removeMany(@Body() dto: BulkDeleteHeroSlideDto) {
    return this.heroSlidesService.removeManyHeroSlides(dto.ids);
  }

  // ═══════════════════════════════════════════════
  // COLECCIÓN
  // ═══════════════════════════════════════════════

  @Get()
  @Roles(
    AdminRole.ADMIN,
    AdminRole.SUPER_ADMIN,
    AdminRole.EDITOR,
    AdminRole.VIEWER,
  )
  @ApiBearerAuth('access-token')
  @ResponseMessage('Slides obtenidos exitosamente')
  @ApiOperation({ summary: 'Listar slides con paginación y filtros' })
  @ApiOkResponse({ description: 'Lista paginada de slides' })
  findAll(@Query() query: QueryHeroSlideDto) {
    return this.heroSlidesService.findAllHeroSlides(query);
  }

  @Post()
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN, AdminRole.EDITOR)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Slide creado exitosamente')
  @ApiOperation({ summary: 'Crear slide' })
  @ApiCreatedResponse({ description: 'Slide creado' })
  create(
    @Body() dto: CreateHeroSlideDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.heroSlidesService.createHeroSlide(dto, admin.sub);
  }

  // ═══════════════════════════════════════════════
  // RUTAS CON :id (AL FINAL SIEMPRE)
  // ═══════════════════════════════════════════════

  @Get(':id')
  @Roles(
    AdminRole.ADMIN,
    AdminRole.SUPER_ADMIN,
    AdminRole.EDITOR,
    AdminRole.VIEWER,
  )
  @ApiBearerAuth('access-token')
  @ResponseMessage('Slide obtenido exitosamente')
  @ApiOperation({ summary: 'Obtener slide por ID' })
  @ApiParam({ name: 'id', description: 'UUID del slide' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.heroSlidesService.findHeroSlideById(id);
  }

  @Patch(':id')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN, AdminRole.EDITOR)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Slide actualizado exitosamente')
  @ApiOperation({ summary: 'Actualizar slide' })
  @ApiParam({ name: 'id', description: 'UUID del slide' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateHeroSlideDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.heroSlidesService.updateHeroSlide(id, dto, admin.sub);
  }

  @Patch(':id/soft-delete')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Slide enviado a la papelera')
  @ApiOperation({ summary: 'Desactivar slide (Soft Delete)' })
  softDelete(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.heroSlidesService.softDeleteHeroSlide(id, admin.sub);
  }

  @Patch(':id/restore')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Slide restaurado correctamente')
  @ApiOperation({ summary: 'Restaurar slide desde la papelera' })
  restore(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.heroSlidesService.restoreHeroSlide(id, admin.sub);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Slide eliminado exitosamente')
  @ApiOperation({ summary: 'Eliminar slide' })
  @ApiParam({ name: 'id', description: 'UUID del slide' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.heroSlidesService.removeHeroSlide(id);
  }
}

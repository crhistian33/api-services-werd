import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { PagesService } from '../service/pages.service';
import { BulkChangeStatusPageDto, CreatePageDto, UpdatePageDto } from '../dto';
import { ResponseMessage } from '../../../common/decorators/response-message.decorator';
import {
  BulkDeletePageDto,
  BulkRestorePageDto,
  BulkSoftDeletePageDto,
} from '../dto/bulk-page.dto';
import { QueryPageDto } from '../dto/query-page.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from '../../../modules/auth/decorators/roles.decorator';
import { AdminRole } from '../../../modules/auth/constants/admin-role.constant';
import { Public } from '../../../common/decorators/public.decorator';
import { PageStatus } from 'generated/prisma/enums';

@ApiTags('Pages')
@Controller('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  // ═══════════════════════════════════════════════
  // RUTAS PÚBLICAS (Accesibles por Clientes)
  // ═══════════════════════════════════════════════

  @Public()
  @Get('public')
  @ResponseMessage('Páginas obtenidas exitosamente')
  @ApiOperation({ summary: 'Listar páginas con paginación y filtros' })
  @ApiOkResponse({ description: 'Lista paginada de páginas' })
  findAllPublic(@Query() query: QueryPageDto) {
    return this.pagesService.findAllPagesPublic(query);
  }

  @Public()
  @Get('public/:slug')
  @ResponseMessage('Página obtenida exitosamente')
  findBySlugPublic(@Param('slug') slug: string) {
    return this.pagesService.findPageBySlugPublic(slug);
  }

  // ═══════════════════════════════════════════════
  // BULK (ANTES DE :id)
  // ═══════════════════════════════════════════════

  @Patch('bulk/status')
  @Roles(AdminRole.EDITOR, AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Estados actualizados exitosamente')
  @ApiOperation({ summary: 'Cambiar estado de múltiples páginas' })
  changeStatusMany(@Body() dto: BulkChangeStatusPageDto) {
    return this.pagesService.changeStatusMany(dto.ids, dto.status);
  }

  @Patch('bulk/soft-delete')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Páginas enviadas a la papelera')
  @ApiOperation({ summary: 'Soft-delete masivo' })
  softDeleteMany(@Body() dto: BulkSoftDeletePageDto) {
    return this.pagesService.softDeleteManyPages(dto.ids);
  }

  @Patch('bulk/restore')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Páginas restauradas exitosamente')
  @ApiOperation({ summary: 'Restaurar masivo' })
  restoreMany(@Body() dto: BulkRestorePageDto) {
    return this.pagesService.restoreManyPages(dto.ids);
  }

  @Delete('bulk')
  @Roles(AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Páginas eliminadas permanentemente')
  @ApiOperation({ summary: 'Eliminación física masiva (IRREVERSIBLE)' })
  removeMany(@Body() dto: BulkDeletePageDto) {
    return this.pagesService.removeManyPages(dto.ids);
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
  @ResponseMessage('Páginas obtenidas exitosamente')
  @ApiOperation({ summary: 'Listado administrativo con filtros y paginación' })
  findAll(@Query() query: QueryPageDto) {
    return this.pagesService.findAllPages(query);
  }

  @Post()
  @Roles(AdminRole.EDITOR, AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Página creada exitosamente')
  @ApiOperation({ summary: 'Crear página' })
  @ApiCreatedResponse({ description: 'Página creada' })
  create(@Body() dto: CreatePageDto) {
    return this.pagesService.createPage(dto);
  }

  // ═══════════════════════════════════════════════
  // POR :id — siempre al final
  // ═══════════════════════════════════════════════

  @Get('slug/:slug')
  @Roles(
    AdminRole.VIEWER,
    AdminRole.EDITOR,
    AdminRole.ADMIN,
    AdminRole.SUPER_ADMIN,
  )
  @ApiBearerAuth('access-token')
  @ResponseMessage('Página obtenida exitosamente')
  @ApiOperation({ summary: 'Obtener página por slug (admin)' })
  findBySlug(@Param('slug') slug: string) {
    return this.pagesService.findPageBySlug(slug);
  }

  @Get(':id')
  @Roles(
    AdminRole.VIEWER,
    AdminRole.EDITOR,
    AdminRole.ADMIN,
    AdminRole.SUPER_ADMIN,
  )
  @ApiBearerAuth('access-token')
  @ResponseMessage('Página obtenida exitosamente')
  @ApiOperation({ summary: 'Obtener página por ID' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.pagesService.findPageById(id);
  }

  @Patch(':id')
  @Roles(AdminRole.EDITOR, AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Página actualizada exitosamente')
  @ApiOperation({ summary: 'Actualizar página' })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdatePageDto) {
    return this.pagesService.updatePage(id, dto);
  }

  @Patch(':id/status')
  @Roles(AdminRole.EDITOR, AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Estado actualizado exitosamente')
  @ApiOperation({ summary: 'Cambiar estado de página individual' })
  changeStatus(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() status: PageStatus,
  ) {
    return this.pagesService.changeStatus(id, status);
  }

  @Patch(':id/soft-delete')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Página enviada a la papelera')
  @ApiOperation({ summary: 'Soft-delete página' })
  softDelete(@Param('id', ParseUUIDPipe) id: string) {
    return this.pagesService.softDeletePage(id);
  }

  @Patch(':id/restore')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Página restaurada exitosamente')
  @ApiOperation({ summary: 'Restaurar página' })
  restore(@Param('id', ParseUUIDPipe) id: string) {
    return this.pagesService.restorePage(id);
  }

  @Delete(':id')
  @Roles(AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Página eliminada permanentemente')
  @ApiOperation({ summary: 'Eliminación física (IRREVERSIBLE)' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.pagesService.removePage(id);
  }
}

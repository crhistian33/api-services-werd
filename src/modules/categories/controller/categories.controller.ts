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
  ApiCreatedResponse,
  ApiBearerAuth,
  ApiForbiddenResponse,
} from '@nestjs/swagger';
import { CategoriesService } from '../service/categories.service';
import {
  CreateCategoryDto,
  UpdateCategoryDto,
  QueryCategoryDto,
  BulkDeleteCategoryDto,
  BulkSoftDeleteCategoryDto,
  BulkRestoreCategoryDto,
  BulkChangeStatusCategoryDto,
} from '../dto';
import { ResponseMessage } from '../../../common/decorators/response-message.decorator';
import { Roles } from '../../auth/decorators/roles.decorator';
import { AdminRole } from '../../auth/constants/admin-role.constant';
import { Public } from '../../../common/decorators/public.decorator';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import type { AdminJwtPayload } from '../../../common/interfaces/jwt-payload.interface';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  // ═══════════════════════════════════════════════
  // RUTAS PÚBLICAS (Accesibles por Clientes y CMS)
  // ═══════════════════════════════════════════════

  @Public()
  @Get('tree')
  @ResponseMessage('Árbol de categorías obtenido exitosamente')
  @ApiOperation({ summary: 'Obtener árbol de categorías activas' })
  getCategoryTree() {
    return this.categoriesService.getCategoryTree();
  }

  @Public()
  @Get('public/:slug')
  @ResponseMessage('Categoría obtenida exitosamente')
  @ApiOperation({ summary: 'Obtener categoría por su slug' })
  @ApiParam({ name: 'slug', example: 'tecnologia-laptops' })
  findBySlug(@Param('slug') slug: string) {
    return this.categoriesService.findCategoryBySlug(slug);
  }

  @Public()
  @Get('public')
  @ResponseMessage('Lista de categorías obtenida')
  @ApiOperation({ summary: 'Listado público de categorías' })
  findAllPublic(@Query() query: QueryCategoryDto) {
    return this.categoriesService.findAllCategoriesPublic(query);
  }

  // ═══════════════════════════════════════════════
  // BULK (ANTES DE :id)
  // ═══════════════════════════════════════════════

  @Patch('bulk-status')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN, AdminRole.EDITOR)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Estados actualizados exitosamente')
  @ApiOperation({ summary: 'Cambiar estado de múltiples categorías' })
  changeStatus(
    @Body() dto: BulkChangeStatusCategoryDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.categoriesService.changeStatusMany(
      dto.ids,
      dto.status,
      admin.sub,
    );
  }

  @Patch('bulk/soft-delete')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Categorías enviadas a la papelera')
  @ApiOperation({ summary: 'Desactivación masiva de categorías' })
  softDeleteMany(
    @Body() dto: BulkSoftDeleteCategoryDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.categoriesService.softDeleteManyCategories(dto.ids, admin.sub);
  }

  @Patch('bulk/restore')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Categorías restauradas correctamente')
  @ApiOperation({ summary: 'Restauración masiva de categorías' })
  restoreMany(
    @Body() dto: BulkRestoreCategoryDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.categoriesService.restoreManyCategories(dto.ids, admin.sub);
  }

  @Delete('bulk')
  @Roles(AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Categorías eliminadas permanentemente')
  @ApiOperation({ summary: 'Eliminación física masiva (IRREVERSIBLE)' })
  @ApiForbiddenResponse({
    description: 'Acción permitida solo para Super Admin',
  })
  removeMany(@Body() dto: BulkDeleteCategoryDto) {
    return this.categoriesService.removeManyCategories(dto.ids);
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
  @ResponseMessage('Lista de categorías obtenida')
  @ApiOperation({ summary: 'Listado administrativo con filtros y paginación' })
  findAll(@Query() query: QueryCategoryDto) {
    return this.categoriesService.findAllCategories(query);
  }

  @Post()
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN, AdminRole.EDITOR)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Categoría creada correctamente')
  @ApiOperation({ summary: 'Crear una nueva categoría' })
  @ApiCreatedResponse({ description: 'La categoría ha sido creada' })
  create(
    @Body() dto: CreateCategoryDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.categoriesService.createCategory(dto, admin.sub);
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
  @ResponseMessage('Categoría obtenida exitosamente')
  @ApiOperation({ summary: 'Obtener categoría por UUID' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.categoriesService.findCategoryById(id);
  }

  @Patch(':id')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN, AdminRole.EDITOR)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Categoría actualizada correctamente')
  @ApiOperation({ summary: 'Actualizar datos de una categoría' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateCategoryDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.categoriesService.updateCategory(id, dto, admin.sub);
  }

  @Patch(':id/soft-delete')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Categoría enviada a la papelera')
  @ApiOperation({ summary: 'Desactivar categoría (Soft Delete)' })
  softDelete(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.categoriesService.softDeleteCategory(id, admin.sub);
  }

  @Patch(':id/restore')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Categoría restaurada correctamente')
  @ApiOperation({ summary: 'Restaurar categoría desde la papelera' })
  restore(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.categoriesService.restoreCategory(id, admin.sub);
  }

  @Delete(':id')
  @Roles(AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Categoría eliminada permanentemente')
  @ApiOperation({ summary: 'Eliminación física por ID (IRREVERSIBLE)' })
  @ApiForbiddenResponse({
    description: 'Acción permitida solo para Super Admin',
  })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.categoriesService.removeCategory(id);
  }
}

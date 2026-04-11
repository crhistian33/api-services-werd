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
import { BrandsService } from '../service/brands.service';
import {
  CreateBrandDto,
  UpdateBrandDto,
  QueryBrandDto,
  BulkDeleteBrandDto,
  BulkSoftDeleteBrandDto,
  BulkRestoreBrandDto,
} from '../dto';
import { ResponseMessage } from '../../../common/decorators/response-message.decorator';
import { Roles } from '../../auth/decorators/roles.decorator';
import { AdminRole } from '../../auth/constants/admin-role.constant';

@ApiTags('Brands')
@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  // ═══════════════════════════════════════════════
  // BULK (ANTES DE :id)
  // ═══════════════════════════════════════════════

  @Patch('bulk/soft-delete')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Marcas eliminadas (soft) exitosamente')
  @ApiOperation({ summary: 'Soft-delete múltiples marcas' })
  softDeleteMany(@Body() dto: BulkSoftDeleteBrandDto) {
    return this.brandsService.softDeleteManyBrands(dto.ids);
  }

  @Patch('bulk/restore')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Marcas restauradas exitosamente')
  @ApiOperation({ summary: 'Restaurar múltiples marcas' })
  restoreMany(@Body() dto: BulkRestoreBrandDto) {
    return this.brandsService.restoreManyBrands(dto.ids);
  }

  @Delete('bulk')
  @Roles(AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Marcas eliminadas exitosamente')
  @ApiOperation({ summary: 'Eliminar múltiples marcas' })
  removeMany(@Body() dto: BulkDeleteBrandDto) {
    return this.brandsService.removeManyBrands(dto.ids);
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
  @ResponseMessage('Marcas obtenidas exitosamente')
  @ApiOperation({ summary: 'Listar marcas con paginación y filtros' })
  @ApiOkResponse({ description: 'Lista paginada de marcas' })
  findAll(@Query() query: QueryBrandDto) {
    return this.brandsService.findAllBrands(query);
  }

  @Post()
  @Roles(AdminRole.EDITOR, AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Marca creada exitosamente')
  @ApiOperation({ summary: 'Crear marca' })
  @ApiCreatedResponse({ description: 'Marca creada' })
  create(@Body() dto: CreateBrandDto) {
    return this.brandsService.createBrand(dto);
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
  @ResponseMessage('Marca obtenida exitosamente')
  @ApiOperation({ summary: 'Obtener marca por slug' })
  @ApiParam({ name: 'slug', example: 'lenovo' })
  findBySlug(@Param('slug') slug: string) {
    return this.brandsService.findBrandBySlug(slug);
  }

  @Get(':id')
  @Roles(
    AdminRole.VIEWER,
    AdminRole.EDITOR,
    AdminRole.ADMIN,
    AdminRole.SUPER_ADMIN,
  )
  @ApiBearerAuth('access-token')
  @ResponseMessage('Marca obtenida exitosamente')
  @ApiOperation({ summary: 'Obtener marca por ID' })
  @ApiParam({ name: 'id', description: 'UUID de la marca' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.brandsService.findBrandById(id);
  }

  @Patch(':id')
  @Roles(AdminRole.EDITOR, AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Marca actualizada exitosamente')
  @ApiOperation({ summary: 'Actualizar marca' })
  @ApiParam({ name: 'id', description: 'UUID de la marca' })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateBrandDto) {
    return this.brandsService.updateBrand(id, dto);
  }

  @Patch(':id/soft-delete')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Marca eliminada exitosamente')
  @ApiOperation({ summary: 'Soft-delete de marca' })
  @ApiParam({ name: 'id', description: 'UUID de la marca' })
  softDelete(@Param('id', ParseUUIDPipe) id: string) {
    return this.brandsService.softDeleteBrand(id);
  }

  @Patch(':id/restore')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Marca restaurada exitosamente')
  @ApiOperation({ summary: 'Restaurar marca eliminada' })
  @ApiParam({ name: 'id', description: 'UUID de la marca' })
  restore(@Param('id', ParseUUIDPipe) id: string) {
    return this.brandsService.restoreBrand(id);
  }

  @Delete(':id')
  @Roles(AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Marca eliminada exitosamente')
  @ApiOperation({ summary: 'Eliminar marca' })
  @ApiParam({ name: 'id', description: 'UUID de la marca' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.brandsService.removeBrand(id);
  }
}

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
} from '@nestjs/swagger';
import { CategoriesService } from '../service/categories.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { QueryCategoryDto } from '../dto/query-category.dto';
import { BulkDeleteDto } from '../dto/bulk-delete-category.dto';
import { ResponseMessage } from '../../../common/decorators/response-message/response-message.decorator';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  // GET /categories
  @Get()
  @ResponseMessage('Categorías obtenidas exitosamente')
  @ApiOperation({ summary: 'Listar categorías con paginación y filtros' })
  @ApiOkResponse({ description: 'Lista paginada de categorías' })
  findAll(@Query() query: QueryCategoryDto) {
    return this.categoriesService.findAllCategories(query);
  }

  // GET /categories/tree
  @Get('tree')
  @ResponseMessage('Árbol de categorías obtenido exitosamente')
  @ApiOperation({ summary: 'Árbol completo de categorías activas' })
  getCategoryTree() {
    return this.categoriesService.getCategoryTree();
  }

  // GET /categories/slug/:slug
  @Get('slug/:slug')
  @ResponseMessage('Categoría obtenida exitosamente')
  @ApiOperation({ summary: 'Obtener categoría por slug' })
  @ApiParam({ name: 'slug', example: 'laptops' })
  findBySlug(@Param('slug') slug: string) {
    return this.categoriesService.findCategoryBySlug(slug);
  }

  // GET /categories/:id
  @Get(':id')
  @ResponseMessage('Categoría obtenida exitosamente')
  @ApiOperation({ summary: 'Obtener categoría por ID' })
  @ApiParam({ name: 'id', description: 'UUID de la categoría' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.categoriesService.findCategoryById(id);
  }

  // POST /categories
  @Post()
  @ResponseMessage('Categoría creada exitosamente')
  @ApiOperation({ summary: 'Crear categoría' })
  @ApiCreatedResponse({ description: 'Categoría creada' })
  create(@Body() dto: CreateCategoryDto) {
    return this.categoriesService.createCategory(dto);
  }

  // PATCH /categories/:id
  @Patch(':id')
  @ResponseMessage('Categoría actualizada exitosamente')
  @ApiOperation({ summary: 'Actualizar categoría' })
  @ApiParam({ name: 'id', description: 'UUID de la categoría' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateCategoryDto,
  ) {
    return this.categoriesService.updateCategory(id, dto);
  }

  // DELETE /categories/bulk
  @Delete('bulk')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Categorías eliminadas exitosamente')
  @ApiOperation({ summary: 'Eliminar múltiples categorías' })
  removeMany(@Body() dto: BulkDeleteDto) {
    return this.categoriesService.removeManyCategories(dto.ids);
  }

  // PATCH /categories/bulk/soft-delete  ← estática antes que :id/soft-delete
  @Patch('bulk/soft-delete')
  @ResponseMessage('Categorías eliminadas (soft) exitosamente')
  @ApiOperation({ summary: 'Soft-delete múltiples categorías' })
  softDeleteMany(@Body() dto: BulkDeleteDto) {
    return this.categoriesService.softDeleteManyCategories(dto.ids);
  }

  // PATCH /categories/bulk/restore  ← estática antes que :id/restore
  @Patch('bulk/restore')
  @ResponseMessage('Categorías restauradas exitosamente')
  @ApiOperation({ summary: 'Restaurar múltiples categorías' })
  restoreMany(@Body() dto: BulkDeleteDto) {
    return this.categoriesService.restoreManyCategories(dto.ids);
  }

  // DELETE /categories/:id
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Categoría eliminada exitosamente')
  @ApiOperation({ summary: 'Eliminar categoría' })
  @ApiParam({ name: 'id', description: 'UUID de la categoría' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.categoriesService.removeCategory(id);
  }

  // PATCH /categories/:id/soft-delete
  @Patch(':id/soft-delete')
  @ResponseMessage('Categoría eliminada exitosamente')
  @ApiOperation({ summary: 'Soft-delete de categoría' })
  softDelete(@Param('id', ParseUUIDPipe) id: string) {
    return this.categoriesService.softDeleteCategory(id);
  }

  // PATCH /categories/:id/restore
  @Patch(':id/restore')
  @ResponseMessage('Categoría restaurada exitosamente')
  @ApiOperation({ summary: 'Restaurar categoría eliminada' })
  restore(@Param('id', ParseUUIDPipe) id: string) {
    return this.categoriesService.restoreCategory(id);
  }
}

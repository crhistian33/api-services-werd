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
import { BrandsService } from '../service/brands.service';
import { CreateBrandDto } from '../dto/create-brand.dto';
import { UpdateBrandDto } from '../dto/update-brand.dto';
import { QueryBrandDto } from '../dto/query-brand.dto';
import { BulkDeleteBrandDto } from '../dto/bulk-delete-brand.dto';
import { ResponseMessage } from '../../../common/decorators/response-message/response-message.decorator';

@ApiTags('Brands')
@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  // GET /brands
  @Get()
  @ResponseMessage('Marcas obtenidas exitosamente')
  @ApiOperation({ summary: 'Listar marcas con paginación y filtros' })
  @ApiOkResponse({ description: 'Lista paginada de marcas' })
  findAll(@Query() query: QueryBrandDto) {
    return this.brandsService.findAllBrands(query);
  }

  // GET /brands/slug/:slug
  @Get('slug/:slug')
  @ResponseMessage('Marca obtenida exitosamente')
  @ApiOperation({ summary: 'Obtener marca por slug' })
  @ApiParam({ name: 'slug', example: 'lenovo' })
  findBySlug(@Param('slug') slug: string) {
    return this.brandsService.findBrandBySlug(slug);
  }

  // GET /brands/:id
  @Get(':id')
  @ResponseMessage('Marca obtenida exitosamente')
  @ApiOperation({ summary: 'Obtener marca por ID' })
  @ApiParam({ name: 'id', description: 'UUID de la marca' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.brandsService.findBrandById(id);
  }

  // POST /brands
  @Post()
  @ResponseMessage('Marca creada exitosamente')
  @ApiOperation({ summary: 'Crear marca' })
  @ApiCreatedResponse({ description: 'Marca creada' })
  create(@Body() dto: CreateBrandDto) {
    return this.brandsService.createBrand(dto);
  }

  // PATCH /brands/:id
  @Patch(':id')
  @ResponseMessage('Marca actualizada exitosamente')
  @ApiOperation({ summary: 'Actualizar marca' })
  @ApiParam({ name: 'id', description: 'UUID de la marca' })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateBrandDto) {
    return this.brandsService.updateBrand(id, dto);
  }

  // DELETE /brands/bulk  ← estáticas primero
  @Delete('bulk')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Marcas eliminadas exitosamente')
  @ApiOperation({ summary: 'Eliminar múltiples marcas' })
  removeMany(@Body() dto: BulkDeleteBrandDto) {
    return this.brandsService.removeManyBrands(dto.ids);
  }

  // PATCH /brands/bulk/soft-delete
  @Patch('bulk/soft-delete')
  @ResponseMessage('Marcas eliminadas (soft) exitosamente')
  @ApiOperation({ summary: 'Soft-delete múltiples marcas' })
  softDeleteMany(@Body() dto: BulkDeleteBrandDto) {
    return this.brandsService.softDeleteManyBrands(dto.ids);
  }

  // PATCH /brands/bulk/restore
  @Patch('bulk/restore')
  @ResponseMessage('Marcas restauradas exitosamente')
  @ApiOperation({ summary: 'Restaurar múltiples marcas' })
  restoreMany(@Body() dto: BulkDeleteBrandDto) {
    return this.brandsService.restoreManyBrands(dto.ids);
  }

  // DELETE /brands/:id
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Marca eliminada exitosamente')
  @ApiOperation({ summary: 'Eliminar marca' })
  @ApiParam({ name: 'id', description: 'UUID de la marca' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.brandsService.removeBrand(id);
  }

  // PATCH /brands/:id/soft-delete
  @Patch(':id/soft-delete')
  @ResponseMessage('Marca eliminada exitosamente')
  @ApiOperation({ summary: 'Soft-delete de marca' })
  @ApiParam({ name: 'id', description: 'UUID de la marca' })
  softDelete(@Param('id', ParseUUIDPipe) id: string) {
    return this.brandsService.softDeleteBrand(id);
  }

  // PATCH /brands/:id/restore
  @Patch(':id/restore')
  @ResponseMessage('Marca restaurada exitosamente')
  @ApiOperation({ summary: 'Restaurar marca eliminada' })
  @ApiParam({ name: 'id', description: 'UUID de la marca' })
  restore(@Param('id', ParseUUIDPipe) id: string) {
    return this.brandsService.restoreBrand(id);
  }
}

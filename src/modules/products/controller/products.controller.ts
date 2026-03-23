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
import { ProductsService } from '../service/products.service';
import { ProductPriceService } from '../service/product-price.service';
import { ProductSpecsService } from '../service/product-specs.service';
import {
  CreateProductDto,
  UpdateProductDto,
  QueryProductDto,
  BulkDeleteProductDto,
  BulkSoftDeleteProductDto,
  BulkRestoreProductDto,
} from '../dto';
import { SetPriceDto } from '../dto/price-product.dto';
import { SetSpecsDto, SetFeaturesDto } from '../dto/specs-product.dto';
import { ResponseMessage } from '../../../common/decorators/response-message.decorator';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly priceService: ProductPriceService, // ← nuevo
    private readonly specsService: ProductSpecsService, // ← nuevo
  ) {}

  // ═══════════════════════════════════════════════
  // Endpoints existentes — sin cambios
  // ═══════════════════════════════════════════════

  @Get('public')
  @ResponseMessage('Productos obtenidos exitosamente')
  @ApiOperation({ summary: 'Listado público de productos (sitio Astro)' })
  @ApiOkResponse({
    description: 'Lista paginada — solo activos, incluye features',
  })
  findAllPublic(@Query() query: QueryProductDto) {
    return this.productsService.findAllProductsPublic(query);
  }

  @Get()
  @ResponseMessage('Productos obtenidos exitosamente')
  @ApiOperation({ summary: 'Listar productos con paginación y filtros' })
  @ApiOkResponse({ description: 'Lista paginada de productos' })
  findAll(@Query() query: QueryProductDto) {
    return this.productsService.findAllProducts(query);
  }

  @Get('slug/:slug')
  @ResponseMessage('Producto obtenido exitosamente')
  @ApiOperation({ summary: 'Obtener producto por slug' })
  @ApiParam({ name: 'slug', example: 'notebook-gamer-x' })
  findBySlug(@Param('slug') slug: string) {
    return this.productsService.findProductBySlug(slug);
  }

  @Get(':id')
  @ResponseMessage('Producto obtenido exitosamente')
  @ApiOperation({ summary: 'Obtener producto por ID' })
  @ApiParam({ name: 'id', description: 'UUID del producto' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.findProductById(id);
  }

  @Post()
  @ResponseMessage('Producto creado exitosamente')
  @ApiOperation({ summary: 'Crear producto' })
  @ApiCreatedResponse({ description: 'Producto creado' })
  create(@Body() dto: CreateProductDto) {
    return this.productsService.createProduct(dto);
  }

  @Patch(':id')
  @ResponseMessage('Producto actualizado exitosamente')
  @ApiOperation({ summary: 'Actualizar producto' })
  @ApiParam({ name: 'id', description: 'UUID del producto' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateProductDto,
  ) {
    return this.productsService.updateProduct(id, dto);
  }

  // ═══════════════════════════════════════════════
  // Precio — endpoints dedicados
  // ═══════════════════════════════════════════════

  @Get(':id/price')
  @ResponseMessage('Precio obtenido exitosamente')
  @ApiOperation({ summary: 'Obtener precio actual del producto' })
  @ApiParam({ name: 'id', description: 'UUID del producto' })
  getPrice(@Param('id', ParseUUIDPipe) id: string) {
    return this.priceService.getPrice(id);
  }

  @Patch(':id/price')
  @ResponseMessage('Precio actualizado exitosamente')
  @ApiOperation({ summary: 'Actualizar precio del producto' })
  @ApiParam({ name: 'id', description: 'UUID del producto' })
  setPrice(@Param('id', ParseUUIDPipe) id: string, @Body() dto: SetPriceDto) {
    return this.priceService.setPrice(id, dto);
  }

  @Get(':id/price-history')
  @ResponseMessage('Historial de precios obtenido exitosamente')
  @ApiOperation({ summary: 'Historial de cambios de precio' })
  @ApiParam({ name: 'id', description: 'UUID del producto' })
  getPriceHistory(@Param('id', ParseUUIDPipe) id: string) {
    return this.priceService.getPriceHistory(id);
  }

  // ═══════════════════════════════════════════════
  // Specs y features — endpoints dedicados
  // ═══════════════════════════════════════════════

  @Patch(':id/specs')
  @ResponseMessage('Especificaciones actualizadas exitosamente')
  @ApiOperation({ summary: 'Reemplazar especificaciones del producto' })
  @ApiParam({ name: 'id', description: 'UUID del producto' })
  setSpecs(@Param('id', ParseUUIDPipe) id: string, @Body() dto: SetSpecsDto) {
    return this.specsService.setSpecs(id, dto.specs);
  }

  @Patch(':id/features')
  @ResponseMessage('Características actualizadas exitosamente')
  @ApiOperation({ summary: 'Reemplazar características del producto' })
  @ApiParam({ name: 'id', description: 'UUID del producto' })
  setFeatures(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: SetFeaturesDto,
  ) {
    return this.specsService.setFeatures(id, dto.features);
  }

  // ═══════════════════════════════════════════════
  // Bulk — sin cambios
  // ═══════════════════════════════════════════════

  @Delete('bulk')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Productos eliminados exitosamente')
  @ApiOperation({ summary: 'Eliminar múltiples productos' })
  removeMany(@Body() dto: BulkDeleteProductDto) {
    return this.productsService.removeManyProducts(dto.ids);
  }

  @Patch('bulk/soft-delete')
  @ResponseMessage('Productos eliminados (soft) exitosamente')
  @ApiOperation({ summary: 'Soft-delete múltiples productos' })
  softDeleteMany(@Body() dto: BulkSoftDeleteProductDto) {
    return this.productsService.softDeleteManyProducts(dto.ids);
  }

  @Patch('bulk/restore')
  @ResponseMessage('Productos restaurados exitosamente')
  @ApiOperation({ summary: 'Restaurar múltiples productos' })
  restoreMany(@Body() dto: BulkRestoreProductDto) {
    return this.productsService.restoreManyProducts(dto.ids);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Producto eliminado exitosamente')
  @ApiOperation({ summary: 'Eliminar producto' })
  @ApiParam({ name: 'id', description: 'UUID del producto' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.removeProduct(id);
  }

  @Patch(':id/soft-delete')
  @ResponseMessage('Producto eliminado exitosamente')
  @ApiOperation({ summary: 'Soft-delete de producto' })
  @ApiParam({ name: 'id', description: 'UUID del producto' })
  softDelete(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.softDeleteProduct(id);
  }

  @Patch(':id/restore')
  @ResponseMessage('Producto restaurado exitosamente')
  @ApiOperation({ summary: 'Restaurar producto eliminado' })
  @ApiParam({ name: 'id', description: 'UUID del producto' })
  restore(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.restoreProduct(id);
  }
}

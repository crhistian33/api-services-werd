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
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { QueryProductDto } from '../dto/query-product.dto';
import { BulkDeleteProductDto } from '../dto/bulk-delete-product.dto';
import { ResponseMessage } from '../../../common/decorators/response-message/response-message.decorator';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

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
  softDeleteMany(@Body() dto: BulkDeleteProductDto) {
    return this.productsService.softDeleteManyProducts(dto.ids);
  }

  @Patch('bulk/restore')
  @ResponseMessage('Productos restaurados exitosamente')
  @ApiOperation({ summary: 'Restaurar múltiples productos' })
  restoreMany(@Body() dto: BulkDeleteProductDto) {
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

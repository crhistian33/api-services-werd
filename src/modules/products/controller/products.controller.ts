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
import { BulkChangeStatusProductDto } from '../dto/bulk-change-status.dto';
import { Roles } from '../../auth/decorators/roles.decorator';
import { AdminRole } from '../../auth/constants/admin-role.constant';
import { Public } from '../../../common/decorators/public.decorator';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import type { AdminJwtPayload } from '../../../common/interfaces/jwt-payload.interface';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly priceService: ProductPriceService, // ← nuevo
    private readonly specsService: ProductSpecsService, // ← nuevo
  ) {}

  // ═══════════════════════════════════════════════
  // RUTAS PÚBLICAS (Accesibles por Clientes)
  // ═══════════════════════════════════════════════

  @Public()
  @Get('public')
  @ResponseMessage('Productos obtenidos exitosamente')
  @ApiOperation({ summary: 'Listado público de productos (sitio Astro)' })
  @ApiOkResponse({
    description: 'Lista paginada — solo activos, incluye features',
  })
  findAllPublic(@Query() query: QueryProductDto) {
    return this.productsService.findAllProductsPublic(query);
  }

  @Public()
  @Get('public/:slug')
  @ResponseMessage('Producto obtenido exitosamente')
  @ApiOperation({ summary: 'Obtener producto por slug' })
  @ApiParam({ name: 'slug', example: 'notebook-gamer-x' })
  findBySlugPublic(@Param('slug') slug: string) {
    return this.productsService.findProductBySlug(slug);
  }

  // ═══════════════════════════════════════════════
  // BULK (ANTES DE :id)
  // ═══════════════════════════════════════════════

  @Patch('bulk-status')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN, AdminRole.EDITOR)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Estados actualizados exitosamente')
  @ApiOperation({ summary: 'Cambiar estado de múltiples productos' })
  async changeStatus(
    @Body() dto: BulkChangeStatusProductDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.productsService.changeStatusMany(
      dto.ids,
      dto.status,
      admin.sub,
    );
  }

  @Patch('bulk/soft-delete')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Productos eliminados (soft) exitosamente')
  @ApiOperation({ summary: 'Soft-delete múltiples productos' })
  softDeleteMany(
    @Body() dto: BulkSoftDeleteProductDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.productsService.softDeleteManyProducts(dto.ids, admin.sub);
  }

  @Patch('bulk/restore')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Productos restaurados exitosamente')
  @ApiOperation({ summary: 'Restaurar múltiples productos' })
  restoreMany(
    @Body() dto: BulkRestoreProductDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.productsService.restoreManyProducts(dto.ids, admin.sub);
  }

  @Delete('bulk')
  @Roles(AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Productos eliminados exitosamente')
  @ApiOperation({ summary: 'Eliminar múltiples productos' })
  removeMany(@Body() dto: BulkDeleteProductDto) {
    return this.productsService.removeManyProducts(dto.ids);
  }

  // ═══════════════════════════════════════════════
  // COLECCIÓN
  // ═══════════════════════════════════════════════

  @Get()
  @Roles(
    AdminRole.SUPER_ADMIN,
    AdminRole.ADMIN,
    AdminRole.EDITOR,
    AdminRole.VIEWER,
  )
  @ApiBearerAuth('access-token')
  @ResponseMessage('Productos obtenidos exitosamente')
  @ApiOperation({ summary: 'Listar productos con paginación y filtros' })
  @ApiOkResponse({ description: 'Lista paginada de productos' })
  findAll(@Query() query: QueryProductDto) {
    return this.productsService.findAllProducts(query);
  }

  @Post()
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN, AdminRole.EDITOR)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Producto creado exitosamente')
  @ApiOperation({ summary: 'Crear producto' })
  @ApiCreatedResponse({ description: 'Producto creado' })
  create(@Body() dto: CreateProductDto, @CurrentUser() admin: AdminJwtPayload) {
    return this.productsService.createProduct(dto, admin.sub);
  }

  // ═══════════════════════════════════════════════
  // POR :id — siempre al final
  // ═══════════════════════════════════════════════

  @Get(':id')
  @Roles(
    AdminRole.SUPER_ADMIN,
    AdminRole.ADMIN,
    AdminRole.EDITOR,
    AdminRole.VIEWER,
  )
  @ApiBearerAuth('access-token')
  @ResponseMessage('Producto obtenido exitosamente')
  @ApiOperation({ summary: 'Obtener producto por ID' })
  @ApiParam({ name: 'id', description: 'UUID del producto' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.findProductById(id);
  }

  @Patch(':id')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN, AdminRole.EDITOR)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Producto actualizado exitosamente')
  @ApiOperation({ summary: 'Actualizar producto' })
  @ApiParam({ name: 'id', description: 'UUID del producto' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateProductDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.productsService.updateProduct(id, dto, admin.sub);
  }

  @Get(':id/price')
  @Roles(
    AdminRole.SUPER_ADMIN,
    AdminRole.ADMIN,
    AdminRole.EDITOR,
    AdminRole.VIEWER,
  )
  @ApiBearerAuth('access-token')
  @ResponseMessage('Precio obtenido exitosamente')
  @ApiOperation({ summary: 'Obtener precio actual del producto' })
  @ApiParam({ name: 'id', description: 'UUID del producto' })
  getPrice(@Param('id', ParseUUIDPipe) id: string) {
    return this.priceService.getPrice(id);
  }

  @Patch(':id/price')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN, AdminRole.EDITOR)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Precio actualizado exitosamente')
  @ApiOperation({ summary: 'Actualizar precio del producto' })
  @ApiParam({ name: 'id', description: 'UUID del producto' })
  setPrice(@Param('id', ParseUUIDPipe) id: string, @Body() dto: SetPriceDto) {
    return this.priceService.setPrice(id, dto);
  }

  @Get(':id/price-history')
  @Roles(
    AdminRole.SUPER_ADMIN,
    AdminRole.ADMIN,
    AdminRole.EDITOR,
    AdminRole.VIEWER,
  )
  @ApiBearerAuth('access-token')
  @ResponseMessage('Historial de precios obtenido exitosamente')
  @ApiOperation({ summary: 'Historial de cambios de precio' })
  @ApiParam({ name: 'id', description: 'UUID del producto' })
  getPriceHistory(@Param('id', ParseUUIDPipe) id: string) {
    return this.priceService.getPriceHistory(id);
  }

  @Patch(':id/specs')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN, AdminRole.EDITOR)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Especificaciones actualizadas exitosamente')
  @ApiOperation({ summary: 'Reemplazar especificaciones del producto' })
  @ApiParam({ name: 'id', description: 'UUID del producto' })
  setSpecs(@Param('id', ParseUUIDPipe) id: string, @Body() dto: SetSpecsDto) {
    return this.specsService.setSpecs(id, dto.specs);
  }

  @Patch(':id/features')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN, AdminRole.EDITOR)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Características actualizadas exitosamente')
  @ApiOperation({ summary: 'Reemplazar características del producto' })
  @ApiParam({ name: 'id', description: 'UUID del producto' })
  setFeatures(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: SetFeaturesDto,
  ) {
    return this.specsService.setFeatures(id, dto.features);
  }

  @Patch(':id/soft-delete')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Producto eliminado exitosamente')
  @ApiOperation({ summary: 'Soft-delete de producto' })
  @ApiParam({ name: 'id', description: 'UUID del producto' })
  softDelete(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.productsService.softDeleteProduct(id, admin.sub);
  }

  @Patch(':id/restore')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Producto restaurado exitosamente')
  @ApiOperation({ summary: 'Restaurar producto eliminado' })
  @ApiParam({ name: 'id', description: 'UUID del producto' })
  restore(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.productsService.restoreProduct(id, admin.sub);
  }

  @Delete(':id')
  @Roles(AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Producto eliminado exitosamente')
  @ApiOperation({ summary: 'Eliminar producto' })
  @ApiParam({ name: 'id', description: 'UUID del producto' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.removeProduct(id);
  }
}

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
} from '@nestjs/swagger';
import { ShippingZonesService } from '../service/shipping-zones.service';
import {
  CreateShippingZoneDto,
  UpdateShippingZoneDto,
  QueryShippingZoneDto,
  BulkDeleteShippingZoneDto,
  BulkSoftDeleteShippingZoneDto,
  BulkRestoreShippingZoneDto,
  BulkChangeStatusShippingZoneDto,
} from '../dto';
import { ResponseMessage } from '../../../common/decorators/response-message.decorator';
import { Roles } from '../../auth/decorators/roles.decorator';
import { AdminRole } from '../../auth/constants/admin-role.constant';
import { Public } from '../../../common/decorators/public.decorator';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import type { AdminJwtPayload } from '../../../common/interfaces/jwt-payload.interface';

@ApiTags('Shipping Zones')
@Controller('shipping-zones')
export class ShippingZonesController {
  constructor(private readonly shippingZonesService: ShippingZonesService) {}

  // ═══════════════════════════════════════════════
  // RUTAS PÚBLICAS
  // ═══════════════════════════════════════════════

  // @Public()
  // @Get('public')
  // @ResponseMessage('Zonas de envío obtenidas exitosamente')
  // @ApiOperation({ summary: 'Listado público de zonas activas con tarifas' })
  // findAllPublic() {
  //   return this.shippingZonesService.findAllZonesPublic();
  // }

  @Public()
  @Get('public/ubigeo')
  @ResponseMessage('Zona de envío encontrada')
  @ApiOperation({
    summary: 'Buscar zona de envío por ubigeo (para el checkout)',
  })
  findByUbigeo(
    @Query('departmentId') departmentId: string,
    @Query('provinceId') provinceId?: string,
    @Query('districtId') districtId?: string,
  ) {
    return this.shippingZonesService.findZoneByUbigeo(
      departmentId,
      provinceId,
      districtId,
    );
  }

  // ── Ubigeo (solo lectura, público) ────────────────────────────

  @Public()
  @Get('ubigeo/departments')
  @ResponseMessage('Departamentos obtenidos exitosamente')
  @ApiOperation({ summary: 'Listado de departamentos (ubigeo)' })
  getDepartments() {
    return this.shippingZonesService.getDepartments();
  }

  @Public()
  @Get('ubigeo/departments/:departmentId/provinces')
  @ResponseMessage('Provincias obtenidas exitosamente')
  @ApiOperation({ summary: 'Provincias de un departamento' })
  @ApiParam({ name: 'departmentId', example: '15' })
  getProvinces(@Param('departmentId') departmentId: string) {
    return this.shippingZonesService.getProvincesByDepartment(departmentId);
  }

  @Public()
  @Get('ubigeo/provinces/:provinceId/districts')
  @ResponseMessage('Distritos obtenidos exitosamente')
  @ApiOperation({ summary: 'Distritos de una provincia' })
  @ApiParam({ name: 'provinceId', example: '1501' })
  getDistricts(@Param('provinceId') provinceId: string) {
    return this.shippingZonesService.getDistrictsByProvince(provinceId);
  }

  // ═══════════════════════════════════════════════
  // BULK — siempre antes de :id
  // ═══════════════════════════════════════════════

  @Patch('bulk-status')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN, AdminRole.EDITOR)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Estados actualizados exitosamente')
  @ApiOperation({ summary: 'Cambiar estado de múltiples zonas' })
  changeStatus(
    @Body() dto: BulkChangeStatusShippingZoneDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.shippingZonesService.changeStatusMany(
      dto.ids,
      dto.status,
      admin.sub,
    );
  }

  @Patch('bulk/soft-delete')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Zonas eliminadas (soft) exitosamente')
  @ApiOperation({ summary: 'Soft-delete múltiples zonas' })
  softDeleteMany(
    @Body() dto: BulkSoftDeleteShippingZoneDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.shippingZonesService.softDeleteManyZones(dto.ids, admin.sub);
  }

  @Patch('bulk/restore')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Zonas restauradas exitosamente')
  @ApiOperation({ summary: 'Restaurar múltiples zonas' })
  restoreMany(
    @Body() dto: BulkRestoreShippingZoneDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.shippingZonesService.restoreManyZones(dto.ids, admin.sub);
  }

  @Delete('bulk')
  @Roles(AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Zonas eliminadas exitosamente')
  @ApiOperation({ summary: 'Eliminar múltiples zonas permanentemente' })
  removeMany(@Body() dto: BulkDeleteShippingZoneDto) {
    return this.shippingZonesService.removeManyZones(dto.ids);
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
  @ResponseMessage('Zonas de envío obtenidas exitosamente')
  @ApiOperation({ summary: 'Listado administrativo con filtros y paginación' })
  findAll(@Query() query: QueryShippingZoneDto) {
    return this.shippingZonesService.findAllZones(query);
  }

  @Post()
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Zona de envío creada exitosamente')
  @ApiOperation({ summary: 'Crear zona de envío' })
  @ApiCreatedResponse({ description: 'Zona creada con sus áreas iniciales' })
  create(
    @Body() dto: CreateShippingZoneDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.shippingZonesService.createZone(dto, admin.sub);
  }

  // ═══════════════════════════════════════════════
  // POR :id — siempre al final
  // ═══════════════════════════════════════════════

  @Get(':id')
  @Roles(
    AdminRole.VIEWER,
    AdminRole.EDITOR,
    AdminRole.ADMIN,
    AdminRole.SUPER_ADMIN,
  )
  @ApiBearerAuth('access-token')
  @ResponseMessage('Zona de envío obtenida exitosamente')
  @ApiOperation({ summary: 'Obtener zona por ID con áreas y tarifas' })
  @ApiParam({ name: 'id', description: 'UUID de la zona' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.shippingZonesService.findZoneById(id);
  }

  @Patch(':id')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Zona de envío actualizada exitosamente')
  @ApiOperation({ summary: 'Actualizar zona de envío' })
  @ApiParam({ name: 'id', description: 'UUID de la zona' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateShippingZoneDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.shippingZonesService.updateZone(id, dto, admin.sub);
  }

  // @Patch(':id/toggle-active')
  // @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  // @ApiBearerAuth('access-token')
  // @ResponseMessage('Estado de la zona actualizado')
  // @ApiOperation({ summary: 'Activar o desactivar una zona' })
  // @ApiParam({ name: 'id', description: 'UUID de la zona' })
  // toggleActive(
  //   @Param('id', ParseUUIDPipe) id: string,
  //   @CurrentUser() admin: AdminJwtPayload,
  // ) {
  //   return this.shippingZonesService.toggleActive(id, admin.sub);
  // }

  @Patch(':id/soft-delete')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Zona eliminada exitosamente')
  @ApiOperation({ summary: 'Soft-delete de zona' })
  @ApiParam({ name: 'id', description: 'UUID de la zona' })
  softDelete(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.shippingZonesService.softDeleteZone(id, admin.sub);
  }

  @Patch(':id/restore')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Zona restaurada exitosamente')
  @ApiOperation({ summary: 'Restaurar zona eliminada' })
  @ApiParam({ name: 'id', description: 'UUID de la zona' })
  restore(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.shippingZonesService.restoreZone(id, admin.sub);
  }

  @Delete(':id')
  @Roles(AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Zona de envío eliminada exitosamente')
  @ApiOperation({ summary: 'Eliminar zona permanentemente' })
  @ApiParam({ name: 'id', description: 'UUID de la zona' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.shippingZonesService.removeZone(id);
  }

  // ═══════════════════════════════════════════════
  // ÁREAS DE LA ZONA
  // ═══════════════════════════════════════════════

  // @Post(':id/areas')
  // @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  // @ApiBearerAuth('access-token')
  // @ResponseMessage('Área agregada exitosamente')
  // @ApiOperation({ summary: 'Agregar área geográfica a una zona' })
  // @ApiParam({ name: 'id', description: 'UUID de la zona' })
  // addArea(
  //   @Param('id', ParseUUIDPipe) zoneId: string,
  //   @Body() dto: CreateShippingZoneAreaDto,
  // ) {
  //   return this.shippingZonesService.addArea(zoneId, dto);
  // }

  // @Delete(':id/areas/:areaId')
  // @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  // @ApiBearerAuth('access-token')
  // @HttpCode(HttpStatus.OK)
  // @ResponseMessage('Área eliminada exitosamente')
  // @ApiOperation({ summary: 'Eliminar área geográfica de una zona' })
  // @ApiParam({ name: 'id', description: 'UUID de la zona' })
  // @ApiParam({ name: 'areaId', description: 'UUID del área' })
  // removeArea(
  //   @Param('id', ParseUUIDPipe) _zoneId: string,
  //   @Param('areaId', ParseUUIDPipe) areaId: string,
  // ) {
  //   return this.shippingZonesService.removeArea(areaId);
  // }

  // ═══════════════════════════════════════════════
  // TARIFAS DE LA ZONA
  // ═══════════════════════════════════════════════

  @Get(':id/rates')
  @Roles(
    AdminRole.VIEWER,
    AdminRole.EDITOR,
    AdminRole.ADMIN,
    AdminRole.SUPER_ADMIN,
  )
  @ApiBearerAuth('access-token')
  @ResponseMessage('Tarifas obtenidas exitosamente')
  @ApiOperation({ summary: 'Obtener todas las tarifas de una zona' })
  @ApiParam({ name: 'id', description: 'UUID de la zona' })
  findRates(@Param('id', ParseUUIDPipe) zoneId: string) {
    return this.shippingZonesService.findRatesByZone(zoneId);
  }

  // @Post(':id/rates')
  // @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  // @ApiBearerAuth('access-token')
  // @ResponseMessage('Tarifa creada exitosamente')
  // @ApiOperation({ summary: 'Crear tarifa de envío para una zona' })
  // @ApiParam({ name: 'id', description: 'UUID de la zona' })
  // @ApiCreatedResponse({ description: 'Tarifa creada' })
  // createRate(
  //   @Param('id', ParseUUIDPipe) zoneId: string,
  //   @Body() dto: CreateShippingRateDto,
  //   @CurrentUser() admin: AdminJwtPayload,
  // ) {
  //   return this.shippingZonesService.createRate(zoneId, dto, admin.sub);
  // }

  // @Patch(':id/rates/:rateId')
  // @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  // @ApiBearerAuth('access-token')
  // @ResponseMessage('Tarifa actualizada exitosamente')
  // @ApiOperation({ summary: 'Actualizar tarifa de envío' })
  // @ApiParam({ name: 'id', description: 'UUID de la zona' })
  // @ApiParam({ name: 'rateId', description: 'UUID de la tarifa' })
  // updateRate(
  //   @Param('id', ParseUUIDPipe) _zoneId: string,
  //   @Param('rateId', ParseUUIDPipe) rateId: string,
  //   @Body() dto: UpdateShippingRateDto,
  //   @CurrentUser() admin: AdminJwtPayload,
  // ) {
  //   return this.shippingZonesService.updateRate(rateId, dto, admin.sub);
  // }

  // @Patch(':id/rates/:rateId/toggle-active')
  // @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  // @ApiBearerAuth('access-token')
  // @ResponseMessage('Estado de la tarifa actualizado')
  // @ApiOperation({ summary: 'Activar o desactivar una tarifa' })
  // toggleRateActive(
  //   @Param('id', ParseUUIDPipe) _zoneId: string,
  //   @Param('rateId', ParseUUIDPipe) rateId: string,
  //   @CurrentUser() admin: AdminJwtPayload,
  // ) {
  //   return this.shippingZonesService.toggleRateActive(rateId, admin.sub);
  // }

  // @Delete(':id/rates/:rateId')
  // @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  // @ApiBearerAuth('access-token')
  // @HttpCode(HttpStatus.OK)
  // @ResponseMessage('Tarifa eliminada exitosamente')
  // @ApiOperation({ summary: 'Eliminar tarifa de envío' })
  // @ApiParam({ name: 'id', description: 'UUID de la zona' })
  // @ApiParam({ name: 'rateId', description: 'UUID de la tarifa' })
  // removeRate(
  //   @Param('id', ParseUUIDPipe) _zoneId: string,
  //   @Param('rateId', ParseUUIDPipe) rateId: string,
  // ) {
  //   return this.shippingZonesService.removeRate(rateId);
  // }
}

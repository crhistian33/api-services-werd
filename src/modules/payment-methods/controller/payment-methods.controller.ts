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
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { PaymentMethodsService } from '../service/payment-methods.service';
import {
  CreatePaymentMethodDto,
  UpdatePaymentMethodDto,
  QueryPaymentMethodDto,
} from '../dto';
import { ResponseMessage } from '../../../common/decorators/response-message.decorator';
import { Roles } from '../../../modules/auth/decorators/roles.decorator';
import { AdminRole } from '../../../modules/auth/constants/admin-role.constant';
import { CurrentUser } from '../../../modules/auth/decorators/current-user.decorator';
import { Public } from '../../../common/decorators/public.decorator';
import type { AdminJwtPayload } from '../../../common/interfaces/jwt-payload.interface';
import {
  BulkDeletePaymentMethodDto,
  BulkReorderPaymentMethodDto,
} from '../dto/bulk-payment-method.dto';
import { BulkChangeStatusPaymentMethodDto } from '../dto/bulk-change-status.dto';

@ApiTags('PaymentMethods')
@Controller('payment-methods')
export class PaymentMethodsController {
  constructor(private readonly service: PaymentMethodsService) {}

  // ═══════════════════════════════════════════════
  // RUTAS PÚBLICAS (Accesibles por Clientes y CMS)
  // ═══════════════════════════════════════════════

  @Public()
  @Get('public')
  @ResponseMessage('Métodos de pago obtenidos')
  findAllPublic() {
    return this.service.findAllPublic();
  }

  // ═══════════════════════════════════════════════
  // BULK (ANTES DE :id)
  // ═══════════════════════════════════════════════

  @Patch('bulk-status')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN, AdminRole.EDITOR)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Estados actualizados exitosamente')
  @ApiOperation({ summary: 'Cambiar estado de múltiples productos' })
  changeStatus(
    @Body() dto: BulkChangeStatusPaymentMethodDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.service.changeStatusMany(dto.ids, dto.status, admin.sub);
  }

  @Patch('bulk/reorder')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Orden de métodos de pago actualizado exitosamente')
  @ApiOperation({ summary: 'Reordenar métodos de pago' })
  reorder(
    @Body() dto: BulkReorderPaymentMethodDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.service.reorder(dto, admin.sub);
  }

  @Delete('bulk')
  @ResponseMessage('Slides eliminados exitosamente')
  @ApiOperation({ summary: 'Eliminar múltiples slides' })
  removeMany(@Body() dto: BulkDeletePaymentMethodDto) {
    return this.service.removeMany(dto.ids);
  }

  // ═══════════════════════════════════════════════
  // COLECCIÓN
  // ═══════════════════════════════════════════════

  @Get()
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN, AdminRole.VIEWER)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Métodos de pago listados')
  findAll(@Query() query: QueryPaymentMethodDto) {
    return this.service.findAllMethods(query);
  }

  @Post()
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Método de pago creado')
  create(
    @Body() dto: CreatePaymentMethodDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.service.createMethod(dto, admin.sub);
  }

  // ═══════════════════════════════════════════════
  // RUTAS con id — siempre al final
  // ═══════════════════════════════════════════════

  @Get(':id')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id/toggle-active')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Estado de actividad cambiado')
  toggleActive(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.toggleActive(id);
  }

  @Patch(':id')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Método de pago actualizado')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdatePaymentMethodDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.service.updateMethod(id, dto, admin.sub);
  }

  @Delete(':id')
  @Roles(AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Método de pago eliminado permanentemente')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.remove(id);
  }
}

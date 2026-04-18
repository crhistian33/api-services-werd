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
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { CustomersService } from '../service/customers.service';
import {
  CreateCustomerDto,
  UpdateCustomerDto,
  QueryCustomerDto,
  BulkChangeStatusCustomerDto,
  UpdateCustomerPasswordDto,
  ForgotPasswordResetDto,
  BulkSoftDeleteCustomerDto,
  BulkRestoreCustomerDto,
  VerifyEmailCustomerDto,
  ForgotPasswordDto,
} from '../dto';
import { ResponseMessage } from '../../../common/decorators/response-message.decorator';
import { Roles } from '../../auth/decorators/roles.decorator';
import { AdminRole } from '../../auth/constants/admin-role.constant';
import { Public } from '../../../common/decorators/public.decorator';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import type {
  AdminJwtPayload,
  AuthAccessPayload,
} from '../../../common/interfaces/jwt-payload.interface';

@ApiTags('Customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  // ═══════════════════════════════════════════════
  // RUTAS PÚBLICAS / AUTH (Sitio Web)
  // ═══════════════════════════════════════════════

  @Public()
  @Post('register')
  @ResponseMessage('Registro exitoso. Se ha enviado un código a su correo.')
  @ApiOperation({ summary: 'Registro de nuevo cliente' })
  register(@Body() dto: CreateCustomerDto) {
    return this.customersService.register(dto);
  }

  @Public()
  @Post('verify-email')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Correo verificado exitosamente')
  @ApiOperation({ summary: 'Verificar email con código de 6 dígitos' })
  verifyEmail(@Body() dto: VerifyEmailCustomerDto) {
    return this.customersService.verifyEmail(dto.email, dto.code);
  }

  @Public()
  @Post('forgot-password')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Código de recuperación enviado')
  @ApiOperation({
    summary: 'Solicitar código de verificación para restablecer contraseña',
  })
  forgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.customersService.forgotPassword(dto);
  }

  @Public()
  @Patch('reset-password')
  @ResponseMessage('Contraseña restablecida correctamente')
  @ApiOperation({ summary: 'Restablecer contraseña olvidada usando código' })
  resetPassword(@Body() dto: ForgotPasswordResetDto) {
    return this.customersService.resetPassword(dto);
  }

  @Get('me')
  @ApiBearerAuth('access-token')
  @ResponseMessage('Perfil obtenido')
  @ApiOperation({ summary: 'Obtener datos del cliente autenticado' })
  getProfile(@CurrentUser() user: AuthAccessPayload) {
    return this.customersService.findCustomerById(user.sub);
  }

  @Patch('me/password')
  @ApiBearerAuth('access-token')
  @ResponseMessage('Contraseña actualizada')
  @ApiOperation({ summary: 'Cambiar contraseña desde el perfil' })
  updateMyPassword(
    @CurrentUser() user: AuthAccessPayload,
    @Body() dto: UpdateCustomerPasswordDto,
  ) {
    return this.customersService.updatePassword(user.sub, dto);
  }

  // ═══════════════════════════════════════════════
  // BULK (Operaciones Administrativas CMS)
  // ═══════════════════════════════════════════════

  @Patch('bulk-status')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Estados actualizados exitosamente')
  @ApiOperation({ summary: 'Cambiar estado activo/inactivo masivamente' })
  changeStatus(
    @Body() dto: BulkChangeStatusCustomerDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.customersService.changeStatusMany(
      dto.ids,
      dto.status,
      admin.sub,
    );
  }

  @Patch('bulk/soft-delete')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Clientes enviados a la papelera')
  @ApiOperation({ summary: 'Eliminación lógica masiva' })
  softDeleteMany(
    @Body() dto: BulkSoftDeleteCustomerDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.customersService.softDeleteMany(dto.ids, admin.sub);
  }

  @Patch('bulk/restore')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Clientes restaurados correctamente')
  @ApiOperation({ summary: 'Restauración masiva de clientes' })
  restoreMany(
    @Body() dto: BulkRestoreCustomerDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.customersService.restoreMany(dto.ids, admin.sub);
  }

  // ═══════════════════════════════════════════════
  // COLECCIÓN (CMS)
  // ═══════════════════════════════════════════════

  @Get()
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN, AdminRole.VIEWER)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Lista de clientes obtenida')
  @ApiOperation({ summary: 'Listado administrativo de clientes' })
  findAll(@Query() query: QueryCustomerDto) {
    return this.customersService.findAllCustomers(query);
  }

  // ═══════════════════════════════════════════════
  // RUTAS CON :id (AL FINAL)
  // ═══════════════════════════════════════════════

  @Get(':id')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Detalle del cliente obtenido')
  @ApiOperation({ summary: 'Obtener cliente por UUID' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.customersService.findCustomerById(id);
  }

  @Patch(':id')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Cliente actualizado correctamente')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateCustomerDto,
  ) {
    // Nota: El ID del perfil 'me' se maneja arriba, este es para gestión del ADMIN
    return this.customersService.update(id, dto);
  }

  @Patch(':id/soft-delete')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Cliente enviado a la papelera')
  @ApiOperation({ summary: 'Eliminación lógica individual' })
  softDelete(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.customersService.softDeleteCustomer(id, admin.sub);
  }

  @Patch(':id/restore')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Cliente restaurado correctamente')
  @ApiOperation({ summary: 'Restauración individual de cliente' })
  restore(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.customersService.restoreCustomer(id, admin.sub);
  }

  @Delete(':id')
  @Roles(AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Cliente eliminado permanentemente')
  @ApiOperation({ summary: 'Eliminación física (Solo Super Admin)' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    // remove() es heredado de BaseService para eliminación física
    return this.customersService.remove(id);
  }
}

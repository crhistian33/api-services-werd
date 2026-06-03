import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { CustomersService } from '../service/customers.service';
import {
  CreateCustomerDto,
  UpdateCustomerDto,
  QueryCustomerDto,
  UpdateCustomerPasswordDto,
  ForgotPasswordResetDto,
  BulkSoftDeleteCustomerDto,
  VerifyEmailCustomerDto,
  ForgotPasswordDto,
  CreateCustomerAddressDto,
  UpdateCustomerAddressDto,
  UpdatePasswordAsAdminDto,
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

@ApiTags('Customers & Refunds')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  // =============================================================
  // 1. RUTAS PÚBLICAS (Registro / Auth)
  // =============================================================

  @Post('register')
  @Public()
  @ResponseMessage('Registro exitoso...')
  register(@Body() dto: CreateCustomerDto) {
    return this.customersService.register(dto);
  }

  @Post('resend-verification')
  @Public()
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Código reenviado exitosamente')
  async resendVerification(@Body() dto: { email: string; isGuest?: boolean }) {
    return this.customersService.resendVerificationCode(dto.email, dto.isGuest);
  }

  @Post('verify-email')
  @Public()
  @HttpCode(HttpStatus.OK)
  verifyEmail(@Body() dto: VerifyEmailCustomerDto) {
    return this.customersService.verifyEmail(dto.email, dto.code);
  }

  @Post('forgot-password')
  @Public()
  @HttpCode(HttpStatus.OK)
  forgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.customersService.forgotPassword(dto);
  }

  @Patch('reset-password')
  @Public()
  resetPassword(@Body() dto: ForgotPasswordResetDto) {
    return this.customersService.resetPassword(dto);
  }

  // =============================================================
  // 2. RUTAS DEL PERFIL (Rutas estáticas "me")
  // =============================================================

  @Get('me')
  @ApiBearerAuth('access-token')
  getProfile(@CurrentUser() user: AuthAccessPayload) {
    return this.customersService.findCustomerById(user.sub);
  }

  @Patch('me/password')
  @ApiBearerAuth('access-token')
  updateMyPassword(
    @CurrentUser() user: AuthAccessPayload,
    @Body() dto: UpdateCustomerPasswordDto,
  ) {
    return this.customersService.updatePassword(user.sub, dto);
  }

  // --- Direcciones ---
  @Get('me/addresses')
  @ApiBearerAuth('access-token')
  getMyAddresses(@CurrentUser() user: AuthAccessPayload) {
    return this.customersService.getMyAddresses(user.sub);
  }

  @Post('me/addresses')
  @ApiBearerAuth('access-token')
  createAddress(
    @CurrentUser() user: AuthAccessPayload,
    @Body() dto: CreateCustomerAddressDto,
  ) {
    return this.customersService.createAddress(user.sub, dto);
  }

  @Patch('me/addresses/:addressId')
  @ApiBearerAuth('access-token')
  updateAddress(
    @CurrentUser() user: AuthAccessPayload,
    @Param('addressId', ParseUUIDPipe) addressId: string,
    @Body() dto: UpdateCustomerAddressDto,
  ) {
    return this.customersService.updateAddress(user.sub, addressId, dto);
  }

  @Patch('me/addresses/:addressId/default')
  @ApiBearerAuth('access-token')
  setMyDefaultAddress(
    @CurrentUser() user: AuthAccessPayload,
    @Param('addressId', ParseUUIDPipe) addressId: string,
  ) {
    return this.customersService.setDefaultAddress(user.sub, addressId);
  }

  @Patch('me')
  @ApiBearerAuth('access-token')
  updateMe(
    @CurrentUser() user: AuthAccessPayload,
    @Body() dto: UpdateCustomerDto,
  ) {
    return this.customersService.update(user.sub, dto);
  }

  // --- Reembolsos (Lado Cliente) ---
  // @Get('me/refund-requests')
  // @ApiBearerAuth('access-token')
  // getMyRefundRequests(
  //   @CurrentUser() user: AuthAccessPayload,
  //   @Query('orderId') orderId?: string,
  // ) {
  //   return this.customersService.getMyRefundRequests(user.sub, orderId);
  // }

  // @Post('me/orders/:orderId/refund-requests')
  // @ApiBearerAuth('access-token')
  // createRefundRequest(
  //   @CurrentUser() user: AuthAccessPayload,
  //   @Param('orderId', ParseUUIDPipe) orderId: string,
  //   @Body() dto: CreateRefundRequestDto,
  // ) {
  //   return this.customersService.createRefundRequest(user.sub, orderId, dto);
  // }

  // =============================================================
  // 3. RUTAS DE ADMINISTRACIÓN (Refunds Globales y Bulks)
  // =============================================================

  // Rutas de administración de reembolsos (Van antes que :id para no confundir 'admin' con un UUID)
  // @Get('admin/refund-requests')
  // @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN, AdminRole.VIEWER)
  // @ApiBearerAuth('access-token')
  // findAllRefunds(@Query('status') status?: string) {
  //   return this.customersService.getAllRefundRequests(status);
  // }

  // @Patch('admin/refund-requests/:requestId/review')
  // @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  // @ApiBearerAuth('access-token')
  // reviewRefund(
  //   @Param('requestId', ParseUUIDPipe) requestId: string,
  //   @Body() dto: ReviewRefundRequestDto,
  //   @CurrentUser() admin: AdminJwtPayload,
  // ) {
  //   return this.customersService.reviewRefundRequest(requestId, dto, admin.sub);
  // }

  // // Operaciones Masivas (Bulk)
  // @Patch('bulk-status')
  // @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  // @ApiBearerAuth('access-token')
  // changeStatus(
  //   @Body() dto: BulkChangeStatusCustomerDto,
  //   @CurrentUser() admin: AdminJwtPayload,
  // ) {
  //   return this.customersService.changeStatusMany(
  //     dto.ids,
  //     dto.status,
  //     admin.sub,
  //   );
  // }

  @Patch('bulk/soft-delete')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  softDeleteMany(
    @Body() dto: BulkSoftDeleteCustomerDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.customersService.softDeleteMany(dto.ids, admin.sub);
  }

  // =============================================================
  // 4. RUTAS CMS (Lista General y Operaciones por ID)
  // =============================================================

  @Get()
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN, AdminRole.VIEWER)
  @ApiBearerAuth('access-token')
  findAll(@Query() query: QueryCustomerDto) {
    return this.customersService.findAllCustomers(query);
  }

  // ESTA RUTA SIEMPRE AL FINAL
  @Get(':id')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.customersService.findCustomerById(id);
  }

  @Patch(':id')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateCustomerDto,
  ) {
    return this.customersService.update(id, dto);
  }

  @Patch(':id/password')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  updateCustomerPassword(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdatePasswordAsAdminDto,
  ) {
    return this.customersService.updatePasswordAsAdmin(id, dto.newPassword);
  }

  @Patch(':id/addresses/:addressId/default')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  setDefaultAddress(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('addressId', ParseUUIDPipe) addressId: string,
  ) {
    return this.customersService.setDefaultAddress(id, addressId);
  }

  @Patch(':id/soft-delete')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  softDelete(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.customersService.softDeleteCustomer(id, admin.sub);
  }

  @Patch(':id/restore')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  restore(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.customersService.restoreCustomer(id, admin.sub);
  }

  @Patch('bulk/restore')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  restoreMany(
    @Body() dto: BulkSoftDeleteCustomerDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.customersService.restoreCustomers(dto.ids, admin.sub);
  }
}

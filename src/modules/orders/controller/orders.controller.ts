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
  Req,
  Ip,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBearerAuth,
  ApiResponse,
} from '@nestjs/swagger';
import type { Request } from 'express';
import { OrdersService } from '../service/orders.service';
import { OrderLogisticsService } from '../service/order-logistics.service';
import { OrderClaimsService } from '../service/order-claims.service';
import { OrderRefundService } from '../service/order-refund.service';
import { OrderPaymentConfirmationService } from '../service/order-payment-confirmation.service';
import {
  CreateOrderDto,
  QueryOrderDto,
  UpdateLogisticsDto,
  CreateOrderClaimDto,
  ReviewClaimDto,
  QueryClaimDto,
  CancelOrderDto,
  ConfirmClaimShipmentDto,
  ConfirmReturnShipmentDto,
} from '../dto';
import { ConfirmManualPaymentDto } from '../dto/confirm-payment.dto';
import { MarkDeliveredDto } from '../dto/mark-delivered.dto';
import { MarkClaimReceivedDto } from '../dto/mark-claim-received.dto';
import { CompleteRefundDto } from '../dto/complete-refund.dto';
import { CreateRefundDto } from '../dto/create-refund.dto';
import { Roles } from '../../auth/decorators/roles.decorator';
import { AdminRole } from '../../auth/constants/admin-role.constant';
import { Public } from '../../../common/decorators/public.decorator';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import type {
  AdminJwtPayload,
  CustomerJwtPayload,
} from '../../../common/interfaces/jwt-payload.interface';
import { ResponseMessage } from '../../../common/decorators/response-message.decorator';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly logisticsService: OrderLogisticsService,
    private readonly claimsService: OrderClaimsService,
    private readonly refundService: OrderRefundService,
    private readonly paymentConfirmationService: OrderPaymentConfirmationService,
  ) {}

  // ═══════════════════════════════════════════════════════════
  // STOREFRONT - PÚBLICO (Clientes y Guests)
  // ═══════════════════════════════════════════════════════════

  @Patch(':orderId/claims/:claimId/confirm-shipment')
  @ApiBearerAuth('access-token')
  @ResponseMessage('Envío de devolución confirmado exitosamente')
  @ApiOperation({ summary: 'Cliente confirma envío del producto devuelto' })
  @ApiParam({ name: 'orderId', type: String, description: 'ID de la orden' })
  @ApiParam({ name: 'claimId', type: String, description: 'ID del reclamo' })
  @ApiResponse({ status: 200, description: 'Envío confirmado exitosamente' })
  @ApiResponse({
    status: 404,
    description: 'Reclamo no encontrado o no está aprobado',
  })
  async confirmClaimShipment(
    @Param('orderId', ParseUUIDPipe) orderId: string,
    @Param('claimId', ParseUUIDPipe) claimId: string,
    @Body() dto: ConfirmClaimShipmentDto,
    @CurrentUser() customer: CustomerJwtPayload,
  ) {
    return this.claimsService.confirmClaimShipment(claimId, dto, customer.sub);
  }

  @Post(':orderId/claims')
  @ApiBearerAuth('access-token') // ← Token de CUSTOMER (no admin)
  @ResponseMessage('Reclamo creado exitosamente')
  @ApiOperation({
    summary: 'Crear reclamo desde el storefront (cliente)',
    description:
      'El cliente autenticado puede reclamar sobre sus propios pedidos. ' +
      'CANCELLATION: antes del envío. REFUND/REPLACEMENT: tras el envío.',
  })
  @ApiParam({ name: 'orderId', description: 'UUID del pedido' })
  createClaimFromStorefront(
    @Param('orderId', ParseUUIDPipe) orderId: string,
    @Body() dto: CreateOrderClaimDto,
    @CurrentUser() customer: CustomerJwtPayload, // ← JWT de cliente
  ) {
    return this.claimsService.createClaim(customer.sub, orderId, dto);
  }

  @Post()
  @Public()
  @ResponseMessage('Pedido creado exitosamente')
  @ApiOperation({
    summary: 'Crear pedido desde el checkout (cliente/guest)',
    description:
      'Acepta customerId (cliente registrado) o guestEmail (invitado). ' +
      'Decrementa stock, valida cupón y crea snapshot inmutable de la dirección.',
  })
  createOrderFromStorefront(
    @Body() dto: CreateOrderDto,
    @Req() req: Request,
    @Ip() ip: string,
  ) {
    const ipAddress =
      (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ?? ip;
    return this.ordersService.createOrder({ ...dto, ipAddress });
  }

  // ═══════════════════════════════════════════════════════════
  // CMS - ADMIN (Creación manual excepcional)
  // ═══════════════════════════════════════════════════════════

  @Post('admin')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Pedido creado exitosamente desde CMS')
  @ApiOperation({
    summary: 'Crear pedido manualmente desde el CMS (casos excepcionales)',
    description:
      'Solo para pedidos telefónicos o correcciones administrativas.',
  })
  createOrderFromAdmin(
    @Body() dto: CreateOrderDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.ordersService.createOrder(dto, admin.sub);
  }

  // ═══════════════════════════════════════════════════════════
  // COLECCIÓN DE PEDIDOS (ADMIN)
  // ═══════════════════════════════════════════════════════════

  @Get()
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN, AdminRole.VIEWER)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Pedidos obtenidos exitosamente')
  @ApiOperation({ summary: 'Listar pedidos con filtros y paginación' })
  findAll(@Query() query: QueryOrderDto) {
    return this.ordersService.findAllOrders(query);
  }

  // ═══════════════════════════════════════════════════════════
  // RECLAMOS (OrderClaim) — RUTAS DE COLECCIÓN PRIMERO
  // ═══════════════════════════════════════════════════════════

  @Get('claims')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN, AdminRole.VIEWER)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Reclamos obtenidos exitosamente')
  @ApiOperation({ summary: 'Listar todos los reclamos' })
  findAllClaims(@Query() query: QueryClaimDto) {
    return this.claimsService.findAll(query);
  }

  // ═══════════════════════════════════════════════════════════
  // RECLAMOS — RUTAS CON PARÁMETRO :claimId
  // ═══════════════════════════════════════════════════════════

  @Patch('admin/claims/:claimId/register-return-shipment')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Envío de devolución registrado exitosamente')
  @ApiOperation({
    summary: 'Registrar datos de envío de retorno (admin)',
    description:
      'El admin registra el tracking y voucher cuando el cliente confirma el envío.',
  })
  @ApiParam({ name: 'claimId', description: 'UUID del reclamo' })
  registerReturnShipment(
    @Param('claimId', ParseUUIDPipe) claimId: string,
    @Body() dto: ConfirmReturnShipmentDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.claimsService.registerReturnShipment(claimId, dto, admin.sub);
  }

  @Patch('claims/:claimId/review')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Reclamo revisado exitosamente')
  @ApiOperation({
    summary: 'Aprobar o rechazar un reclamo',
    description:
      'APPROVED para CANCELLATION: se procesa inmediatamente. ' +
      'APPROVED para REFUND/REPLACEMENT: pasa a espera de recepción del producto. ' +
      'REJECTED: requiere reviewNote obligatorio.',
  })
  @ApiParam({ name: 'claimId', description: 'UUID del reclamo' })
  reviewClaim(
    @Param('claimId', ParseUUIDPipe) claimId: string,
    @Body() dto: ReviewClaimDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.claimsService.reviewClaim(claimId, dto, admin.sub);
  }

  @Patch('claims/:claimId/received')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Recepción del producto registrada')
  @ApiOperation({
    summary: 'Confirmar que se recibió el producto devuelto',
    description:
      'Registra el estado del producto (RESELLABLE restaura stock; DAMAGED/DESTROYED no). ' +
      'Solo aplica a reclamos REFUND y REPLACEMENT.',
  })
  @ApiParam({ name: 'claimId', description: 'UUID del reclamo' })
  markClaimReceived(
    @Param('claimId', ParseUUIDPipe) claimId: string,
    @Body() dto: MarkClaimReceivedDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.claimsService.markClaimReceived(claimId, dto, admin.sub);
  }

  @Patch('claims/:claimId/complete-refund')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Reembolso completado exitosamente')
  @ApiOperation({
    summary: 'Procesar el reembolso de un reclamo REFUND',
    description:
      'Crea el registro Refund, actualiza el estado del reclamo a COMPLETED. ' +
      'Si es reembolso total, la orden pasa a estado "refunded".',
  })
  @ApiParam({ name: 'claimId', description: 'UUID del reclamo' })
  completeRefund(
    @Param('claimId', ParseUUIDPipe) claimId: string,
    @Body() dto: CompleteRefundDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.refundService.processClaimRefund(claimId, dto, admin.sub);
  }

  @Patch('claims/:claimId/complete-replacement')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Orden de reemplazo generada exitosamente')
  @ApiOperation({
    summary: 'Generar orden de reemplazo para un reclamo REPLACEMENT',
    description:
      'Crea la orden de reemplazo en estado "processing", decrementa el stock ' +
      'y vincula la orden al reclamo. La nueva orden sigue el flujo normal de envío.',
  })
  @ApiParam({ name: 'claimId', description: 'UUID del reclamo' })
  completeReplacement(
    @Param('claimId', ParseUUIDPipe) claimId: string,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.claimsService.completeReplacement(claimId, admin.sub);
  }

  @Patch('claims/:claimId/cancel')
  @ApiBearerAuth('access-token')
  @ResponseMessage('Reclamo cancelado exitosamente')
  @ApiOperation({
    summary: 'Cancelar reclamo propio (cliente)',
    description:
      'El cliente autenticado puede cancelar su propio reclamo si está en estado PENDING.',
  })
  @ApiParam({ name: 'claimId', description: 'UUID del reclamo' })
  cancelClaim(
    @Param('claimId', ParseUUIDPipe) claimId: string,
    @CurrentUser() customer: CustomerJwtPayload,
  ) {
    return this.claimsService.cancelClaim(claimId, customer.sub);
  }

  @Delete('claims/:claimId')
  @Roles(AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Reclamo eliminado exitosamente')
  @ApiOperation({
    summary: 'Eliminar reclamo (solo SUPER_ADMIN)',
    description:
      'Hard delete de un reclamo finalizado. Solo permitido si el estado es CANCELLED o REJECTED. Los reclamos activos conservan trazabilidad de auditoría.',
  })
  @ApiParam({ name: 'claimId', description: 'UUID del reclamo' })
  deleteClaim(@Param('claimId', ParseUUIDPipe) claimId: string) {
    return this.claimsService.deleteClaim(claimId);
  }

  // ═══════════════════════════════════════════════════════════
  // RECLAMOS — RUTAS ANIDADAS AL PEDIDO
  // ═══════════════════════════════════════════════════════════

  // @Post(':orderId/claims')
  // @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  // @ApiBearerAuth('access-token')
  // @ResponseMessage('Reclamo creado exitosamente')
  // @ApiOperation({
  //   summary: 'Crear reclamo desde el CMS en nombre del cliente',
  //   description:
  //     'El customerId se resuelve automáticamente desde el pedido. ' +
  //     'Solo disponible para pedidos de clientes registrados (no guests).',
  // })
  // @ApiParam({ name: 'orderId', description: 'UUID del pedido' })
  // createClaim(
  //   @Param('orderId', ParseUUIDPipe) orderId: string,
  //   @Body() dto: CreateOrderClaimDto,
  // ) {
  //   return this.claimsService.createClaimAsAdmin(orderId, dto);
  // }

  @Post('admin/:orderId/claims')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token') // ← Token de ADMIN
  @ResponseMessage('Reclamo creado exitosamente desde CMS')
  @ApiOperation({
    summary: 'Crear reclamo desde el CMS en nombre del cliente',
    description:
      'El customerId se resuelve automáticamente desde el pedido. ' +
      'Solo disponible para pedidos de clientes registrados (no guests).',
  })
  @ApiParam({ name: 'orderId', description: 'UUID del pedido' })
  createClaimFromAdmin(
    @Param('orderId', ParseUUIDPipe) orderId: string,
    @Body() dto: CreateOrderClaimDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.claimsService.createClaimAsAdmin(orderId, dto, admin.sub);
  }

  // ═══════════════════════════════════════════════════════════
  // DETALLE DEL PEDIDO (AL FINAL PARA NO COLISIONAR)
  // ═══════════════════════════════════════════════════════════

  @Get(':id')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN, AdminRole.VIEWER)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Pedido obtenido exitosamente')
  @ApiOperation({ summary: 'Obtener detalle completo de un pedido' })
  @ApiParam({ name: 'id', description: 'UUID del pedido' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.ordersService.findOrderById(id);
  }

  // ═══════════════════════════════════════════════════════════
  // FLUJO DE ESTADOS — BOTONES DEL CMS
  // ═══════════════════════════════════════════════════════════

  @Patch(':id/confirm-payment')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Pago confirmado exitosamente')
  @ApiOperation({
    summary: 'Confirmar pago manual (YAPE/PLIN/Transferencia)',
    description:
      'Marca el pedido como pagado registrando el número de operación. ' +
      'Solo aplica para métodos de pago manuales (wallet, cash_code). ' +
      'Los pagos con tarjeta se confirman automáticamente por la pasarela.',
  })
  @ApiParam({ name: 'id', description: 'UUID del pedido' })
  confirmPayment(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: ConfirmManualPaymentDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.paymentConfirmationService.confirmPayment(id, dto, admin.sub);
  }

  @Patch(':id/mark-processing')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Pedido en preparación')
  @ApiOperation({
    summary: 'Marcar pedido como en preparación',
    description: 'Transición paid → processing. No requiere datos adicionales.',
  })
  @ApiParam({ name: 'id', description: 'UUID del pedido' })
  markProcessing(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.ordersService.markAsProcessing(id, admin.sub);
  }

  @Patch(':id/cancel')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Pedido cancelado')
  @ApiOperation({
    summary: 'Cancelar pedido',
    description:
      'Cancela el pedido restaurando el stock. ' +
      'Solo permitido desde pending_payment, paid o processing. ' +
      'Para pedidos shipped o delivered, usar el flujo de reclamos.',
  })
  @ApiParam({ name: 'id', description: 'UUID del pedido' })
  cancelOrder(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: CancelOrderDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.ordersService.cancelOrder(id, dto, admin.sub);
  }

  // ═══════════════════════════════════════════════════════════
  // LOGÍSTICA
  // ═══════════════════════════════════════════════════════════

  @Patch(':id/logistics/shipped')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Pedido marcado como enviado')
  @ApiOperation({
    summary: 'Marcar pedido como enviado',
    description:
      'Transición processing → shipped. Registra datos logísticos y evidencia de despacho.',
  })
  @ApiParam({ name: 'id', description: 'UUID del pedido' })
  markShipped(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateLogisticsDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.logisticsService.updateToShipped(id, dto, admin.sub);
  }

  @Patch(':id/logistics/delivered')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Pedido marcado como entregado')
  @ApiOperation({
    summary: 'Marcar pedido como entregado',
    description:
      'Transición shipped → delivered. Registra evidencia fotográfica. ' +
      'Para contraentrega, registra el monto cobrado.',
  })
  @ApiParam({ name: 'id', description: 'UUID del pedido' })
  markDelivered(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: MarkDeliveredDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.logisticsService.markAsDelivered(id, dto, admin.sub);
  }

  // ═══════════════════════════════════════════════════════════
  // REEMBOLSOS
  // ═══════════════════════════════════════════════════════════

  @Post(':orderId/refunds')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Reembolso creado exitosamente')
  @ApiOperation({ summary: 'Crear reembolso directo sin reclamo previo' })
  @ApiParam({ name: 'orderId', description: 'UUID del pedido' })
  createRefund(
    @Param('orderId', ParseUUIDPipe) orderId: string,
    @Body() dto: CreateRefundDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.refundService.createRefund(orderId, dto, admin.sub);
  }

  @Get(':orderId/refunds')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN, AdminRole.VIEWER)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Reembolsos obtenidos exitosamente')
  @ApiOperation({ summary: 'Historial de reembolsos de un pedido' })
  @ApiParam({ name: 'orderId', description: 'UUID del pedido' })
  getRefunds(@Param('orderId', ParseUUIDPipe) orderId: string) {
    return this.refundService.getRefundsByOrder(orderId);
  }

  @Patch('refunds/:refundId/process')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Reembolso procesado exitosamente')
  @ApiOperation({ summary: 'Procesar un reembolso pendiente' })
  @ApiParam({ name: 'refundId', description: 'UUID del reembolso' })
  processRefund(
    @Param('refundId', ParseUUIDPipe) refundId: string,
    @Body() dto: CompleteRefundDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.refundService.processRefund(refundId, dto, admin.sub);
  }
}

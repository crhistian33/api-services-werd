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
  Req,
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
import type { Request } from 'express';

import { OrdersService } from '../service/orders.service';
import { OrderClaimsService } from '../service/order-claims.service';
import { OrderRefundService } from '../service/order-refund.service';
import { OrderLogisticsService } from '../service/order-logistics.service';

import {
  CreateOrderDto,
  UpdateOrderDto,
  QueryOrderDto,
  CreateOrderClaimDto,
  ReviewClaimDto,
  QueryClaimDto,
  CreateRefundDto,
  UpdateLogisticsDto,
} from '../dto';

import { ResponseMessage } from '../../../common/decorators/response-message.decorator';
import { Roles } from '../../auth/decorators/roles.decorator';
import { Public } from '../../../common/decorators/public.decorator';
import { AdminRole } from '../../auth/constants/admin-role.constant';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import type { AdminJwtPayload } from '../../../common/interfaces/jwt-payload.interface';
import type { CustomerJwtPayload } from '../../../common/interfaces/jwt-payload.interface';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly orderClaimsService: OrderClaimsService,
    private readonly orderRefundService: OrderRefundService,
    private readonly orderLogisticsService: OrderLogisticsService,
  ) {}

  // ═══════════════════════════════════════════════════════════
  // RUTAS PÚBLICAS (sin guard de auth)
  // ═══════════════════════════════════════════════════════════

  @Post()
  @Public()
  @ResponseMessage('Pedido creado exitosamente')
  @ApiOperation({
    summary: 'Crear pedido — checkout',
    description:
      'Acepta cliente registrado (customerId) o guest (guestEmail). ' +
      'Decrementa stock, valida cupón y crea snapshot inmutable de la dirección.',
  })
  @ApiCreatedResponse({ description: 'Pedido creado' })
  create(@Body() dto: CreateOrderDto, @Req() req: Request) {
    const ipAddress =
      (req.headers['x-forwarded-for'] as string | undefined)
        ?.split(',')[0]
        ?.trim() ??
      req.ip ??
      undefined;
    return this.ordersService.createOrder({ ...dto, ipAddress });
  }

  @Get('track/:orderNumber')
  @Public()
  @ResponseMessage('Información del pedido obtenida')
  @ApiOperation({ summary: 'Rastrear pedido por número — público (guests)' })
  @ApiParam({ name: 'orderNumber', example: 'ORD-20250418-0001' })
  trackOrder(@Param('orderNumber') orderNumber: string) {
    return this.ordersService.findOrderByNumber(orderNumber);
  }

  @Post('webhook/payment')
  @Public()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Webhook de confirmación de pago — pasarela' })
  handlePaymentWebhook(@Body() body: Record<string, unknown>) {
    const orderId = body['orderId'] as string;
    const gatewayTransactionId = body['transactionId'] as string;
    return this.ordersService.handlePaymentConfirmed(
      orderId,
      gatewayTransactionId,
      body,
    );
  }

  // ═══════════════════════════════════════════════════════════
  // COLECCIÓN — rutas sin parámetro dinámico
  // IMPORTANTE: todas estas rutas deben declararse ANTES de /:id
  // ═══════════════════════════════════════════════════════════

  @Get()
  @Roles(
    AdminRole.SUPER_ADMIN,
    AdminRole.ADMIN,
    AdminRole.EDITOR,
    AdminRole.VIEWER,
  )
  @ApiBearerAuth('access-token')
  @ResponseMessage('Pedidos obtenidos exitosamente')
  @ApiOperation({ summary: 'Listar pedidos con filtros y paginación (Admin)' })
  findAll(@Query() query: QueryOrderDto) {
    return this.ordersService.findAllOrders(query);
  }

  @Get('my')
  @ApiBearerAuth('access-token')
  @ResponseMessage('Pedidos obtenidos exitosamente')
  @ApiOperation({ summary: 'Historial de pedidos del cliente autenticado' })
  findMyOrders(
    @CurrentUser() customer: CustomerJwtPayload,
    @Query() query: QueryOrderDto,
  ) {
    return this.ordersService.findMyOrders(customer.sub, query);
  }

  // ──────────────────────────────────────────────────────────
  // GET /orders/claims — listado de todas las reclamaciones (Admin)
  //
  // Esta ruta DEBE estar antes de GET /orders/:id para que NestJS
  // no intente parsear "claims" como un UUID.
  // ──────────────────────────────────────────────────────────

  @Get('claims')
  @Roles(
    AdminRole.SUPER_ADMIN,
    AdminRole.ADMIN,
    AdminRole.EDITOR,
    AdminRole.VIEWER,
  )
  @ApiBearerAuth('access-token')
  @ResponseMessage('Reclamaciones obtenidas exitosamente')
  @ApiOperation({
    summary: 'Listar todas las reclamaciones — Admin',
    description:
      'Devuelve todas las reclamaciones (CANCELLATION, REFUND, REPLACEMENT) ' +
      'de todos los pedidos, con paginación y filtros por estado/tipo/búsqueda.',
  })
  @ApiOkResponse({ description: 'Lista paginada de reclamaciones' })
  findAllClaims(@Query() query: QueryClaimDto) {
    return this.orderClaimsService.findAll(query);
  }

  @Get('number/:orderNumber')
  @Roles(
    AdminRole.SUPER_ADMIN,
    AdminRole.ADMIN,
    AdminRole.EDITOR,
    AdminRole.VIEWER,
  )
  @ApiBearerAuth('access-token')
  @ResponseMessage('Pedido obtenido exitosamente')
  @ApiOperation({ summary: 'Obtener pedido por número (Admin)' })
  @ApiParam({ name: 'orderNumber', example: 'ORD-20250418-0001' })
  findByNumber(@Param('orderNumber') orderNumber: string) {
    return this.ordersService.findOrderByNumber(orderNumber);
  }

  // ──────────────────────────────────────────────────────────
  // PATCH /orders/claims/:claimId/review
  // Debe estar aquí (antes de /:id) porque NestJS procesa las
  // rutas en orden de declaración.
  // ──────────────────────────────────────────────────────────

  @Patch('claims/:claimId/review')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Reclamación revisada')
  @ApiOperation({
    summary: 'Aprobar o rechazar una reclamación (Admin)',
    description:
      'Solo acepta action=APPROVED o action=REJECTED. ' +
      'CANCELLED/COMPLETED/RECEIVED son gestionados automáticamente por el sistema. ' +
      'reviewNote es OBLIGATORIO al rechazar.',
  })
  @ApiParam({ name: 'claimId', description: 'UUID de la reclamación' })
  reviewClaim(
    @Param('claimId', ParseUUIDPipe) claimId: string,
    @Body() dto: ReviewClaimDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.orderClaimsService.reviewClaim(claimId, dto, admin.sub);
  }

  // ═══════════════════════════════════════════════════════════
  // RUTAS CON :id — AL FINAL para evitar colisiones
  // ═══════════════════════════════════════════════════════════

  @Get(':id')
  @Roles(
    AdminRole.SUPER_ADMIN,
    AdminRole.ADMIN,
    AdminRole.EDITOR,
    AdminRole.VIEWER,
  )
  @ApiBearerAuth('access-token')
  @ResponseMessage('Pedido obtenido exitosamente')
  @ApiOperation({ summary: 'Obtener pedido por UUID (Admin)' })
  @ApiParam({ name: 'id' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.ordersService.findOrderById(id);
  }

  @Get('my/:id')
  @ApiBearerAuth('access-token')
  @ResponseMessage('Pedido obtenido exitosamente')
  @ApiOperation({ summary: 'Detalle de un pedido del cliente autenticado' })
  @ApiParam({ name: 'id' })
  findOneMyOrder(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser() customer: CustomerJwtPayload,
  ) {
    return this.ordersService.findMyOrderById(id, customer.sub);
  }

  @Patch(':id/status')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN, AdminRole.EDITOR)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Estado del pedido actualizado exitosamente')
  @ApiOperation({
    summary: 'Actualizar estado / notas del pedido (Admin)',
    description:
      'Transiciones: pending_payment→[paid,cancelled] | ' +
      'paid→[processing,cancelled,refunded] | processing→[shipped,cancelled] | ' +
      'shipped→[delivered] | delivered→[refunded].',
  })
  @ApiParam({ name: 'id' })
  updateStatus(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateOrderDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.ordersService.updateOrderStatus(id, dto, admin.sub);
  }

  // ── Reclamaciones del cliente (por pedido) ────────────────

  @Post(':id/claims')
  @ApiBearerAuth('access-token')
  @ResponseMessage('Reclamación enviada correctamente')
  @ApiOperation({
    summary: 'Crear reclamación sobre un pedido (cliente)',
    description:
      'El cliente solo puede reclamar sobre sus propios pedidos. ' +
      'CANCELLATION: antes del envío. REFUND/REPLACEMENT: tras el envío.',
  })
  @ApiParam({ name: 'id', description: 'UUID del pedido' })
  createClaim(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: CreateOrderClaimDto,
    @CurrentUser() user: CustomerJwtPayload,
  ) {
    return this.orderClaimsService.createClaim(user.sub, id, dto);
  }

  @Delete(':id/claims/:claimId')
  @ApiBearerAuth('access-token')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Reclamación cancelada')
  @ApiOperation({ summary: 'Cancelar reclamación propia PENDING (cliente)' })
  @ApiParam({ name: 'id', description: 'UUID del pedido' })
  @ApiParam({ name: 'claimId', description: 'UUID de la reclamación' })
  cancelClaim(
    @Param('claimId', ParseUUIDPipe) claimId: string,
    @CurrentUser() user: CustomerJwtPayload,
  ) {
    return this.orderClaimsService.cancelClaim(claimId, user.sub);
  }

  // ── Reembolsos ────────────────────────────────────────────

  @Post(':id/refunds')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Reembolso creado exitosamente')
  @ApiOperation({ summary: 'Procesar un reembolso directo (Admin)' })
  @ApiParam({ name: 'id' })
  createRefund(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: CreateRefundDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.orderRefundService.createRefund(id, dto, admin.sub);
  }

  @Get(':id/refunds')
  @Roles(
    AdminRole.SUPER_ADMIN,
    AdminRole.ADMIN,
    AdminRole.EDITOR,
    AdminRole.VIEWER,
  )
  @ApiBearerAuth('access-token')
  @ResponseMessage('Reembolsos obtenidos exitosamente')
  @ApiOperation({ summary: 'Ver historial de reembolsos del pedido (Admin)' })
  @ApiParam({ name: 'id' })
  getRefundsByOrder(@Param('id', ParseUUIDPipe) id: string) {
    return this.orderRefundService.getRefundsByOrder(id);
  }

  // ── Logística ─────────────────────────────────────────────

  @Patch(':id/logistics/shipped')
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN, AdminRole.EDITOR)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Pedido marcado como despachado')
  @ApiOperation({
    summary:
      'Despachar pedido — actualizar logística y cambiar estado a Shipped (Admin)',
    description:
      'COURIER: requiere courierName, trackingNumber y foto de guía en tempImageIds. ' +
      'LOCAL_MOTORIZED: solo requiere deliveryType; registrar internalTransportCost para el motorizado.',
  })
  @ApiParam({ name: 'id' })
  updateToShippedLogistics(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateLogisticsDto,
    @CurrentUser() admin: AdminJwtPayload,
  ) {
    return this.orderLogisticsService.updateToShipped(id, dto, admin.sub);
  }
}

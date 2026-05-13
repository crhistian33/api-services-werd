"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const orders_service_1 = require("../service/orders.service");
const order_logistics_service_1 = require("../service/order-logistics.service");
const order_claims_service_1 = require("../service/order-claims.service");
const order_refund_service_1 = require("../service/order-refund.service");
const order_payment_confirmation_service_1 = require("../service/order-payment-confirmation.service");
const dto_1 = require("../dto");
const confirm_payment_dto_1 = require("../dto/confirm-payment.dto");
const mark_delivered_dto_1 = require("../dto/mark-delivered.dto");
const mark_claim_received_dto_1 = require("../dto/mark-claim-received.dto");
const complete_refund_dto_1 = require("../dto/complete-refund.dto");
const create_refund_dto_1 = require("../dto/create-refund.dto");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const admin_role_constant_1 = require("../../auth/constants/admin-role.constant");
const public_decorator_1 = require("../../../common/decorators/public.decorator");
const current_user_decorator_1 = require("../../auth/decorators/current-user.decorator");
const response_message_decorator_1 = require("../../../common/decorators/response-message.decorator");
let OrdersController = class OrdersController {
    ordersService;
    logisticsService;
    claimsService;
    refundService;
    paymentConfirmationService;
    constructor(ordersService, logisticsService, claimsService, refundService, paymentConfirmationService) {
        this.ordersService = ordersService;
        this.logisticsService = logisticsService;
        this.claimsService = claimsService;
        this.refundService = refundService;
        this.paymentConfirmationService = paymentConfirmationService;
    }
    async confirmClaimShipment(orderId, claimId, dto, customer) {
        return this.claimsService.confirmClaimShipment(claimId, dto, customer.sub);
    }
    createClaimFromStorefront(orderId, dto, customer) {
        return this.claimsService.createClaim(customer.sub, orderId, dto);
    }
    createOrderFromStorefront(dto, req, ip) {
        const ipAddress = req.headers['x-forwarded-for']?.split(',')[0]?.trim() ?? ip;
        return this.ordersService.createOrder({ ...dto, ipAddress });
    }
    createOrderFromAdmin(dto, admin) {
        return this.ordersService.createOrder(dto, admin.sub);
    }
    findAll(query) {
        return this.ordersService.findAllOrders(query);
    }
    findAllClaims(query) {
        return this.claimsService.findAll(query);
    }
    registerReturnShipment(claimId, dto, admin) {
        return this.claimsService.registerReturnShipment(claimId, dto, admin.sub);
    }
    reviewClaim(claimId, dto, admin) {
        return this.claimsService.reviewClaim(claimId, dto, admin.sub);
    }
    markClaimReceived(claimId, dto, admin) {
        return this.claimsService.markClaimReceived(claimId, dto, admin.sub);
    }
    completeRefund(claimId, dto, admin) {
        return this.refundService.processClaimRefund(claimId, dto, admin.sub);
    }
    completeReplacement(claimId, admin) {
        return this.claimsService.completeReplacement(claimId, admin.sub);
    }
    cancelClaim(claimId, customer) {
        return this.claimsService.cancelClaim(claimId, customer.sub);
    }
    deleteClaim(claimId) {
        return this.claimsService.deleteClaim(claimId);
    }
    createClaimFromAdmin(orderId, dto, admin) {
        return this.claimsService.createClaimAsAdmin(orderId, dto, admin.sub);
    }
    findOne(id) {
        return this.ordersService.findOrderById(id);
    }
    confirmPayment(id, dto, admin) {
        return this.paymentConfirmationService.confirmPayment(id, dto, admin.sub);
    }
    markProcessing(id, admin) {
        return this.ordersService.markAsProcessing(id, admin.sub);
    }
    cancelOrder(id, dto, admin) {
        return this.ordersService.cancelOrder(id, dto, admin.sub);
    }
    markShipped(id, dto, admin) {
        return this.logisticsService.updateToShipped(id, dto, admin.sub);
    }
    markDelivered(id, dto, admin) {
        return this.logisticsService.markAsDelivered(id, dto, admin.sub);
    }
    createRefund(orderId, dto, admin) {
        return this.refundService.createRefund(orderId, dto, admin.sub);
    }
    getRefunds(orderId) {
        return this.refundService.getRefundsByOrder(orderId);
    }
    processRefund(refundId, dto, admin) {
        return this.refundService.processRefund(refundId, dto, admin.sub);
    }
};
exports.OrdersController = OrdersController;
__decorate([
    (0, common_1.Patch)(':orderId/claims/:claimId/confirm-shipment'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Envío de devolución confirmado exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Cliente confirma envío del producto devuelto' }),
    (0, swagger_1.ApiParam)({ name: 'orderId', type: String, description: 'ID de la orden' }),
    (0, swagger_1.ApiParam)({ name: 'claimId', type: String, description: 'ID del reclamo' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Envío confirmado exitosamente' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Reclamo no encontrado o no está aprobado',
    }),
    __param(0, (0, common_1.Param)('orderId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Param)('claimId', common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, dto_1.ConfirmClaimShipmentDto, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "confirmClaimShipment", null);
__decorate([
    (0, common_1.Post)(':orderId/claims'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Reclamo creado exitosamente'),
    (0, swagger_1.ApiOperation)({
        summary: 'Crear reclamo desde el storefront (cliente)',
        description: 'El cliente autenticado puede reclamar sobre sus propios pedidos. ' +
            'CANCELLATION: antes del envío. REFUND/REPLACEMENT: tras el envío.',
    }),
    (0, swagger_1.ApiParam)({ name: 'orderId', description: 'UUID del pedido' }),
    __param(0, (0, common_1.Param)('orderId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.CreateOrderClaimDto, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "createClaimFromStorefront", null);
__decorate([
    (0, common_1.Post)(),
    (0, public_decorator_1.Public)(),
    (0, response_message_decorator_1.ResponseMessage)('Pedido creado exitosamente'),
    (0, swagger_1.ApiOperation)({
        summary: 'Crear pedido desde el checkout (cliente/guest)',
        description: 'Acepta customerId (cliente registrado) o guestEmail (invitado). ' +
            'Decrementa stock, valida cupón y crea snapshot inmutable de la dirección.',
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Ip)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateOrderDto, Object, String]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "createOrderFromStorefront", null);
__decorate([
    (0, common_1.Post)('admin'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Pedido creado exitosamente desde CMS'),
    (0, swagger_1.ApiOperation)({
        summary: 'Crear pedido manualmente desde el CMS (casos excepcionales)',
        description: 'Solo para pedidos telefónicos o correcciones administrativas.',
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateOrderDto, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "createOrderFromAdmin", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.VIEWER),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Pedidos obtenidos exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar pedidos con filtros y paginación' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.QueryOrderDto]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('claims'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.VIEWER),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Reclamos obtenidos exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos los reclamos' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.QueryClaimDto]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findAllClaims", null);
__decorate([
    (0, common_1.Patch)('admin/claims/:claimId/register-return-shipment'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Envío de devolución registrado exitosamente'),
    (0, swagger_1.ApiOperation)({
        summary: 'Registrar datos de envío de retorno (admin)',
        description: 'El admin registra el tracking y voucher cuando el cliente confirma el envío.',
    }),
    (0, swagger_1.ApiParam)({ name: 'claimId', description: 'UUID del reclamo' }),
    __param(0, (0, common_1.Param)('claimId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.ConfirmReturnShipmentDto, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "registerReturnShipment", null);
__decorate([
    (0, common_1.Patch)('claims/:claimId/review'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Reclamo revisado exitosamente'),
    (0, swagger_1.ApiOperation)({
        summary: 'Aprobar o rechazar un reclamo',
        description: 'APPROVED para CANCELLATION: se procesa inmediatamente. ' +
            'APPROVED para REFUND/REPLACEMENT: pasa a espera de recepción del producto. ' +
            'REJECTED: requiere reviewNote obligatorio.',
    }),
    (0, swagger_1.ApiParam)({ name: 'claimId', description: 'UUID del reclamo' }),
    __param(0, (0, common_1.Param)('claimId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.ReviewClaimDto, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "reviewClaim", null);
__decorate([
    (0, common_1.Patch)('claims/:claimId/received'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Recepción del producto registrada'),
    (0, swagger_1.ApiOperation)({
        summary: 'Confirmar que se recibió el producto devuelto',
        description: 'Registra el estado del producto (RESELLABLE restaura stock; DAMAGED/DESTROYED no). ' +
            'Solo aplica a reclamos REFUND y REPLACEMENT.',
    }),
    (0, swagger_1.ApiParam)({ name: 'claimId', description: 'UUID del reclamo' }),
    __param(0, (0, common_1.Param)('claimId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, mark_claim_received_dto_1.MarkClaimReceivedDto, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "markClaimReceived", null);
__decorate([
    (0, common_1.Patch)('claims/:claimId/complete-refund'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Reembolso completado exitosamente'),
    (0, swagger_1.ApiOperation)({
        summary: 'Procesar el reembolso de un reclamo REFUND',
        description: 'Crea el registro Refund, actualiza el estado del reclamo a COMPLETED. ' +
            'Si es reembolso total, la orden pasa a estado "refunded".',
    }),
    (0, swagger_1.ApiParam)({ name: 'claimId', description: 'UUID del reclamo' }),
    __param(0, (0, common_1.Param)('claimId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, complete_refund_dto_1.CompleteRefundDto, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "completeRefund", null);
__decorate([
    (0, common_1.Patch)('claims/:claimId/complete-replacement'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Orden de reemplazo generada exitosamente'),
    (0, swagger_1.ApiOperation)({
        summary: 'Generar orden de reemplazo para un reclamo REPLACEMENT',
        description: 'Crea la orden de reemplazo en estado "processing", decrementa el stock ' +
            'y vincula la orden al reclamo. La nueva orden sigue el flujo normal de envío.',
    }),
    (0, swagger_1.ApiParam)({ name: 'claimId', description: 'UUID del reclamo' }),
    __param(0, (0, common_1.Param)('claimId', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "completeReplacement", null);
__decorate([
    (0, common_1.Patch)('claims/:claimId/cancel'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Reclamo cancelado exitosamente'),
    (0, swagger_1.ApiOperation)({
        summary: 'Cancelar reclamo propio (cliente)',
        description: 'El cliente autenticado puede cancelar su propio reclamo si está en estado PENDING.',
    }),
    (0, swagger_1.ApiParam)({ name: 'claimId', description: 'UUID del reclamo' }),
    __param(0, (0, common_1.Param)('claimId', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "cancelClaim", null);
__decorate([
    (0, common_1.Delete)('claims/:claimId'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, response_message_decorator_1.ResponseMessage)('Reclamo eliminado exitosamente'),
    (0, swagger_1.ApiOperation)({
        summary: 'Eliminar reclamo (solo SUPER_ADMIN)',
        description: 'Hard delete de un reclamo finalizado. Solo permitido si el estado es CANCELLED o REJECTED. Los reclamos activos conservan trazabilidad de auditoría.',
    }),
    (0, swagger_1.ApiParam)({ name: 'claimId', description: 'UUID del reclamo' }),
    __param(0, (0, common_1.Param)('claimId', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "deleteClaim", null);
__decorate([
    (0, common_1.Post)('admin/:orderId/claims'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Reclamo creado exitosamente desde CMS'),
    (0, swagger_1.ApiOperation)({
        summary: 'Crear reclamo desde el CMS en nombre del cliente',
        description: 'El customerId se resuelve automáticamente desde el pedido. ' +
            'Solo disponible para pedidos de clientes registrados (no guests).',
    }),
    (0, swagger_1.ApiParam)({ name: 'orderId', description: 'UUID del pedido' }),
    __param(0, (0, common_1.Param)('orderId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.CreateOrderClaimDto, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "createClaimFromAdmin", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.VIEWER),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Pedido obtenido exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener detalle completo de un pedido' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID del pedido' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id/confirm-payment'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Pago confirmado exitosamente'),
    (0, swagger_1.ApiOperation)({
        summary: 'Confirmar pago manual (YAPE/PLIN/Transferencia)',
        description: 'Marca el pedido como pagado registrando el número de operación. ' +
            'Solo aplica para métodos de pago manuales (wallet, cash_code). ' +
            'Los pagos con tarjeta se confirman automáticamente por la pasarela.',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID del pedido' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, confirm_payment_dto_1.ConfirmManualPaymentDto, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "confirmPayment", null);
__decorate([
    (0, common_1.Patch)(':id/mark-processing'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Pedido en preparación'),
    (0, swagger_1.ApiOperation)({
        summary: 'Marcar pedido como en preparación',
        description: 'Transición paid → processing. No requiere datos adicionales.',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID del pedido' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "markProcessing", null);
__decorate([
    (0, common_1.Patch)(':id/cancel'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Pedido cancelado'),
    (0, swagger_1.ApiOperation)({
        summary: 'Cancelar pedido',
        description: 'Cancela el pedido restaurando el stock. ' +
            'Solo permitido desde pending_payment, paid o processing. ' +
            'Para pedidos shipped o delivered, usar el flujo de reclamos.',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID del pedido' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.CancelOrderDto, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "cancelOrder", null);
__decorate([
    (0, common_1.Patch)(':id/logistics/shipped'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Pedido marcado como enviado'),
    (0, swagger_1.ApiOperation)({
        summary: 'Marcar pedido como enviado',
        description: 'Transición processing → shipped. Registra datos logísticos y evidencia de despacho.',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID del pedido' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateLogisticsDto, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "markShipped", null);
__decorate([
    (0, common_1.Patch)(':id/logistics/delivered'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Pedido marcado como entregado'),
    (0, swagger_1.ApiOperation)({
        summary: 'Marcar pedido como entregado',
        description: 'Transición shipped → delivered. Registra evidencia fotográfica. ' +
            'Para contraentrega, registra el monto cobrado.',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID del pedido' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, mark_delivered_dto_1.MarkDeliveredDto, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "markDelivered", null);
__decorate([
    (0, common_1.Post)(':orderId/refunds'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Reembolso creado exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear reembolso directo sin reclamo previo' }),
    (0, swagger_1.ApiParam)({ name: 'orderId', description: 'UUID del pedido' }),
    __param(0, (0, common_1.Param)('orderId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_refund_dto_1.CreateRefundDto, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "createRefund", null);
__decorate([
    (0, common_1.Get)(':orderId/refunds'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.VIEWER),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Reembolsos obtenidos exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Historial de reembolsos de un pedido' }),
    (0, swagger_1.ApiParam)({ name: 'orderId', description: 'UUID del pedido' }),
    __param(0, (0, common_1.Param)('orderId', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "getRefunds", null);
__decorate([
    (0, common_1.Patch)('refunds/:refundId/process'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Reembolso procesado exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Procesar un reembolso pendiente' }),
    (0, swagger_1.ApiParam)({ name: 'refundId', description: 'UUID del reembolso' }),
    __param(0, (0, common_1.Param)('refundId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, complete_refund_dto_1.CompleteRefundDto, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "processRefund", null);
exports.OrdersController = OrdersController = __decorate([
    (0, swagger_1.ApiTags)('Orders'),
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [orders_service_1.OrdersService,
        order_logistics_service_1.OrderLogisticsService,
        order_claims_service_1.OrderClaimsService,
        order_refund_service_1.OrderRefundService,
        order_payment_confirmation_service_1.OrderPaymentConfirmationService])
], OrdersController);
//# sourceMappingURL=orders.controller.js.map
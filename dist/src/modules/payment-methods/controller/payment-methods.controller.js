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
exports.PaymentMethodsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const payment_methods_service_1 = require("../service/payment-methods.service");
const dto_1 = require("../dto");
const response_message_decorator_1 = require("../../../common/decorators/response-message.decorator");
const roles_decorator_1 = require("../../../modules/auth/decorators/roles.decorator");
const admin_role_constant_1 = require("../../../modules/auth/constants/admin-role.constant");
const current_user_decorator_1 = require("../../../modules/auth/decorators/current-user.decorator");
const public_decorator_1 = require("../../../common/decorators/public.decorator");
const dto_2 = require("../dto");
let PaymentMethodsController = class PaymentMethodsController {
    service;
    constructor(service) {
        this.service = service;
    }
    findAllPublic() {
        return this.service.findAllPublic();
    }
    changeStatus(dto, admin) {
        return this.service.changeStatusMany(dto.ids, dto.status, admin.sub);
    }
    reorder(dto, admin) {
        return this.service.reorder(dto, admin.sub);
    }
    removeMany(dto) {
        return this.service.removeMany(dto.ids);
    }
    findAll(query) {
        return this.service.findAllMethods(query);
    }
    create(dto, admin) {
        return this.service.createMethod(dto, admin.sub);
    }
    findOne(id) {
        return this.service.findOne(id);
    }
    update(id, dto, admin) {
        return this.service.updateMethod(id, dto, admin.sub);
    }
    remove(id) {
        return this.service.remove(id);
    }
};
exports.PaymentMethodsController = PaymentMethodsController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('public'),
    (0, response_message_decorator_1.ResponseMessage)('Métodos de pago obtenidos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaymentMethodsController.prototype, "findAllPublic", null);
__decorate([
    (0, common_1.Patch)('bulk-status'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.EDITOR),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Estados actualizados exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Cambiar estado de múltiples productos' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_2.BulkChangeStatusPaymentMethodDto, Object]),
    __metadata("design:returntype", void 0)
], PaymentMethodsController.prototype, "changeStatus", null);
__decorate([
    (0, common_1.Patch)('bulk/reorder'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Orden de métodos de pago actualizado exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Reordenar métodos de pago' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_2.BulkReorderPaymentMethodDto, Object]),
    __metadata("design:returntype", void 0)
], PaymentMethodsController.prototype, "reorder", null);
__decorate([
    (0, common_1.Delete)('bulk'),
    (0, response_message_decorator_1.ResponseMessage)('Slides eliminados exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar múltiples slides' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_2.BulkDeletePaymentMethodDto]),
    __metadata("design:returntype", void 0)
], PaymentMethodsController.prototype, "removeMany", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.VIEWER),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Métodos de pago listados'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.QueryPaymentMethodDto]),
    __metadata("design:returntype", void 0)
], PaymentMethodsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Método de pago creado'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreatePaymentMethodDto, Object]),
    __metadata("design:returntype", void 0)
], PaymentMethodsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaymentMethodsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Método de pago actualizado'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdatePaymentMethodDto, Object]),
    __metadata("design:returntype", void 0)
], PaymentMethodsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Método de pago eliminado permanentemente'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaymentMethodsController.prototype, "remove", null);
exports.PaymentMethodsController = PaymentMethodsController = __decorate([
    (0, swagger_1.ApiTags)('PaymentMethods'),
    (0, common_1.Controller)('payment-methods'),
    __metadata("design:paramtypes", [payment_methods_service_1.PaymentMethodsService])
], PaymentMethodsController);
//# sourceMappingURL=payment-methods.controller.js.map
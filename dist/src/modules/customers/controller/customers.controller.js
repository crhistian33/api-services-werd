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
exports.CustomersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const customers_service_1 = require("../service/customers.service");
const dto_1 = require("../dto");
const response_message_decorator_1 = require("../../../common/decorators/response-message.decorator");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const admin_role_constant_1 = require("../../auth/constants/admin-role.constant");
const public_decorator_1 = require("../../../common/decorators/public.decorator");
const current_user_decorator_1 = require("../../auth/decorators/current-user.decorator");
let CustomersController = class CustomersController {
    customersService;
    constructor(customersService) {
        this.customersService = customersService;
    }
    register(dto) {
        return this.customersService.register(dto);
    }
    verifyEmail(dto) {
        return this.customersService.verifyEmail(dto.email, dto.code);
    }
    forgotPassword(dto) {
        return this.customersService.forgotPassword(dto);
    }
    resetPassword(dto) {
        return this.customersService.resetPassword(dto);
    }
    getProfile(user) {
        return this.customersService.findCustomerById(user.sub);
    }
    updateMyPassword(user, dto) {
        return this.customersService.updatePassword(user.sub, dto);
    }
    getMyAddresses(user) {
        return this.customersService.getMyAddresses(user.sub);
    }
    createAddress(user, dto) {
        return this.customersService.createAddress(user.sub, dto);
    }
    updateAddress(user, addressId, dto) {
        return this.customersService.updateAddress(user.sub, addressId, dto);
    }
    softDeleteMany(dto, admin) {
        return this.customersService.softDeleteMany(dto.ids, admin.sub);
    }
    findAll(query) {
        return this.customersService.findAllCustomers(query);
    }
    findOne(id) {
        return this.customersService.findCustomerById(id);
    }
    update(id, dto) {
        return this.customersService.update(id, dto);
    }
    remove(id) {
        return this.customersService.remove(id);
    }
};
exports.CustomersController = CustomersController;
__decorate([
    (0, common_1.Post)('register'),
    (0, public_decorator_1.Public)(),
    (0, response_message_decorator_1.ResponseMessage)('Registro exitoso...'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateCustomerDto]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('verify-email'),
    (0, public_decorator_1.Public)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.VerifyEmailCustomerDto]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "verifyEmail", null);
__decorate([
    (0, common_1.Post)('forgot-password'),
    (0, public_decorator_1.Public)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.ForgotPasswordDto]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Patch)('reset-password'),
    (0, public_decorator_1.Public)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.ForgotPasswordResetDto]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Get)('me'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.UpdateCustomerPasswordDto]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "updateMyPassword", null);
__decorate([
    (0, common_1.Get)('me/addresses'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "getMyAddresses", null);
__decorate([
    (0, common_1.Post)('me/addresses'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.CreateCustomerAddressDto]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "createAddress", null);
__decorate([
    (0, common_1.Patch)('me/addresses/:addressId'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('addressId', common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, dto_1.UpdateCustomerAddressDto]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "updateAddress", null);
__decorate([
    (0, common_1.Patch)('bulk/soft-delete'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.BulkSoftDeleteCustomerDto, Object]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "softDeleteMany", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.VIEWER),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.QueryCustomerDto]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateCustomerDto]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "remove", null);
exports.CustomersController = CustomersController = __decorate([
    (0, swagger_1.ApiTags)('Customers & Refunds'),
    (0, common_1.Controller)('customers'),
    __metadata("design:paramtypes", [customers_service_1.CustomersService])
], CustomersController);
//# sourceMappingURL=customers.controller.js.map
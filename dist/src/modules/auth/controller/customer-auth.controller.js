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
exports.CustomerAuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const customer_auth_service_1 = require("../services/customer-auth.service");
const login_dto_1 = require("../dto/login.dto");
const public_decorator_1 = require("../../../common/decorators/public.decorator");
const current_user_decorator_1 = require("../decorators/current-user.decorator");
let CustomerAuthController = class CustomerAuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async login(dto, res) {
        return this.authService.login(dto.email, dto.password, res);
    }
    async refresh(req, res) {
        return this.authService.refresh(req, res);
    }
    async logout(req, res) {
        return this.authService.logout(req, res);
    }
    async logoutAll(customer, res) {
        return this.authService.logoutAll(customer.sub, res);
    }
};
exports.CustomerAuthController = CustomerAuthController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Login de cliente' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Inicio de sesión exitoso, devuelve accessToken y cookie',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Credenciales inválidas' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto, Object]),
    __metadata("design:returntype", Promise)
], CustomerAuthController.prototype, "login", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('refresh'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Rotación de tokens de cliente (Refresh)' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Devuelve un nuevo accessToken' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Refresh token inválido o no proporcionado',
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CustomerAuthController.prototype, "refresh", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Cerrar sesión de cliente' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Sesión terminada y cookie limpia' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CustomerAuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Post)('logout-all'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Cerrar todas las sesiones activas de este cliente',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Todas las sesiones revocadas en la base de datos',
    }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CustomerAuthController.prototype, "logoutAll", null);
exports.CustomerAuthController = CustomerAuthController = __decorate([
    (0, swagger_1.ApiTags)('Customer Auth'),
    (0, common_1.Controller)('auth/customer'),
    __metadata("design:paramtypes", [customer_auth_service_1.CustomerAuthService])
], CustomerAuthController);
//# sourceMappingURL=customer-auth.controller.js.map
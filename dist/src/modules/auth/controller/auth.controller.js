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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const admin_auth_service_1 = require("../services/admin-auth.service");
const login_dto_1 = require("../dto/login.dto");
const public_decorator_1 = require("../../../common/decorators/public.decorator");
const roles_decorator_1 = require("../decorators/roles.decorator");
const admin_role_constant_1 = require("../constants/admin-role.constant");
const current_admin_decorator_1 = require("../../../common/decorators/current-admin.decorator");
let AuthController = class AuthController {
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
    async logoutAll(admin, res) {
        return this.authService.logoutAll(admin.sub, res);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Login de administrador' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Inicio de sesión exitoso, devuelve accessToken y cookie',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Credenciales inválidas' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('refresh'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Rotación de tokens (Refresh)' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Devuelve un nuevo accessToken' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Refresh token inválido o no proporcionado',
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Cerrar sesión actual (Revoca el refresh token)' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Sesión terminada y cookie limpia' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Post)('logout-all'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Cerrar todas las sesiones activas de este administrador',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Todas las sesiones revocadas en la base de datos',
    }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'Solo el Super Admin puede realizar esta acción',
    }),
    __param(0, (0, current_admin_decorator_1.CurrentAdmin)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logoutAll", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth/admin'),
    __metadata("design:paramtypes", [admin_auth_service_1.AdminAuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map
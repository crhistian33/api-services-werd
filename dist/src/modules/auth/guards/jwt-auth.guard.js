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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const public_decorator_1 = require("../../../common/decorators/public.decorator");
const prisma_service_1 = require("../../../prisma/prisma.service");
let JwtAuthGuard = class JwtAuthGuard {
    jwtService;
    reflector;
    configService;
    prisma;
    constructor(jwtService, reflector, configService, prisma) {
        this.jwtService = jwtService;
        this.reflector = reflector;
        this.configService = configService;
        this.prisma = prisma;
    }
    async canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride(public_decorator_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic)
            return true;
        const request = context
            .switchToHttp()
            .getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new common_1.UnauthorizedException('Token no proporcionado');
        }
        try {
            const decoded = this.jwtService.decode(token);
            if (!decoded?.userType) {
                throw new common_1.UnauthorizedException('Estructura de token inválida');
            }
            const configKey = decoded.userType === 'admin' ? 'jwt.admin' : 'jwt.customer';
            const config = this.configService.get(configKey);
            if (!config) {
                throw new common_1.UnauthorizedException('Configuración de autenticación no encontrada');
            }
            const payload = await this.jwtService.verifyAsync(token, { secret: config.accessSecret });
            if (payload.type !== 'access') {
                throw new common_1.UnauthorizedException('Tipo de token inválido');
            }
            request.user = payload;
        }
        catch (error) {
            const message = error instanceof common_1.UnauthorizedException
                ? error.message
                : 'Token inválido o expirado';
            if (process.env.NODE_ENV === 'development') {
                console.error('Error de JWT en Guard:', message);
            }
            throw new common_1.UnauthorizedException(message);
        }
        return true;
    }
    extractTokenFromHeader(request) {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        core_1.Reflector,
        config_1.ConfigService,
        prisma_service_1.PrismaService])
], JwtAuthGuard);
//# sourceMappingURL=jwt-auth.guard.js.map
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
exports.ImageUploadGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let ImageUploadGuard = class ImageUploadGuard {
    jwtService;
    configService;
    constructor(jwtService, configService) {
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
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
            request['user'] = payload;
            const entityType = request.query['entityType'];
            const imageRole = request.query['imageRole'];
            return this.validatePermissions(payload, entityType, imageRole);
        }
        catch (error) {
            if (error instanceof common_1.ForbiddenException)
                throw error;
            throw new common_1.UnauthorizedException('Token inválido o expirado');
        }
    }
    extractTokenFromHeader(request) {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
    validatePermissions(payload, entityType, imageRole) {
        if (payload.userType === 'admin') {
            return true;
        }
        if (payload.userType === 'customer') {
            const allowedEntities = ['ORDER_CLAIM'];
            const allowedRoles = ['customer_evidence'];
            if (!allowedEntities.includes(entityType)) {
                throw new common_1.ForbiddenException(`Los clientes solo pueden subir imágenes para reclamos`);
            }
            if (!allowedRoles.includes(imageRole)) {
                throw new common_1.ForbiddenException(`Rol de imagen no permitido para clientes`);
            }
            return true;
        }
        throw new common_1.UnauthorizedException('Tipo de usuario no soportado');
    }
};
exports.ImageUploadGuard = ImageUploadGuard;
exports.ImageUploadGuard = ImageUploadGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService])
], ImageUploadGuard);
//# sourceMappingURL=image-upload.guard.js.map
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerAuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const bcrypt = __importStar(require("bcrypt"));
const uuid_1 = require("uuid");
const prisma_service_1 = require("../../../prisma/prisma.service");
const REFRESH_COOKIE_NAME = 'customer_refresh_token';
let CustomerAuthService = class CustomerAuthService {
    prisma;
    jwtService;
    configService;
    customerCfg;
    constructor(prisma, jwtService, configService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.configService = configService;
        this.customerCfg = this.configService.get('jwt.customer');
    }
    async login(email, password, res) {
        const customer = await this.prisma.customer.findUnique({
            where: { email },
        });
        if (!customer || !customer.isActive || customer.deletedAt !== null) {
            throw new common_1.UnauthorizedException('Credenciales inválidas');
        }
        if (!customer.passwordHash) {
            throw new common_1.UnauthorizedException('Esta cuenta utiliza autenticación externa');
        }
        const passwordMatch = await bcrypt.compare(password, customer.passwordHash);
        if (!passwordMatch) {
            throw new common_1.UnauthorizedException('Credenciales inválidas');
        }
        await this.prisma.customer.update({
            where: { id: customer.id },
            data: { lastLoginAt: new Date() },
        });
        const { accessToken, refreshToken, refreshTokenId } = await this.generateTokenPair(customer.id, customer.email);
        await this.saveRefreshToken(customer.id, refreshTokenId, refreshToken);
        this.setRefreshCookie(res, refreshToken);
        return {
            accessToken,
            customer: {
                id: customer.id,
                firstName: customer.firstName,
                lastName: customer.lastName,
                email: customer.email,
            },
        };
    }
    async refresh(req, res) {
        const cookies = req.cookies;
        const rawToken = cookies?.[REFRESH_COOKIE_NAME];
        if (!rawToken) {
            throw new common_1.UnauthorizedException('Refresh token no proporcionado');
        }
        let payload;
        try {
            payload = await this.jwtService.verifyAsync(rawToken, { secret: this.customerCfg.refreshSecret });
        }
        catch {
            this.clearRefreshCookie(res);
            throw new common_1.UnauthorizedException('Refresh token inválido o expirado');
        }
        const storedToken = await this.prisma.customerRefreshToken.findUnique({
            where: { id: payload.tokenId },
            include: { customer: true },
        });
        if (!storedToken || storedToken.revokedAt !== null) {
            if (storedToken)
                await this.revokeAllSessions(storedToken.customerId);
            this.clearRefreshCookie(res);
            throw new common_1.ForbiddenException('Sesión inválida o reuso detectado');
        }
        const isTokenValid = await bcrypt.compare(rawToken, storedToken.tokenHash);
        if (!isTokenValid) {
            await this.revokeAllSessions(storedToken.customerId);
            this.clearRefreshCookie(res);
            throw new common_1.ForbiddenException('Falsificación de token detectada');
        }
        if (storedToken.expiresAt < new Date()) {
            await this.prisma.customerRefreshToken.update({
                where: { id: storedToken.id },
                data: { revokedAt: new Date() },
            });
            this.clearRefreshCookie(res);
            throw new common_1.UnauthorizedException('Sesión expirada');
        }
        const customer = storedToken.customer;
        if (!customer.isActive || customer.deletedAt !== null) {
            await this.revokeAllSessions(customer.id);
            this.clearRefreshCookie(res);
            throw new common_1.UnauthorizedException('Usuario inactivo');
        }
        await this.prisma.customerRefreshToken.update({
            where: { id: storedToken.id },
            data: { revokedAt: new Date() },
        });
        const { accessToken, refreshToken, refreshTokenId } = await this.generateTokenPair(customer.id, customer.email);
        await this.saveRefreshToken(customer.id, refreshTokenId, refreshToken);
        this.setRefreshCookie(res, refreshToken);
        return { accessToken };
    }
    async logout(req, res) {
        const cookies = req.cookies;
        const rawToken = cookies?.[REFRESH_COOKIE_NAME];
        if (rawToken) {
            try {
                const payload = await this.jwtService.verifyAsync(rawToken, {
                    secret: this.customerCfg.refreshSecret,
                });
                await this.prisma.customerRefreshToken
                    .update({
                    where: { id: payload.tokenId },
                    data: { revokedAt: new Date() },
                })
                    .catch(() => null);
            }
            catch {
            }
        }
        this.clearRefreshCookie(res);
        return { message: 'Sesión cerrada correctamente' };
    }
    async logoutAll(customerId, res) {
        await this.revokeAllSessions(customerId);
        this.clearRefreshCookie(res);
        return { message: 'Todas las sesiones fueron cerradas' };
    }
    async generateTokenPair(customerId, email) {
        const refreshTokenId = (0, uuid_1.v4)();
        const accessPayload = {
            sub: customerId,
            userType: 'customer',
            email,
            type: 'access',
        };
        const refreshPayload = {
            sub: customerId,
            userType: 'customer',
            tokenId: refreshTokenId,
            type: 'refresh',
        };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(accessPayload, {
                secret: this.customerCfg.accessSecret,
                expiresIn: this.customerCfg.accessExpiresIn,
            }),
            this.jwtService.signAsync(refreshPayload, {
                secret: this.customerCfg.refreshSecret,
                expiresIn: this.customerCfg.refreshExpiresIn,
            }),
        ]);
        return { accessToken, refreshToken, refreshTokenId };
    }
    async saveRefreshToken(customerId, tokenId, rawToken) {
        const tokenHash = await bcrypt.hash(rawToken, 10);
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + this.customerCfg.refreshTtlDays);
        await this.prisma.customerRefreshToken.create({
            data: {
                id: tokenId,
                customerId: customerId,
                tokenHash,
                expiresAt,
            },
        });
    }
    async revokeAllSessions(customerId) {
        await this.prisma.customerRefreshToken.updateMany({
            where: { customerId: customerId, revokedAt: null },
            data: { revokedAt: new Date() },
        });
    }
    setRefreshCookie(res, token) {
        res.cookie(REFRESH_COOKIE_NAME, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
            maxAge: this.customerCfg.refreshTtlDays * 24 * 60 * 60 * 1000,
            path: '/',
        });
    }
    clearRefreshCookie(res) {
        res.clearCookie(REFRESH_COOKIE_NAME, { path: '/' });
    }
};
exports.CustomerAuthService = CustomerAuthService;
exports.CustomerAuthService = CustomerAuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], CustomerAuthService);
//# sourceMappingURL=customer-auth.service.js.map
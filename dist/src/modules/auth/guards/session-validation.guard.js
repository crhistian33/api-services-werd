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
exports.SessionValidationGuard = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let SessionValidationGuard = class SessionValidationGuard {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async canActivate(context) {
        const request = context
            .switchToHttp()
            .getRequest();
        const user = request.user;
        if (!user)
            return false;
        if (user.userType === 'admin') {
            const session = await this.prisma.adminRefreshToken.findFirst({
                where: {
                    adminUserId: user.sub,
                    revokedAt: null,
                    expiresAt: { gt: new Date() },
                },
            });
            if (!session)
                throw new common_1.UnauthorizedException('Sesión revocada');
        }
        else {
            const session = await this.prisma.customerRefreshToken.findFirst({
                where: {
                    customerId: user.sub,
                    revokedAt: null,
                    expiresAt: { gt: new Date() },
                },
            });
            if (!session)
                throw new common_1.UnauthorizedException('Sesión revocada');
        }
        return true;
    }
};
exports.SessionValidationGuard = SessionValidationGuard;
exports.SessionValidationGuard = SessionValidationGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SessionValidationGuard);
//# sourceMappingURL=session-validation.guard.js.map
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthAccessPayload } from 'src/common/interfaces/jwt-payload.interface';

// session-validation.guard.ts
@Injectable()
export class SessionValidationGuard implements CanActivate {
  constructor(private readonly prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context
      .switchToHttp()
      .getRequest<{ user?: AuthAccessPayload }>();
    const user = request.user;

    if (!user) return false;

    if (user.userType === 'admin') {
      const session = await this.prisma.adminRefreshToken.findFirst({
        where: {
          adminUserId: user.sub,
          revokedAt: null,
          expiresAt: { gt: new Date() },
        },
      });
      if (!session) throw new UnauthorizedException('Sesión revocada');
    } else {
      const session = await this.prisma.customerRefreshToken.findFirst({
        where: {
          customerId: user.sub,
          revokedAt: null,
          expiresAt: { gt: new Date() },
        },
      });
      if (!session) throw new UnauthorizedException('Sesión revocada');
    }

    return true;
  }
}

// Uso: @UseGuards(JwtAuthGuard, SessionValidationGuard)
// Solo en endpoints críticos como /auth/logout, /orders/checkout, etc.

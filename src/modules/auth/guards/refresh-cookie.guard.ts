// src/common/guards/refresh-cookie.guard.ts
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  SetMetadata,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { TokenConfig } from '../../../config/jwt.config';

// Decorador para indicar qué config usar
export const REFRESH_GUARD_KEY = 'refreshGuardType';
export const RefreshGuardType = (type: 'admin' | 'customer') =>
  SetMetadata(REFRESH_GUARD_KEY, type);

@Injectable()
export class RefreshCookieGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const type =
      this.reflector.get<'admin' | 'customer'>(
        REFRESH_GUARD_KEY,
        context.getHandler(),
      ) ?? 'customer';

    const cookieName =
      type === 'admin' ? 'admin_refresh_token' : 'customer_refresh_token';

    const req = context.switchToHttp().getRequest<Request>();
    const rawToken = (req.cookies as Record<string, string>)?.[cookieName];

    if (!rawToken) {
      throw new UnauthorizedException('No hay sesión activa');
    }

    try {
      const cfg = this.config.get<TokenConfig>(`jwt.${type}`)!;
      await this.jwtService.verifyAsync(rawToken, {
        secret: cfg.refreshSecret,
      });
      return true;
    } catch {
      throw new UnauthorizedException('Sesión expirada');
    }
  }
}

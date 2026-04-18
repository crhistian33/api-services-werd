// src/modules/auth/services/customer-auth.service.ts

import {
  Injectable,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Response, Request } from 'express';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from '../../../prisma/prisma.service';
import {
  CustomerJwtPayload,
  CustomerRefreshPayload,
} from '../../../common/interfaces/jwt-payload.interface';
import { TokenConfig } from '../../../config/jwt.config';

const REFRESH_COOKIE_NAME = 'customer_refresh_token';

@Injectable()
export class CustomerAuthService {
  private readonly customerCfg: TokenConfig;

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    this.customerCfg = this.configService.get<TokenConfig>('jwt.customer')!;
  }

  // ═══════════════════════════════════════════════
  // login
  // ═══════════════════════════════════════════════

  async login(email: string, password: string, res: Response) {
    const customer = await this.prisma.customer.findUnique({
      where: { email },
    });

    if (!customer || !customer.isActive || customer.deletedAt !== null) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    if (!customer.passwordHash) {
      throw new UnauthorizedException(
        'Esta cuenta utiliza autenticación externa',
      );
    }

    const passwordMatch = await bcrypt.compare(password, customer.passwordHash);
    if (!passwordMatch) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    await this.prisma.customer.update({
      where: { id: customer.id },
      data: { lastLoginAt: new Date() },
    });

    const { accessToken, refreshToken, refreshTokenId } =
      await this.generateTokenPair(customer.id, customer.email);

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

  // ═══════════════════════════════════════════════
  // refresh — rotation + detección de reuso
  // ═══════════════════════════════════════════════

  async refresh(req: Request, res: Response) {
    const cookies = req.cookies as Record<string, string> | undefined;
    const rawToken = cookies?.[REFRESH_COOKIE_NAME];

    if (!rawToken) {
      throw new UnauthorizedException('Refresh token no proporcionado');
    }

    // 1. Verificación de integridad del JWT
    let payload: CustomerRefreshPayload;
    try {
      payload = await this.jwtService.verifyAsync<CustomerRefreshPayload>(
        rawToken,
        { secret: this.customerCfg.refreshSecret },
      );
    } catch {
      this.clearRefreshCookie(res);
      throw new UnauthorizedException('Refresh token inválido o expirado');
    }

    // 2. Buscamos el token en la DB por ID (ID que viene dentro del payload)
    const storedToken = await this.prisma.customerRefreshToken.findUnique({
      where: { id: payload.tokenId },
      include: { customer: true },
    });

    // 3. Detección de reuso o inexistencia
    if (!storedToken || storedToken.revokedAt !== null) {
      if (storedToken) await this.revokeAllSessions(storedToken.customerId);
      this.clearRefreshCookie(res);
      throw new ForbiddenException('Sesión inválida o reuso detectado');
    }

    // 4. VERIFICACIÓN CRÍTICA: Comparar el token físico con el Hash guardado
    const isTokenValid = await bcrypt.compare(rawToken, storedToken.tokenHash);
    if (!isTokenValid) {
      await this.revokeAllSessions(storedToken.customerId);
      this.clearRefreshCookie(res);
      throw new ForbiddenException('Falsificación de token detectada');
    }

    // 5. Verificación de expiración temporal (DB)
    if (storedToken.expiresAt < new Date()) {
      await this.prisma.customerRefreshToken.update({
        where: { id: storedToken.id },
        data: { revokedAt: new Date() },
      });
      this.clearRefreshCookie(res);
      throw new UnauthorizedException('Sesión expirada');
    }

    const customer = storedToken.customer;
    if (!customer.isActive || customer.deletedAt !== null) {
      await this.revokeAllSessions(customer.id);
      this.clearRefreshCookie(res);
      throw new UnauthorizedException('Usuario inactivo');
    }

    // 6. Rotación Atómica (Revocamos el actual y generamos el nuevo)
    await this.prisma.customerRefreshToken.update({
      where: { id: storedToken.id },
      data: { revokedAt: new Date() },
    });

    const { accessToken, refreshToken, refreshTokenId } =
      await this.generateTokenPair(customer.id, customer.email);

    await this.saveRefreshToken(customer.id, refreshTokenId, refreshToken);
    this.setRefreshCookie(res, refreshToken);

    return { accessToken };
  }

  // ═══════════════════════════════════════════════
  // logout — revoca la sesión actual
  // ═══════════════════════════════════════════════

  async logout(req: Request, res: Response) {
    const cookies = req.cookies as Record<string, string> | undefined;
    const rawToken = cookies?.[REFRESH_COOKIE_NAME];

    if (rawToken) {
      try {
        const payload =
          await this.jwtService.verifyAsync<CustomerRefreshPayload>(rawToken, {
            secret: this.customerCfg.refreshSecret,
          });

        await this.prisma.customerRefreshToken
          .update({
            where: { id: payload.tokenId },
            data: { revokedAt: new Date() },
          })
          .catch(() => null);
      } catch {
        // Token inválido o expirado — igual limpiamos la cookie
      }
    }

    this.clearRefreshCookie(res);
    return { message: 'Sesión cerrada correctamente' };
  }

  // ═══════════════════════════════════════════════
  // logoutAll — revoca todas las sesiones del cliente
  // ═══════════════════════════════════════════════

  async logoutAll(customerId: string, res: Response) {
    await this.revokeAllSessions(customerId);
    this.clearRefreshCookie(res);
    return { message: 'Todas las sesiones fueron cerradas' };
  }

  // ── Helpers privados ──────────────────────────────────────────────

  private async generateTokenPair(customerId: string, email: string) {
    const refreshTokenId = uuidv4();

    const accessPayload: CustomerJwtPayload = {
      sub: customerId,
      userType: 'customer',
      email,
      type: 'access',
    };

    const refreshPayload: CustomerRefreshPayload = {
      sub: customerId,
      userType: 'customer',
      tokenId: refreshTokenId,
      type: 'refresh',
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        accessPayload as object,
        {
          secret: this.customerCfg.accessSecret,
          expiresIn: this.customerCfg.accessExpiresIn,
        } as JwtSignOptions,
      ),
      this.jwtService.signAsync(
        refreshPayload as object,
        {
          secret: this.customerCfg.refreshSecret,
          expiresIn: this.customerCfg.refreshExpiresIn,
        } as JwtSignOptions,
      ),
    ]);

    return { accessToken, refreshToken, refreshTokenId };
  }

  private async saveRefreshToken(
    customerId: string,
    tokenId: string,
    rawToken: string,
  ) {
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

  private async revokeAllSessions(customerId: string) {
    await this.prisma.customerRefreshToken.updateMany({
      where: { customerId: customerId, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  }

  private setRefreshCookie(res: Response, token: string) {
    res.cookie(REFRESH_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      maxAge: this.customerCfg.refreshTtlDays * 24 * 60 * 60 * 1000,
      path: '/',
    });
  }

  private clearRefreshCookie(res: Response) {
    res.clearCookie(REFRESH_COOKIE_NAME, { path: '/' });
  }
}

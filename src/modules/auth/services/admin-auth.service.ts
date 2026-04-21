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
  AdminJwtPayload,
  AdminRefreshPayload,
} from '../../../common/interfaces/jwt-payload.interface';
import { TokenConfig } from '../../../config/jwt.config';
import { Prisma } from 'generated/prisma/client';

const REFRESH_COOKIE_NAME = 'admin_refresh_token';

@Injectable()
export class AdminAuthService {
  private readonly adminCfg: TokenConfig;

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    this.adminCfg = this.configService.get<TokenConfig>('jwt.admin')!;
  }

  // ═══════════════════════════════════════════════
  // login
  // ═══════════════════════════════════════════════

  async login(email: string, password: string, res: Response) {
    const admin = await this.prisma.adminUser.findUnique({
      where: { email },
      include: { role: true },
    });

    if (!admin || !admin.isActive || admin.deletedAt !== null) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const passwordMatch = await bcrypt.compare(password, admin.passwordHash);
    if (!passwordMatch) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    await this.prisma.adminUser.update({
      where: { id: admin.id },
      data: { lastLoginAt: new Date() },
    });

    const { accessToken, refreshToken, refreshTokenId } =
      await this.generateTokenPair(admin.id, admin.email, admin.role.name);

    await this.saveRefreshToken(admin.id, refreshTokenId, refreshToken);
    this.setRefreshCookie(res, refreshToken);

    return {
      accessToken,
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        role: admin.role.name,
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
    let payload: AdminRefreshPayload;
    try {
      payload = await this.jwtService.verifyAsync<AdminRefreshPayload>(
        rawToken,
        { secret: this.adminCfg.refreshSecret },
      );
    } catch {
      this.clearRefreshCookie(res);
      throw new UnauthorizedException('Refresh token inválido o expirado');
    }

    // 2. Buscamos el token en la DB por ID (ID que viene dentro del payload)
    // const storedToken = await this.prisma.adminRefreshToken.findUnique({
    //   where: { id: payload.tokenId },
    //   include: { adminUser: { include: { role: true } } },
    // });

    // // 3. Detección de reuso o inexistencia
    // if (!storedToken || storedToken.revokedAt !== null) {
    //   if (storedToken) await this.revokeAllSessions(storedToken.adminUserId);
    //   this.clearRefreshCookie(res);
    //   throw new ForbiddenException('Sesión inválida o reuso detectado');
    // }

    // // 4. VERIFICACIÓN CRÍTICA: Comparar el token físico con el Hash guardado
    // const isTokenValid = await bcrypt.compare(rawToken, storedToken.tokenHash);
    // if (!isTokenValid) {
    //   // Si el ID coincide pero el contenido no, alguien intentó falsificar el token
    //   await this.revokeAllSessions(storedToken.adminUserId);
    //   this.clearRefreshCookie(res);
    //   throw new ForbiddenException('Falsificación de token detectada');
    // }

    // // 5. Verificación de expiración temporal (DB)
    // if (storedToken.expiresAt < new Date()) {
    //   await this.prisma.adminRefreshToken.update({
    //     where: { id: storedToken.id },
    //     data: { revokedAt: new Date() },
    //   });
    //   this.clearRefreshCookie(res);
    //   throw new UnauthorizedException('Sesión expirada');
    // }

    // const admin = storedToken.adminUser;
    // if (!admin.isActive || admin.deletedAt !== null) {
    //   await this.revokeAllSessions(admin.id);
    //   this.clearRefreshCookie(res);
    //   throw new UnauthorizedException('Usuario inactivo');
    // }

    // // 6. Rotación Atómica (Revocamos el actual y generamos el nuevo)
    // await this.prisma.adminRefreshToken.update({
    //   where: { id: storedToken.id },
    //   data: { revokedAt: new Date() },
    // });

    // const { accessToken, refreshToken, refreshTokenId } =
    //   await this.generateTokenPair(admin.id, admin.email, admin.role.name);

    // await this.saveRefreshToken(admin.id, refreshTokenId, refreshToken);
    // this.setRefreshCookie(res, refreshToken);

    // return { accessToken };

    // 2. ✅ MEJORA: Usar transacción para atomicidad
    return await this.prisma.$transaction(async (tx) => {
      const storedToken = await tx.adminRefreshToken.findUnique({
        where: { id: payload.tokenId },
        include: { adminUser: { include: { role: true } } },
      });

      // 3. Validaciones de seguridad
      if (!storedToken || storedToken.revokedAt) {
        if (storedToken)
          await this.revokeAllSessions(storedToken.adminUserId, tx);
        this.clearRefreshCookie(res);
        throw new ForbiddenException('Sesión inválida');
      }

      const isTokenValid = await bcrypt.compare(
        rawToken,
        storedToken.tokenHash,
      );
      if (!isTokenValid) {
        await this.revokeAllSessions(storedToken.adminUserId, tx);
        this.clearRefreshCookie(res);
        throw new ForbiddenException('Token falsificado');
      }

      if (storedToken.expiresAt < new Date()) {
        await tx.adminRefreshToken.update({
          where: { id: storedToken.id },
          data: { revokedAt: new Date() },
        });
        this.clearRefreshCookie(res);
        throw new UnauthorizedException('Sesión expirada');
      }

      // 4. Rotación atómica
      await tx.adminRefreshToken.update({
        where: { id: storedToken.id },
        data: { revokedAt: new Date() },
      });

      const { accessToken, refreshToken, refreshTokenId } =
        await this.generateTokenPair(
          storedToken.adminUser.id,
          storedToken.adminUser.email,
          storedToken.adminUser.role.name,
        );

      await this.saveRefreshToken(
        storedToken.adminUser.id,
        refreshTokenId,
        refreshToken,
        tx,
      );

      this.setRefreshCookie(res, refreshToken);

      return { accessToken };
    });
  }

  // ═══════════════════════════════════════════════
  // logout — revoca la sesión actual
  // ═══════════════════════════════════════════════

  async logout(req: Request, res: Response) {
    const cookies = req.cookies as Record<string, string> | undefined;
    const rawToken = cookies?.[REFRESH_COOKIE_NAME];

    if (rawToken) {
      try {
        const payload = await this.jwtService.verifyAsync<AdminRefreshPayload>(
          rawToken,
          { secret: this.adminCfg.refreshSecret },
        );

        await this.prisma.adminRefreshToken
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
  // logoutAll — revoca todas las sesiones del admin
  // ═══════════════════════════════════════════════

  async logoutAll(adminId: string, res: Response) {
    await this.revokeAllSessions(adminId);
    this.clearRefreshCookie(res);
    return { message: 'Todas las sesiones fueron cerradas' };
  }

  // ── Helpers privados ──────────────────────────────────────────────

  private async generateTokenPair(
    adminId: string,
    email: string,
    roleName: string,
  ) {
    const refreshTokenId = uuidv4();

    const accessPayload: AdminJwtPayload = {
      sub: adminId,
      userType: 'admin',
      email,
      role: roleName,
      type: 'access',
    };

    const refreshPayload: AdminRefreshPayload = {
      sub: adminId,
      userType: 'admin',
      tokenId: refreshTokenId,
      type: 'refresh',
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        accessPayload as object,
        {
          secret: this.adminCfg.accessSecret,
          expiresIn: this.adminCfg.accessExpiresIn,
        } as JwtSignOptions,
      ),
      this.jwtService.signAsync(
        refreshPayload as object,
        {
          secret: this.adminCfg.refreshSecret,
          expiresIn: this.adminCfg.refreshExpiresIn,
        } as JwtSignOptions,
      ),
    ]);

    return { accessToken, refreshToken, refreshTokenId };
  }

  private async saveRefreshToken(
    adminId: string,
    tokenId: string,
    rawToken: string,
    tx?: Prisma.TransactionClient,
  ) {
    const db = tx ?? this.prisma;
    const tokenHash = await bcrypt.hash(rawToken, 10);
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + this.adminCfg.refreshTtlDays);

    await db.adminRefreshToken.create({
      data: {
        id: tokenId,
        adminUserId: adminId,
        tokenHash,
        expiresAt,
      },
    });
  }

  // Métodos auxiliares actualizados para aceptar transacción
  private async revokeAllSessions(
    adminId: string,
    tx?: Prisma.TransactionClient,
  ) {
    const db = tx ?? this.prisma;
    await db.adminRefreshToken.updateMany({
      where: { adminUserId: adminId, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  }

  private setRefreshCookie(res: Response, token: string) {
    res.cookie(REFRESH_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      maxAge: this.adminCfg.refreshTtlDays * 24 * 60 * 60 * 1000,
      path: '/',
    });
  }

  private clearRefreshCookie(res: Response) {
    res.clearCookie(REFRESH_COOKIE_NAME, { path: '/' });
  }
}

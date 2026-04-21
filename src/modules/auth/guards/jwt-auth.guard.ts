import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from '../../../common/decorators/public.decorator';
import { AuthAccessPayload } from '../../../common/interfaces/jwt-payload.interface';
import { TokenConfig } from '../../../config/jwt.config';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) return true;

    // Mantenemos el tipado de la Request para que reconozca .user
    const request = context
      .switchToHttp()
      .getRequest<Request & { user?: AuthAccessPayload }>();

    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('Token no proporcionado');
    }

    try {
      // 1. Decodificar sin verificar para leer el 'userType' (Admin o Customer)
      // Usamos 'AuthAccessPayload' en lugar de 'any' para complacer a ESLint
      const decoded = this.jwtService.decode<AuthAccessPayload>(token);

      if (!decoded?.userType) {
        throw new UnauthorizedException('Estructura de token inválida');
      }

      // 2. Obtener la configuración según el tipo de usuario
      const configKey =
        decoded.userType === 'admin' ? 'jwt.admin' : 'jwt.customer';
      const config = this.configService.get<TokenConfig>(configKey);

      if (!config) {
        throw new UnauthorizedException(
          'Configuración de autenticación no encontrada',
        );
      }

      // 3. Verificación Real con el Secreto correcto
      const payload = await this.jwtService.verifyAsync<AuthAccessPayload>(
        token,
        { secret: config.accessSecret },
      );

      // 4. Tus validaciones adicionales
      if (payload.type !== 'access') {
        throw new UnauthorizedException('Tipo de token inválido');
      }

      // 5. VALIDACIÓN FULMINANTE: ¿Existe una sesión activa en DB?
      // Comprobamos la tabla correspondiente según el tipo de usuario.
      // if (payload.userType === 'admin') {
      //   const session = await this.prisma.adminRefreshToken.findFirst({
      //     where: {
      //       adminUserId: payload.sub,
      //       revokedAt: null,
      //       expiresAt: { gt: new Date() },
      //     },
      //   });
      //   if (!session)
      //     throw new UnauthorizedException('Sesión cerrada o inválida');
      // } else if (payload.userType === 'customer') {
      //   const session = await this.prisma.customerRefreshToken.findFirst({
      //     where: {
      //       customerId: payload.sub,
      //       revokedAt: null,
      //       expiresAt: { gt: new Date() },
      //     },
      //   });
      //   if (!session)
      //     throw new UnauthorizedException('Sesión cerrada o inválida');
      // }

      // Inyectamos el payload en la request
      request.user = payload;
    } catch (error) {
      const message =
        error instanceof UnauthorizedException
          ? error.message
          : 'Token inválido o expirado';

      if (process.env.NODE_ENV === 'development') {
        console.error('Error de JWT en Guard:', message);
      }
      throw new UnauthorizedException(message);
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}

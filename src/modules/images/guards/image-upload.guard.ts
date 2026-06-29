import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { ImageEntityType } from 'generated/prisma/client';
import { AuthAccessPayload } from '../../../common/interfaces/jwt-payload.interface';
import { TokenConfig } from '../../../config/jwt.config';

@Injectable()
export class ImageUploadGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('Token no proporcionado');
    }

    try {
      // 1. Decodificar sin verificar para obtener userType
      //    (MISMO PATRÓN QUE JwtAuthGuard)
      const decoded = this.jwtService.decode<AuthAccessPayload>(token);

      if (!decoded?.userType) {
        throw new UnauthorizedException('Estructura de token inválida');
      }

      // 2. Obtener configuración según tipo de usuario
      //    (MISMO PATRÓN QUE JwtAuthGuard)
      const configKey =
        decoded.userType === 'admin' ? 'jwt.admin' : 'jwt.customer';
      const config = this.configService.get<TokenConfig>(configKey);

      if (!config) {
        throw new UnauthorizedException(
          'Configuración de autenticación no encontrada',
        );
      }

      // 3. Verificar con el secreto correcto
      //    (MISMO PATRÓN QUE JwtAuthGuard)
      const payload = await this.jwtService.verifyAsync<AuthAccessPayload>(
        token,
        { secret: config.accessSecret },
      );

      // 4. Adjuntar payload al request
      request['user'] = payload;

      // 5. Validar permisos específicos para imágenes
      const entityType = request.query['entityType'] as ImageEntityType;
      const imageRole = request.query['imageRole'] as string;

      return this.validatePermissions(payload, entityType, imageRole);
    } catch (error) {
      if (error instanceof ForbiddenException) throw error;
      throw new UnauthorizedException('Token inválido o expirado');
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  private validatePermissions(
    payload: AuthAccessPayload,
    entityType: ImageEntityType,
    imageRole: string,
  ): boolean {
    if (payload.userType === 'admin') {
      return true;
    }

    // Customer: solo ORDER_CLAIM con customer_evidence
    if (payload.userType === 'customer') {
      const allowedEntities: ImageEntityType[] = [
        'ORDER_CLAIM',
        'ORDER_ITEM_RETURN',
      ];
      const allowedRoles = ['customer_evidence', 'return_evidence'];

      if (!allowedEntities.includes(entityType)) {
        throw new ForbiddenException(
          `Los clientes solo pueden subir imágenes para reclamos`,
        );
      }

      if (!allowedRoles.includes(imageRole)) {
        throw new ForbiddenException(
          `Rol de imagen no permitido para clientes`,
        );
      }

      return true;
    }

    throw new UnauthorizedException('Tipo de usuario no soportado');
  }
}

import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { AdminJwtPayload } from '../interfaces/jwt-payload.interface';

// Extrae el admin autenticado del request, inyectado por JwtAuthGuard
// Uso: @CurrentAdmin() admin: AdminJwtPayload
export const CurrentAdmin = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): AdminJwtPayload => {
    const request = ctx
      .switchToHttp()
      .getRequest<Request & { admin: AdminJwtPayload }>();
    return request.admin;
  },
);

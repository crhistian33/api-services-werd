import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import {
  AdminRoleName,
  ROLE_HIERARCHY,
} from '../constants/admin-role.constant';
import { AuthAccessPayload } from '../../../common/interfaces/jwt-payload.interface';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<AdminRoleName[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles || requiredRoles.length === 0) return true;

    const request = context
      .switchToHttp()
      .getRequest<{ user?: AuthAccessPayload }>();
    const user = request.user;

    if (!user || user.userType !== 'admin') {
      throw new ForbiddenException('No autenticado como admin');
    }

    const adminLevel = ROLE_HIERARCHY[(user.role ?? '') as AdminRoleName] ?? 0;
    const minRequired = Math.min(
      ...requiredRoles.map((r) => ROLE_HIERARCHY[r] ?? 99),
    );

    if (adminLevel < minRequired) {
      throw new ForbiddenException(
        `Acceso denegado. Se requiere rol: ${requiredRoles.join(' o ')}`,
      );
    }

    return true;
  }
}

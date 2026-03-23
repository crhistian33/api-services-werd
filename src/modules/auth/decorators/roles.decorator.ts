import { SetMetadata } from '@nestjs/common';
import { AdminRoleName } from '../constants/admin-role.constant';

export const ROLES_KEY = 'roles';

export const Roles = (...roles: AdminRoleName[]) =>
  SetMetadata(ROLES_KEY, roles);

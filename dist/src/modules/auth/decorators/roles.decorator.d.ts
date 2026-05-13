import { AdminRoleName } from '../constants/admin-role.constant';
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: AdminRoleName[]) => import("@nestjs/common").CustomDecorator<string>;

export const AdminRole = {
  SUPER_ADMIN: 'super_admin',
  ADMIN: 'admin',
  EDITOR: 'editor',
  VIEWER: 'viewer',
} as const;

export type AdminRoleName = (typeof AdminRole)[keyof typeof AdminRole];

// Jerarquía de roles — mayor número = más permisos
// Fuente de verdad única para RolesGuard y cualquier lógica de autorización
export const ROLE_HIERARCHY: Record<AdminRoleName, number> = {
  [AdminRole.VIEWER]: 1,
  [AdminRole.EDITOR]: 2,
  [AdminRole.ADMIN]: 3,
  [AdminRole.SUPER_ADMIN]: 4,
};

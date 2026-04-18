export type AuthUserType = 'admin' | 'customer';

export interface AuthAccessPayload {
  sub: string;
  userType: AuthUserType;
  email: string;
  type: 'access';
  role?: string;
}

export interface AuthRefreshPayload {
  sub: string;
  userType: AuthUserType;
  tokenId: string;
  type: 'refresh';
}

export interface AdminJwtPayload extends AuthAccessPayload {
  userType: 'admin';
  role: string;
}

export interface AdminRefreshPayload extends AuthRefreshPayload {
  userType: 'admin';
}

export interface CustomerJwtPayload extends AuthAccessPayload {
  userType: 'customer';
}

export interface CustomerRefreshPayload extends AuthRefreshPayload {
  userType: 'customer';
}

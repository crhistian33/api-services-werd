import { registerAs } from '@nestjs/config';

export interface TokenConfig {
  accessSecret: string;
  refreshSecret: string;
  accessExpiresIn: string;
  refreshExpiresIn: string;
  refreshTtlDays: number;
}

export interface JwtConfig {
  admin: TokenConfig;
  customer: TokenConfig;
}

export const jwtConfig = registerAs(
  'jwt',
  (): JwtConfig => ({
    admin: {
      accessSecret: process.env.JWT_ADMIN_ACCESS_SECRET!,
      refreshSecret: process.env.JWT_ADMIN_REFRESH_SECRET!,
      accessExpiresIn: process.env.JWT_ADMIN_ACCESS_EXPIRES_IN || '15m',
      refreshExpiresIn: process.env.JWT_ADMIN_REFRESH_EXPIRES_IN || '7d',
      refreshTtlDays: parseInt(
        process.env.JWT_ADMIN_REFRESH_TTL_DAYS || '7',
        10,
      ),
    },
    customer: {
      accessSecret: process.env.JWT_CUSTOMER_ACCESS_SECRET!,
      refreshSecret: process.env.JWT_CUSTOMER_REFRESH_SECRET!,
      accessExpiresIn: process.env.JWT_CUSTOMER_ACCESS_EXPIRES_IN || '1h',
      refreshExpiresIn: process.env.JWT_CUSTOMER_REFRESH_EXPIRES_IN || '30d',
      refreshTtlDays: parseInt(
        process.env.JWT_CUSTOMER_REFRESH_TTL_DAYS || '30',
        10,
      ),
    },
  }),
);

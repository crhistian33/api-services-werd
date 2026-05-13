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
export declare const jwtConfig: (() => JwtConfig) & import("@nestjs/config").ConfigFactoryKeyHost<JwtConfig>;

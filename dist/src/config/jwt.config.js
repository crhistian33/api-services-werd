"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConfig = void 0;
const config_1 = require("@nestjs/config");
exports.jwtConfig = (0, config_1.registerAs)('jwt', () => ({
    admin: {
        accessSecret: process.env.JWT_ADMIN_ACCESS_SECRET,
        refreshSecret: process.env.JWT_ADMIN_REFRESH_SECRET,
        accessExpiresIn: process.env.JWT_ADMIN_ACCESS_EXPIRES_IN || '15m',
        refreshExpiresIn: process.env.JWT_ADMIN_REFRESH_EXPIRES_IN || '7d',
        refreshTtlDays: parseInt(process.env.JWT_ADMIN_REFRESH_TTL_DAYS || '7', 10),
    },
    customer: {
        accessSecret: process.env.JWT_CUSTOMER_ACCESS_SECRET,
        refreshSecret: process.env.JWT_CUSTOMER_REFRESH_SECRET,
        accessExpiresIn: process.env.JWT_CUSTOMER_ACCESS_EXPIRES_IN || '1h',
        refreshExpiresIn: process.env.JWT_CUSTOMER_REFRESH_EXPIRES_IN || '30d',
        refreshTtlDays: parseInt(process.env.JWT_CUSTOMER_REFRESH_TTL_DAYS || '30', 10),
    },
}));
//# sourceMappingURL=jwt.config.js.map
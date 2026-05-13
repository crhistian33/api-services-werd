"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLE_HIERARCHY = exports.AdminRole = void 0;
exports.AdminRole = {
    SUPER_ADMIN: 'super_admin',
    ADMIN: 'admin',
    EDITOR: 'editor',
    VIEWER: 'viewer',
};
exports.ROLE_HIERARCHY = {
    [exports.AdminRole.VIEWER]: 1,
    [exports.AdminRole.EDITOR]: 2,
    [exports.AdminRole.ADMIN]: 3,
    [exports.AdminRole.SUPER_ADMIN]: 4,
};
//# sourceMappingURL=admin-role.constant.js.map
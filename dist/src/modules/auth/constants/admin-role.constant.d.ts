export declare const AdminRole: {
    readonly SUPER_ADMIN: "super_admin";
    readonly ADMIN: "admin";
    readonly EDITOR: "editor";
    readonly VIEWER: "viewer";
};
export type AdminRoleName = (typeof AdminRole)[keyof typeof AdminRole];
export declare const ROLE_HIERARCHY: Record<AdminRoleName, number>;

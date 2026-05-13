import { ImageEntityType } from 'generated/prisma/client';
export interface ImageRoleConfig {
    role: string;
    maxCount: number;
    allowedMimeTypes: string[];
    maxSizeBytes: number;
}
export interface EntityImageConfig {
    entityType: ImageEntityType;
    roles: ImageRoleConfig[];
}
export declare const IMAGE_CONFIGS: Record<string, EntityImageConfig>;

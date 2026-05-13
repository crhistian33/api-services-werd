import { ImageEntityType } from 'generated/prisma/client';
import { ImageRoleConfig } from '../config/image-config';
export interface SavedTempImage {
    tempPath: string;
    url: string;
    metadata: {
        width: number;
        height: number;
        size: number;
        format: string;
        mimeType: string;
    };
}
export interface MovedImage {
    finalPath: string;
    url: string;
    variants: Record<string, string>;
    isSvg: boolean;
}
export declare class ImageStorageService {
    private readonly uploadsRoot;
    private readonly tempDir;
    private readonly imagesDir;
    constructor();
    private ensureDirSync;
    validateFile(file: Express.Multer.File, roleConfig: ImageRoleConfig): void;
    getRoleConfig(entityKey: string, imageRole: string): ImageRoleConfig;
    saveTempImage(file: Express.Multer.File, entityKey: string, imageRole: string): Promise<SavedTempImage>;
    deleteFile(filePath: string): Promise<void>;
    moveTempToFinal(tempPath: string, entityType: ImageEntityType, imageRole: string, mimeType: string, options?: {
        keepTemp?: boolean;
    }): Promise<MovedImage>;
    private resolveVariantKey;
    private generateVariants;
    private moveSvgToFinal;
    private moveFile;
}

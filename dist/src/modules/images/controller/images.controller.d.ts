import { ImageStorageService } from '../services/image-storage.service';
import { ImageRecordService } from '../services/image-record.service';
import { ImageEntityType } from 'generated/prisma/client';
import { AuthAccessPayload } from '../../../common/interfaces/jwt-payload.interface';
export declare class ImagesController {
    private readonly storage;
    private readonly records;
    constructor(storage: ImageStorageService, records: ImageRecordService);
    uploadTemp(file: Express.Multer.File, entityType: ImageEntityType, imageRole: string): Promise<{
        imageId: string;
        tempUrl: string;
        metadata: {
            width: number;
            height: number;
            size: number;
            format: string;
            mimeType: string;
        };
    }>;
    deleteImage(id: string, req: {
        user: AuthAccessPayload;
    }): Promise<{
        success: boolean;
    }>;
    deleteConfirmedImage(id: string): Promise<{
        success: boolean;
    }>;
}

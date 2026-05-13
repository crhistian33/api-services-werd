import { ImageRecordService } from './services/image-record.service';
export declare class ImagesCleanupTask {
    private readonly imageRecord;
    private readonly logger;
    constructor(imageRecord: ImageRecordService);
    cleanOrphanTempFiles(): Promise<void>;
    fixIncompleteImages(): Promise<void>;
    cleanOrphanTempRecords(): Promise<void>;
}

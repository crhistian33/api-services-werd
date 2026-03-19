import { Module } from '@nestjs/common';
import { ImageStorageService } from './services/image-storage.service';
import { ImageRecordService } from './services/image-record.service';
import { ImagesController } from './controller/images.controller';
import { ImagesCleanupTask } from './images-cleanup.task';

@Module({
  controllers: [ImagesController],
  providers: [ImageStorageService, ImageRecordService, ImagesCleanupTask],
  exports: [ImageStorageService, ImageRecordService],
})
export class ImagesModule {}

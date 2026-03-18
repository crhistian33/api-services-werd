import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { ImageStorageService } from './services/image-storage.service';
import { ImageRecordService } from './services/image-record.service';
import { ImagesController } from './controller/images.controller';

@Module({
  imports: [PrismaModule],
  controllers: [ImagesController],
  providers: [ImageStorageService, ImageRecordService],
  exports: [ImageStorageService, ImageRecordService],
})
export class ImagesModule {}

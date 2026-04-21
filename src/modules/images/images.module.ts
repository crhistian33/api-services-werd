import { Module } from '@nestjs/common';
import { ImageStorageService } from './services/image-storage.service';
import { ImageRecordService } from './services/image-record.service';
import { ImagesController } from './controller/images.controller';
import { ImagesCleanupTask } from './images-cleanup.task';
import { ImageUploadGuard } from './guards/image-upload.guard';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule, // ← Necesario para ConfigService
    JwtModule.register({}), // ← Necesario para JwtService (registro vacío, la configuración real se pasa en verifyAsync)
  ],
  controllers: [ImagesController],
  providers: [
    ImageStorageService,
    ImageRecordService,
    ImagesCleanupTask,
    ImageUploadGuard,
  ],
  exports: [ImageStorageService, ImageRecordService],
})
export class ImagesModule {}

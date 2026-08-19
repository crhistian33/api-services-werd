import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ComplaintsService } from './service/complaints.service';
import { ComplaintsController } from './controller/complaints.controller';
import { ImagesModule } from '../images/images.module';

@Module({
  imports: [
    JwtModule.register({}), // Necesario para que JwtAuthGuard pueda resolver JwtService
    ImagesModule, // Provee ImageStorageService para mover adjuntos a R2
  ],
  controllers: [ComplaintsController],
  providers: [ComplaintsService],
  exports: [ComplaintsService],
})
export class ComplaintsModule {}

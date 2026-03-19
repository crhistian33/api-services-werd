import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { ImagesModule } from '../images/images.module';
import { HeroSlidesController } from './controller/hero-slides.controller';
import { HeroSlidesService } from './service/hero-slides.service';

@Module({
  imports: [PrismaModule, ImagesModule],
  controllers: [HeroSlidesController],
  providers: [HeroSlidesService],
})
export class HeroSlidesModule {}

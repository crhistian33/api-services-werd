import { Module } from '@nestjs/common';
import { BrandsController } from './controller/brands.controller';
import { BrandsService } from './service/brands.service';
import { ImagesModule } from '../images/images.module';

@Module({
  imports: [ImagesModule],
  controllers: [BrandsController],
  providers: [BrandsService],
})
export class BrandsModule {}

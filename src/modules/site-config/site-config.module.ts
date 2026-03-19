import { Module } from '@nestjs/common';
import { SiteConfigService } from './service/site-config.service';
import { SiteConfigController } from './controller/site-config.controller';
import { ImagesModule } from '../images/images.module';

@Module({
  imports: [ImagesModule],
  providers: [SiteConfigService],
  controllers: [SiteConfigController],
  exports: [SiteConfigService],
})
export class SiteConfigModule {}

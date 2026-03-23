import { Module } from '@nestjs/common';
import { PagesService } from './service/pages.service';
import { PagesController } from './controller/pages.controller';

@Module({
  providers: [PagesService],
  controllers: [PagesController],
})
export class PagesModule {}

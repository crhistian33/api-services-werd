import { Module } from '@nestjs/common';
import { NewsletterService } from './service/newsletter.service';
import { NewsletterController } from './controller/newsletter.controller';

@Module({
  providers: [NewsletterService],
  controllers: [NewsletterController],
})
export class NewsletterModule {}

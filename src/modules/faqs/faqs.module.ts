import { Module } from '@nestjs/common';
import { FaqsController } from './controller/faqs.controller';
import { FaqsService } from './service/faqs.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [FaqsController],
  providers: [FaqsService],
})
export class FaqsModule {}

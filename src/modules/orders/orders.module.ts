import { Module } from '@nestjs/common';
import { OrdersService } from './service/orders.service';
import { OrdersController } from './controller/orders.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { ImagesModule } from '../images/images.module';
import { MailModule } from '../mail/mail.module';
import { OrderClaimsService } from './service/order-claims.service';
import { OrderLogisticsService } from './service/order-logistics.service';
import { OrderRefundService } from './service/order-refund.service';

@Module({
  imports: [PrismaModule, ImagesModule, MailModule],
  controllers: [OrdersController],
  providers: [
    OrdersService,
    OrderClaimsService,
    OrderLogisticsService,
    OrderRefundService,
  ],
  exports: [OrdersService],
})
export class OrdersModule {}

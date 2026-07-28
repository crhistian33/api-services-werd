import { Module } from '@nestjs/common';
import { OrdersService } from './service/orders.service';
import { OrdersController } from './controller/orders.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { ImagesModule } from '../images/images.module';
import { MailModule } from '../mail/mail.module';
import { OrderClaimsService } from './service/order-claims.service';
import { OrderLogisticsService } from './service/order-logistics.service';
import { OrderRefundService } from './service/order-refund.service';
import { OrderPaymentConfirmationService } from './service/order-payment-confirmation.service';
import { OrderPaymentExpiryService } from './service/order-payment-expiry.service';
import { CulqiService } from './service/culqi.service';
import { CartModule } from '../cart/cart.module';

@Module({
  imports: [PrismaModule, ImagesModule, MailModule, CartModule],
  controllers: [OrdersController],
  providers: [
    OrdersService,
    OrderClaimsService,
    OrderLogisticsService,
    OrderRefundService,
    OrderPaymentConfirmationService,
    OrderPaymentExpiryService,
    CulqiService,
  ],
  exports: [OrdersService],
})
export class OrdersModule {}

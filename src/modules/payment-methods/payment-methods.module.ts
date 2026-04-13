import { Module } from '@nestjs/common';
import { PaymentMethodsController } from './controller/payment-methods.controller';
import { PaymentMethodsService } from './service/payment-methods.service';

@Module({
  controllers: [PaymentMethodsController],
  providers: [PaymentMethodsService],
})
export class PaymentMethodsModule {}

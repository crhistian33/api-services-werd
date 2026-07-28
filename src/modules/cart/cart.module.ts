import { Module } from '@nestjs/common';
import { CartService } from './service/cart.service';
import { CartController } from './controller/cart.controller';
import { CartExpirationJob } from './jobs/cart-expiration.job';
import { ImagesModule } from '../images/images.module';

@Module({
  imports: [ImagesModule],
  providers: [CartService, CartExpirationJob],
  controllers: [CartController],
  exports: [CartService],
})
export class CartModule {}

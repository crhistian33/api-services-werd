import { Module } from '@nestjs/common';
import { ProductsController } from './controller/products.controller';
import { ProductsService } from './service/products.service';
import { ImagesModule } from '../images/images.module';
import { ProductPriceService } from './service/product-price.service';
import { ProductSpecsService } from './service/product-specs.service';
import { ProductReviewsModule } from '../product-reviews/product-reviews.module';

@Module({
  imports: [ImagesModule, ProductReviewsModule],
  controllers: [ProductsController],
  providers: [ProductsService, ProductPriceService, ProductSpecsService],
  exports: [ProductsService],
})
export class ProductsModule {}

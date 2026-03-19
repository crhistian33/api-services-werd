import { Module } from '@nestjs/common';
import { ProductsController } from './controller/products.controller';
import { ProductsService } from './service/products.service';
import { ImagesModule } from '../images/images.module';
import { ProductPriceService } from './service/product-price.service';
import { ProductSpecsService } from './service/product-specs.service';

@Module({
  imports: [ImagesModule],
  controllers: [ProductsController],
  providers: [ProductsService, ProductPriceService, ProductSpecsService],
})
export class ProductsModule {}

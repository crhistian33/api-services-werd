import { Module } from '@nestjs/common';
import { ProductReviewsController } from './controller/product-reviews.controller';
import { ProductReviewService } from './service/product-review.service';

@Module({
  controllers: [ProductReviewsController],
  providers: [ProductReviewService],
  exports: [ProductReviewService],
})
export class ProductReviewsModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CategoriesModule } from './modules/categories/categories.module';
import { BrandsModule } from './modules/brands/brands.module';
import { ImagesModule } from './modules/images/images.module';
import { ProductsModule } from './modules/products/products.module';
import { SiteConfigModule } from './modules/site-config/site-config.module';
import { HeroSlidesModule } from './modules/hero-slides/hero-slides.module';
import { ScheduleModule } from '@nestjs/schedule';
import { PagesModule } from './modules/pages/pages.module';
import { AuthModule } from './modules/auth/auth.module';
import { jwtConfig } from './config/jwt.config';
import { FaqsModule } from './modules/faqs/faqs.module';
import { PaymentMethodsModule } from './modules/payment-methods/payment-methods.module';
import { ShippingZonesModule } from './modules/shipping-zones/shipping-zones.module';
import { RolesModule } from './modules/roles/roles.module';
import { CustomersModule } from './modules/customers/customers.module';
import { MailModule } from './modules/mail/mail.module';
import { OrdersModule } from './modules/orders/orders.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { NewsletterModule } from './modules/newsletter/newsletter.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
      load: [jwtConfig],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'uploads'),
      serveRoot: '/uploads',
    }),
    PrismaModule,
    ImagesModule,
    CategoriesModule,
    BrandsModule,
    ProductsModule,
    SiteConfigModule,
    HeroSlidesModule,
    PagesModule,
    AuthModule,
    FaqsModule,
    PaymentMethodsModule,
    ShippingZonesModule,
    RolesModule,
    CustomersModule,
    MailModule,
    OrdersModule,
    DashboardModule,
    NewsletterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

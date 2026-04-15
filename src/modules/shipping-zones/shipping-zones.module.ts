import { Module } from '@nestjs/common';
import { ShippingZonesService } from './service/shipping-zones.service';
import { ShippingZonesController } from './controller/shipping-zones.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [PrismaService, ShippingZonesService],
  controllers: [ShippingZonesController],
  exports: [ShippingZonesService],
})
export class ShippingZonesModule {}

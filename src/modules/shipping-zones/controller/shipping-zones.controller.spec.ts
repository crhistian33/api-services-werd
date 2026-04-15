import { Test, TestingModule } from '@nestjs/testing';
import { ShippingZonesController } from './shipping-zones.controller';

describe('ShippingZonesController', () => {
  let controller: ShippingZonesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShippingZonesController],
    }).compile();

    controller = module.get<ShippingZonesController>(ShippingZonesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

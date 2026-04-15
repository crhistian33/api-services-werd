import { Test, TestingModule } from '@nestjs/testing';
import { ShippingZonesService } from './shipping-zones.service';

describe('ShippingZonesService', () => {
  let service: ShippingZonesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShippingZonesService],
    }).compile();

    service = module.get<ShippingZonesService>(ShippingZonesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

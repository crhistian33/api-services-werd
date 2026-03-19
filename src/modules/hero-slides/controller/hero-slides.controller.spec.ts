import { Test, TestingModule } from '@nestjs/testing';
import { HeroSlidesController } from './hero-slides.controller';

describe('HeroSlidesController', () => {
  let controller: HeroSlidesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeroSlidesController],
    }).compile();

    controller = module.get<HeroSlidesController>(HeroSlidesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

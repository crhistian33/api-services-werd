import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('products')
  async getProducts() {
    try {
      const products = await this.appService.findAll();
      return products;
    } catch (error) {
      throw new Error(
        `Failed to fetch products: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  }
}

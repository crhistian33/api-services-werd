import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { Product } from '../generated/prisma/client';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async findAll(): Promise<Product[]> {
    try {
      const products: Product[] = await this.prisma.product.findMany();
      return products;
    } catch (error) {
      throw new Error(
        `Failed to fetch products: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  }
}

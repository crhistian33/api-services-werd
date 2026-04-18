import { Module } from '@nestjs/common';
import { CustomersService } from './service/customers.service';
import { CustomersController } from './controller/customers.controller';

@Module({
  providers: [CustomersService],
  controllers: [CustomersController]
})
export class CustomersModule {}

import { Module } from '@nestjs/common';
import { RolesController } from './controller/roles.controller';
import { RolesService } from './services/roles.service';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}

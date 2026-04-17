import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from '../../../modules/auth/decorators/roles.decorator';
import { AdminRole } from '../../../modules/auth/constants/admin-role.constant';
import { ResponseMessage } from '../../../common/decorators/response-message.decorator';
import { RolesService } from '../services/roles.service';
import { QueryRoleDto } from '../dto/query-role.dto';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly service: RolesService) {}

  @Get()
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Roles listados')
  findAll(@Query() query: QueryRoleDto) {
    return this.service.findAllRoles(query);
  }
}

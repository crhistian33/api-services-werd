import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { DashboardService } from '../services/dashboard.service';
import { Roles } from '../../auth/decorators/roles.decorator';
import { AdminRole } from '../../auth/constants/admin-role.constant';
import { ResponseMessage } from '../../../common/decorators/response-message.decorator';
import { DashboardQueryDto } from '../dto/dashboard-query.dto';

@Controller('dashboard')
@ApiBearerAuth('access-token')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  @Roles(AdminRole.SUPER_ADMIN, AdminRole.ADMIN, AdminRole.VIEWER)
  @ResponseMessage('Datos del dashboard obtenidos exitosamente')
  @ApiOperation({ summary: 'Obtener KPIs, gráficos y resúmenes del dashboard' })
  @ApiQuery({
    name: 'startDate',
    required: false,
    type: String,
    example: '2026-01-01',
    description: 'Fecha inicio (ISO 8601). Default: hace 30 días',
  })
  @ApiQuery({
    name: 'endDate',
    required: false,
    type: String,
    example: '2026-05-13',
    description: 'Fecha fin (ISO 8601). Default: hoy',
  })
  async getDashboard(@Query() query: DashboardQueryDto) {
    console.log('query', query);
    return this.dashboardService.getDashboardData(query);
  }
}

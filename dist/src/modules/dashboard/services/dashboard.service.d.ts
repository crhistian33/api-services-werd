import { PrismaService } from '../../../prisma/prisma.service';
import { DashboardResponse } from '../dto/dashboard-response.dto';
import { DashboardQueryDto } from '../dto/dashboard-query.dto';
export declare class DashboardService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getDashboardData(query: DashboardQueryDto): Promise<DashboardResponse>;
    private getRevenueByDay;
    private getRefundsVsSalesByDay;
}

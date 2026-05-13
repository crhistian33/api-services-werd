import { DashboardService } from '../services/dashboard.service';
import { DashboardQueryDto } from '../dto/dashboard-query.dto';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    getDashboard(query: DashboardQueryDto): Promise<import("../dto/dashboard-response.dto").DashboardResponse>;
}

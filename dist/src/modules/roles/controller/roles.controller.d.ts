import { RolesService } from '../services/roles.service';
import { QueryRoleDto } from '../dto/query-role.dto';
export declare class RolesController {
    private readonly service;
    constructor(service: RolesService);
    findAll(query: QueryRoleDto): Promise<import("../../../common/interfaces").PaginatedResult<{
        id: string;
        createdAt: Date;
        name: string;
        description: string | null;
    }>>;
}

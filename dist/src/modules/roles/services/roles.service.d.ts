import { OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { QueryRoleDto } from '../dto/query-role.dto';
import { BaseService } from 'src/common/services/base.service';
import { AdminRole, Prisma } from 'generated/prisma/client';
type RoleEntity = AdminRole;
export declare class RolesService extends BaseService<RoleEntity, null, null, Prisma.AdminRoleWhereInput, Prisma.AdminRoleOrderByWithRelationInput> implements OnModuleInit {
    readonly prisma: PrismaService;
    protected useSoftDelete: boolean;
    constructor(prisma: PrismaService);
    onModuleInit(): Promise<void>;
    seedRoles(): Promise<void>;
    findAllRoles(query: QueryRoleDto): Promise<import("../../../common/interfaces").PaginatedResult<{
        id: string;
        createdAt: Date;
        name: string;
        description: string | null;
    }>>;
}
export {};

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { QueryRoleDto } from '../dto/query-role.dto';
import { BaseService } from 'src/common/services/base.service';
import { AdminRole, Prisma } from 'generated/prisma/client';

type RoleEntity = AdminRole;

@Injectable()
export class RolesService extends BaseService<
  RoleEntity,
  null,
  null,
  Prisma.AdminRoleWhereInput,
  Prisma.AdminRoleOrderByWithRelationInput
> {
  protected override useSoftDelete = false;

  constructor(readonly prisma: PrismaService) {
    super(prisma, 'adminRole');
  }

  async findAllRoles(query: QueryRoleDto) {
    const { search, page, limit } = query;
    const result = await this.findAll({
      where: {
        ...(search !== undefined && {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
          ],
        }),
      },
      orderBy: [{ name: 'asc' }, { createdAt: 'desc' }],
      pagination: { page, limit },
    });

    return result;
  }
}

import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { QueryRoleDto } from '../dto/query-role.dto';
import { BaseService } from 'src/common/services/base.service';
import { AdminRole, Prisma } from 'generated/prisma/client';
import * as bcrypt from 'bcrypt';

type RoleEntity = AdminRole;

@Injectable()
export class RolesService
  extends BaseService<
    RoleEntity,
    null,
    null,
    Prisma.AdminRoleWhereInput,
    Prisma.AdminRoleOrderByWithRelationInput
  >
  implements OnModuleInit
{
  protected override useSoftDelete = false;

  constructor(readonly prisma: PrismaService) {
    super(prisma, 'adminRole');
  }

  async onModuleInit(): Promise<void> {
    await this.seedRoles();
  }

  async seedRoles() {
    // 1. Crear Roles (Usando Promise.all para eficiencia)
    const rolesToSeed = [
      { name: 'super_admin', description: 'Super Administrador' },
      { name: 'admin', description: 'Administrador' },
      { name: 'editor', description: 'Editor' },
      { name: 'viewer', description: 'Visor' },
    ];

    for (const role of rolesToSeed) {
      await this.prisma.adminRole.upsert({
        where: { name: role.name },
        update: {}, // Si existe, no hace nada
        create: role,
      });
    }

    // 2. Verificar existencia de usuarios
    const userCount = await this.prisma.adminUser.count();

    if (userCount === 0) {
      const superAdminRole = await this.prisma.adminRole.findUnique({
        where: { name: 'super_admin' },
      });

      if (superAdminRole) {
        const rawPassword = process.env.USER_PASSWORD ?? 'Admin1234!';

        // --- ENCRIPTACIÓN CON BCRYPT ---
        const hashedPassword = await bcrypt.hash(rawPassword, 10);

        await this.prisma.adminUser.create({
          data: {
            name: process.env.USER_NAME ?? 'Admin werd',
            email: process.env.USER_EMAIL ?? 'admin@werd.com',
            passwordHash: hashedPassword, // Guardamos el hash, no el texto plano
            isActive: true,
            roleId: superAdminRole.id,
          },
        });
      }
    }
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

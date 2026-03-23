import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as bcrypt from 'bcrypt';
import { AdminRole } from '../src/modules/auth/constants/admin-role.constant';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const ROLES = [
  {
    name: AdminRole.SUPER_ADMIN,
    description: 'Acceso total al sistema incluyendo gestión de admins',
  },
  {
    name: AdminRole.ADMIN,
    description: 'Acceso total excepto gestión de usuarios administradores',
  },
  {
    name: AdminRole.EDITOR,
    description: 'Gestión de contenido: productos, categorías, páginas',
  },
  {
    name: AdminRole.VIEWER,
    description: 'Solo lectura — sin capacidad de modificar datos',
  },
];

async function main() {
  console.log('🌱 Iniciando seed...\n');

  console.log('Creando roles...');
  for (const role of ROLES) {
    await prisma.adminRole.upsert({
      where: { name: role.name },
      update: { description: role.description },
      create: role,
    });
    console.log(`  ✅ ${role.name}`);
  }

  console.log('\nCreando super_admin inicial...');

  const superAdminRole = await prisma.adminRole.findUnique({
    where: { name: AdminRole.SUPER_ADMIN },
    select: { id: true },
  });

  if (!superAdminRole) throw new Error('No se encontró el rol super_admin');

  const email = process.env.SEED_ADMIN_EMAIL ?? 'admin@mitienda.com';
  const password = process.env.SEED_ADMIN_PASSWORD ?? 'Admin1234!';

  const existing = await prisma.adminUser.findUnique({
    where: { email },
    select: { id: true },
  });

  if (!existing) {
    const passwordHash = await bcrypt.hash(password, 12);

    await prisma.adminUser.create({
      data: {
        name: 'Super Admin',
        email,
        passwordHash,
        roleId: superAdminRole.id,
        isActive: true,
      },
    });

    console.log(`  ✅ Super admin creado: ${email}`);
    console.log(`  ⚠️  Contraseña inicial: ${password}`);
    console.log(`  ⚠️  Cambia esta contraseña después del primer login\n`);
  } else {
    console.log(`  ℹ️  Super admin ya existe: ${email}\n`);
  }

  console.log('🌱 Seed completado');
}

main()
  .catch((e) => {
    console.error('❌ Error en el seed:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

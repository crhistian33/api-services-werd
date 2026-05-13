"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../generated/prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const pg_1 = require("pg");
const bcrypt = __importStar(require("bcrypt"));
const admin_role_constant_1 = require("../src/modules/auth/constants/admin-role.constant");
const pool = new pg_1.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new adapter_pg_1.PrismaPg(pool);
const prisma = new client_1.PrismaClient({ adapter });
const ROLES = [
    {
        name: admin_role_constant_1.AdminRole.SUPER_ADMIN,
        description: 'Acceso total al sistema incluyendo gestión de admins',
    },
    {
        name: admin_role_constant_1.AdminRole.ADMIN,
        description: 'Acceso total excepto gestión de usuarios administradores',
    },
    {
        name: admin_role_constant_1.AdminRole.EDITOR,
        description: 'Gestión de contenido: productos, categorías, páginas',
    },
    {
        name: admin_role_constant_1.AdminRole.VIEWER,
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
        where: { name: admin_role_constant_1.AdminRole.SUPER_ADMIN },
        select: { id: true },
    });
    if (!superAdminRole)
        throw new Error('No se encontró el rol super_admin');
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
    }
    else {
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
//# sourceMappingURL=seed.js.map
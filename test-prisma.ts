import { PrismaClient } from './generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';
dotenv.config();

async function test() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  const config = await prisma.siteConfig.findFirst();
  console.log('--- SITE CONFIG ---');
  console.log(config);
  await prisma.$disconnect();
  await pool.end();
}

test();

-- AlterTable
ALTER TABLE "shipping_zones" ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "deletedById" TEXT;

-- AddForeignKey
ALTER TABLE "shipping_zones" ADD CONSTRAINT "shipping_zones_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "admin_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

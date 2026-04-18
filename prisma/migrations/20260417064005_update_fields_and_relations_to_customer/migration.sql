/*
  Warnings:

  - You are about to drop the column `department` on the `customer_addresses` table. All the data in the column will be lost.
  - You are about to drop the column `district` on the `customer_addresses` table. All the data in the column will be lost.
  - You are about to drop the column `province` on the `customer_addresses` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[googleId]` on the table `customers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `departmentId` to the `customer_addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `districtId` to the `customer_addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `provinceId` to the `customer_addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `customer_addresses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "customer_addresses" DROP COLUMN "department",
DROP COLUMN "district",
DROP COLUMN "province",
ADD COLUMN     "departmentId" TEXT NOT NULL,
ADD COLUMN     "districtId" TEXT NOT NULL,
ADD COLUMN     "provinceId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "customers" ADD COLUMN     "deletedById" TEXT,
ADD COLUMN     "googleId" TEXT,
ALTER COLUMN "passwordHash" DROP NOT NULL;

-- CreateTable
CREATE TABLE "customer_verification_codes" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "customerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customer_verification_codes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "customer_verification_codes_email_idx" ON "customer_verification_codes"("email");

-- CreateIndex
CREATE INDEX "customer_addresses_districtId_idx" ON "customer_addresses"("districtId");

-- CreateIndex
CREATE UNIQUE INDEX "customers_googleId_key" ON "customers"("googleId");

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "admin_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_verification_codes" ADD CONSTRAINT "customer_verification_codes_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_addresses" ADD CONSTRAINT "customer_addresses_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_addresses" ADD CONSTRAINT "customer_addresses_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "provinces"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_addresses" ADD CONSTRAINT "customer_addresses_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "districts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `estimatedDaysMax` on the `shipping_rates` table. All the data in the column will be lost.
  - You are about to drop the column `estimatedDaysMin` on the `shipping_rates` table. All the data in the column will be lost.
  - You are about to drop the column `department` on the `shipping_zone_areas` table. All the data in the column will be lost.
  - You are about to drop the column `district` on the `shipping_zone_areas` table. All the data in the column will be lost.
  - You are about to drop the column `province` on the `shipping_zone_areas` table. All the data in the column will be lost.
  - Added the required column `departmentId` to the `shipping_zone_areas` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DeliveryUnit" AS ENUM ('minutes', 'hours', 'days');

-- DropIndex
DROP INDEX "shipping_zone_areas_department_province_district_idx";

-- AlterTable
ALTER TABLE "shipping_rates" DROP COLUMN "estimatedDaysMax",
DROP COLUMN "estimatedDaysMin",
ADD COLUMN     "estimatedMax" INTEGER,
ADD COLUMN     "estimatedMin" INTEGER,
ADD COLUMN     "estimatedUnit" "DeliveryUnit" NOT NULL DEFAULT 'days';

-- AlterTable
ALTER TABLE "shipping_zone_areas" DROP COLUMN "department",
DROP COLUMN "district",
DROP COLUMN "province",
ADD COLUMN     "departmentId" TEXT NOT NULL,
ADD COLUMN     "districtId" TEXT,
ADD COLUMN     "provinceId" TEXT;

-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Province" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,

    CONSTRAINT "Province_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "District" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "provinceId" TEXT NOT NULL,

    CONSTRAINT "District_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Department_name_key" ON "Department"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Province_name_departmentId_key" ON "Province"("name", "departmentId");

-- CreateIndex
CREATE UNIQUE INDEX "District_name_provinceId_key" ON "District"("name", "provinceId");

-- CreateIndex
CREATE INDEX "shipping_zone_areas_departmentId_provinceId_districtId_idx" ON "shipping_zone_areas"("departmentId", "provinceId", "districtId");

-- AddForeignKey
ALTER TABLE "shipping_zone_areas" ADD CONSTRAINT "shipping_zone_areas_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipping_zone_areas" ADD CONSTRAINT "shipping_zone_areas_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipping_zone_areas" ADD CONSTRAINT "shipping_zone_areas_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Province" ADD CONSTRAINT "Province_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "District" ADD CONSTRAINT "District_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the `Department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `District` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Province` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "District" DROP CONSTRAINT "District_provinceId_fkey";

-- DropForeignKey
ALTER TABLE "Province" DROP CONSTRAINT "Province_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "shipping_zone_areas" DROP CONSTRAINT "shipping_zone_areas_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "shipping_zone_areas" DROP CONSTRAINT "shipping_zone_areas_districtId_fkey";

-- DropForeignKey
ALTER TABLE "shipping_zone_areas" DROP CONSTRAINT "shipping_zone_areas_provinceId_fkey";

-- DropTable
DROP TABLE "Department";

-- DropTable
DROP TABLE "District";

-- DropTable
DROP TABLE "Province";

-- CreateTable
CREATE TABLE "departments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "departments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "provinces" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,

    CONSTRAINT "provinces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "districts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "provinceId" TEXT NOT NULL,

    CONSTRAINT "districts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "departments_name_key" ON "departments"("name");

-- CreateIndex
CREATE UNIQUE INDEX "provinces_name_departmentId_key" ON "provinces"("name", "departmentId");

-- CreateIndex
CREATE UNIQUE INDEX "districts_name_provinceId_key" ON "districts"("name", "provinceId");

-- AddForeignKey
ALTER TABLE "shipping_zone_areas" ADD CONSTRAINT "shipping_zone_areas_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipping_zone_areas" ADD CONSTRAINT "shipping_zone_areas_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "provinces"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipping_zone_areas" ADD CONSTRAINT "shipping_zone_areas_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "districts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "provinces" ADD CONSTRAINT "provinces_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "districts" ADD CONSTRAINT "districts_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "provinces"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

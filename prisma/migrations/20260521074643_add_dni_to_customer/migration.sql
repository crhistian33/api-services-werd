/*
  Warnings:

  - A unique constraint covering the columns `[dni]` on the table `customers` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "customers" ADD COLUMN     "dni" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "customers_dni_key" ON "customers"("dni");

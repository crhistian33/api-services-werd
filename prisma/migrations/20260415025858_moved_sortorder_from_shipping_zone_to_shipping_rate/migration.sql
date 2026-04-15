/*
  Warnings:

  - You are about to drop the column `sortOrder` on the `shipping_zones` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "shipping_rates" ADD COLUMN     "sortOrder" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "shipping_zones" DROP COLUMN "sortOrder";

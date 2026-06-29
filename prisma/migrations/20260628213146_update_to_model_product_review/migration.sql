/*
  Warnings:

  - A unique constraint covering the columns `[productId,customerId]` on the table `product_reviews` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `product_reviews` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "product_reviews" DROP CONSTRAINT "product_reviews_orderId_fkey";

-- DropIndex
DROP INDEX "product_reviews_productId_customerId_orderId_key";

-- AlterTable
ALTER TABLE "complaints" ALTER COLUMN "ticketNumber" SET DEFAULT 'RECL-' || to_char(nextval('complaint_ticket_seq'), 'FM00000');

-- AlterTable
ALTER TABLE "product_reviews" ADD COLUMN     "history" JSONB,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "orderId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "product_reviews_productId_customerId_key" ON "product_reviews"("productId", "customerId");

-- AddForeignKey
ALTER TABLE "product_reviews" ADD CONSTRAINT "product_reviews_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

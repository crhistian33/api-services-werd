/*
  Warnings:

  - Changed the type of `type` on the `order_payment_reminders` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PaymentReminderType" AS ENUM ('FIRST_REMINDER', 'FINAL_REMINDER');

-- AlterTable
ALTER TABLE "order_claims" ADD COLUMN     "receivedAdminNote" TEXT,
ADD COLUMN     "returnCourierName" TEXT,
ADD COLUMN     "returnShipmentConfirmedAt" TIMESTAMP(3),
ADD COLUMN     "returnShipmentNotes" TEXT,
ADD COLUMN     "returnTrackingNumber" TEXT;

-- AlterTable
ALTER TABLE "order_payment_reminders" DROP COLUMN "type",
ADD COLUMN     "type" "PaymentReminderType" NOT NULL;

-- CreateTable
CREATE TABLE "order_sequence" (
    "id" TEXT NOT NULL DEFAULT 'global',
    "lastSeq" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "order_sequence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "claim_sequence" (
    "id" TEXT NOT NULL DEFAULT 'global',
    "lastSeq" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "claim_sequence_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "refunds_orderId_idx" ON "refunds"("orderId");

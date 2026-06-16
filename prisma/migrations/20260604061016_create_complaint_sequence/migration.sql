/*
  Warnings:

  - The values [open,in_review,resolved,closed] on the enum `ComplaintStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [reclamo,queja] on the enum `ComplaintType` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `address` to the `complaints` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productName` to the `complaints` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `complaints` table without a default value. This is not possible if the table is not empty.

*/

CREATE SEQUENCE IF NOT EXISTS complaint_ticket_seq START WITH 1 INCREMENT BY 1;

-- AlterEnum
BEGIN;
CREATE TYPE "ComplaintStatus_new" AS ENUM ('OPEN', 'IN_REVIEW', 'RESOLVED', 'CLOSED');
ALTER TABLE "public"."complaints" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "complaints" ALTER COLUMN "status" TYPE "ComplaintStatus_new" USING ("status"::text::"ComplaintStatus_new");
ALTER TYPE "ComplaintStatus" RENAME TO "ComplaintStatus_old";
ALTER TYPE "ComplaintStatus_new" RENAME TO "ComplaintStatus";
DROP TYPE "public"."ComplaintStatus_old";
ALTER TABLE "complaints" ALTER COLUMN "status" SET DEFAULT 'OPEN';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "ComplaintType_new" AS ENUM ('CLAIM', 'COMPLAINT');
ALTER TABLE "complaints" ALTER COLUMN "complaintType" TYPE "ComplaintType_new" USING ("complaintType"::text::"ComplaintType_new");
ALTER TYPE "ComplaintType" RENAME TO "ComplaintType_old";
ALTER TYPE "ComplaintType_new" RENAME TO "ComplaintType";
DROP TYPE "public"."ComplaintType_old";
COMMIT;

-- AlterTable
ALTER TABLE "complaints" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "claimedAmount" DECIMAL(12,2) NOT NULL DEFAULT 0.00,
ADD COLUMN     "isMinor" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "parentName" TEXT,
ADD COLUMN     "productName" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "ticketNumber" SET DEFAULT 'RECL-' || to_char(nextval('complaint_ticket_seq'), 'FM00000'),
ALTER COLUMN "status" SET DEFAULT 'OPEN';

-- CreateIndex
CREATE INDEX "complaints_ticketNumber_idx" ON "complaints"("ticketNumber");

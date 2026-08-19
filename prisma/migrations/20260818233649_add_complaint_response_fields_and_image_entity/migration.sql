-- AlterEnum
ALTER TYPE "ImageEntityType" ADD VALUE 'COMPLAINT';

-- AlterTable
ALTER TABLE "complaints" ADD COLUMN     "responseFileKeys" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "responseSubject" TEXT,
ALTER COLUMN "ticketNumber" SET DEFAULT 'RECL-' || to_char(nextval('complaint_ticket_seq'), 'FM00000');

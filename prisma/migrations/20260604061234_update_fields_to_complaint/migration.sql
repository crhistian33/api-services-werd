-- AlterTable
ALTER TABLE "complaints" ALTER COLUMN "ticketNumber" SET DEFAULT 'RECL-' || to_char(nextval('complaint_ticket_seq'), 'FM00000');

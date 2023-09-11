-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "important" BOOLEAN;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "autoPlay" BOOLEAN NOT NULL DEFAULT true;

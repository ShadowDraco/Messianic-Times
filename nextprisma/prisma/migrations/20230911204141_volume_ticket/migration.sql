/*
  Warnings:

  - Added the required column `realEmail` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Made the column `important` on table `Ticket` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "realEmail" BOOLEAN NOT NULL,
ALTER COLUMN "important" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "volume" INTEGER NOT NULL DEFAULT 50;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "donatedOnce" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "emailPreferences" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "endSubscriptionDate" TIMESTAMP(3),
ADD COLUMN     "hasFreePaper" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "phoneNumber" TEXT,
ADD COLUMN     "phonePreferences" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "subscribedAt" TIMESTAMP(3),
ADD COLUMN     "subscriptionType" TEXT NOT NULL DEFAULT 'None',
ADD COLUMN     "whichFreePaper" TEXT;

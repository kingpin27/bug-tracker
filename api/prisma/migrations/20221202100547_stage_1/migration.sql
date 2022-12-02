/*
  Warnings:

  - Added the required column `creatorID` to the `comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creatorID` to the `tickets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "comments" ADD COLUMN     "creatorID" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "tickets" ADD COLUMN     "creatorID" INTEGER NOT NULL,
ADD COLUMN     "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_creatorID_fkey" FOREIGN KEY ("creatorID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_creatorID_fkey" FOREIGN KEY ("creatorID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

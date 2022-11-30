/*
  Warnings:

  - Added the required column `ticketID` to the `comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adminID` to the `projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectID` to the `tickets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "comments" ADD COLUMN     "ticketID" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "adminID" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "tickets" ADD COLUMN     "projectID" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_adminID_fkey" FOREIGN KEY ("adminID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_projectID_fkey" FOREIGN KEY ("projectID") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_ticketID_fkey" FOREIGN KEY ("ticketID") REFERENCES "tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

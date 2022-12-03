/*
  Warnings:

  - You are about to drop the column `adminID` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the `_ProjectToUser` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[auth0ID]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `assignedDevID` to the `tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priority` to the `tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `auth0ID` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TicketStatus" AS ENUM ('OPEN', 'ASSIGNED', 'CLOSED');

-- CreateEnum
CREATE TYPE "TicketPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "MembershipType" AS ENUM ('DEVELOPER', 'ADMIn');

-- DropForeignKey
ALTER TABLE "_ProjectToUser" DROP CONSTRAINT "_ProjectToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectToUser" DROP CONSTRAINT "_ProjectToUser_B_fkey";

-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_adminID_fkey";

-- AlterTable
ALTER TABLE "projects" DROP COLUMN "adminID";

-- AlterTable
ALTER TABLE "tickets" ADD COLUMN     "assignedDevID" TEXT NOT NULL,
ADD COLUMN     "priority" "TicketPriority" NOT NULL,
ADD COLUMN     "status" "TicketStatus" NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "auth0ID" TEXT NOT NULL;

-- DropTable
DROP TABLE "_ProjectToUser";

-- CreateTable
CREATE TABLE "ProjectsOnUser" (
    "userID" TEXT NOT NULL,
    "projectID" INTEGER NOT NULL,
    "assignedTimestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "MembershipType" NOT NULL,

    CONSTRAINT "ProjectsOnUser_pkey" PRIMARY KEY ("projectID","userID")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_auth0ID_key" ON "users"("auth0ID");

-- AddForeignKey
ALTER TABLE "ProjectsOnUser" ADD CONSTRAINT "ProjectsOnUser_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectsOnUser" ADD CONSTRAINT "ProjectsOnUser_projectID_fkey" FOREIGN KEY ("projectID") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_assignedDevID_fkey" FOREIGN KEY ("assignedDevID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

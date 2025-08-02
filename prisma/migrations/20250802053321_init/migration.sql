/*
  Warnings:

  - You are about to drop the column `followersId` on the `user` table. All the data in the column will be lost.
  - Added the required column `followersUserId` to the `followers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."user" DROP CONSTRAINT "user_followersId_fkey";

-- AlterTable
ALTER TABLE "public"."followers" ADD COLUMN     "followersUserId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."user" DROP COLUMN "followersId";

-- AddForeignKey
ALTER TABLE "public"."followers" ADD CONSTRAINT "followers_followersUserId_fkey" FOREIGN KEY ("followersUserId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

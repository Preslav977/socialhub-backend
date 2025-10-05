-- AlterTable
ALTER TABLE "public"."comments" ADD COLUMN     "likes" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "textReply" TEXT,
ALTER COLUMN "text" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."post" ALTER COLUMN "comments" SET DEFAULT 0,
ALTER COLUMN "likes" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "public"."user" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "followersNumber" INTEGER DEFAULT 0,
ADD COLUMN     "followingNumber" INTEGER DEFAULT 0,
ALTER COLUMN "posts" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "public"."_UserLikedComments" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_UserLikedComments_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_UserLikedComments_B_index" ON "public"."_UserLikedComments"("B");

-- AddForeignKey
ALTER TABLE "public"."_UserLikedComments" ADD CONSTRAINT "_UserLikedComments_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."comments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_UserLikedComments" ADD CONSTRAINT "_UserLikedComments_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

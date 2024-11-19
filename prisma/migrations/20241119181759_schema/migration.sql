/*
  Warnings:

  - You are about to drop the `JobPosts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_JobPostsToNoticePeriods` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_JobPostsToSkills` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_JobPostsToNoticePeriods" DROP CONSTRAINT "_JobPostsToNoticePeriods_A_fkey";

-- DropForeignKey
ALTER TABLE "_JobPostsToNoticePeriods" DROP CONSTRAINT "_JobPostsToNoticePeriods_B_fkey";

-- DropForeignKey
ALTER TABLE "_JobPostsToSkills" DROP CONSTRAINT "_JobPostsToSkills_A_fkey";

-- DropForeignKey
ALTER TABLE "_JobPostsToSkills" DROP CONSTRAINT "_JobPostsToSkills_B_fkey";

-- DropTable
DROP TABLE "JobPosts";

-- DropTable
DROP TABLE "_JobPostsToNoticePeriods";

-- DropTable
DROP TABLE "_JobPostsToSkills";

-- CreateTable
CREATE TABLE "Persons" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "experienceYear" INTEGER NOT NULL,
    "CurrentCTC" TEXT,
    "workedAt" TEXT[],
    "description" TEXT,

    CONSTRAINT "Persons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_NoticePeriodsToPersons" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PersonsToSkills" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Persons_name_key" ON "Persons"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_NoticePeriodsToPersons_AB_unique" ON "_NoticePeriodsToPersons"("A", "B");

-- CreateIndex
CREATE INDEX "_NoticePeriodsToPersons_B_index" ON "_NoticePeriodsToPersons"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PersonsToSkills_AB_unique" ON "_PersonsToSkills"("A", "B");

-- CreateIndex
CREATE INDEX "_PersonsToSkills_B_index" ON "_PersonsToSkills"("B");

-- AddForeignKey
ALTER TABLE "_NoticePeriodsToPersons" ADD CONSTRAINT "_NoticePeriodsToPersons_A_fkey" FOREIGN KEY ("A") REFERENCES "NoticePeriods"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NoticePeriodsToPersons" ADD CONSTRAINT "_NoticePeriodsToPersons_B_fkey" FOREIGN KEY ("B") REFERENCES "Persons"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PersonsToSkills" ADD CONSTRAINT "_PersonsToSkills_A_fkey" FOREIGN KEY ("A") REFERENCES "Persons"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PersonsToSkills" ADD CONSTRAINT "_PersonsToSkills_B_fkey" FOREIGN KEY ("B") REFERENCES "Skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

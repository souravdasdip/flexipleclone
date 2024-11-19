-- CreateTable
CREATE TABLE "Skills" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NoticePeriods" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "NoticePeriods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobPosts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "experienceYear" INTEGER NOT NULL,
    "CurrentCTC" TEXT,
    "workedAt" TEXT[],
    "description" TEXT,

    CONSTRAINT "JobPosts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_JobPostsToSkills" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_JobPostsToNoticePeriods" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Skills_title_key" ON "Skills"("title");

-- CreateIndex
CREATE UNIQUE INDEX "NoticePeriods_title_key" ON "NoticePeriods"("title");

-- CreateIndex
CREATE UNIQUE INDEX "JobPosts_title_key" ON "JobPosts"("title");

-- CreateIndex
CREATE UNIQUE INDEX "_JobPostsToSkills_AB_unique" ON "_JobPostsToSkills"("A", "B");

-- CreateIndex
CREATE INDEX "_JobPostsToSkills_B_index" ON "_JobPostsToSkills"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_JobPostsToNoticePeriods_AB_unique" ON "_JobPostsToNoticePeriods"("A", "B");

-- CreateIndex
CREATE INDEX "_JobPostsToNoticePeriods_B_index" ON "_JobPostsToNoticePeriods"("B");

-- AddForeignKey
ALTER TABLE "_JobPostsToSkills" ADD CONSTRAINT "_JobPostsToSkills_A_fkey" FOREIGN KEY ("A") REFERENCES "JobPosts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobPostsToSkills" ADD CONSTRAINT "_JobPostsToSkills_B_fkey" FOREIGN KEY ("B") REFERENCES "Skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobPostsToNoticePeriods" ADD CONSTRAINT "_JobPostsToNoticePeriods_A_fkey" FOREIGN KEY ("A") REFERENCES "JobPosts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobPostsToNoticePeriods" ADD CONSTRAINT "_JobPostsToNoticePeriods_B_fkey" FOREIGN KEY ("B") REFERENCES "NoticePeriods"("id") ON DELETE CASCADE ON UPDATE CASCADE;

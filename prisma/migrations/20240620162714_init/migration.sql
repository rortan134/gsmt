-- CreateTable
CREATE TABLE "Counter" (
    "id" INTEGER NOT NULL,
    "visitCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Counter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserMessage" (
    "id" TEXT NOT NULL,

    CONSTRAINT "UserMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "userMessageId" TEXT,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Counter_id_key" ON "Counter"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserMessage_id_key" ON "UserMessage"("id");

-- CreateIndex
CREATE INDEX "Message_userMessageId_idx" ON "Message"("userMessageId");

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_userMessageId_fkey" FOREIGN KEY ("userMessageId") REFERENCES "UserMessage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

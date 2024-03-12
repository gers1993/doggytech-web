-- CreateTable
CREATE TABLE "contact" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "age" BIGINT NOT NULL,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);


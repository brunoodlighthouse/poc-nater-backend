/*
  Warnings:

  - You are about to drop the `tentativas_login_admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuarios_admin` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "lojas" ADD COLUMN     "admin_senha_hash" TEXT;

-- DropTable
DROP TABLE "tentativas_login_admin";

-- DropTable
DROP TABLE "usuarios_admin";

-- CreateTable
CREATE TABLE "admin_sessoes" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "token" TEXT NOT NULL,
    "loja_codigo" TEXT NOT NULL,
    "criada_em" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "revogada_em" TIMESTAMPTZ,

    CONSTRAINT "admin_sessoes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_sessoes_token_key" ON "admin_sessoes"("token");

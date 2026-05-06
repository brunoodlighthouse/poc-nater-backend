/*
  Warnings:

  - Added the required column `loja_codigo` to the `entregadores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "entregadores" ADD COLUMN     "loja_codigo" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "idx_entregador_loja_ativo" ON "entregadores"("loja_codigo", "ativo");

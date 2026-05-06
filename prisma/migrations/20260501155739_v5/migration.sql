/*
  Warnings:

  - You are about to drop the column `sessao_id` on the `fila_documentos` table. All the data in the column will be lost.
  - Added the required column `loja_codigo` to the `fila_documentos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "fila_documentos" DROP CONSTRAINT "fila_documentos_sessao_id_fkey";

-- DropIndex
DROP INDEX "idx_fila_sessao_recente";

-- AlterTable
ALTER TABLE "fila_documentos" DROP COLUMN "sessao_id",
ADD COLUMN     "loja_codigo" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "idx_fila_loja_recente" ON "fila_documentos"("loja_codigo", "consultado_em" DESC);

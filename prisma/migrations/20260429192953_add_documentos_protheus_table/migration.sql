-- CreateTable
CREATE TABLE "documentos_protheus" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "chave_acesso" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "criado_em" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "documentos_protheus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "documentos_protheus_chave_acesso_key" ON "documentos_protheus"("chave_acesso");

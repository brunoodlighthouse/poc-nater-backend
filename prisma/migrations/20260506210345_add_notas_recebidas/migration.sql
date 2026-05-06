-- CreateTable
CREATE TABLE "notas_recebidas" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "loja_codigo" TEXT NOT NULL,
    "documento_numero" TEXT NOT NULL,
    "chave_acesso" TEXT NOT NULL,
    "cliente_nome" TEXT NOT NULL,
    "cliente_documento" TEXT NOT NULL,
    "tipo_documento" TEXT NOT NULL,
    "qtd_itens" INTEGER NOT NULL,
    "valor_total" DECIMAL(12,2) NOT NULL,
    "payload" JSONB NOT NULL,
    "recebida_em" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notas_recebidas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_nota_loja_recebida" ON "notas_recebidas"("loja_codigo", "recebida_em" DESC);

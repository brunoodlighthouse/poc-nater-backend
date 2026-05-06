-- CreateTable
CREATE TABLE "documentos" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "loja_codigo" TEXT NOT NULL,
    "documento_numero" TEXT NOT NULL,
    "chave_acesso" TEXT NOT NULL,
    "tipo_documento" TEXT NOT NULL,
    "cliente_nome" TEXT NOT NULL,
    "cliente_documento" TEXT,
    "valor_total" DECIMAL(12,2),
    "qtd_itens" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pendente',
    "payload" JSONB NOT NULL,
    "origem" TEXT NOT NULL,
    "recebido_em" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "consultado_em" TIMESTAMPTZ,
    "removido_em" TIMESTAMPTZ,

    CONSTRAINT "documentos_pkey" PRIMARY KEY ("id")
);

-- Migrate data from fila_documentos
INSERT INTO "documentos" (
    "id", "loja_codigo", "documento_numero", "chave_acesso", "tipo_documento",
    "cliente_nome", "qtd_itens", "status", "payload", "origem",
    "recebido_em", "consultado_em", "removido_em"
)
SELECT
    "id", "loja_codigo", "documento_numero", "documento_chave",
    COALESCE(("payload_protheus"->>'tipo')::TEXT, 'NFE'),
    "cliente_nome", "qtd_itens", "status", "payload_protheus", 'consulta',
    "consultado_em", "consultado_em", "removido_em"
FROM "fila_documentos"
ON CONFLICT DO NOTHING;

-- Merge data from notas_recebidas (update existing or insert new)
INSERT INTO "documentos" (
    "loja_codigo", "documento_numero", "chave_acesso", "tipo_documento",
    "cliente_nome", "cliente_documento", "valor_total", "qtd_itens",
    "status", "payload", "origem", "recebido_em"
)
SELECT
    nr."loja_codigo", nr."documento_numero", nr."chave_acesso", nr."tipo_documento",
    nr."cliente_nome", nr."cliente_documento", nr."valor_total", nr."qtd_itens",
    'pendente', nr."payload", 'webhook', nr."recebida_em"
FROM "notas_recebidas" nr
WHERE NOT EXISTS (
    SELECT 1 FROM "documentos" d
    WHERE d."loja_codigo" = nr."loja_codigo"
    AND d."documento_numero" = nr."documento_numero"
);

-- Update existing documentos with nota data (valor_total, cliente_documento)
UPDATE "documentos" d SET
    "cliente_documento" = nr."cliente_documento",
    "valor_total" = nr."valor_total"
FROM "notas_recebidas" nr
WHERE d."loja_codigo" = nr."loja_codigo"
AND d."documento_numero" = nr."documento_numero"
AND d."cliente_documento" IS NULL;

-- CreateIndex
CREATE UNIQUE INDEX "uq_documento_loja_numero" ON "documentos"("loja_codigo", "documento_numero");
CREATE INDEX "idx_documento_loja_recebido" ON "documentos"("loja_codigo", "recebido_em" DESC);

-- DropTable
DROP TABLE "documentos_protheus";
DROP TABLE "fila_documentos";
DROP TABLE "notas_recebidas";

-- CreateTable
CREATE TABLE "sessoes" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "token" TEXT NOT NULL,
    "loja_codigo" TEXT NOT NULL,
    "loja_nome" TEXT NOT NULL,
    "dispositivo_id" TEXT NOT NULL,
    "criada_em" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ultima_atividade_em" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "revogada_em" TIMESTAMPTZ,

    CONSTRAINT "sessoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fila_documentos" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "sessao_id" UUID NOT NULL,
    "documento_numero" TEXT NOT NULL,
    "documento_chave" TEXT NOT NULL,
    "cliente_nome" TEXT NOT NULL,
    "qtd_itens" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "payload_protheus" JSONB NOT NULL,
    "consultado_em" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "removido_em" TIMESTAMPTZ,

    CONSTRAINT "fila_documentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "entregas" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "sessao_id" UUID NOT NULL,
    "documento_numero" TEXT NOT NULL,
    "entregador_codigo" TEXT NOT NULL,
    "entregador_nome" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'em_andamento',
    "motivo_pendencia" TEXT,
    "entrega_anterior_id" UUID,
    "iniciada_em" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finalizada_em" TIMESTAMPTZ,

    CONSTRAINT "entregas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "entregas_itens" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "entrega_id" UUID NOT NULL,
    "item_id_protheus" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "qtd_total" DECIMAL(12,3) NOT NULL,
    "qtd_entregue" DECIMAL(12,3) NOT NULL DEFAULT 0,
    "unidade" TEXT NOT NULL DEFAULT 'UN',
    "observacao" TEXT,

    CONSTRAINT "entregas_itens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios_admin" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "usuario" TEXT NOT NULL,
    "senha_hash" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criado_em" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ultimo_acesso_em" TIMESTAMPTZ,

    CONSTRAINT "usuarios_admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tentativas_login_admin" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "usuario" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "sucesso" BOOLEAN NOT NULL,
    "tentativa_em" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tentativas_login_admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "logs_alteracao" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "usuario_admin" TEXT NOT NULL,
    "ip_origem" TEXT NOT NULL,
    "user_agent" TEXT NOT NULL,
    "acao" TEXT NOT NULL,
    "recurso_tipo" TEXT NOT NULL,
    "recurso_id" UUID NOT NULL,
    "dados_antes" JSONB NOT NULL,
    "dados_depois" JSONB NOT NULL,
    "motivo" TEXT NOT NULL,
    "realizada_em" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "logs_alteracao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sessoes_token_key" ON "sessoes"("token");

-- CreateIndex
CREATE UNIQUE INDEX "uq_sessao_dispositivo_ativa" ON "sessoes"("dispositivo_id");

-- CreateIndex
CREATE INDEX "idx_fila_sessao_recente" ON "fila_documentos"("sessao_id", "consultado_em" DESC);

-- CreateIndex
CREATE INDEX "idx_entrega_documento_status" ON "entregas"("documento_numero", "status");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_admin_usuario_key" ON "usuarios_admin"("usuario");

-- CreateIndex
CREATE INDEX "tentativas_login_admin_usuario_tentativa_em_idx" ON "tentativas_login_admin"("usuario", "tentativa_em" DESC);

-- CreateIndex
CREATE INDEX "idx_log_recurso" ON "logs_alteracao"("recurso_tipo", "recurso_id", "realizada_em" DESC);

-- CreateIndex
CREATE INDEX "idx_log_usuario" ON "logs_alteracao"("usuario_admin", "realizada_em" DESC);

-- AddForeignKey
ALTER TABLE "fila_documentos" ADD CONSTRAINT "fila_documentos_sessao_id_fkey" FOREIGN KEY ("sessao_id") REFERENCES "sessoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entregas" ADD CONSTRAINT "entregas_sessao_id_fkey" FOREIGN KEY ("sessao_id") REFERENCES "sessoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entregas" ADD CONSTRAINT "entregas_entrega_anterior_id_fkey" FOREIGN KEY ("entrega_anterior_id") REFERENCES "entregas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entregas_itens" ADD CONSTRAINT "entregas_itens_entrega_id_fkey" FOREIGN KEY ("entrega_id") REFERENCES "entregas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logs_alteracao" ADD CONSTRAINT "logs_alteracao_recurso_id_fkey" FOREIGN KEY ("recurso_id") REFERENCES "entregas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

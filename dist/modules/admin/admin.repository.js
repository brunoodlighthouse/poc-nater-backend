import { prisma } from '../../db/connection.js';
export function createAdminRepository() {
    return {
        async findLojaWithPassword(lojaCodigo) {
            return prisma.loja.findFirst({
                where: { codigo: lojaCodigo.toUpperCase(), ativa: true },
                select: {
                    codigo: true,
                    nome: true,
                    adminSenhaHash: true,
                },
            });
        },
        async createSession(input) {
            return prisma.adminSessao.create({
                data: {
                    token: input.token,
                    lojaCodigo: input.lojaCodigo,
                },
            });
        },
        async findActiveSession(token) {
            const sessao = await prisma.adminSessao.findFirst({
                where: { token, revogadaEm: null },
            });
            if (!sessao)
                return null;
            return {
                id: sessao.id,
                token: sessao.token,
                lojaCodigo: sessao.lojaCodigo,
            };
        },
        async revokeSession(token) {
            await prisma.adminSessao.updateMany({
                where: { token, revogadaEm: null },
                data: { revogadaEm: new Date() },
            });
        },
        async listDocumentos(lojaCodigo, query) {
            const where = {
                lojaCodigo,
                removidoEm: null,
            };
            if (query.status) {
                where['status'] = query.status;
            }
            if (query.search) {
                where['OR'] = [
                    { documentoNumero: { contains: query.search, mode: 'insensitive' } },
                    { clienteNome: { contains: query.search, mode: 'insensitive' } },
                ];
            }
            const [items, total] = await Promise.all([
                prisma.filaDocumento.findMany({
                    where,
                    orderBy: { [query.sortBy]: query.sortOrder },
                    skip: (query.page - 1) * query.perPage,
                    take: query.perPage,
                }),
                prisma.filaDocumento.count({ where }),
            ]);
            const documentoNumeros = items.map((item) => item.documentoNumero);
            const latestDeliveries = documentoNumeros.length > 0
                ? await prisma.entrega.findMany({
                    where: {
                        documentoNumero: { in: documentoNumeros },
                        status: { not: 'cancelada' },
                    },
                    orderBy: { iniciadaEm: 'desc' },
                    distinct: ['documentoNumero'],
                    select: {
                        documentoNumero: true,
                        id: true,
                        status: true,
                        entregadorNome: true,
                        finalizadaEm: true,
                    },
                })
                : [];
            const deliveryMap = new Map(latestDeliveries.map((d) => [d.documentoNumero, d]));
            const mapped = items.map((item) => {
                const delivery = deliveryMap.get(item.documentoNumero);
                return {
                    id: item.id,
                    documentoNumero: item.documentoNumero,
                    documentoChave: item.documentoChave,
                    clienteNome: item.clienteNome,
                    qtdItens: item.qtdItens,
                    status: item.status,
                    consultadoEm: item.consultadoEm.toISOString(),
                    ultimaEntrega: delivery
                        ? {
                            id: delivery.id,
                            status: delivery.status,
                            entregadorNome: delivery.entregadorNome,
                            finalizadaEm: delivery.finalizadaEm?.toISOString() ?? null,
                        }
                        : null,
                };
            });
            return {
                items: mapped,
                total,
                page: query.page,
                perPage: query.perPage,
                totalPages: Math.ceil(total / query.perPage),
            };
        },
        async getDocumentoDetalhe(lojaCodigo, documentoNumero) {
            const filaDoc = await prisma.filaDocumento.findFirst({
                where: { lojaCodigo, documentoNumero, removidoEm: null },
                orderBy: { consultadoEm: 'desc' },
            });
            if (!filaDoc)
                return null;
            const entregas = await prisma.entrega.findMany({
                where: { documentoNumero },
                include: {
                    itens: { orderBy: { itemIdProtheus: 'asc' } },
                    logsAlteracao: { orderBy: { realizadaEm: 'desc' } },
                },
                orderBy: { iniciadaEm: 'desc' },
            });
            const mappedEntregas = entregas.map((e) => ({
                id: e.id,
                documentoNumero: e.documentoNumero,
                entregadorCodigo: e.entregadorCodigo,
                entregadorNome: e.entregadorNome,
                status: e.status,
                motivoPendencia: e.motivoPendencia,
                iniciadaEm: e.iniciadaEm.toISOString(),
                finalizadaEm: e.finalizadaEm?.toISOString() ?? null,
                itens: e.itens.map((item) => ({
                    id: item.id,
                    itemIdProtheus: item.itemIdProtheus,
                    descricao: item.descricao,
                    unidade: item.unidade,
                    qtdTotal: Number(item.qtdTotal),
                    qtdEntregue: Number(item.qtdEntregue),
                })),
                logsAlteracao: e.logsAlteracao.map((l) => ({
                    id: l.id,
                    usuarioAdmin: l.usuarioAdmin,
                    acao: l.acao,
                    motivo: l.motivo,
                    dadosAntes: l.dadosAntes,
                    dadosDepois: l.dadosDepois,
                    realizadaEm: l.realizadaEm.toISOString(),
                })),
            }));
            const allLogs = mappedEntregas.flatMap((e) => e.logsAlteracao);
            allLogs.sort((a, b) => new Date(b.realizadaEm).getTime() - new Date(a.realizadaEm).getTime());
            return {
                documentoNumero: filaDoc.documentoNumero,
                documentoChave: filaDoc.documentoChave,
                clienteNome: filaDoc.clienteNome,
                qtdItens: filaDoc.qtdItens,
                status: filaDoc.status,
                consultadoEm: filaDoc.consultadoEm.toISOString(),
                entregas: mappedEntregas,
                logsAlteracao: allLogs,
            };
        },
        async findEntregaById(entregaId) {
            return prisma.entrega.findUnique({
                where: { id: entregaId },
                include: { itens: { orderBy: { itemIdProtheus: 'asc' } } },
            });
        },
        async editarEntrega(input) {
            const entrega = await prisma.entrega.findUnique({
                where: { id: input.entregaId },
                include: { itens: { orderBy: { itemIdProtheus: 'asc' } } },
            });
            if (!entrega)
                return null;
            const dadosAntes = {
                status: entrega.status,
                itens: entrega.itens.map((i) => ({
                    itemIdProtheus: i.itemIdProtheus,
                    qtdEntregue: Number(i.qtdEntregue),
                })),
            };
            const result = await prisma.$transaction(async (tx) => {
                const updateData = {};
                if (input.status) {
                    updateData['status'] = input.status;
                    if (input.status === 'cancelada' || input.status === 'finalizada_total' || input.status === 'finalizada_parcial') {
                        updateData['finalizadaEm'] = new Date();
                    }
                }
                if (input.itens) {
                    updateData['itens'] = {
                        updateMany: input.itens.map((item) => ({
                            where: { itemIdProtheus: item.itemIdProtheus },
                            data: { qtdEntregue: item.qtdEntregue },
                        })),
                    };
                }
                const updated = await tx.entrega.update({
                    where: { id: input.entregaId },
                    data: updateData,
                    include: { itens: { orderBy: { itemIdProtheus: 'asc' } } },
                });
                // Atualiza status na fila
                if (input.status) {
                    const filaStatus = input.status === 'finalizada_total'
                        ? 'finalizado'
                        : input.status === 'cancelada'
                            ? 'cancelado'
                            : 'parcial';
                    await tx.filaDocumento.updateMany({
                        where: { lojaCodigo: input.lojaCodigo, documentoNumero: entrega.documentoNumero, removidoEm: null },
                        data: { status: filaStatus },
                    });
                }
                const dadosDepois = {
                    status: updated.status,
                    itens: updated.itens.map((i) => ({
                        itemIdProtheus: i.itemIdProtheus,
                        qtdEntregue: Number(i.qtdEntregue),
                    })),
                };
                await tx.logAlteracao.create({
                    data: {
                        usuarioAdmin: `admin:${input.lojaCodigo}`,
                        ipOrigem: '-',
                        userAgent: '-',
                        acao: input.status ? 'editar_status' : 'editar_itens',
                        recursoTipo: 'entrega',
                        recursoId: input.entregaId,
                        dadosAntes,
                        dadosDepois,
                        motivo: input.motivo,
                    },
                });
                return updated;
            });
            return {
                id: result.id,
                documentoNumero: result.documentoNumero,
                entregadorCodigo: result.entregadorCodigo,
                entregadorNome: result.entregadorNome,
                status: result.status,
                motivoPendencia: result.motivoPendencia,
                iniciadaEm: result.iniciadaEm.toISOString(),
                finalizadaEm: result.finalizadaEm?.toISOString() ?? null,
                itens: result.itens.map((item) => ({
                    id: item.id,
                    itemIdProtheus: item.itemIdProtheus,
                    descricao: item.descricao,
                    unidade: item.unidade,
                    qtdTotal: Number(item.qtdTotal),
                    qtdEntregue: Number(item.qtdEntregue),
                })),
                logsAlteracao: [],
            };
        },
        // --- Lojas ---
        async listLojas() {
            const lojas = await prisma.loja.findMany({
                orderBy: { codigo: 'asc' },
            });
            return lojas.map((l) => ({
                id: l.id,
                codigo: l.codigo,
                nome: l.nome,
                ativa: l.ativa,
                temSenhaAdmin: l.adminSenhaHash !== null,
            }));
        },
        async findLojaById(id) {
            return prisma.loja.findUnique({ where: { id } });
        },
        async findLojaByCodigo(codigo) {
            return prisma.loja.findFirst({ where: { codigo: codigo.toUpperCase() } });
        },
        async criarLoja(input) {
            const loja = await prisma.loja.create({
                data: {
                    codigo: input.codigo.toUpperCase(),
                    nome: input.nome,
                    adminSenhaHash: input.adminSenhaHash,
                },
            });
            return {
                id: loja.id,
                codigo: loja.codigo,
                nome: loja.nome,
                ativa: loja.ativa,
                temSenhaAdmin: loja.adminSenhaHash !== null,
            };
        },
        async editarLoja(input) {
            const data = {};
            if (input.nome !== undefined)
                data['nome'] = input.nome;
            if (input.ativa !== undefined)
                data['ativa'] = input.ativa;
            if (input.adminSenhaHash !== undefined)
                data['adminSenhaHash'] = input.adminSenhaHash;
            const loja = await prisma.loja.update({
                where: { id: input.id },
                data,
            });
            return {
                id: loja.id,
                codigo: loja.codigo,
                nome: loja.nome,
                ativa: loja.ativa,
                temSenhaAdmin: loja.adminSenhaHash !== null,
            };
        },
        // --- Entregadores ---
        async listEntregadores(lojaCodigo) {
            const entregadores = await prisma.entregador.findMany({
                where: { lojaCodigo },
                orderBy: [{ ativo: 'desc' }, { nome: 'asc' }],
            });
            return entregadores.map((e) => ({
                id: e.id,
                codigo: e.codigo,
                nome: e.nome,
                lojaCodigo: e.lojaCodigo,
                ativo: e.ativo,
            }));
        },
        async findEntregadorByCodigo(codigo) {
            return prisma.entregador.findFirst({ where: { codigo } });
        },
        async findEntregadorById(id) {
            return prisma.entregador.findUnique({ where: { id } });
        },
        async criarEntregador(input) {
            const entregador = await prisma.entregador.create({
                data: {
                    codigo: input.codigo,
                    nome: input.nome,
                    lojaCodigo: input.lojaCodigo,
                },
            });
            return {
                id: entregador.id,
                codigo: entregador.codigo,
                nome: entregador.nome,
                lojaCodigo: entregador.lojaCodigo,
                ativo: entregador.ativo,
            };
        },
        async editarEntregador(input) {
            const data = {};
            if (input.nome !== undefined)
                data['nome'] = input.nome;
            if (input.ativo !== undefined)
                data['ativo'] = input.ativo;
            const entregador = await prisma.entregador.update({
                where: { id: input.id },
                data,
            });
            return {
                id: entregador.id,
                codigo: entregador.codigo,
                nome: entregador.nome,
                lojaCodigo: entregador.lojaCodigo,
                ativo: entregador.ativo,
            };
        },
    };
}
//# sourceMappingURL=admin.repository.js.map
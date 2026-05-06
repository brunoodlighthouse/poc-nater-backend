// DEPRECATED: This module has been replaced by the unified documentos module.
// Kept for reference only. All functionality moved to:
// - documento.repository.ts (listAllByLoja, listTodayByLoja)
// - documento.service.ts (listDocumentos, listNotasHoje)

import { prisma } from '../../db/connection.js';
import type { FilaDocumento } from './fila.types.js';

type QueuePayload = {
  tipo?: 'NFE' | 'NFCE';
  itens?: Array<{
    qtdEntregue?: number;
  }>;
};

function mapFilaItem(input: {
  id: string;
  documentoNumero: string;
  chaveAcesso: string;
  clienteNome: string;
  qtdItens: number;
  status: string;
  recebidoEm: Date;
  consultadoEm: Date | null;
  payload: unknown;
}): FilaDocumento {
  const payload = (input.payload as QueuePayload | null) ?? null;
  const qtdItensEntregues =
    payload?.itens?.reduce((total, item) => {
      const delivered = typeof item.qtdEntregue === 'number' && item.qtdEntregue > 0 ? 1 : 0;
      return total + delivered;
    }, 0) ?? 0;

  return {
    id: input.id,
    documentoNumero: input.documentoNumero,
    documentoChave: input.chaveAcesso,
    clienteNome: input.clienteNome,
    qtdItens: input.qtdItens,
    status: input.status as FilaDocumento['status'],
    consultadoEm: (input.consultadoEm ?? input.recebidoEm).toISOString(),
    tipoDocumento: payload?.tipo === 'NFCE' ? 'NFCE' : 'NFE',
    qtdItensEntregues,
  };
}

export function createFilaRepository() {
  return {
    async listAllByLoja(lojaCodigo: string) {
      const items = await prisma.documento.findMany({
        where: {
          lojaCodigo,
          removidoEm: null,
        },
        orderBy: {
          recebidoEm: 'desc',
        },
      });

      return items.map(mapFilaItem);
    },
  };
}

export type FilaRepository = ReturnType<typeof createFilaRepository>;

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
  documentoChave: string;
  clienteNome: string;
  qtdItens: number;
  status: string;
  consultadoEm: Date;
  payloadProtheus: unknown;
}): FilaDocumento {
  const payload = (input.payloadProtheus as QueuePayload | null) ?? null;
  const qtdItensEntregues =
    payload?.itens?.reduce((total, item) => {
      const delivered = typeof item.qtdEntregue === 'number' && item.qtdEntregue > 0 ? 1 : 0;
      return total + delivered;
    }, 0) ?? 0;

  return {
    id: input.id,
    documentoNumero: input.documentoNumero,
    documentoChave: input.documentoChave,
    clienteNome: input.clienteNome,
    qtdItens: input.qtdItens,
    status: input.status as FilaDocumento['status'],
    consultadoEm: input.consultadoEm.toISOString(),
    tipoDocumento: payload?.tipo === 'NFCE' ? 'NFCE' : 'NFE',
    qtdItensEntregues,
  };
}

export function createFilaRepository() {
  return {
    async listRecentBySession(sessaoId: string) {
      const ttlStart = new Date(Date.now() - 12 * 60 * 60 * 1000);
      const items = await prisma.filaDocumento.findMany({
        where: {
          sessaoId,
          removidoEm: null,
          consultadoEm: {
            gte: ttlStart,
          },
        },
        orderBy: {
          consultadoEm: 'desc',
        },
      });

      return items.map(mapFilaItem);
    },
  };
}

export type FilaRepository = ReturnType<typeof createFilaRepository>;

import type { Prisma } from '@prisma/client';
import { prisma } from '../../db/connection.js';
import type { NotaRecebida } from './nota-recebida.types.js';
import type { WebhookNotaInput } from './nota-recebida.schemas.js';

function mapNotaRecebida(input: {
  id: string;
  lojaCodigo: string;
  documentoNumero: string;
  chaveAcesso: string;
  clienteNome: string;
  clienteDocumento: string;
  tipoDocumento: string;
  qtdItens: number;
  valorTotal: unknown;
  recebidaEm: Date;
}): NotaRecebida {
  return {
    id: input.id,
    lojaCodigo: input.lojaCodigo,
    documentoNumero: input.documentoNumero,
    chaveAcesso: input.chaveAcesso,
    clienteNome: input.clienteNome,
    clienteDocumento: input.clienteDocumento,
    tipoDocumento: input.tipoDocumento as 'NFE' | 'NFCE',
    qtdItens: input.qtdItens,
    valorTotal: Number(input.valorTotal),
    recebidaEm: input.recebidaEm.toISOString(),
  };
}

export function createNotaRecebidaRepository() {
  return {
    async create(input: WebhookNotaInput) {
      const nota = await prisma.notaRecebida.create({
        data: {
          lojaCodigo: input.lojaCodigo,
          documentoNumero: input.documentoNumero,
          chaveAcesso: input.chaveAcesso,
          clienteNome: input.clienteNome,
          clienteDocumento: input.clienteDocumento,
          tipoDocumento: input.tipoDocumento,
          qtdItens: input.qtdItens,
          valorTotal: input.valorTotal,
          payload: (input.payload ?? {}) as Prisma.InputJsonValue,
        },
      });

      return mapNotaRecebida(nota);
    },

    async listTodayByLoja(lojaCodigo: string) {
      const startOfDay = new Date();
      startOfDay.setHours(0, 0, 0, 0);

      const items = await prisma.notaRecebida.findMany({
        where: {
          lojaCodigo,
          recebidaEm: {
            gte: startOfDay,
          },
        },
        orderBy: {
          recebidaEm: 'desc',
        },
      });

      return items.map(mapNotaRecebida);
    },
  };
}

export type NotaRecebidaRepository = ReturnType<typeof createNotaRecebidaRepository>;

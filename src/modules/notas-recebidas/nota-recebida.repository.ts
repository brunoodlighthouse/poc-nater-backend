import type { Prisma } from '@prisma/client';
import { prisma } from '../../db/connection.js';
import type { WebhookNotaInput } from './nota-recebida.schemas.js';

export type WebhookNotaResult = {
  id: string;
  lojaCodigo: string;
  documentoNumero: string;
  chaveAcesso: string;
  clienteNome: string;
  clienteDocumento: string;
  tipoDocumento: 'NFE' | 'NFCE';
  qtdItens: number;
  valorTotal: number;
  recebidaEm: string;
};

function mapResult(doc: {
  id: string;
  lojaCodigo: string;
  documentoNumero: string;
  chaveAcesso: string;
  clienteNome: string;
  clienteDocumento: string | null;
  tipoDocumento: string;
  qtdItens: number;
  valorTotal: unknown;
  recebidoEm: Date;
}): WebhookNotaResult {
  return {
    id: doc.id,
    lojaCodigo: doc.lojaCodigo,
    documentoNumero: doc.documentoNumero,
    chaveAcesso: doc.chaveAcesso,
    clienteNome: doc.clienteNome,
    clienteDocumento: doc.clienteDocumento ?? '',
    tipoDocumento: doc.tipoDocumento as 'NFE' | 'NFCE',
    qtdItens: doc.qtdItens,
    valorTotal: Number(doc.valorTotal ?? 0),
    recebidaEm: doc.recebidoEm.toISOString(),
  };
}

export function createNotaRecebidaRepository() {
  return {
    async upsert(input: WebhookNotaInput): Promise<WebhookNotaResult> {
      const existing = await prisma.documento.findFirst({
        where: {
          lojaCodigo: input.lojaCodigo,
          documentoNumero: input.documentoNumero,
          removidoEm: null,
        },
      });

      if (existing) {
        const updated = await prisma.documento.update({
          where: { id: existing.id },
          data: {
            chaveAcesso: input.chaveAcesso,
            clienteNome: input.clienteNome,
            clienteDocumento: input.clienteDocumento,
            tipoDocumento: input.tipoDocumento,
            qtdItens: input.qtdItens,
            valorTotal: input.valorTotal,
            payload: (input.payload ?? {}) as Prisma.InputJsonValue,
          },
        });
        return mapResult(updated);
      }

      const created = await prisma.documento.create({
        data: {
          lojaCodigo: input.lojaCodigo,
          documentoNumero: input.documentoNumero,
          chaveAcesso: input.chaveAcesso,
          tipoDocumento: input.tipoDocumento,
          clienteNome: input.clienteNome,
          clienteDocumento: input.clienteDocumento,
          qtdItens: input.qtdItens,
          valorTotal: input.valorTotal,
          payload: (input.payload ?? {}) as Prisma.InputJsonValue,
          origem: 'webhook',
        },
      });

      return mapResult(created);
    },
  };
}

export type NotaRecebidaRepository = ReturnType<typeof createNotaRecebidaRepository>;

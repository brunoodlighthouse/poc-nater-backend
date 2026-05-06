import type { Prisma } from '@prisma/client';
import { prisma } from '../../db/connection.js';
import type { DocumentGateway, ProtheusDocumento } from '../../integrations/protheus/documentos.js';
import type { DocumentoConsultado } from './documento.types.js';

type DocumentoRepositoryDependencies = {
  documentGateway: DocumentGateway;
};

function mapDocumentStatus(
  statusAtual: ProtheusDocumento['statusAtual'],
): DocumentoConsultado['statusAtual'] {
  return statusAtual === 'parcial' ? 'parcial' : 'pendente';
}

function mapDocumentToResponse(
  document: ProtheusDocumento,
  consultadoEm: Date,
): DocumentoConsultado {
  return {
    documento: document.documento,
    tipo: document.tipo,
    chaveAcesso: document.chaveAcesso,
    cliente: document.cliente,
    statusAtual: mapDocumentStatus(document.statusAtual),
    itens: document.itens,
    consultadoEm: consultadoEm.toISOString(),
  };
}

export function createDocumentoRepository({ documentGateway }: DocumentoRepositoryDependencies) {
  function toJsonValue(document: ProtheusDocumento) {
    return JSON.parse(JSON.stringify(document)) as Prisma.InputJsonValue;
  }

  return {
    async findDocumentByAccessKey(input: {
      chaveAcesso: string;
      filial: string;
      correlationId: string;
    }) {
      return documentGateway.findDocumentByAccessKey(input);
    },

    async findByChaveAcesso(chaveAcesso: string): Promise<ProtheusDocumento | null> {
      const item = await prisma.documento.findFirst({
        where: { chaveAcesso, removidoEm: null },
        orderBy: { recebidoEm: 'desc' },
      });
      if (!item) return null;
      return item.payload as unknown as ProtheusDocumento;
    },

    async saveToDocumentos(input: {
      lojaCodigo: string;
      document: ProtheusDocumento;
    }): Promise<DocumentoConsultado> {
      const consultadoEm = new Date();

      const existing = await prisma.documento.findFirst({
        where: {
          lojaCodigo: input.lojaCodigo,
          documentoNumero: input.document.documento,
          removidoEm: null,
        },
      });

      if (existing) {
        const updated = await prisma.documento.update({
          where: { id: existing.id },
          data: {
            chaveAcesso: input.document.chaveAcesso,
            clienteNome: input.document.cliente.nome,
            clienteDocumento: input.document.cliente.documento,
            tipoDocumento: input.document.tipo,
            qtdItens: input.document.itens.length,
            payload: toJsonValue(input.document),
            consultadoEm,
          },
        });

        return mapDocumentToResponse(input.document, updated.consultadoEm!);
      }

      const created = await prisma.documento.create({
        data: {
          lojaCodigo: input.lojaCodigo,
          documentoNumero: input.document.documento,
          chaveAcesso: input.document.chaveAcesso,
          tipoDocumento: input.document.tipo,
          clienteNome: input.document.cliente.nome,
          clienteDocumento: input.document.cliente.documento,
          qtdItens: input.document.itens.length,
          status: mapDocumentStatus(input.document.statusAtual),
          payload: toJsonValue(input.document),
          origem: 'consulta',
          consultadoEm,
        },
      });

      return mapDocumentToResponse(input.document, created.consultadoEm!);
    },

    async listAllByLoja(lojaCodigo: string) {
      return prisma.documento.findMany({
        where: { lojaCodigo, removidoEm: null },
        orderBy: { recebidoEm: 'desc' },
      });
    },

    async listTodayByLoja(lojaCodigo: string) {
      const startOfDay = new Date();
      startOfDay.setHours(0, 0, 0, 0);

      return prisma.documento.findMany({
        where: {
          lojaCodigo,
          removidoEm: null,
          recebidoEm: { gte: startOfDay },
        },
        orderBy: { recebidoEm: 'desc' },
      });
    },
  };
}

export type DocumentoRepository = ReturnType<typeof createDocumentoRepository>;

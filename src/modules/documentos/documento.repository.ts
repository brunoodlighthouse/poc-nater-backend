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
    return JSON.parse(JSON.stringify(document)) as ProtheusDocumento;
  }

  return {
    async findDocumentByAccessKey(input: {
      chaveAcesso: string;
      filial: string;
      correlationId: string;
    }) {
      return documentGateway.findDocumentByAccessKey(input);
    },

    async findInQueueByChave(chaveAcesso: string): Promise<ProtheusDocumento | null> {
      const item = await prisma.filaDocumento.findFirst({
        where: { documentoChave: chaveAcesso, removidoEm: null },
        orderBy: { consultadoEm: 'desc' },
      });
      if (!item) return null;
      return item.payloadProtheus as ProtheusDocumento;
    },

    async saveToQueue(input: {
      sessaoId: string;
      document: ProtheusDocumento;
    }): Promise<DocumentoConsultado> {
      const consultadoEm = new Date();
      const existingItem = await prisma.filaDocumento.findFirst({
        where: {
          sessaoId: input.sessaoId,
          documentoNumero: input.document.documento,
          removidoEm: null,
        },
      });

      if (existingItem) {
        const updatedItem = await prisma.filaDocumento.update({
          where: {
            id: existingItem.id,
          },
          data: {
            documentoChave: input.document.chaveAcesso,
            clienteNome: input.document.cliente.nome,
            qtdItens: input.document.itens.length,
            // status preservado: gerenciado pelas operações de entrega, não pelo Protheus
            payloadProtheus: toJsonValue(input.document),
            consultadoEm,
          },
        });

        return mapDocumentToResponse(input.document, updatedItem.consultadoEm);
      }

      const createdItem = await prisma.filaDocumento.create({
        data: {
          sessaoId: input.sessaoId,
          documentoNumero: input.document.documento,
          documentoChave: input.document.chaveAcesso,
          clienteNome: input.document.cliente.nome,
          qtdItens: input.document.itens.length,
          status: mapDocumentStatus(input.document.statusAtual),
          payloadProtheus: toJsonValue(input.document),
          consultadoEm,
        },
      });

      return mapDocumentToResponse(input.document, createdItem.consultadoEm);
    },
  };
}

export type DocumentoRepository = ReturnType<typeof createDocumentoRepository>;

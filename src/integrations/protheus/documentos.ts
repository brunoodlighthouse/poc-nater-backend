import {
  DocumentoInvalidoError,
  DocumentoVendaFuturaError,
  EntregaJaRealizadaError,
  ProtheusIndisponivelError,
} from '../../errors.js';
import { config } from '../../config.js';
import { prisma } from '../../db/connection.js';
import { protheusRequest } from './client.js';

export type ProtheusDocumentoItem = {
  id: string;
  codigoProduto: string;
  descricao: string;
  qtdTotal: number;
  qtdEntregue: number;
  unidade: string;
};

export type ProtheusDocumento = {
  documento: string;
  tipo: 'NFE' | 'NFCE';
  chaveAcesso: string;
  cliente: {
    codigo: string;
    nome: string;
    documento: string;
  };
  isVendaFutura: boolean;
  statusAtual: 'pendente' | 'parcial' | 'finalizado';
  entregadorNome?: string;
  entregueEm?: string;
  itens: ProtheusDocumentoItem[];
};

export type DocumentGateway = {
  findDocumentByAccessKey(input: {
    chaveAcesso: string;
    filial: string;
    correlationId: string;
  }): Promise<ProtheusDocumento>;
};

type DocumentApiResponse = Omit<ProtheusDocumento, 'chaveAcesso'>;

function validateDocument(document: ProtheusDocumento): ProtheusDocumento {
  if (document.isVendaFutura) {
    throw new DocumentoVendaFuturaError();
  }

  if (document.statusAtual === 'finalizado') {
    throw new EntregaJaRealizadaError(document.entregueEm, document.entregadorNome);
  }

  return document;
}

export function createDocumentGateway(): DocumentGateway {
  if (config.PROTHEUS_MOCK_ENABLED) {
    return {
      async findDocumentByAccessKey({ chaveAcesso }) {
        // In mock mode, look up the document in the unified documentos table
        const row = await prisma.documento.findFirst({
          where: { chaveAcesso, removidoEm: null },
        });

        if (!row) {
          throw new DocumentoInvalidoError();
        }

        const payload = row.payload as unknown as ProtheusDocumento;
        return validateDocument(payload);
      },
    };
  }

  return {
    async findDocumentByAccessKey({ chaveAcesso, filial, correlationId }) {
      const response = await protheusRequest({
        method: 'POST',
        path: 'entregas/v1/documento/consulta',
        body: { chaveAcesso, filial },
        correlationId,
      });

      if (response.status === 404) {
        throw new DocumentoInvalidoError();
      }

      if (!response.ok) {
        throw new ProtheusIndisponivelError();
      }

      const payload = await response.json<DocumentApiResponse>();
      return validateDocument({ ...payload, chaveAcesso });
    },
  };
}

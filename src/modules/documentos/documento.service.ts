import { DocumentoInvalidoError } from '../../errors.js';
import type { DocumentoRepository } from './documento.repository.js';
import type { DocumentoConsultaInput, DocumentoListado, NotaRecebidaListada } from './documento.types.js';

type DocumentoServiceDependencies = {
  documentoRepository: DocumentoRepository;
};

function invalidReadError(): DocumentoInvalidoError {
  return new DocumentoInvalidoError(
    'Documento nao encontrado. Verifique se a leitura foi feita corretamente.',
  );
}

function extractAccessKeyFromQrCode(codigoLido: string): string {
  const normalized = codigoLido.trim();
  const parameterMatch = /[?&]p=(\d{44})/i.exec(normalized);

  if (parameterMatch?.[1]) {
    return parameterMatch[1];
  }

  const sequenceMatch = normalized.match(/\d{44}/);

  if (!sequenceMatch) {
    throw invalidReadError();
  }

  return sequenceMatch[0];
}

function extractAccessKeyFromBarcode(codigoLido: string): string {
  const normalized = codigoLido.replace(/\D/g, '');

  if (normalized.length !== 44) {
    throw invalidReadError();
  }

  return normalized;
}

type QueuePayload = {
  tipo?: 'NFE' | 'NFCE';
  itens?: Array<{
    qtdEntregue?: number;
  }>;
};

function mapDocumentoToListItem(doc: {
  id: string;
  documentoNumero: string;
  chaveAcesso: string;
  clienteNome: string;
  qtdItens: number;
  status: string;
  tipoDocumento: string;
  recebidoEm: Date;
  consultadoEm: Date | null;
  payload: unknown;
}): DocumentoListado {
  const payload = (doc.payload as QueuePayload | null) ?? null;
  const qtdItensEntregues =
    payload?.itens?.reduce((total, item) => {
      const delivered = typeof item.qtdEntregue === 'number' && item.qtdEntregue > 0 ? 1 : 0;
      return total + delivered;
    }, 0) ?? 0;

  return {
    id: doc.id,
    documentoNumero: doc.documentoNumero,
    documentoChave: doc.chaveAcesso,
    clienteNome: doc.clienteNome,
    qtdItens: doc.qtdItens,
    status: doc.status as DocumentoListado['status'],
    consultadoEm: (doc.consultadoEm ?? doc.recebidoEm).toISOString(),
    tipoDocumento: (doc.tipoDocumento === 'NFCE' ? 'NFCE' : 'NFE') as DocumentoListado['tipoDocumento'],
    qtdItensEntregues,
  };
}

function mapDocumentoToNota(doc: {
  id: string;
  lojaCodigo: string;
  documentoNumero: string;
  chaveAcesso: string;
  clienteNome: string;
  clienteDocumento: string | null;
  tipoDocumento: string;
  qtdItens: number;
  valorTotal: unknown;
  status: string;
  recebidoEm: Date;
}): NotaRecebidaListada {
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
    status: doc.status as NotaRecebidaListada['status'],
    recebidaEm: doc.recebidoEm.toISOString(),
  };
}

export function createDocumentoService({ documentoRepository }: DocumentoServiceDependencies) {
  return {
    async consultDocument(input: DocumentoConsultaInput) {
      const saveArgs = { lojaCodigo: input.sessao.loja.codigo };
      const lookupArgs = { filial: input.sessao.loja.codigo, correlationId: input.correlationId };

      if (input.formato === 'numero') {
        const chave = input.codigoLido.trim();
        if (!chave) throw invalidReadError();
        const document = await documentoRepository.findByChaveAcesso(chave);
        if (!document) throw invalidReadError();
        return documentoRepository.saveToDocumentos({ ...saveArgs, document });
      }

      const chaveAcesso =
        input.formato === 'qrcode'
          ? extractAccessKeyFromQrCode(input.codigoLido)
          : extractAccessKeyFromBarcode(input.codigoLido);

      const document = await documentoRepository.findDocumentByAccessKey({ chaveAcesso, ...lookupArgs });
      return documentoRepository.saveToDocumentos({ ...saveArgs, document });
    },

    async listDocumentos(lojaCodigo: string): Promise<DocumentoListado[]> {
      const items = await documentoRepository.listAllByLoja(lojaCodigo);
      return items.map(mapDocumentoToListItem);
    },

    async listNotasHoje(lojaCodigo: string): Promise<NotaRecebidaListada[]> {
      const items = await documentoRepository.listTodayByLoja(lojaCodigo);
      return items.map(mapDocumentoToNota);
    },
  };
}

export type DocumentoService = ReturnType<typeof createDocumentoService>;

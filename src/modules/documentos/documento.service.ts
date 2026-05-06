import { DocumentoInvalidoError } from '../../errors.js';
import type { DocumentoRepository } from './documento.repository.js';
import type { DocumentoConsultaInput } from './documento.types.js';

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

export function createDocumentoService({ documentoRepository }: DocumentoServiceDependencies) {
  return {
    async consultDocument(input: DocumentoConsultaInput) {
      const saveArgs = { lojaCodigo: input.sessao.loja.codigo };
      const lookupArgs = { filial: input.sessao.loja.codigo, correlationId: input.correlationId };

      if (input.formato === 'numero') {
        const chave = input.codigoLido.trim();
        if (!chave) throw invalidReadError();
        const document = await documentoRepository.findInQueueByChave(chave);
        if (!document) throw invalidReadError();
        return documentoRepository.saveToQueue({ ...saveArgs, document });
      }

      const chaveAcesso =
        input.formato === 'qrcode'
          ? extractAccessKeyFromQrCode(input.codigoLido)
          : extractAccessKeyFromBarcode(input.codigoLido);

      const document = await documentoRepository.findDocumentByAccessKey({ chaveAcesso, ...lookupArgs });
      return documentoRepository.saveToQueue({ ...saveArgs, document });
    },
  };
}

export type DocumentoService = ReturnType<typeof createDocumentoService>;

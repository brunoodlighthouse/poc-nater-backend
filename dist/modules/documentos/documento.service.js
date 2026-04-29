import { DocumentoInvalidoError } from '../../errors.js';
function invalidReadError() {
    return new DocumentoInvalidoError('Documento nao encontrado. Verifique se a leitura foi feita corretamente.');
}
function extractAccessKeyFromQrCode(codigoLido) {
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
function extractAccessKeyFromBarcode(codigoLido) {
    const normalized = codigoLido.replace(/\D/g, '');
    if (normalized.length !== 44) {
        throw invalidReadError();
    }
    return normalized;
}
export function createDocumentoService({ documentoRepository }) {
    return {
        async consultDocument(input) {
            const chaveAcesso = input.formato === 'qrcode'
                ? extractAccessKeyFromQrCode(input.codigoLido)
                : extractAccessKeyFromBarcode(input.codigoLido);
            const document = await documentoRepository.findDocumentByAccessKey({
                chaveAcesso,
                filial: input.sessao.loja.codigo,
                correlationId: input.correlationId,
            });
            return documentoRepository.saveToQueue({
                sessaoId: input.sessao.id,
                document,
            });
        },
    };
}
//# sourceMappingURL=documento.service.js.map
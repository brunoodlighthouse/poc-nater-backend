import type { DocumentGateway, ProtheusDocumento } from '../../integrations/protheus/documentos.js';
import type { DocumentoConsultado } from './documento.types.js';
type DocumentoRepositoryDependencies = {
    documentGateway: DocumentGateway;
};
export declare function createDocumentoRepository({ documentGateway }: DocumentoRepositoryDependencies): {
    findDocumentByAccessKey(input: {
        chaveAcesso: string;
        filial: string;
        correlationId: string;
    }): Promise<ProtheusDocumento>;
    findInQueueByChave(chaveAcesso: string): Promise<ProtheusDocumento | null>;
    saveToQueue(input: {
        sessaoId: string;
        document: ProtheusDocumento;
    }): Promise<DocumentoConsultado>;
};
export type DocumentoRepository = ReturnType<typeof createDocumentoRepository>;
export {};
//# sourceMappingURL=documento.repository.d.ts.map
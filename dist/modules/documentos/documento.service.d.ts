import type { DocumentoRepository } from './documento.repository.js';
import type { DocumentoConsultaInput } from './documento.types.js';
type DocumentoServiceDependencies = {
    documentoRepository: DocumentoRepository;
};
export declare function createDocumentoService({ documentoRepository }: DocumentoServiceDependencies): {
    consultDocument(input: DocumentoConsultaInput): Promise<import("./documento.types.js").DocumentoConsultado>;
};
export type DocumentoService = ReturnType<typeof createDocumentoService>;
export {};
//# sourceMappingURL=documento.service.d.ts.map
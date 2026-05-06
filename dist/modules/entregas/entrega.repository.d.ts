import type { ProtheusDocumento } from '../../integrations/protheus/documentos.js';
import type { EntregaDetalheResponse, EntregaModo, FinalizarEntregaResponse, IniciarEntregaResponse } from './entrega.types.js';
type QueueDocumentRecord = {
    id: string;
    lojaCodigo: string;
    documentoNumero: string;
    documentoChave: string;
    status: string;
    consultadoEm: Date;
    payloadProtheus: ProtheusDocumento;
};
type DeliveryLogRecord = {
    id: string;
    acao: string;
    motivo: string;
    dadosAntes: unknown;
    dadosDepois: unknown;
    realizadaEm: Date;
};
type DeliveryRecord = {
    id: string;
    sessaoId: string;
    documentoNumero: string;
    entregadorCodigo: string;
    entregadorNome: string;
    status: string;
    motivoPendencia: string | null;
    iniciadaEm: Date;
    finalizadaEm: Date | null;
    itens: Array<{
        itemIdProtheus: string;
        descricao: string;
        unidade: string;
        qtdTotal: number;
        qtdEntregue: number;
    }>;
    logsAlteracao: DeliveryLogRecord[];
};
export declare function createEntregaRepository(): {
    findQueueDocumentByNumber(lojaCodigo: string, documentoNumero: string): Promise<QueueDocumentRecord | null>;
    syncQueueDocument(lojaCodigo: string, document: ProtheusDocumento): Promise<QueueDocumentRecord>;
    listDeliveryHistory(documentoNumero: string): Promise<DeliveryRecord[]>;
    findOpenDeliveryByDocument(documentoNumero: string): Promise<DeliveryRecord | null>;
    findDeliveryById(entregaId: string, sessaoId: string): Promise<DeliveryRecord | null>;
    createDelivery(input: {
        sessaoId: string;
        documentoNumero: string;
        entregadorCodigo: string;
        entregadorNome: string;
        entregaAnteriorId: string | null;
        mode: EntregaModo;
        itens: Array<{
            itemIdProtheus: string;
            descricao: string;
            unidade: string;
            qtdTotal: number;
        }>;
    }): Promise<IniciarEntregaResponse>;
    cancelDelivery(entregaId: string): Promise<void>;
    finalizeDelivery(input: {
        entregaId: string;
        documentoNumero: string;
        status: "finalizada_total" | "finalizada_parcial";
        motivoPendencia: "retirada_futura" | "entrega_futura" | null;
        deliveredItems: Array<{
            itemIdProtheus: string;
            qtdEntregue: number;
        }>;
        queueDocument: QueueDocumentRecord;
    }): Promise<FinalizarEntregaResponse>;
    mapDetailResponse(input: {
        queueDocument: QueueDocumentRecord;
        history: DeliveryRecord[];
        openDelivery: DeliveryRecord | null;
    }): EntregaDetalheResponse;
};
export type EntregaRepository = ReturnType<typeof createEntregaRepository>;
export {};
//# sourceMappingURL=entrega.repository.d.ts.map
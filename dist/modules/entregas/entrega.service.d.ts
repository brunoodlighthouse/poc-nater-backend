import type { CourierGateway } from '../../integrations/protheus/entregadores.js';
import type { DeliveryGateway } from '../../integrations/protheus/entregas.js';
import type { DocumentGateway } from '../../integrations/protheus/documentos.js';
import type { EntregaRepository } from './entrega.repository.js';
import type { EntregaDetalheResponse, FinalizarEntregaInput, FinalizarEntregaResponse, IniciarEntregaInput } from './entrega.types.js';
type EntregaServiceDependencies = {
    courierGateway: CourierGateway;
    deliveryGateway: DeliveryGateway;
    documentGateway: DocumentGateway;
    entregaRepository: EntregaRepository;
};
export declare function createEntregaService({ courierGateway, deliveryGateway, documentGateway, entregaRepository, }: EntregaServiceDependencies): {
    listCouriers(correlationId: string): Promise<import("../../integrations/protheus/entregadores.js").ProtheusEntregador[]>;
    getDetail(sessaoId: string, documento: string): Promise<EntregaDetalheResponse>;
    getPendingDeliveries(sessaoId: string, documento: string): Promise<{
        documento: string;
        modo: "reentrega";
        itensPendentes: import("./entrega.types.js").EntregaDetalheItem[];
        historico: import("./entrega.types.js").EntregaHistorico[];
    }>;
    startDelivery(input: IniciarEntregaInput): Promise<import("./entrega.types.js").EntregaEmAndamento>;
    finalizeDelivery(input: FinalizarEntregaInput): Promise<FinalizarEntregaResponse>;
};
export type EntregaService = ReturnType<typeof createEntregaService>;
export {};
//# sourceMappingURL=entrega.service.d.ts.map
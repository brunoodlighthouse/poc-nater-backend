import type { DeliveryGateway } from '../../integrations/protheus/entregas.js';
import type { EntregadorRepository } from '../entregadores/entregador.repository.js';
import type { EntregaRepository } from './entrega.repository.js';
import type { EntregaDetalheResponse, FinalizarEntregaInput, FinalizarEntregaResponse, IniciarEntregaInput } from './entrega.types.js';
type EntregaServiceDependencies = {
    entregadorRepository: EntregadorRepository;
    deliveryGateway: DeliveryGateway;
    entregaRepository: EntregaRepository;
};
export declare function createEntregaService({ entregadorRepository, deliveryGateway, entregaRepository, }: EntregaServiceDependencies): {
    listCouriers(lojaCodigo: string): Promise<import("../entregadores/entregador.repository.js").EntregadorRecord[]>;
    getDetail(lojaCodigo: string, documento: string): Promise<EntregaDetalheResponse>;
    getPendingDeliveries(lojaCodigo: string, documento: string): Promise<{
        documento: string;
        modo: "reentrega";
        itensPendentes: import("./entrega.types.js").EntregaDetalheItem[];
        historico: import("./entrega.types.js").EntregaHistorico[];
    }>;
    startDelivery(input: IniciarEntregaInput): Promise<import("./entrega.types.js").EntregaEmAndamento>;
    cancelDelivery(entregaId: string, sessaoId: string): Promise<void>;
    finalizeDelivery(input: FinalizarEntregaInput): Promise<FinalizarEntregaResponse>;
};
export type EntregaService = ReturnType<typeof createEntregaService>;
export {};
//# sourceMappingURL=entrega.service.d.ts.map
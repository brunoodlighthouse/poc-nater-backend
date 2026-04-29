import type { FastifyReply, FastifyRequest } from 'fastify';
import type { EntregaService } from './entrega.service.js';
type EntregaControllerDependencies = {
    entregaService: EntregaService;
};
export declare function createEntregaController({ entregaService }: EntregaControllerDependencies): {
    listCouriers(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    getDetail(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    getPendingDeliveries(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    startDelivery(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    finalizeDelivery(request: FastifyRequest, reply: FastifyReply): Promise<never>;
};
export type EntregaController = ReturnType<typeof createEntregaController>;
export {};
//# sourceMappingURL=entrega.controller.d.ts.map
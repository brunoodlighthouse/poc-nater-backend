import type { FastifyReply, FastifyRequest } from 'fastify';
import type { FilaService } from './fila.service.js';
type FilaControllerDependencies = {
    filaService: FilaService;
};
export declare function createFilaController({ filaService }: FilaControllerDependencies): {
    listQueue(request: FastifyRequest, reply: FastifyReply): Promise<never>;
};
export type FilaController = ReturnType<typeof createFilaController>;
export {};
//# sourceMappingURL=fila.controller.d.ts.map
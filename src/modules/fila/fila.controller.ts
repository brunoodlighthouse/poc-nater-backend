import type { FastifyReply, FastifyRequest } from 'fastify';
import type { FilaService } from './fila.service.js';

type FilaControllerDependencies = {
  filaService: FilaService;
};

export function createFilaController({ filaService }: FilaControllerDependencies) {
  return {
    async listQueue(request: FastifyRequest, reply: FastifyReply) {
      const data = await filaService.listQueue(request.session.loja.codigo);

      return reply.send({
        ok: true,
        data,
      });
    },
  };
}

export type FilaController = ReturnType<typeof createFilaController>;

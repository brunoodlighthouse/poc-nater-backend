import type { FastifyReply, FastifyRequest } from 'fastify';
import { webhookNotaSchema } from './nota-recebida.schemas.js';
import type { NotaRecebidaService } from './nota-recebida.service.js';

type NotaRecebidaControllerDependencies = {
  notaRecebidaService: NotaRecebidaService;
};

export function createNotaRecebidaController({ notaRecebidaService }: NotaRecebidaControllerDependencies) {
  return {
    async receiveWebhook(request: FastifyRequest, reply: FastifyReply) {
      const input = webhookNotaSchema.parse(request.body);
      const nota = await notaRecebidaService.receiveNota(input);

      return reply.status(201).send({
        ok: true,
        data: nota,
      });
    },
  };
}

export type NotaRecebidaController = ReturnType<typeof createNotaRecebidaController>;

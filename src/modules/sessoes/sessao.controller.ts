import type { FastifyReply, FastifyRequest } from 'fastify';
import { SessaoInvalidaError } from '../../errors.js';
import { createSessaoSchema } from './sessao.schemas.js';
import type { SessaoService } from './sessao.service.js';
import type { SessaoContext } from './sessao.types.js';

declare module 'fastify' {
  interface FastifyRequest {
    session: SessaoContext;
  }
}

type SessaoControllerDependencies = {
  sessaoService: SessaoService;
};

function getBearerToken(authorizationHeader: string | string[] | undefined): string {
  if (!authorizationHeader) {
    throw new SessaoInvalidaError();
  }

  if (Array.isArray(authorizationHeader)) {
    throw new SessaoInvalidaError();
  }

  const [scheme, token] = authorizationHeader.split(' ');

  if (scheme !== 'Bearer' || !token) {
    throw new SessaoInvalidaError();
  }

  return token;
}

export function createSessaoController({ sessaoService }: SessaoControllerDependencies) {
  return {
    async createSession(request: FastifyRequest, reply: FastifyReply) {
      const input = createSessaoSchema.parse(request.body);
      const data = await sessaoService.createSession({
        ...input,
        correlationId: request.id,
      });

      return reply.status(201).send({
        ok: true,
        data,
      });
    },

    async requireSession(request: FastifyRequest) {
      const token = getBearerToken(request.headers.authorization);
      request.session = await sessaoService.requireSession(token);
    },

    async getCurrentSession(request: FastifyRequest, reply: FastifyReply) {
      const data = {
        loja: request.session.loja,
      };

      return reply.send({
        ok: true,
        data,
      });
    },
  };
}

export type SessaoController = ReturnType<typeof createSessaoController>;

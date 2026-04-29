import { prisma } from '../../db/connection.js';
import type { SessaoContext } from './sessao.types.js';

type PersistedSessao = {
  id: string;
  token: string;
  dispositivoId: string;
  lojaCodigo: string;
  lojaNome: string;
};

function mapSessaoRecord(record: PersistedSessao): SessaoContext {
  return {
    id: record.id,
    token: record.token,
    dispositivoId: record.dispositivoId,
    loja: {
      id: record.lojaCodigo,
      codigo: record.lojaCodigo,
      nome: record.lojaNome,
    },
  };
}

export function createSessaoRepository() {
  return {
    async upsertByDevice(input: {
      token: string;
      dispositivoId: string;
      lojaCodigo: string;
      lojaNome: string;
    }) {
      const sessao = await prisma.sessao.upsert({
        where: {
          dispositivoId: input.dispositivoId,
        },
        create: {
          token: input.token,
          dispositivoId: input.dispositivoId,
          lojaCodigo: input.lojaCodigo,
          lojaNome: input.lojaNome,
        },
        update: {
          token: input.token,
          lojaCodigo: input.lojaCodigo,
          lojaNome: input.lojaNome,
          revogadaEm: null,
          criadaEm: new Date(),
          ultimaAtividadeEm: new Date(),
        },
      });

      return mapSessaoRecord(sessao);
    },

    async findActiveByToken(token: string) {
      const sessao = await prisma.sessao.findFirst({
        where: {
          token,
          revogadaEm: null,
        },
      });

      return sessao ? mapSessaoRecord(sessao) : null;
    },

    async touchActivity(id: string) {
      await prisma.sessao.update({
        where: { id },
        data: { ultimaAtividadeEm: new Date() },
      });
    },
  };
}

export type SessaoRepository = ReturnType<typeof createSessaoRepository>;

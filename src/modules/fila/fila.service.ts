import type { FilaRepository } from './fila.repository.js';

type FilaServiceDependencies = {
  filaRepository: FilaRepository;
};

export function createFilaService({ filaRepository }: FilaServiceDependencies) {
  return {
    async listQueue(sessaoId: string) {
      return filaRepository.listRecentBySession(sessaoId);
    },
  };
}

export type FilaService = ReturnType<typeof createFilaService>;

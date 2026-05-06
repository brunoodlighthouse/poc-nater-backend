import type { FilaRepository } from './fila.repository.js';

type FilaServiceDependencies = {
  filaRepository: FilaRepository;
};

export function createFilaService({ filaRepository }: FilaServiceDependencies) {
  return {
    async listQueue(lojaCodigo: string) {
      return filaRepository.listAllByLoja(lojaCodigo);
    },
  };
}

export type FilaService = ReturnType<typeof createFilaService>;

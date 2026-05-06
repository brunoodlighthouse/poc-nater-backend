import type { NotaRecebidaRepository } from './nota-recebida.repository.js';
import type { WebhookNotaInput } from './nota-recebida.schemas.js';

type NotaRecebidaServiceDependencies = {
  notaRecebidaRepository: NotaRecebidaRepository;
};

export function createNotaRecebidaService({ notaRecebidaRepository }: NotaRecebidaServiceDependencies) {
  return {
    async receiveNota(input: WebhookNotaInput) {
      return notaRecebidaRepository.create(input);
    },

    async listToday(lojaCodigo: string) {
      return notaRecebidaRepository.listTodayByLoja(lojaCodigo);
    },
  };
}

export type NotaRecebidaService = ReturnType<typeof createNotaRecebidaService>;

import { describe, expect, it, vi } from 'vitest';
import { LojaNaoEncontradaError, SessaoInvalidaError } from '../../errors.js';
import { createSessaoService } from './sessao.service.js';
import type { SessaoRepository } from './sessao.repository.js';
import type { LojaRepository } from '../lojas/loja.repository.js';

function createLoggerMock() {
  return {
    info: vi.fn(),
  } as const;
}

function createRepositoryMock(): SessaoRepository {
  return {
    upsertByDevice: vi.fn(),
    findActiveByToken: vi.fn(),
    touchActivity: vi.fn(),
  };
}

function createLojaRepositoryMock(): LojaRepository {
  return {
    listActive: vi.fn(),
    findByCode: vi.fn(),
  };
}

describe('createSessaoService', () => {
  it('creates or refreshes the session for the device', async () => {
    const repository = createRepositoryMock();
    const lojaRepository = createLojaRepositoryMock();
    const service = createSessaoService({
      logger: createLoggerMock(),
      sessaoRepository: repository,
      lojaRepository,
    });

    vi.mocked(lojaRepository.findByCode).mockResolvedValue({
      id: 'loja-1',
      codigo: '001',
      nome: 'Filial Centro',
      ativa: true,
    });
    vi.mocked(repository.upsertByDevice).mockResolvedValue({
      id: 'sessao-nova',
      token: 'token-novo',
      dispositivoId: '9df69a8e-7d7a-4a1d-a02c-2fd0a27177ca',
      loja: {
        id: '001',
        codigo: '001',
        nome: 'Filial Centro',
      },
    });

    const result = await service.createSession({
      qrLoja: 'LOJA:001',
      dispositivoId: '9df69a8e-7d7a-4a1d-a02c-2fd0a27177ca',
      correlationId: 'req-1',
    });

    expect(result.loja.codigo).toBe('001');
    expect(result.token).toBe('token-novo');
  });

  it('throws when the token does not match an active session', async () => {
    const repository = createRepositoryMock();
    const lojaRepository = createLojaRepositoryMock();
    const service = createSessaoService({
      logger: createLoggerMock(),
      sessaoRepository: repository,
      lojaRepository,
    });

    vi.mocked(repository.findActiveByToken).mockResolvedValue(null);

    await expect(service.requireSession('token-invalido')).rejects.toBeInstanceOf(
      SessaoInvalidaError,
    );
  });

  it('propagates store validation failures', async () => {
    const repository = createRepositoryMock();
    const lojaRepository = createLojaRepositoryMock();
    const service = createSessaoService({
      logger: createLoggerMock(),
      sessaoRepository: repository,
      lojaRepository,
    });

    vi.mocked(lojaRepository.findByCode).mockRejectedValue(new LojaNaoEncontradaError());

    await expect(
      service.createSession({
        qrLoja: 'LOJA:999',
        dispositivoId: '9df69a8e-7d7a-4a1d-a02c-2fd0a27177ca',
        correlationId: 'req-1',
      }),
    ).rejects.toBeInstanceOf(LojaNaoEncontradaError);
  });
});

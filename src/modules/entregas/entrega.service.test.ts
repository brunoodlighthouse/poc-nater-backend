import { describe, expect, it, vi } from 'vitest';
import { NenhumItemEntregueError } from '../../errors.js';
import type { DeliveryGateway } from '../../integrations/protheus/entregas.js';
import type { EntregadorRepository } from '../entregadores/entregador.repository.js';
import type { EntregaRepository } from './entrega.repository.js';
import { createEntregaService } from './entrega.service.js';

function createEntregadorRepositoryMock(): EntregadorRepository {
  return {
    listActive: vi.fn(),
    findByCode: vi.fn(),
  };
}

function createDeliveryGatewayMock(): DeliveryGateway {
  return {
    updateDelivery: vi.fn(),
  };
}

function createRepositoryMock(): EntregaRepository {
  return {
    findQueueDocumentByNumber: vi.fn(),
    listDeliveryHistory: vi.fn(),
    findOpenDeliveryByDocument: vi.fn(),
    findDeliveryById: vi.fn(),
    createDelivery: vi.fn(),
    cancelDelivery: vi.fn(),
    finalizeDelivery: vi.fn(),
    mapDetailResponse: vi.fn(),
  };
}

describe('createEntregaService', () => {
  it('starts re-delivery using only the pending balance from the document', async () => {
    const entregadorRepository = createEntregadorRepositoryMock();
    const deliveryGateway = createDeliveryGatewayMock();
    const repository = createRepositoryMock();
    const service = createEntregaService({
      entregadorRepository,
      deliveryGateway,
      entregaRepository: repository,
    });

    vi.mocked(repository.findQueueDocumentByNumber).mockResolvedValue({
      id: 'fila-1',
      lojaCodigo: '001',
      documentoNumero: '456789',
      documentoChave: '35240114200166000187550010000004561234567890',
      status: 'parcial',
      consultadoEm: new Date('2026-04-28T15:00:00.000Z'),
      payloadProtheus: {
        documento: '456789',
        tipo: 'NFCE',
        chaveAcesso: '35240114200166000187550010000004561234567890',
        cliente: {
          codigo: 'C0002',
          nome: 'Maria Souza',
          documento: '98765432100',
        },
        isVendaFutura: false,
        statusAtual: 'parcial',
        itens: [
          {
            id: '001',
            codigoProduto: 'PROD-7890',
            descricao: 'Semente Milho Safra Ouro',
            qtdTotal: 8,
            qtdEntregue: 3,
            unidade: 'SC',
          },
        ],
      },
    });
    vi.mocked(repository.findOpenDeliveryByDocument).mockResolvedValue(null);
    vi.mocked(repository.listDeliveryHistory).mockResolvedValue([
      {
        id: 'entrega-anterior',
        sessaoId: 'sessao-1',
        documentoNumero: '456789',
        entregadorCodigo: 'E0197',
        entregadorNome: 'Carlos Mota',
        status: 'finalizada_parcial',
        motivoPendencia: 'retirada_futura',
        iniciadaEm: new Date('2026-04-28T10:00:00.000Z'),
        finalizadaEm: new Date('2026-04-28T10:30:00.000Z'),
        itens: [
          {
            itemIdProtheus: '001',
            descricao: 'Semente Milho Safra Ouro',
            unidade: 'SC',
            qtdTotal: 8,
            qtdEntregue: 3,
          },
        ],
      },
    ]);
    vi.mocked(entregadorRepository.findByCode).mockResolvedValue({
      id: 'entregador-1',
      codigo: 'E0197',
      nome: 'Carlos Mota',
      ativo: true,
    });
    vi.mocked(repository.createDelivery).mockResolvedValue({
      id: 'entrega-1',
      documento: '456789',
      modo: 'reentrega',
      iniciadaEm: new Date('2026-04-28T15:01:00.000Z').toISOString(),
      entregador: {
        codigo: 'E0197',
        nome: 'Carlos Mota',
      },
      itens: [
        {
          itemIdProtheus: '001',
          descricao: 'Semente Milho Safra Ouro',
          unidade: 'SC',
          qtdTotal: 5,
          qtdEntregue: 0,
        },
      ],
    });

    await service.startDelivery({
      documento: '456789',
      entregadorCodigo: 'E0197',
      correlationId: 'req-1',
      sessao: {
        id: 'sessao-1',
        token: 'token',
        dispositivoId: 'device-1',
        loja: {
          id: '001',
          codigo: '001',
          nome: 'Filial Centro',
        },
      },
    });

    expect(repository.createDelivery).toHaveBeenCalledWith({
      sessaoId: 'sessao-1',
      documentoNumero: '456789',
      entregadorCodigo: 'E0197',
      entregadorNome: 'Carlos Mota',
      entregaAnteriorId: 'entrega-anterior',
      mode: 'reentrega',
      itens: [
        {
          itemIdProtheus: '001',
          descricao: 'Semente Milho Safra Ouro',
          unidade: 'SC',
          qtdTotal: 5,
        },
      ],
    });
  });

  it('rejects partial finalization when no item quantity is informed', async () => {
    const entregadorRepository = createEntregadorRepositoryMock();
    const deliveryGateway = createDeliveryGatewayMock();
    const repository = createRepositoryMock();
    const service = createEntregaService({
      entregadorRepository,
      deliveryGateway,
      entregaRepository: repository,
    });

    vi.mocked(repository.findDeliveryById).mockResolvedValue({
      id: 'entrega-1',
      lojaCodigo: '001',
      documentoNumero: '123456',
      entregadorCodigo: 'E0042',
      entregadorNome: 'Fredy Almeida',
      status: 'em_andamento',
      motivoPendencia: null,
      iniciadaEm: new Date('2026-04-28T15:01:00.000Z'),
      finalizadaEm: null,
      itens: [
        {
          itemIdProtheus: '001',
          descricao: 'Adubo NPK 10-10-10 - 50kg',
          unidade: 'SC',
          qtdTotal: 20,
          qtdEntregue: 0,
        },
      ],
    });
    vi.mocked(repository.findQueueDocumentByNumber).mockResolvedValue({
      id: 'fila-1',
      lojaCodigo: '001',
      documentoNumero: '123456',
      documentoChave: '35240114200166000187550010000001231234567890',
      status: 'pendente',
      consultadoEm: new Date('2026-04-28T15:00:00.000Z'),
      payloadProtheus: {
        documento: '123456',
        tipo: 'NFE',
        chaveAcesso: '35240114200166000187550010000001231234567890',
        cliente: {
          codigo: 'C0001',
          nome: 'Joao da Silva',
          documento: '12345678901',
        },
        isVendaFutura: false,
        statusAtual: 'pendente',
        itens: [
          {
            id: '001',
            codigoProduto: 'PROD-1234',
            descricao: 'Adubo NPK 10-10-10 - 50kg',
            qtdTotal: 20,
            qtdEntregue: 0,
            unidade: 'SC',
          },
        ],
      },
    });

    await expect(
      service.finalizeDelivery({
        entregaId: 'entrega-1',
        tipo: 'parcial',
        motivoPendencia: 'retirada_futura',
        itens: [
          {
            itemIdProtheus: '001',
            qtdEntregue: 0,
          },
        ],
        correlationId: 'req-1',
        sessao: {
          id: 'sessao-1',
          token: 'token',
          dispositivoId: 'device-1',
          loja: {
            id: '001',
            codigo: '001',
            nome: 'Filial Centro',
          },
        },
      }),
    ).rejects.toBeInstanceOf(NenhumItemEntregueError);

    expect(deliveryGateway.updateDelivery).not.toHaveBeenCalled();
    expect(repository.finalizeDelivery).not.toHaveBeenCalled();
  });
});

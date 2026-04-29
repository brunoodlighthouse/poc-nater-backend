import { config } from '../../config.js';
import { ProtheusIndisponivelError } from '../../errors.js';
import { protheusRequest } from './client.js';

export type ProtheusDeliveryUpdateItem = {
  id: string;
  qtdEntregue: number;
};

export type ProtheusDeliveryUpdateInput = {
  documento: string;
  chaveAcesso: string;
  filial: string;
  entregadorCodigo: string;
  entregadorNome: string;
  tipoEntrega: 'total' | 'parcial';
  motivoPendencia?: 'retirada_futura' | 'entrega_futura';
  idempotencyKey: string;
  correlationId: string;
  itens: ProtheusDeliveryUpdateItem[];
};

export type DeliveryGateway = {
  updateDelivery(input: ProtheusDeliveryUpdateInput): Promise<void>;
};

export function createDeliveryGateway(): DeliveryGateway {
  if (config.PROTHEUS_MOCK_ENABLED) {
    return {
      async updateDelivery() {
        // Mock: simula resposta de sucesso do Protheus sem alterar o estado do mock,
        // mantendo os dados originais do ERP intocados.
      },
    };
  }

  return {
    async updateDelivery(input) {
      const response = await protheusRequest({
        method: 'POST',
        path: 'entregas/v1/entrega/atualizar',
        body: {
          documento: input.documento,
          filial: input.filial,
          entregador: input.entregadorCodigo,
          tipoEntrega: input.tipoEntrega,
          motivoPendencia: input.motivoPendencia,
          idempotencyKey: input.idempotencyKey,
          itens: input.itens,
        },
        correlationId: input.correlationId,
      });

      // 409 = idempotency confirmed, treat as success
      if (response.status === 409) {
        return;
      }

      if (!response.ok) {
        throw new ProtheusIndisponivelError();
      }
    },
  };
}

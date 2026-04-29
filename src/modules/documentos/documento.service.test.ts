import { describe, expect, it, vi } from 'vitest';
import { DocumentoInvalidoError } from '../../errors.js';
import { createDocumentoService } from './documento.service.js';
import type { DocumentoRepository } from './documento.repository.js';

function createRepositoryMock(): DocumentoRepository {
  return {
    findDocumentByAccessKey: vi.fn(),
    findInQueueByChave: vi.fn(),
    saveToQueue: vi.fn(),
  };
}

describe('createDocumentoService', () => {
  it('extracts the 44-digit access key from QR code payloads', async () => {
    const repository = createRepositoryMock();
    const service = createDocumentoService({
      documentoRepository: repository,
    });

    vi.mocked(repository.findDocumentByAccessKey).mockResolvedValue({
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
      itens: [],
    });
    vi.mocked(repository.saveToQueue).mockResolvedValue({
      documento: '123456',
      tipo: 'NFE',
      chaveAcesso: '35240114200166000187550010000001231234567890',
      cliente: {
        codigo: 'C0001',
        nome: 'Joao da Silva',
        documento: '12345678901',
      },
      statusAtual: 'pendente',
      itens: [],
      consultadoEm: new Date().toISOString(),
    });

    await service.consultDocument({
      codigoLido:
        'https://www.sefaz.rs.gov.br/NFCE/NFCE-COM.aspx?p=35240114200166000187550010000001231234567890|2|1|1',
      formato: 'qrcode',
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

    expect(repository.findDocumentByAccessKey).toHaveBeenCalledWith({
      chaveAcesso: '35240114200166000187550010000001231234567890',
      filial: '001',
      correlationId: 'req-1',
    });
  });

  it('rejects barcodes that do not contain a 44-digit access key', async () => {
    const repository = createRepositoryMock();
    const service = createDocumentoService({
      documentoRepository: repository,
    });

    await expect(
      service.consultDocument({
        codigoLido: '12345',
        formato: 'barcode',
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
    ).rejects.toBeInstanceOf(DocumentoInvalidoError);
  });
});

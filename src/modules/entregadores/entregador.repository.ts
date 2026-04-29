import { prisma } from '../../db/connection.js';
import { EntregadorNaoEncontradoError } from '../../errors.js';

export type EntregadorRecord = {
  id: string;
  codigo: string;
  nome: string;
  ativo: boolean;
};

function mapEntregador(entry: {
  id: string;
  codigo: string;
  nome: string;
  ativo: boolean;
}): EntregadorRecord {
  return { id: entry.id, codigo: entry.codigo, nome: entry.nome, ativo: entry.ativo };
}

export function createEntregadorRepository() {
  return {
    async listActive(): Promise<EntregadorRecord[]> {
      const rows = await prisma.entregador.findMany({
        where: { ativo: true },
        orderBy: { nome: 'asc' },
      });
      return rows.map(mapEntregador);
    },

    async findByCode(codigo: string): Promise<EntregadorRecord> {
      const row = await prisma.entregador.findFirst({
        where: { codigo, ativo: true },
      });
      if (!row) throw new EntregadorNaoEncontradoError();
      return mapEntregador(row);
    },
  };
}

export type EntregadorRepository = ReturnType<typeof createEntregadorRepository>;

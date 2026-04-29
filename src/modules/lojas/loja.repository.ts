import { prisma } from '../../db/connection.js';
import { LojaNaoEncontradaError } from '../../errors.js';

export type LojaRecord = {
  id: string;
  codigo: string;
  nome: string;
  ativa: boolean;
};

function mapLoja(entry: { id: string; codigo: string; nome: string; ativa: boolean }): LojaRecord {
  return { id: entry.id, codigo: entry.codigo, nome: entry.nome, ativa: entry.ativa };
}

export function createLojaRepository() {
  return {
    async listActive(): Promise<LojaRecord[]> {
      const rows = await prisma.loja.findMany({
        where: { ativa: true },
        orderBy: { nome: 'asc' },
      });
      return rows.map(mapLoja);
    },

    async findByCode(codigo: string): Promise<LojaRecord> {
      const row = await prisma.loja.findFirst({
        where: { codigo: codigo.toUpperCase(), ativa: true },
      });
      if (!row) throw new LojaNaoEncontradaError();
      return mapLoja(row);
    },
  };
}

export type LojaRepository = ReturnType<typeof createLojaRepository>;

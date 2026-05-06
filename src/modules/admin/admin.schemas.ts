import { z } from 'zod';

export const adminLoginSchema = z.object({
  lojaCodigo: z.string().trim().min(1),
  senha: z.string().min(1),
});

export const adminDocumentoNumeroParamSchema = z.object({
  documentoNumero: z.string().trim().min(1),
});

export const adminEntregaIdParamSchema = z.object({
  id: z.string().uuid(),
});

export const adminEditarEntregaSchema = z
  .object({
    status: z.enum(['finalizada_total', 'finalizada_parcial', 'cancelada']).optional(),
    itens: z
      .array(
        z.object({
          itemIdProtheus: z.string().trim().min(1),
          qtdEntregue: z.number().finite().nonnegative(),
        }),
      )
      .min(1)
      .optional(),
    motivo: z.string().trim().min(10).max(500),
  })
  .refine((d) => d.status !== undefined || d.itens !== undefined, {
    message: 'Pelo menos status ou itens devem ser informados',
  });

// --- Lojas ---

export const adminCriarLojaSchema = z.object({
  codigo: z.string().trim().min(1).max(20).toUpperCase(),
  nome: z.string().trim().min(2).max(200),
  adminSenha: z.string().min(6).max(100),
});

export const adminEditarLojaSchema = z
  .object({
    nome: z.string().trim().min(2).max(200).optional(),
    ativa: z.boolean().optional(),
    adminSenha: z.string().min(6).max(100).optional(),
  })
  .refine((d) => d.nome !== undefined || d.ativa !== undefined || d.adminSenha !== undefined, {
    message: 'Pelo menos um campo deve ser informado',
  });

export const adminLojaIdParamSchema = z.object({
  id: z.string().uuid(),
});

// --- Entregadores ---

export const adminCriarEntregadorSchema = z.object({
  codigo: z.string().trim().min(1).max(50),
  nome: z.string().trim().min(2).max(200),
});

export const adminEditarEntregadorSchema = z
  .object({
    nome: z.string().trim().min(2).max(200).optional(),
    ativo: z.boolean().optional(),
  })
  .refine((d) => d.nome !== undefined || d.ativo !== undefined, {
    message: 'Pelo menos um campo deve ser informado',
  });

export const adminEntregadorIdParamSchema = z.object({
  id: z.string().uuid(),
});

export const adminDocumentoListSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  perPage: z.coerce.number().int().min(1).max(100).default(20),
  status: z.enum(['pendente', 'parcial', 'finalizado', 'cancelado']).optional(),
  search: z.string().trim().max(200).optional(),
  sortBy: z
    .enum(['consultadoEm', 'documentoNumero', 'clienteNome', 'status'])
    .default('consultadoEm'),
  sortOrder: z.enum(['asc', 'desc']).default('desc'),
});

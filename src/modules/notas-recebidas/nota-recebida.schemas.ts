import { z } from 'zod';

export const webhookNotaSchema = z.object({
  lojaCodigo: z.string().min(1).max(20),
  documentoNumero: z.string().min(1).max(50),
  chaveAcesso: z.string().min(1).max(100),
  clienteNome: z.string().min(1).max(200),
  clienteDocumento: z.string().min(1).max(20),
  tipoDocumento: z.enum(['NFE', 'NFCE']),
  qtdItens: z.number().int().min(1),
  valorTotal: z.number().min(0),
  payload: z.record(z.string(), z.unknown()).optional().default({}),
});

export type WebhookNotaInput = z.infer<typeof webhookNotaSchema>;

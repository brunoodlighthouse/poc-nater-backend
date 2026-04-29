import { z } from 'zod';

export const consultaDocumentoSchema = z.object({
  codigoLido: z.string().min(1).max(500),
  formato: z.enum(['qrcode', 'barcode', 'numero']),
});

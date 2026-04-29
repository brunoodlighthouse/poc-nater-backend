import { z } from 'zod';
export const documentoParamSchema = z.object({
    documento: z.string().trim().min(1),
});
export const entregaIdParamSchema = z.object({
    id: z.string().uuid(),
});
export const iniciarEntregaSchema = z.object({
    documento: z.string().trim().min(1),
    entregadorCodigo: z.string().trim().min(1),
});
export const finalizarEntregaSchema = z.discriminatedUnion('tipo', [
    z.object({
        tipo: z.literal('total'),
    }),
    z.object({
        tipo: z.literal('parcial'),
        motivoPendencia: z.enum(['retirada_futura', 'entrega_futura']),
        itens: z
            .array(z.object({
            itemIdProtheus: z.string().trim().min(1),
            qtdEntregue: z.number().finite().nonnegative(),
        }))
            .min(1),
    }),
]);
//# sourceMappingURL=entrega.schemas.js.map
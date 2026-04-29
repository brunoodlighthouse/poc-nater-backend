import { z } from 'zod';
export declare const documentoParamSchema: z.ZodObject<{
    documento: z.ZodString;
}, z.core.$strip>;
export declare const entregaIdParamSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export declare const iniciarEntregaSchema: z.ZodObject<{
    documento: z.ZodString;
    entregadorCodigo: z.ZodString;
}, z.core.$strip>;
export declare const finalizarEntregaSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    tipo: z.ZodLiteral<"total">;
}, z.core.$strip>, z.ZodObject<{
    tipo: z.ZodLiteral<"parcial">;
    motivoPendencia: z.ZodEnum<{
        retirada_futura: "retirada_futura";
        entrega_futura: "entrega_futura";
    }>;
    itens: z.ZodArray<z.ZodObject<{
        itemIdProtheus: z.ZodString;
        qtdEntregue: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>], "tipo">;
//# sourceMappingURL=entrega.schemas.d.ts.map
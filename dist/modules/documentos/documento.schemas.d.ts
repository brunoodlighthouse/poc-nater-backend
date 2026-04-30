import { z } from 'zod';
export declare const consultaDocumentoSchema: z.ZodObject<{
    codigoLido: z.ZodString;
    formato: z.ZodEnum<{
        qrcode: "qrcode";
        barcode: "barcode";
        numero: "numero";
    }>;
}, z.core.$strip>;
//# sourceMappingURL=documento.schemas.d.ts.map
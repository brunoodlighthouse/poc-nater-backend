import { z } from 'zod';
export const createSessaoSchema = z.object({
    qrLoja: z.string().min(1).max(200),
    dispositivoId: z.string().uuid(),
});
//# sourceMappingURL=sessao.schemas.js.map
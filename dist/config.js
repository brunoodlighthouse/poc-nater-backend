import 'dotenv/config';
import { z } from 'zod';
const envSchema = z.object({
    PORT: z.coerce.number().int().positive().default(3000),
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    ALLOWED_ORIGIN: z.string().url().default('http://localhost:5173'),
    DATABASE_URL: z.string().min(1, 'DATABASE_URL obrigatoria'),
    PROTHEUS_BASE_URL: z.string().url().default('https://protheus.exemplo.com.br/rest'),
    PROTHEUS_USER: z.string().default(''),
    PROTHEUS_PASSWORD: z.string().default(''),
    PROTHEUS_TIMEOUT_MS: z.coerce.number().int().positive().default(8000),
    PROTHEUS_MAX_RETRIES: z.coerce.number().int().positive().default(3),
    PROTHEUS_CB_THRESHOLD: z.coerce.number().int().positive().default(5),
    PROTHEUS_CB_WINDOW_MS: z.coerce.number().int().positive().default(30000),
    PROTHEUS_MOCK_ENABLED: z
        .enum(['true', 'false'])
        .optional()
        .transform((value) => value !== 'false'),
    SESSAO_EXPIRACAO_DIAS: z.coerce.number().int().positive().default(90),
});
export const config = envSchema.parse(process.env);
//# sourceMappingURL=config.js.map
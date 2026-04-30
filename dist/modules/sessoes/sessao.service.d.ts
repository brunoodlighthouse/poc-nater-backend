import type { LojaRepository } from '../lojas/loja.repository.js';
import type { CreateSessaoInput, SessaoAtualResponse, SessaoContext, SessaoResponse } from './sessao.types.js';
import type { SessaoRepository } from './sessao.repository.js';
type SessaoServiceDependencies = {
    logger: {
        info(context: Record<string, string>, message: string): void;
    };
    sessaoRepository: SessaoRepository;
    lojaRepository: LojaRepository;
};
export declare function createSessaoService({ logger, sessaoRepository, lojaRepository, }: SessaoServiceDependencies): {
    createSession(input: CreateSessaoInput): Promise<SessaoResponse>;
    getCurrentSession(token: string): Promise<SessaoAtualResponse>;
    requireSession: (token: string) => Promise<SessaoContext>;
};
export type SessaoService = ReturnType<typeof createSessaoService>;
export {};
//# sourceMappingURL=sessao.service.d.ts.map
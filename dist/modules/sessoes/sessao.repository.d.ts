import type { SessaoContext } from './sessao.types.js';
export declare function createSessaoRepository(): {
    upsertByDevice(input: {
        token: string;
        dispositivoId: string;
        lojaCodigo: string;
        lojaNome: string;
    }): Promise<SessaoContext>;
    findActiveByToken(token: string): Promise<SessaoContext | null>;
    touchActivity(id: string): Promise<void>;
};
export type SessaoRepository = ReturnType<typeof createSessaoRepository>;
//# sourceMappingURL=sessao.repository.d.ts.map
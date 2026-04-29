import type { FilaDocumento } from './fila.types.js';
export declare function createFilaRepository(): {
    listRecentBySession(sessaoId: string): Promise<FilaDocumento[]>;
};
export type FilaRepository = ReturnType<typeof createFilaRepository>;
//# sourceMappingURL=fila.repository.d.ts.map
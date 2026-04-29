import type { FilaRepository } from './fila.repository.js';
type FilaServiceDependencies = {
    filaRepository: FilaRepository;
};
export declare function createFilaService({ filaRepository }: FilaServiceDependencies): {
    listQueue(sessaoId: string): Promise<import("./fila.types.js").FilaDocumento[]>;
};
export type FilaService = ReturnType<typeof createFilaService>;
export {};
//# sourceMappingURL=fila.service.d.ts.map
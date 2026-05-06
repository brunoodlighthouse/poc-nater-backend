import type { FastifyInstance } from 'fastify';
import type { AdminController } from './admin.controller.js';
type AdminRoutesOptions = {
    controller: AdminController;
};
export declare function registerAdminRoutes(app: FastifyInstance, options: AdminRoutesOptions): Promise<void>;
export {};
//# sourceMappingURL=admin.routes.d.ts.map
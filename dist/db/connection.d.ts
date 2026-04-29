import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
export declare const prisma: PrismaClient<import("@prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
export declare function healthCheckDb(): Promise<boolean>;
//# sourceMappingURL=connection.d.ts.map
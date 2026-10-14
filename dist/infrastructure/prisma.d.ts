import { Pool } from "pg";
export declare const pool: Pool;
export declare const prisma: import("../generated/prisma/internal/class").PrismaClient<never, import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined, import("@prisma/client/runtime/client").DefaultArgs>;
export declare function disconnectDatabase(): Promise<void>;

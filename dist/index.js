"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectDatabase = exports.pool = exports.prisma = void 0;
var prisma_1 = require("./infrastructure/prisma");
Object.defineProperty(exports, "prisma", { enumerable: true, get: function () { return prisma_1.prisma; } });
Object.defineProperty(exports, "pool", { enumerable: true, get: function () { return prisma_1.pool; } });
Object.defineProperty(exports, "disconnectDatabase", { enumerable: true, get: function () { return prisma_1.disconnectDatabase; } });
//# sourceMappingURL=index.js.map
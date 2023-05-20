// app/utils/prisma.server.ts
import { PrismaClient } from '@prisma/client';

// eslint-disable-next-line import/no-mutable-exports
let prisma: PrismaClient;
declare global {
  // eslint-disable-next-line vars-on-top, no-var
  var prismaDb: PrismaClient | undefined;
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
  prisma.$connect();
} else {
  if (!global.prismaDb) {
    global.prismaDb = new PrismaClient();
    global.prismaDb.$connect();
  }
  prisma = global.prismaDb;
}

export { prisma };

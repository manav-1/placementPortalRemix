import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function seed() {
  const email = 'manav81101@gmail.com';
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });
  const hashedPassword = await bcrypt.hash('manav123', 10);

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name: 'Manav',
      role: 'SUPER_ADMIN',
      mobile: '8745007937',
    },
  });
  await prisma.stream.deleteMany({});
  await prisma.stream.createMany({
    data: [
      {
        name: 'Web Development',
      },
      {
        name: 'ABC',
      },
      {
        name: 'DEF',
      },
      {
        name: 'GHI',
      },
      {
        name: 'JKL',
      },
    ],
  });
}

seed()
  .catch((e) => {
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

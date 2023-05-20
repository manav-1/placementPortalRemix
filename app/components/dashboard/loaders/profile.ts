import { json, type LoaderFunction } from '@remix-run/server-runtime';
import { prisma } from 'prisma/prisma.server';
import { getUserPermissions } from '~/utils/auth/auth.server';

export const ProfileLoader: LoaderFunction = async ({ request }) => {
  const { id: userId } = await getUserPermissions(request);
  const userProfile = await prisma.userProfile.findUnique({
    where: { userId },
  });

  const streams = await prisma.stream.findMany({});

  const projects = await prisma.project.findMany({
    where: {
      createdBy: {
        user: {
          id: userId,
        },
      },
    },
  });
  const portfolios = await prisma.portfolio.findMany({
    where: {
      createdBy: {
        user: {
          id: userId,
        },
      },
    },
  });

  return json({ userProfile, streams, projects, portfolios });
};

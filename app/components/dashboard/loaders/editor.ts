import { UserRole } from '@prisma/client';
import { json, type LoaderFunction } from '@remix-run/node';
import { prisma } from 'prisma/prisma.server';
import { getUserPermissions } from '~/utils/auth/auth.server';

export const EditorLoader: LoaderFunction = async ({ request }) => {
  await getUserPermissions(request, [
    UserRole.SUPER_ADMIN,
    UserRole.ADMIN,
    UserRole.SUB_ADMIN,
  ]);

  const emailTemplates = await prisma.emailTemplates.findMany({});

  return json({
    emailTemplates,
  });
};

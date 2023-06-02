import { UserRole } from '@prisma/client';
import { json, type LoaderFunction } from '@remix-run/node';
import { prisma } from 'prisma/prisma.server';
import { getUserPermissions } from '~/utils/auth/auth.server';

export const contactsLoader: LoaderFunction = async ({ request }) => {
  try {
    const user = await getUserPermissions(request, [
      UserRole.SUPER_ADMIN,
      UserRole.ADMIN,
      UserRole.SUB_ADMIN,
    ]);
    const currentURL = new URL(request.url);
    const page = Number(currentURL.searchParams.get('page') || '1');
    const search = currentURL.searchParams.get('search') || '';
    const perPage = 15;
    const offset = (page - 1) * perPage;
    const totalCount = await prisma.hRContact.count();
    const totalPages = Math.ceil(totalCount / perPage);
    const contacts = await prisma.hRContact.findMany({
      skip: offset,
      take: perPage,
      where: {
        OR: [
          { company: { contains: search, mode: 'insensitive' } },
          { name: { contains: search, mode: 'insensitive' } },
          { email: { contains: search, mode: 'insensitive' } },
          { mobile: { contains: search, mode: 'insensitive' } },
          { position: { contains: search, mode: 'insensitive' } },
          {
            addedBy: {
              name: { contains: search, mode: 'insensitive' },
            },
          },
        ],
      },
      include: {
        addedBy: {
          select: {
            name: true,
          },
        },
      },
    });

    const templates = await prisma.emailTemplates.findMany();
    return json({
      ...user,
      contacts,
      templates: templates.map((item) => ({
        label: item.name,
        value: item.id,
      })),
      pagination: {
        page,
        perPage,
        totalPages,
      },
    });
  } catch (error) {
    return json({ error });
  }
};

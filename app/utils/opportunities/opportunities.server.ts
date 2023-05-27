import Handlebars from 'handlebars';
import { prisma } from 'prisma/prisma.server';
import { loadTemplate, sendmail } from '../mail/mail.server';

export const applyForOpportunity = async (
  userId: string,
  opportunityId: string,
) => {
  const opportunity = await prisma.opportunity.findFirst({
    where: {
      id: opportunityId,
    },
  });
  if (!opportunity) {
    throw new Response('Not Found', {
      status: 404,
      statusText: 'No opportunity found for this id',
    });
  }
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });
  if (!user) {
    throw new Response('Not Found', {
      status: 404,
      statusText: 'No user found for this id',
    });
  }

  const data = await loadTemplate(
    'https://d21irt8vy9p0p5.cloudfront.net/mail-templates/opportunity/index.html',
  );
  const template = Handlebars.compile(data);
  const htmlData = template({
    userName: user.name,
    opportunityName: opportunity.name,
    companyName: opportunity.company,
    companyURL: opportunity.url,
  });
  await sendmail({
    html: htmlData,
    subject: `Application for ${opportunity.name} at ${opportunity.company} submitted successfully`,
    from: 'workhubportal23@gmail.com',
    to: user.email,
  });

  const application = await prisma.opportunityUserLink.create({
    data: {
      opportunityId,
      userId,
    },
  });

  return application;
};

import { prisma } from 'prisma/prisma.server';
import { json } from '@remix-run/node';
import type { AddOpportunityType, ContactType, UpdateUserType } from './types';
import { loadTemplate, sendmail } from '../mail/mail.server';

export const createContact = async (contactData: ContactType) => {
  const contact = await prisma.hRContact.create({ data: contactData });
  return contact;
};

export const createOpportunity = async (
  opportunityData: AddOpportunityType,
  addedById: string,
) => {
  const opportunityD = { ...opportunityData, streams: undefined };
  const opportunity = await prisma.opportunity.create({
    data: {
      ...opportunityD,
      addedBy: {
        connect: {
          id: addedById,
        },
      },
    },
  });

  const streams = await prisma.opportunityStreamLink.createMany({
    data: opportunityData.streams.map((stream) => ({
      streamId: stream,
      opportunityId: opportunity.id,
    })),
  });
  return json({
    opportunity,
    streams,
  });
};

export const updateUser = async (userData: UpdateUserType, id: string) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: userData,
    select: {
      id: true,
    },
  });
  return user;
};

export const deleteContact = async (contactId: string, userId: string) => {
  if (!contactId) throw new Response('Contact Id is required', { status: 400 });
  const contact = await prisma.hRContact.findUnique({
    where: {
      id: contactId,
    },
  });
  if (!contact) throw new Response('Contact not found', { status: 404 });
  if (contact.addedById !== userId)
    throw new Response('You are not allowed to delete this contact', {
      status: 401,
    });
  return prisma.hRContact.delete({
    where: {
      id: contactId,
    },
  });
};

export const sendEmailToContact = async (
  contactId: string,
  templateId: string,
  subject: string,
) => {
  const contact = await prisma.hRContact.findUnique({
    where: {
      id: contactId,
    },
  });
  if (!contact) throw new Response('Contact not found', { status: 404 });
  const template = await prisma.emailTemplates.findUnique({
    where: {
      id: templateId,
    },
  });
  if (!template) throw new Response('Template not found', { status: 404 });
  const { name, company } = contact;

  const data = await loadTemplate(`${template.url}.html`);
  const handlebarTemplate = Handlebars.compile(data);
  const htmlData = handlebarTemplate({
    name,
    company,
  });
  await sendmail({
    html: htmlData,
    subject,
    from: 'workhubportal23@gmail.com',
    to: contact.email,
  });

  return json({
    message: 'Email sent successfully',
  });
};

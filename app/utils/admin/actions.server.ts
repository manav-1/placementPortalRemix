import { redirect, type ActionFunction } from '@remix-run/node';
import type { OpportunityType } from '@prisma/client';
import { UserRole } from '@prisma/client';
import { getUserPermissions } from '../auth/auth.server';
import { AddOpportunitySchema, ContactSchema, UpdateUserSchema } from './types';
import {
  createContact,
  createOpportunity,
  deleteContact,
  sendEmailToContact,
  updateUser,
} from './admin.server';

export const ContactAction: ActionFunction = async ({ request }) => {
  try {
    const { id } = await getUserPermissions(request, [
      UserRole.SUPER_ADMIN,
      UserRole.ADMIN,
      UserRole.SUB_ADMIN,
    ]);
    const form = await request.formData();

    const name = form.get('name') as string;
    const email = form.get('email') as string;
    const mobile = form.get('mobile') as string;
    const position = form.get('position') as string;
    const company = form.get('company') as string;
    const contactData = {
      name,
      email,
      mobile,
      position,
      company,
      addedById: id,
    };

    ContactSchema.parse(contactData);
    const contact = await createContact(contactData);
    return contact;
  } catch (e: any) {
    if (e.code === 'P2002')
      return new Response('Contact already exists', {
        status: 409,
      });
    throw new Response('Something went wrong', {
      status: 500,
    });
  }
};

export const AddOpportunityAction: ActionFunction = async ({ request }) => {
  const { id } = await getUserPermissions(request, [
    UserRole.ADMIN,
    UserRole.SUPER_ADMIN,
    UserRole.SUB_ADMIN,
  ]);
  const form = await request.formData();

  const name = form.get('name') as string;
  const company = form.get('company') as string;
  const description = form.get('description') as string;
  const url = form.get('url') as string;
  const companyImage = form.get('companyImage') as string;
  const linkedin = form.get('linkedin') as string;
  const jobDesc = form.get('jobDesc') as string;
  const deadline = form.get('deadline') as string;
  const type = form.get('type') as OpportunityType;
  const isActive = form.get('isActive') as string;
  const streams = form.get('streams') as string;

  const opportunityData: any = {
    name,
    company,
    description,
    url,
    companyImage,
    linkedin,
    jobDesc,
    deadline: new Date(deadline),
    type,
    isActive: isActive === 'true',
    streams: streams.split(',').map((s) => String(s)),
  };

  AddOpportunitySchema.parse(opportunityData);
  const opportunity = await createOpportunity(opportunityData, id);
  return opportunity;
};

export const UpdateUserAction: ActionFunction = async ({ request }) => {
  if (request.method === 'PUT') {
    await getUserPermissions(request, [
      UserRole.ADMIN,
      UserRole.SUPER_ADMIN,
      UserRole.SUB_ADMIN,
    ]);
    const form = await request.formData();

    const userId = form.get('id') as string;
    const name = form.get('name') as string;
    const email = form.get('email') as string;
    const role = form.get('role') as UserRole;
    const mobile = form.get('mobile') as string;
    const isActive = form.get('isActive') as string;

    if (
      !(
        role === UserRole.ADMIN ||
        role === UserRole.USER ||
        role === UserRole.SUB_ADMIN
      )
    )
      throw new Response('Invalid Role', { status: 400 });
    const userData = {
      name,
      email,
      mobile,
      role,
      isActive: isActive === 'true',
    };

    if (!userId) throw new Response('User Id is required', { status: 400 });

    UpdateUserSchema.parse(userData);

    await updateUser(userData, userId);
    return redirect('/dashboard/admin/');
  }
  throw new Response('Method not allowed', { status: 405 });
};

export const ContactEmailAction: ActionFunction = async ({
  request,
  params,
}) => {
  const { id } = await getUserPermissions(request, [
    UserRole.SUPER_ADMIN,
    UserRole.ADMIN,
    UserRole.SUB_ADMIN,
  ]);
  const { contactId } = params;
  const { searchParams } = new URL(request.url);
  const templateId = searchParams.get('templateId');
  const subject = searchParams.get('subject');
  if (!contactId) throw new Response('Contact Id is required', { status: 400 });
  if (request.method === 'DELETE') await deleteContact(contactId, id);
  else if (request.method === 'POST') {
    if (!templateId || !subject)
      throw new Response('Proper params not sent', { status: 400 });
    await sendEmailToContact(contactId, templateId, subject);
  } else throw new Response('Method not allowed', { status: 405 });
  return redirect('/dashboard/admin/');
};

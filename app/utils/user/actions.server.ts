import { redirect, type ActionFunction } from '@remix-run/node';
import type { LinkType } from '@prisma/client';
import { getUserPermissions } from '../auth/auth.server';
import { PortfolioSchema, ProjectSchema, UserProfileSchema } from './types';
import {
  addPortfolio,
  addProject,
  createUserProfile,
  deletePortfolio,
  deleteProject,
} from './user.server';

export const ProfileAction: ActionFunction = async ({ request }) => {
  const { id: userId } = await getUserPermissions(request);

  const form = await request.formData();

  const firstName = form.get('firstName') as string;
  const lastName = form.get('lastName') as string;
  const streamId = form.get('streamId') as string;
  const marks10 = Number(form.get('marks10'));
  const marks12 = Number(form.get('marks12'));
  const marksGrad = Number(form.get('marksGrad'));
  const marksPost = Number(form.get('marksPost'));
  const resume = form.get('resume') as string;

  const userProfile = {
    firstName,
    lastName,
    streamId,
    marks10,
    marks12,
    marksGrad,
    marksPost,
    resume,
    userId,
  };
  UserProfileSchema.parse(userProfile);
  const data = await createUserProfile(userProfile);

  return data;
};

export const AddProjects: ActionFunction = async ({ request }) => {
  const { id: userId } = await getUserPermissions(request);
  const formData = await request.formData();
  const projectURL = formData.get('projectURL') as string;
  const projectType = formData.get('projectType') as LinkType;
  const projectName = formData.get('projectName') as string;

  const project = {
    userId,
    projectURL,
    projectType,
    projectName,
  };
  ProjectSchema.parse(project);
  await addProject(project);

  return redirect('/dashboard/profile');
};

export const AddPortfolio: ActionFunction = async ({ request }) => {
  const { id: userId } = await getUserPermissions(request);
  const formData = await request.formData();
  const portfolioURL = formData.get('portfolioURL') as string;
  const portfolioType = formData.get('portfolioType') as LinkType;
  const portfolio = { userId, portfolioURL, portfolioType };
  PortfolioSchema.parse(portfolio);
  await addPortfolio(portfolio);

  return redirect('/dashboard/profile');
};

export const DeletePortfolio: ActionFunction = async ({ request, params }) => {
  try {
    await getUserPermissions(request);
    const { id: portfolioId } = params;
    await deletePortfolio(portfolioId);
    return redirect('/dashboard/profile');
  } catch (e) {
    return redirect('/dashboard/profile');
  }
};

export const DeleteProject: ActionFunction = async ({ request, params }) => {
  try {
    await getUserPermissions(request);
    const { id: projectId } = params;
    await deleteProject(projectId);
    return redirect('/dashboard/profile');
  } catch (e) {
    return redirect('/dashboard/profile');
  }
};

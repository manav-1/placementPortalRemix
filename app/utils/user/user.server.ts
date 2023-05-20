import { prisma } from 'prisma/prisma.server';
import type { LinkType, Prisma } from '@prisma/client';
import type { UserProfile } from './types';

export const createUserProfile = async (userProfile: UserProfile) => {
  const { userId, streamId, ...rest } = userProfile;
  const data = {
    ...rest,
    stream: {
      connect: { id: streamId },
    },
    user: {
      connect: { id: userId },
    },
  };
  const userProfileData = await prisma.userProfile.upsert({
    where: { userId },
    update: data,
    create: data,
  });
  return userProfileData;
};

export const addProject = async ({
  userId,
  projectURL,
  projectType,
  projectName,
}: {
  userId: string;
  projectURL: string;
  projectType: LinkType;
  projectName: string;
}) => {
  const data: Prisma.ProjectCreateInput = {
    url: projectURL,
    type: projectType,
    name: projectName,
    createdBy: {
      connect: { userId },
    },
  };
  const projectData = await prisma.project.create({
    data,
  });
  return projectData;
};

export const addPortfolio = async ({
  userId,
  portfolioURL,
  portfolioType,
}: {
  userId: string;
  portfolioURL: string;
  portfolioType: LinkType;
}) => {
  const data: Prisma.PortfolioCreateInput = {
    url: portfolioURL,
    type: portfolioType,
    createdBy: {
      connect: { userId },
    },
  };
  const portfolioData = await prisma.portfolio.create({
    data,
  });
  return portfolioData;
};

export const deleteProject = async (projectId: string | undefined) => {
  const data = await prisma.project.delete({
    where: { id: projectId },
  });
  return data;
};

export const deletePortfolio = async (portfolioId: string | undefined) => {
  const data = await prisma.portfolio.delete({
    where: { id: portfolioId },
  });
  return data;
};

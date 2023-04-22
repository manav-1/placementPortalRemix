import { LinkType } from "@prisma/client";
import { z } from "zod";

export const UserProfileSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  streamId: z.string(),
  marks10: z.number(),
  marks12: z.number(),
  marksGrad: z.number().optional(),
  marksPost: z.number().optional(),
  resume: z.string(),
  userId: z.string(),
});

export const ProjectSchema = z.object({
  projectURL: z.string().url(),
  projectType: z.union([
    z.literal(LinkType.LINKEDIN),
    z.literal(LinkType.GITHUB),
    z.literal(LinkType.WEBSITE),
    z.literal(LinkType.PROJECT),
    z.literal(LinkType.BEHANCE),
    z.literal(LinkType.OTHER),
  ]),
  projectName: z.string(),
});

export const PortfolioSchema = z.object({
  portfolioURL: z.string().url(),
  projectType: z.union([
    z.literal(LinkType.LINKEDIN),
    z.literal(LinkType.GITHUB),
    z.literal(LinkType.WEBSITE),
    z.literal(LinkType.PROJECT),
    z.literal(LinkType.BEHANCE),
    z.literal(LinkType.OTHER),
  ]),
});

export type UserProfile = z.infer<typeof UserProfileSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type Portfolio = z.infer<typeof PortfolioSchema>;

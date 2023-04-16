import { z } from "zod";

export const UserProfileSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  streamId: z.string(),
  marks10: z.number(),
  marks12: z.number(),
  marksGrad: z.number(),
  marksPost: z.number(),
  resume: z.string(),
  userId: z.string(),
});

export const ProjectSchema = z.object({
  projectURL: z.string().url(),
  projectType: z.union([
    z.literal("LINKEDIN"),
    z.literal("GITHUB"),
    z.literal("WEBSITE"),
    z.literal("PROJECT"),
    z.literal("BEHANCE"),
    z.literal("OTHER"),
  ]),
  projectName: z.string(),
});

export const PortfolioSchema = z.object({
  portfolioURL: z.string().url(),
  portfolioType: z.union([
    z.literal("LINKEDIN"),
    z.literal("GITHUB"),
    z.literal("WEBSITE"),
    z.literal("PROJECT"),
    z.literal("BEHANCE"),
    z.literal("OTHER"),
  ]),
});

export type UserProfile = z.infer<typeof UserProfileSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type Portfolio = z.infer<typeof PortfolioSchema>;

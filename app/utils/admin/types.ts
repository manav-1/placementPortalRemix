import { OpportunityType } from "@prisma/client";
import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  mobile: z.string().optional(),
  position: z.string(),
  company: z.string(),
  addedById: z.string(),
});

export const AddOpportunitySchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  company: z.string().nonempty({ message: "Company is required" }),
  description: z.string().nonempty({ message: "Description is required" }),
  url: z.string().url().nonempty({ message: "URL is required" }),
  companyImage: z.string().optional(),
  linkedin: z.string().url().nonempty({ message: "Linkedin url is required" }),
  jobDesc: z
    .string()
    .url()
    .nonempty({ message: "Job Description is required" }),
  deadline: z.date({ required_error: "Deadline is required" }),
  type: z.union([
    z.literal(OpportunityType.FULL_TIME),
    z.literal(OpportunityType.INTERNSHIP),
    z.literal(OpportunityType.PART_TIME),
  ]),
  isActive: z.boolean(),
  streams: z
    .array(z.string().nonempty())
    .nonempty({ message: "Select atleast one stream" }),
});

export type ContactType = z.infer<typeof ContactSchema>;
export type AddOpportunityType = z.infer<typeof AddOpportunitySchema>;

import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  mobile: z.string().optional(),
  position: z.string(),
  company: z.string(),
  addedById: z.string(),
});

export type ContactType = z.infer<typeof ContactSchema>;

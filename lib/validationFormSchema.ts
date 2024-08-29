import { z } from "zod";

export const authFormSchema = z.object({
  email: z.string().email(),
  username: z.string().min(2),
});
export type AuthenticationForm = z.infer<typeof authFormSchema>;

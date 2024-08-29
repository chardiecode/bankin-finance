import { z } from "zod";

const stringSchema = z.string();

export const authFormSchema = z.object({
  email: stringSchema.email(),
  username: stringSchema.min(2),
  password: stringSchema.min(5),
});
export type AuthenticationForm = z.infer<typeof authFormSchema>;

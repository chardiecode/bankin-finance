import { z } from "zod";

const stringSchema = z.string();

export const authFormSchema = z.object({
  email: stringSchema.email({ message: "Must be a valid email" }),
  password: stringSchema.min(5, { message: "Minimum of 5 characters" }),
});

const userSetailsSchema = z.object({
  firstName: stringSchema.min(2),
  lastName: stringSchema.min(2),
  address1: stringSchema.min(3, {
    message: "Minimum of 3 characters",
  }),
  state: stringSchema.min(2).max(2),
  postalCode: stringSchema.min(3).max(6),
  dateOfBirth: stringSchema.min(3),
  ssn: stringSchema.min(3),
  city: stringSchema.min(2),
});

export const extendedSchema = authFormSchema.merge(userSetailsSchema);
export type AuthenticationForm = z.infer<
  typeof authFormSchema | typeof userSetailsSchema
>;

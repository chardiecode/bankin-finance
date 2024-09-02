import { without } from "lodash";
import { AuthenticationForm } from "@/lib/validationFormSchema";
import { FieldArgs } from "@/types";
const toRemove = [
  "firstName",
  "lastName",
  "address1",
  "city",
  "state",
  "postalCode",
  "dateOfBirth",
  "ssn",
];
const fieldOrder = [...toRemove, "email", "password"];

// cols-span-1 to make the field 50%. default is 100% width
export const fieldArgs: FieldArgs<AuthenticationForm> = {
  email: {
    name: "email",
    type: "text",
  },
  password: {
    name: "password",
    type: "password",
  },
  firstName: {
    className: "cols-span-1",
    name: "firstName",
    type: "text",
  },
  lastName: {
    className: "cols-span-1",
    name: "lastName",
    type: "text",
  },
  address1: {
    name: "address1",
    type: "text",
  },
  state: {
    className: "cols-span-1",
    name: "state",
    type: "text",
  },
  postalCode: {
    className: "cols-span-1",
    name: "postalCode",
    type: "text",
  },
  dateOfBirth: {
    className: "cols-span-1",
    label: "Date of Birth",
    name: "dateOfBirth",
    type: "text",
    placeholder: "YYYY-MM-DD",
  },
  ssn: {
    className: "cols-span-1",
    name: "ssn",
    type: "text",
    label: "SSN",
  },
  city: {
    name: "city",
    type: "text",
  },
};

export const signInFieldOrder = without(fieldOrder, ...toRemove);
export const signUpFieldOrder = fieldOrder;

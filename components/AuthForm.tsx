"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { renderField } from "@/lib/formUtils";
import {
  signInFieldOrder,
  signUpFieldOrder,
  fieldArgs,
} from "@/form-field/auth";
import { Loader2 } from "lucide-react";
import {
  authFormSchema,
  extendedSchema,
  AuthenticationForm,
} from "@/lib/validationFormSchema";
import { FieldBase } from "@/types";
import { useRouter } from "next/navigation";
import { getLoggedInUser, signIn, signUp } from "@/lib/actions/user.actions";
import PlaidLink from "./PlaidLink";

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  // const loggedInUser = await getLoggedInUser();

  const isTypeSignIn: boolean = type === "sign-in";
  const extendedFieldOrder = isTypeSignIn ? signInFieldOrder : signUpFieldOrder;
  const extendedAuthSchema = isTypeSignIn ? authFormSchema : extendedSchema;
  const form = useForm<AuthenticationForm>({
    resolver: zodResolver(extendedAuthSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address1: "",
      state: "",
      postalCode: "",
      dateOfBirth: "",
      ssn: "",
    },
    mode: "onTouched",
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = form;

  const [user, setUser] = useState(null);

  const onSubmit: SubmitHandler<AuthenticationForm> = async (data) => {
    const { email, password } = data as keyof AuthenticationForm;
    try {
      if (type === "sign-in") {
        const response = await signIn({
          email,
          password,
        });
        if (response) router.push("/");
      }
      if (type === "sign-up") {
        const newUser = await signUp(data as keyof AuthenticationForm);
        setUser(newUser);
      }
    } catch (error) {}
    // You can also add any asynchronous operations here
  };
  console.log(form.formState.isSubmitting);
  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link className="flex cursor-pointer items-center gap-1" href="#">
          <Image alt="Logo" height={34} src={"/icons/logo.svg"} width={34} />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : isTypeSignIn ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter you details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4 ">
          <PlaidLink user={user} variant="primary" />
        </div>
      ) : (
        <>
          <Form {...form}>
            <form
              className="grid col-span-2 gap-4 items-baseline"
              onSubmit={handleSubmit(onSubmit)}
            >
              {extendedFieldOrder.map((name) => (
                <Fragment key={name}>
                  {renderField<
                    AuthenticationForm,
                    FieldBase<AuthenticationForm>
                  >({
                    control: control,
                    field: fieldArgs[name as keyof AuthenticationForm],
                  })}
                </Fragment>
              ))}
              <div className="grid col-span-2 gap-4 !mt-4">
                <Button type="submit" variant="primary" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      Submitting...
                      <Loader2 size={20} className="animate-spin ml-2" />
                    </>
                  ) : isTypeSignIn ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {isTypeSignIn
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              className="form-link"
              href={isTypeSignIn ? "/sign-up" : "/sign-in"}
            >
              {isTypeSignIn ? "Sign Up" : "Sign In"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;

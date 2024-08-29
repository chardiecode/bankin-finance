"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import formUtils from "@/lib/formUtils";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { authFormSchema, AuthenticationForm } from "@/lib/validationFormSchema";

const fieldOrder = ["email", "username"];
const fieldArgs = {
  email: {
    name: "email",
    type: "text",
  },
  username: {
    name: "username",
    type: "text",
  },
};

const AuthForm = ({ type }: { type: string }) => {
  const form = useForm<AuthenticationForm>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: "",
      username: "",
    },
    mode: "onBlur",
  });

  const [user, setUser] = useState(null);

  const onSubmit: SubmitHandler<AuthenticationForm> = async (data) => {
    console.log(data);
    // You can also add any asynchronous operations here
  };

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
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter you details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4 "></div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {fieldOrder.map((name) => (
                <Fragment key={name}>
                  {formUtils.renderField({
                    field: fieldArgs[name as keyof AuthenticationForm],
                    form,
                  })}
                </Fragment>
              ))}
              <Button variant="outline" type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </>
      )}
    </section>
  );
};

export default AuthForm;

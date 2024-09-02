import AuthForm from "@/components/AuthForm";

type Props = {};

const SignUp = (props: Props) => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
};

export default SignUp;

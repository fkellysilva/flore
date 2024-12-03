import SignInForm from "@/components/signin-form";

export default function SignIn() {
  return (
    <main className="w-full relative flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="w-full">
        <SignInForm />
      </div>
    </main>
  );
}

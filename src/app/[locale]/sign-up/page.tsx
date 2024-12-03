import SignUpForm from "@/components/signup-form";

export default function SignUp() {
  return (
    <main className="w-full relative flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="w-full">
        <SignUpForm />
      </div>
    </main>
  );
}

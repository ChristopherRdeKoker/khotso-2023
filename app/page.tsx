import { LoginForm } from "./LoginForm";

export default function Home() {
  return (
    <div className="w-full bg-blue-700">
      <div className="flex flex-col  bg-blue-700 w-[64rem] mx-auto align-center min-h-screen">
        <LoginForm />
      </div>
    </div>
  );
}

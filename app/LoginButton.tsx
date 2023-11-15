"use client";

import { useRouter } from "next/navigation";

export function LoginButton() {
  const Router = useRouter();
  const handleSubmit = () => {
    Router.push("/home");
  };

  return (
    <button
      onClick={handleSubmit}
      className="h-10 border-2 border-black shadow-black shadow-md p-2 bg-red-400 rounded-md"
    >
      Nav to home
    </button>
  );
}

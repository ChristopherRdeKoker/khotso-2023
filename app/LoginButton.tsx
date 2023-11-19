"use client";

import { useRouter } from "next/navigation";

export function LoginButton() {
  const Router = useRouter();
  const handleSubmit = () => {
    Router.push("/homePage");
  };

  return (
    <div className="border-2 border-gray">
      <button onClick={handleSubmit} className="border-[0.1rem] border-black  shadow-md p-2 bg-blue-300 rounded-md">
        Submit
      </button>
    </div>
  );
}

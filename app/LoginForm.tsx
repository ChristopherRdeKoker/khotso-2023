"use client";

import { LoginButton } from "./LoginButton";
import { RHFTextField } from "@/component/RHFTextfield";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetButton } from "./ResetButton";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export const loginSchema = z.object({
  username: z.string().min(3, { message: "Not long enough brah" }),
  password: z.string().min(3, { message: "Not long enough brah" }),
});

type LoginType = {
  username: string;
  password: string;
};
export function LoginForm() {
  const formMethods = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      password: "",
      username: "",
    },
  });

  // const Router = useRouter();
  // const skipToHomePage = () => {
  //   Router.push("./home");
  // };

  return (
    <div className="w-[17.5rem] mx-auto mt-40 p-4 bg-white rounded-md flex flex-col shadow-md shadow-black">
      <FormProvider {...formMethods}>
        <form className="flex flex-col gap-1">
          <pre>{JSON.stringify(formMethods.watch(), null, 2)}</pre>
          <h2 className="font-bold">Login</h2>
          <RHFTextField placeholder="username" label={"Username"} name={"username"} />
          <RHFTextField placeholder="password" label={"Password"} name={"password"} />
          <div className="w-full justify-end flex flex-row gap-1">
            <ResetButton />
            <LoginButton />
          </div>
          <Link href={"/homePage"} className="rounded-sm outline-2 outline-gray-500 bg-gray-100 w-12">
            SKIP
          </Link>
        </form>
      </FormProvider>
    </div>
  );
}

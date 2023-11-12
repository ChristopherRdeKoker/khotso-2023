"use client";
import { Paper } from "@/component/Paper";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const Router = useRouter();
  const handleSubmit = () => {
    Router.push("/home");
  };

  return (
    <Paper>
      <p>working kinda</p>
      <Link href="/home">To Homepage</Link>
      <button onClick={handleSubmit} className="h-10 bg-red-400 rounded-md">
        Nav to home
      </button>
    </Paper>
  );
}

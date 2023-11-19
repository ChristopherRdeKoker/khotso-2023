"use client";

import Link from "next/link";

export function HomeForm() {
  return (
    <div className="flex justify-center flex-col">
      <p>Homepage </p>
      <Link href={"/"}>Back</Link>
    </div>
  );
}

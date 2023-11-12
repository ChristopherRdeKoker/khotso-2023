"use client";

type PaperProps = {
  children: React.ReactNode;
};
export function Paper({ children }: PaperProps) {
  return <div className="w-fit h-fit p-4 rounded-md shadow-md shadow-black bg-white">{children}</div>;
}

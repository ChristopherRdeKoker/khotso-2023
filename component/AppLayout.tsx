"use client";

type AppLayoutProps = {
  children: React.ReactNode;
};
export function AppLayout({ children }: AppLayoutProps) {
  return <div className=" flex flex-col w-full min-h-screen bg-blue-400 ">{children}</div>;
}

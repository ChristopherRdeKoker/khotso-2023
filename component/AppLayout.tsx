"use client";
import React from "react";

type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  return <div className=" flex flex-col w-full min-h-screen bg-blue-400 ">{children}</div>;
};

export default AppLayout;

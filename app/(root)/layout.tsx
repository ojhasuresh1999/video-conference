import StreamVideoProvider from "@/providers/StreamClientProviders";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "SURESH OJHA - Full Stack Developer",
  description: "Created by Suresh Ojha",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const Rootlayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default Rootlayout;

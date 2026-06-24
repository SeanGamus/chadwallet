"use client";
import { PrivyProvider } from "@privy-io/react-auth";
import React from "react";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
      config={{
        loginMethods: ["wallet", "email", "google", "apple"],
        appearance: {
          theme: "dark",
          accentColor: "#4F46E5",
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
};

export default RootLayout;

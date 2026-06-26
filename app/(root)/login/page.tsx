"use client";

import { usePrivy } from "@privy-io/react-auth";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const Login = () => {
  const { ready, authenticated, login } = usePrivy();
  useEffect(() => {
    if (ready && !authenticated) login();
    else if (ready && authenticated) redirect("/trading");
  }, [ready, authenticated]);

  if (!ready) return <div>...Loading</div>;

  return <div className="bg-gray-900 h-screen"></div>;
};

export default Login;

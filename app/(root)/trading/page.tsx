"use client";
import { usePrivy } from "@privy-io/react-auth";
import { redirect } from "next/navigation";

const Trading = () => {
  const { authenticated } = usePrivy();
  if (!authenticated) {
    return redirect("/login");
  }
  return <div>Trading</div>;
};

export default Trading;

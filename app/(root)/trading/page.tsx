"use client";
import { addUser } from "@/actions/addUser";
import { usePrivy } from "@privy-io/react-auth";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const Trading = () => {
  const { ready, authenticated, user } = usePrivy();
  if (ready && !authenticated) {
    return redirect("/login");
  }

  useEffect(() => {
    if (ready && user) {
      addUser(user);
    }
  }, [ready]);
  return (
    <section id="trading-view" className="min-h-screen bg-gray-900 flex flex-col p-4">
      <div className="text-2xl text-white text-center font-bold">Trading</div>
      <div className="flex flex-row  gap-4 flex-auto">
        <div className="flex-auto border-2 border-amber-300 rounded-2xl "></div>
        <div className="w-[50%] border-2 border-amber-300 rounded-2xl"></div>
        <div className="flex-auto border-2 border-amber-300 rounded-2xl"></div>
      </div>
    </section>
  );
};

export default Trading;

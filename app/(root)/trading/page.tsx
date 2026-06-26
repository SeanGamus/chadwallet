"use client";
import { supabase } from "@/lib/supabaseClient";
import { usePrivy } from "@privy-io/react-auth";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const Trading = () => {
  const { ready, authenticated, user } = usePrivy();
  if (ready && !authenticated) {
    return redirect("/login");
  }

  // useEffect(() => {
  //   if (ready && user)
  //     (async function () {
  //       const { data, error } = await supabase
  //         .from("transactions")
  //         .select()

  //       if (!data?.length) {
  //         const { data, error } = await supabase
  //           .from("transactions")
  //           .insert([{ uid: user.id }])
  //           .select();
  //       }
  //     })();
  // }, [ready]);
  return <div>Trading</div>;
};

export default Trading;

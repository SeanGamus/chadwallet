import { supabase } from "@/lib/supabaseClient";
import { usePrivy, User } from "@privy-io/react-auth";

export const addUser = async (user: User) => {
  const { data: userData, error } = await supabase.from("users").select();
  if (!userData?.length) {
    const { data, error } = await supabase
      .from("users")
      .insert([{ uid: user.id }])
      .select();
  }
};

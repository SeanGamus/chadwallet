"use client";
import { android_url, apple_url } from "@/constant/constants";
import { usePrivy } from "@privy-io/react-auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
const HeaderButton = () => {
  const { ready, authenticated, login } = usePrivy();

  if (!ready) return <div>...Loading</div>;

  const handleLogin = () => {
    if (!authenticated) login();
    else redirect("/trading");
  };

  return (
    <div className="flex max-md:hidden flex-row justify-between gap-2 h-auto">
      <Link
        href={apple_url}
        className="text-black bg-white/30 backdrop-blur-lg rounded-lg flex flex-row gap-1 px-4 pb-1 h-fit border border-transparent hover:border-white/30"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image src={"/vercel.svg"} alt="apple" height={30} width={30} />
        <div className="flex flex-col relative">
          <p className="text-white text-[9px] relative top-[18%]">
            Download on the
          </p>
          <p className="text-white relative text-[20px]">App Store</p>
        </div>
      </Link>
      <Link
        href={android_url}
        className="text-black bg-white/30 backdrop-blur-lg rounded-lg flex flex-row gap-1 px-4 pt-1 pb-2 h-fit border border-transparent hover:border-white/30"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image
          src={"/vercel.svg"}
          alt="apple"
          height={30}
          width={30}
          className="rotate-90"
        />
        <div className="flex flex-col relative">
          <p className="text-white text-[9px] relative top-[18%]">GET IT ON</p>
          <p className="text-white relative text-[15px]">Google Play</p>
        </div>
      </Link>
      <button
        onClick={handleLogin}
        className="text-white font-bold bg-gray-950 rounded-xl px-6 py-2 cursor-pointer hover:bg-gray-800 hover:text-gray-100 transition"
      >
        Login
      </button>
    </div>
  );
};

export default HeaderButton;

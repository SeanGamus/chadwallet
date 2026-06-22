import Link from "next/link";
import Image from "next/image";
import React from "react";
import ActionButtons from "./ActionButtons";

const Hero = () => {
  return (
    <section id="hero" className="text-center pt-30 relative items-center flex flex-col">
      <p className="text-9xl font-bold">ChadWallet</p>
      <p className="text-4xl font-semibold">where traders become legends.</p>
      <p className="text-2xl font-semibold">
        From memecoins to viral tokens, trade any crypto in seconds.
      </p>

      <ActionButtons/>

      <Image className="animate-float -z-1 relative bottom-[50]" src="/astronaut.png" alt="astronaut" height={300} width={300} />
    </section>
  );
};

export default Hero;

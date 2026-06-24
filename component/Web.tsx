import React from "react";
import Image from "next/image";

const Web = () => {
  return (
    <section
      id="web"
      className="flex flex-col items-center justify-center relative"
    >
      <p className="font-mono font-bold text-lg text-blue-600 max-sm:hidden">
        NOW AVAILABLE ON WEB
      </p>
      <div className="sm:hidden">
        <Image src={"/phone.png"} alt="laptop" height={400} width={400} />
      </div>
      <p className="font-bold text-6xl text-center max-sm:text-4xl">
        trade from anywhere.
      </p>
      <p className="font-bold text-6xl text-center max-sm:text-4xl">
        never lose a beat.
      </p>
      <p className="font-bold text-2xl text-center max-sm:text-lg">
        Open a trade on your phone, close it on your desktop - all in one app.
      </p>

      <div className="max-sm:hidden">
        <Image src={"/laptop.png"} alt="laptop" height={800} width={800} />
        <Image
          className="absolute animate-float bottom-0 right-[10%]"
          src={"/phone.png"}
          alt="laptop"
          height={400}
          width={400}
        />
      </div>
    </section>
  );
};

export default Web;

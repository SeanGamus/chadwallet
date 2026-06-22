import React from "react";
import Image from "next/image";

const Orbit = () => {
  return (
    <div className="min-h-96 w-full flex items-center justify-center absolute -z-10">
      <div className="border-dotted border-2 size-160 rounded-full border-white/30"></div>

      <Image
        src={"/globe.svg"}
        alt="Globe"
        width={50}
        height={50}
        className="origin-[695%_50%] translate-x-[-645%] animate-orbit absolute"
      />

      <Image
        src={"/globe.svg"}
        alt="Globe"
        width={50}
        height={50}
        className="origin-[-595%_50%] translate-x-[645%] animate-orbit absolute"
      />
    </div>
  );
};

export default Orbit;

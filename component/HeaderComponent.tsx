import React from "react";
import Image from "next/image";
import HeaderButton from "./HeaderButton";

const HeaderComponent = () => {
  return (
    <div className="flex flex-row justify-between w-full pt-4 px-4 h-fit">
      <Image src="/next.svg" alt="Logo" width={200} height={200} />
      <HeaderButton />
    </div>
  );
};

export default HeaderComponent;

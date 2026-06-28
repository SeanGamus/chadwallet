import Image from "next/image";
import HeaderButton from "./HeaderButton";

const HeaderComponent = () => {
  return (
    <div className="flex flex-row justify-between w-full pt-4 px-4 h-fit">
      <Image src="/dark.png" alt="Logo" width={50} height={50} />
      <HeaderButton />
    </div>
  );
};

export default HeaderComponent;

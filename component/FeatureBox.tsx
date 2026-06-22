import React from "react";
import Image from "next/image";

interface FeatrueProps {
  title: string;
  subtext: string;
  image?: string;
}

const FeatureBox: React.FC<FeatrueProps> = ({ title, subtext, image }) => {
  return (
    <div className="group rounded-lg bg-transparent border-2 border-gray-600/30  backdrop-blur-2xl relative p-8 overflow-hidden flex flex-col justify-between ">
      <div>
        <p className="font-mono text-xl text-blue-600 font-bold">
          {title.toUpperCase()}
        </p>
        <p className="font-bold text-white text-4xl">{subtext}</p>
      </div>
      {image && (
        <div className="flex justify-center relative bottom-0">
          <Image
            className=" translate-y-10 group-hover:scale-125 transition-all"
            src={image}
            alt=""
            width={100}
            height={100}
          />
        </div>
      )}
    </div>
  );
};

export default FeatureBox;

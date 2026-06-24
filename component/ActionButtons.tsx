import React from "react";
import Link from "next/link";

const ActionButtons = () => {
  // const
  return (
    <div className="flex flex-row gap-4 items-center justify-center h-fit">
      <Link
        href="/trading"
        className="group bg-blue-800 rounded-xl flex flex-row items-center gap-2"
      >
        <p className="text-white text-xl font-bold py-3 pl-6 translate-x-5 group-hover:translate-none transition-all">
          Start trading
        </p>
        <p className="invisible group-hover:visible pr-6 text-white text-4xl translate-x-5 group-hover:translate-none transition-all">
          &#8614;
        </p>
      </Link>
      <Link
        href={""}
        className="group rounded-xl text-white bg-transparent backdrop-blur-md flex flex-row items-center gap-2 max-sm:hidden"
      >
        <p className="invisible group-hover:visible pl-6  text-4xl transition-all -translate-x-3 group-hover:translate-none">
          &#8615;
        </p>
        <p className=" text-xl font-bold py-3 pr-6 -translate-x-3 group-hover:translate-none transition">
          Download app
        </p>
      </Link>
    </div>
  );
};

export default ActionButtons;

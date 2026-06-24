import React from "react";
import Orbit from "./Orbit";
import ActionButtons from "./ActionButtons";

const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="flex flex-col items-center justify-center relative z-5 h-max p-80 max-sm:px-4 max-sm:p-40"
    >
      <div className="text-center">
        <p className="text-white text-6xl font-bold max-sm:text-4xl">
          a trading app <br />
          for the rest of us
        </p>
        <p className="font-bold text-lg max-sm:text-[1rem]">
          join 500,000 traders making their name on ChadWallet
        </p>
      </div>

      <Orbit className="max-sm:hidden" />
      <ActionButtons />
    </section>
  );
};

export default Testimonial;

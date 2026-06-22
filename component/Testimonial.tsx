import React from "react";
import Orbit from "./Orbit";
import ActionButtons from "./ActionButtons";

const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="flex flex-col items-center justify-center relative z-5 h-max p-80"
    >
      <div className="text-center">
        <p className="text-white text-6xl font-bold">
          a trading app <br />
          for the rest of us
        </p>
        <p className="font-bold text-lg ">
          join 500,000 traders making their name on ChadWallet
        </p>
      </div>

      <Orbit />
      <ActionButtons />
    </section>
  );
};

export default Testimonial;

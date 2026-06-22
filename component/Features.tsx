import React from "react";
import FeatureBox from "./FeatureBox";
import { features } from "@/constant/constants";

const Features = () => {
  const text = "";
  return (
    <section id="features" className="px-24 flex flex-col gap-6">
      <div id="text">
        <p className="text-6xl font-bold">never miss out again</p>
        <p className="text-3xl font-bold">the only social-first trading app</p>
      </div>

      <div className="grid gap-5 grid-cols-3 max-md:grid-cols-1 auto-rows-fr">
        {features.map(({ title, text, image, id }) => (
          <FeatureBox key={id} title={title} subtext={text} image={image} />
        ))}
      </div>
    </section>
  );
};

export default Features;

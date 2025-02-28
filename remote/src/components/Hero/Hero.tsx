import { useState } from "react";
import HeroText from "./HeroText";
import Pricing from "../Pricing/Pricing";

export type TPricePlan = "monthly" | "yearly";

const Hero = () => {
  const [plan, setPlan] = useState<TPricePlan>("yearly");

  return (
    <>
      <section className="w-full bg-[#F5FFF6]">
        <div className="w-full text-center  lg:!gap-6 justify-center items-center px-4 pt-14 bg-[#F5FFF6] flex flex-col gap-3">
          <HeroText />
          <div className="bg-[#ECECEC] p-1 flex rounded-lg mx-auto relative">
            {/* Animated Slider */}
            <div
              className={`absolute  bg-white rounded-lg transition-transform top-[4px] bottom-[6px] w-[48%] duration-300 ${
                plan === "monthly" ? "translate-x-0" : "translate-x-full"
              }`}
            />
            <button
              onClick={() => setPlan("monthly")}
              className={`px-8 py-2 text-xs font-semibold sm:text-sm relative z-10 ${
                plan === "monthly" ? "text-primary-500" : "text-gray-500"
              }`}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setPlan("yearly")}
              className={`px-8 py-2 text-xs font-semibold sm:text-sm relative z-10 ${
                plan === "yearly" ? "text-primary-500" : "text-gray-500"
              }`}
            >
              YEARLY
            </button>
          </div>
        </div>
      </section>
      <Pricing plan={plan} />
    </>
  );
};

export default Hero;

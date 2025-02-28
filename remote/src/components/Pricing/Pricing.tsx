import { FC } from "react";
import PricingCard from "./PricingCard";
import { PRICING_DATA } from "../../config";

export type TPricePlan = "monthly" | "yearly"; // Define it here

interface IProps {
  plan: TPricePlan;
}

const Pricing: FC<IProps> = ({ plan }) => {
  return (
    <section className="relative size-full pt-20 mb-16 lg:mb-20">
      <div className="bg-[#F5FFF6]  w-full h-28 absolute top-0 left-0 -z-20" />
      <div className="bg-[#F5FFF6] w-full border-0 h-52 absolute top-0 left-0 -skew-y-[5deg] -z-20" />
      <div className="container">
        <div className="grid grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 gap-6">
          {PRICING_DATA.map((card) => (
            <PricingCard key={card.headingText} {...card} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

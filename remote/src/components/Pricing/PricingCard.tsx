import Button from "host/Button";
import Item from "./Item";
import { FC } from "react";
import { TPricePlan } from "../Hero/Hero";

export interface IPricingCard {
  headingText: string;
  price: {
    monthly?: string;
    yearly?: string;
  };
  description: string;
  items: string[];
  buttonText?: string;
}
interface IProps extends IPricingCard {
  className?: string;
  plan: TPricePlan;
}

const PricingCard: FC<IProps> = ({
  headingText,
  price,
  description,
  items,
  buttonText = "Get Started",
  className,
  plan,
}) => {
  return (
    <div
      className={`w-full bg-white border border-1 border-gray-50 rounded-2xl shadow-lg relative h-[582px] ${className}`}
    >
      <div className="p-8 flex flex-col justify-between h-full ">
        <div className="">
          <div className="w-full flex flex-col items-center mb-5">
            <div className="space-y-2 text-center mt-5">
              <h1 className="font-semibold text-primary-500 text-xl">
                {headingText}
              </h1>
              <h1 className="font-semibold text-5xl">{price[plan]}</h1>
              <p className="text-slate-600 text-sm">
                {description}{" "}
                {headingText === "Enterprise" && (
                  <input
                    type="number"
                    min={0}
                    defaultValue={10}
                    className="w-10 ring-1 rounded text-center ring-gray-200 ml-2"
                  />
                )}
              </p>
            </div>
          </div>
          <div className="flex gap-4 flex-col flex-grow">
            {items.map((item) => (
              <Item text={item} key={item} />
            ))}
          </div>
        </div>
        <Button className="px-5 py-3 w-full max-w-60 justify-center mx-auto bg-[#19525A] text-white rounded-lg">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;

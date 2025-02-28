import { FC } from "react";
import { GoLinkExternal } from "react-icons/go";

import { FEATURES_CARDS } from "./data";

export interface IFeaturesCard {
  title: string;
  description: string;
  Icon: React.ElementType;
}

const FeaturesCard: FC = () => {
  return (
    <section className="grid gap-8 grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4">
      {FEATURES_CARDS.map(({ title, description, Icon }) => (
        <div
          key={title}
          className="p-6 space-y-6 xl:w-full h-[186px] rounded-2xl bg-white bg-opacity-5 border border-transparent hover:border-white hover:shadow-[0px_0px_16px_4px_rgba(255,255,255,0.25)] transition-all"
        >
          <div className="flex  text-white justify-between items-center">
            <Icon />

            <GoLinkExternal className="w-4 h-4 text-white" />
          </div>

          <div className=" text-white space-y-4">
            <h3 className="text-xl font-medium">{title}</h3>
            <p className="text-sm line-clamp-3">{description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturesCard;

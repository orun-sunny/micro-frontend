import { FC } from "react";

export interface IFaqItem {
  Icon: React.ElementType;
  title: string;
  description: string;
}

const FaqItem: FC<IFaqItem> = ({ Icon, title, description }) => {
  return (
    <div className="flex items-star w-full gap-4">
      <div>
        <Icon />
      </div>
      <div className="text-xs sm:!text-sm">
        <p className="font-semibold text-sm sm:!text-xl mb-2">{title}</p>
        <p className="text-gray-500 text-pretty">{description}</p>
      </div>
    </div>
  );
};

export default FaqItem;

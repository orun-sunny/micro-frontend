import { FC } from "react";
import { IndustriesCardsProps } from "./IndustriesCards";
import IndustriesCardTextContent  from "./IndustriesCardTextContent";

const IndustriesCardContent: FC<IndustriesCardsProps> = ({
  active,
  badge,
  title,
  description,
  image,
}) => {
  return (
    <div className="flex justify-between w-full h-full gap-3 text-white">
      <div className={`space-y-4 w-3/5 ${active ? "" : "hidden"}`}>
        <IndustriesCardTextContent
          badge={badge}
          title={title}
          description={description}
        />
      </div>
      {/* card image */}
      <div className={`w-2/5 h-full ${active ? "" : "hidden"}`}>
        <img
          src={image}
          alt={badge}
          loading="lazy"
          className="size-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default IndustriesCardContent;

import { FC } from "react";
import IndustriesCardContent from "./IndustriesCardContent";

export interface IIndustriesCard {
  id: number;
  badge: string;
  title: string;
  description: string;
  image: string;
}
export interface IndustriesCardsProps extends Omit<IIndustriesCard, "id"> {
  active?: boolean;
}
const IndustriesCards: FC<IndustriesCardsProps> = ({
  badge,
  title,
  description,
  image,
  active,
}) => {
  const imageUrl = !active ? `url(${image})` : "";
  return (
    <div
      className={`h-96 px-3 xl:px-5 py-6 bg-[#19525A] rounded-2xl transition-all duration-[1000ms] ease-out hover:bg-[#19525A]/90  bg-no-repeat bg-center ${
        active ? "flex-[5] " : "flex-[0.5] bg-cover"
      }`}
      style={{ backgroundImage: imageUrl }}
    >
      {/* cards content */}
      <IndustriesCardContent
        active={active}
        badge={badge}
        title={title}
        description={description}
        image={image}
      />
    </div>
  );
};

export default IndustriesCards;

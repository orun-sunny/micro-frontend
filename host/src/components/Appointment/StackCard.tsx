import { FC } from "react";
import AppointmentCardTexts from "./AppointmentCardText";

export interface IStackCard {
  position: "relative" | "sticky";
  linkColor: string;
  title: string;
  description: string;
  cardClasses: string;

  image: string;
}
interface IProps extends IStackCard {
  className?: string;
}
const StackCard: FC<IProps> = ({
  position,
  cardClasses,
  linkColor,
  title,
  description,
  image,
  className,
}) => {
  return (
    <div
      className={`flex justify-between items-center md:gap-8  py-8 px-6 rounded-3xl  h-[480px] mb-4 ${cardClasses} ${className}`}
      style={{ position: position, top: "15vh", zIndex: 8 }}
    >
      <AppointmentCardTexts
        description={description}
        title={title}
        linkColor={linkColor}
        className="!*:text-xs"
      />
      <div className="md:max-w-screen-sm h-full flex justify-end rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className=" max-w-58 md:max-w-full object-cover "
        />
      </div>
    </div>
  );
};

export default StackCard;

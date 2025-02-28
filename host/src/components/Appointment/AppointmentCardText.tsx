import { FC } from "react";
import { IStackCard } from "./StackCard";
import { RxExternalLink } from "react-icons/rx";

type TAppointmentCardText = Pick<
  IStackCard,
  "title" | "description" | "linkColor"
>;
interface IProps extends TAppointmentCardText {
  className?: string;
  titleClasses?: string;
  descriptionClasses?: string;
  linkClasses?: string;
}
const AppointmentCardTexts: FC<IProps> = ({
  title,
  description,
  linkColor,
  className,
  titleClasses,
  descriptionClasses,
  linkClasses,
}) => {
  return (
    <div className={`space-y-8 md:max-w-screen-sm ${className}`}>
      <h3
        className={`text-xl sm:text-2xl md:text-4xl font-semibold leading-9 ${titleClasses}`}
      >
        {title}
      </h3>
      <p className={`max-lg:text-sm ${descriptionClasses}`}>{description}</p>
      <div>
        <a
          className={`underline text-sm font-semibold text-gray-100 inline-flex gap-3 items-center max-md:text-sm ${linkClasses} ${linkColor}`}
          href="/"
        >
          Learn more
          <RxExternalLink />
        </a>
      </div>
    </div>
  );
};

export default AppointmentCardTexts;

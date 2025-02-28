import { FC } from "react";
import { RxCross1 } from "react-icons/rx";

interface IProps {
  label: string;
  className?: string;
  iconVisible?: boolean;
}
const Tag: FC<IProps> = ({ label, className, iconVisible = true }) => {
  return (
    <span
      key={label}
      className={`flex items-center px-4 py-2 gap-2 rounded-full text-sm bg-gray-50 text-gray-900 hover:bg-indigo-100 transition-all group ease-linear hover:text-indigo-400 cursor-pointer ${className}`}
    >
      {label}
      {iconVisible && <RxCross1 />}
    </span>
  );
};

export default Tag;

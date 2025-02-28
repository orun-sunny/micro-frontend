import { FC, HTMLAttributes } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
}
const Item: FC<IProps> = ({ text, className, ...rest }) => {
  return (
    <span
      {...rest}
      className={`inline-flex items-center gap-3 text-sm text-slate-600  ${className}`}
    >
      <FaRegCircleCheck /> {text}
    </span>
  );
};

export default Item;

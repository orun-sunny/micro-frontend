import { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";
import { CiSearch } from "react-icons/ci";

type TButtonVariant = keyof typeof variantClasses;
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TButtonVariant;
  children: ReactNode;
  className?: string;
  isShowIcon?: boolean;
  icon?: ReactNode;
}

const variantClasses = {
  none: "",
  primary:
    "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 focus:ring focus:ring-primary-300",
  secondary:
    "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 rounded",
  outline:
    "border border-gray-600 text-gray-700 bg-transparent hover:bg-gray-100 active:bg-gray-200 focus:ring focus:ring-gray-300",
  sign: "bg-transparent hover:bg-gray-100 active:bg-gray-200 focus:ring focus:ring-gray-300",
};

const baseClasses =
  "rounded-lg px-4 py-2 inline-flex items-center max-md:text-sm gap-2 leading-6 transition duration-200 ease-in-out max-md:rounded-sm";

const Button = forwardRef<HTMLButtonElement, IProps>(
  (
    { variant = "primary", children, className, isShowIcon, icon, ...rest },
    ref
  ) => {
    return (
      <button
        {...rest}
        ref={ref}
        className={`${variantClasses[variant]} ${baseClasses} ${className}`}
      >
        {isShowIcon && (icon ?? <CiSearch />)} {children}
      </button>
    );
  }
);

Button.displayName = "Button"; // Optional: Useful for debugging in React DevTools
export default Button;

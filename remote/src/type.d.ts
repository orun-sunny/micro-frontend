declare module "host/Button" {
    import React from "react";
    import { ButtonProps, TButtonVariant } from "host/types";

    const Button: React.FC<ButtonProps>;
    export { TButtonVariant };
    export default Button;
}
declare module "host/Header" {
    import React from "react";
    import { TActionButtons, TNavList } from "host/types";

    const Header: React.FC<{
        navList: TNavList[];
        ActionButtons: TActionButtons;
        className?: string;
        headerClasses?: string;
    }>;
    export default Header;
}
declare module "host/Features" {
    import React from "react";

    const Features: React.FC;
    export default Features;
}

declare module "host/types" {
    export type TButtonVariant =
        | "none"
        | "primary"
        | "secondary"
        | "outline"
        | "sign";
    export interface ButtonProps
        extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        variant?: TButtonVariant;
        children: React.ReactNode;
        className?: string;
        isShowIcon?: boolean;
        icon?: React.ReactNode;
    }
    export type TNavList = {
        id: string;
        path?: string;
        label: string;
        hasDropDown?: boolean;
    };
    export type TActionButtons = ComponentType<{
        className?: string;
    }>;
}

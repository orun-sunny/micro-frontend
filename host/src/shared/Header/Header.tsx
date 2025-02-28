import { ComponentType, FC, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileSidebar from "./MobileView";
import { AiOutlineClose } from "react-icons/ai";

export type TNavList = {
  id: string;
  path?: string;
  label: string;
  hasDropDown?: boolean;
};

export type TActionButtons = ComponentType<{
  className?: string;
}>;

interface IProps {
  navList: TNavList[];
  ActionButtons: TActionButtons;
  className?: string;
  headerClasses?: string;
}

const Header: FC<IProps> = ({
  navList,
  ActionButtons,
  headerClasses,
  className = "",
}) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  return (
    <>
      <header className={`shadow ${headerClasses} w-full bg-gray-20`}>
        <section className="container">
          <div
            className={`flex w-full justify-between items-center py-4 ${className}`}
          >
            <div className=" h-8 xl:h-9">
              <a href="http://localhost:4173/">
                <img
                  src="/Logo.png"
                  alt="Logo"
                  className="size-full"
                  loading="lazy"
                />
              </a>
            </div>
            <nav className="max-lg:hidden">
              <ul className="flex items-center gap-6 text-gray-500 hover:*:text-primary-500">
                {navList.map(({ id, path, label, hasDropDown = true }) => (
                  <li key={id}>
                    <a href={path ?? id} className="max-md:text-xs">
                      {label}
                      {hasDropDown && (
                        <MdKeyboardArrowDown className="ml-2 inline-block" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <ActionButtons className="max-lg:hidden" />

            <button
              className="lg:hidden"
              onClick={() => setMobileSidebarOpen((prev) => !prev)}
            >
              {mobileSidebarOpen ? (
                <AiOutlineClose className="text-2xl text-gray-500 transition-transform duration-300 rotate-180" />
              ) : (
                <RxHamburgerMenu className="text-2xl text-gray-500 transition-transform duration-300" />
              )}
            </button>
          </div>
        </section>
      </header>

      <MobileSidebar
        mobileSidebarOpen={mobileSidebarOpen}
        navList={navList}
        ActionButtons={ActionButtons}
      />
    </>
  );
};

export default Header;

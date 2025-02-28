import { FC } from "react";
import { INDUSTRIES_TAB_LIST } from "../../../config/industries";
import Button from "../../../shared/Button";

interface IIndustriesTabPillProps {
  activeTabIndex: number;
  setActiveTabIndex: (index: number) => void;
  tabsRef: React.RefObject<(HTMLElement | null)[]>;
  tabUnderlineLeft: number;
  tabUnderlineWidth: number;
}
const IndustriesTabDetails: FC<IIndustriesTabPillProps> = ({
  activeTabIndex,
  setActiveTabIndex,
  tabsRef,
  tabUnderlineLeft,
  tabUnderlineWidth,
}) => {
  return (
    <div className="relative hidden lg:flex xl:h-12 justify-between px-1 mx-auto ring-1 ring-[#D0D5DD] shadow-sm rounded-3xl max-w-4xl">
      <span
        className="absolute top-0 bottom-0 flex overflow-hidden transition-all duration-300 py-0.5 -z-10 rounded-3xl"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="w-full h-full rounded-3xl bg-[#19525A]" />
      </span>
      {INDUSTRIES_TAB_LIST.map(({ id, name }, index) => {
        const isActive = activeTabIndex === index;
        return (
          <Button
            key={id}
            ref={(el) => {
              if (tabsRef.current) {
                tabsRef.current[index] = el;
              }
            }}
            variant="none"
            className={`${
              isActive
                ? `text-gray-50`
                : `hover:text-primary-700 text-primary-600 `
            } my-auto cursor-pointer select-none rounded-full px-6 text-sm xl:text-base text-center font-semibold `}
            onClick={() => setActiveTabIndex(index)}
          >
            {name}
          </Button>
        );
      })}
    </div>
  );
};

export default IndustriesTabDetails;

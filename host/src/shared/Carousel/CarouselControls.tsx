import React from "react";
import { FaChevronLeft, FaAngleRight } from "react-icons/fa6";

interface CarouselControlsProps {
  onNext: () => void; //go to next slide
  onPrev: () => void;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({
  onNext,
  onPrev,
}) => {
  return (
    <>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={onPrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
          <FaChevronLeft className="w-4 h-4 !text-gray-100 dark:text-gray-800" />
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={onNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
          <FaAngleRight className="w-4 h-4 !text-gray-100 dark:text-gray-800" />
        </span>
      </button>
    </>
  );
};

export default CarouselControls;

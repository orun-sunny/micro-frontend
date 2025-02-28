import React from "react";

interface CarouselIndicatorsProps {
  count: number; // Number of indicators
  activeIndex: number; // Active indicator index
  onSlideTo: (index: number) => void; // Function to change slide
}

const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({
  count,
  activeIndex,
  onSlideTo,
}) => {
  return (
    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          type="button"
          className={`w-3 h-3 rounded-full ${
            index === activeIndex ? "bg-blue-500" : "bg-gray-300"
          }`}
          onClick={() => onSlideTo(index)}
          aria-label={`Slide ${index + 1}`}
        ></button>
      ))}
    </div>
  );
};

export default CarouselIndicators;

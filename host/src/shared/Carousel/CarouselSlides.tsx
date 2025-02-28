import React, { ReactNode } from "react";

interface CarouselSlidesProps {
  slidesContent: ReactNode[]; // Dynamic content for slides
  activeIndex: number; // Current active slide index
}

const CarouselSlides: React.FC<CarouselSlidesProps> = ({
  slidesContent,
  activeIndex,
}) => {
  return (
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {slidesContent.map((content, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full flex items-center justify-center"
          >
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselSlides;

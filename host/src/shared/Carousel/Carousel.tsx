import React, { ReactNode } from "react";
import { CarouselIndicators, CarouselControls, CarouselSlides } from ".";

interface CarouselProps {
  Content: ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ Content }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % Content.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? Content.length - 1 : prevIndex - 1
    );
  };

  const handleSlideTo = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div id="default-carousel" className="relative w-full">
      <CarouselSlides slidesContent={Content} activeIndex={activeIndex} />
      <CarouselIndicators
        count={Content.length}
        activeIndex={activeIndex}
        onSlideTo={handleSlideTo}
      />
      <CarouselControls onNext={handleNext} onPrev={handlePrev} />
    </div>
  );
};

export default Carousel;

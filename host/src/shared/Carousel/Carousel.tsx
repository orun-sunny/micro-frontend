import React, { ReactNode } from "react";
import { CarouselIndicators, CarouselControls, CarouselSlides } from ".";

interface CarouselProps {
  slidesContent: ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ slidesContent }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slidesContent.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slidesContent.length - 1 : prevIndex - 1
    );
  };

  const handleSlideTo = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div id="default-carousel" className="relative w-full">
      <CarouselSlides slidesContent={slidesContent} activeIndex={activeIndex} />
      <CarouselIndicators
        count={slidesContent.length}
        activeIndex={activeIndex}
        onSlideTo={handleSlideTo}
      />
      <CarouselControls onNext={handleNext} onPrev={handlePrev} />
    </div>
  );
};

export default Carousel;

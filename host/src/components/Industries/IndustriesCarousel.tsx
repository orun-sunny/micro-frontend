import { CARD_LIST } from "../../config/industries";
import { Carousel } from "../../shared/Carousel";
import IndustriesCardTextContent from "./IndustriesCard/IndustriesCardTextContent";

const IndustriesCarousel = () => {
  return (
    <section className="lg:hidden ">
      <Carousel
        slidesContent={CARD_LIST.map(
          ({ badge, description, id, image, title }) => (
            <div
              key={id}
              className="relative size-full overflow-hidden bg-gray-50"
            >
              <div className="absolute top-2 px-2 left-0 z-50 w-full ">
                <IndustriesCardTextContent
                  badge={badge}
                  title={title}
                  description={description}
                  badgeClasses=" text-white inline-block !mb-14 md:!mb-44"
                  titleClasses=" text-gray-50 drop-shadow-lg md:text-2xl"
                  descriptionClasses="!size-full !w-3/5 text-gray-100 drop-shadow-lg line-clamp-3 md:text-base"
                />
              </div>
              <div
                className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
                aria-hidden="true"
              />
              <div className="flex size-full shadow-2xl">
                <img
                  src={image}
                  alt={badge}
                  loading="lazy"
                  className="rounded-xl size-full object-center  object-contain bg-blend-darken mix-blend-multiply bg-gray-50"
                />
              </div>
            </div>
          )
        )}
      />
    </section>
  );
};

export default IndustriesCarousel;

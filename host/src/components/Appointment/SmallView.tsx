import { APPOINTMENT_CARD_DATA } from "../../config/appointments";
import { Carousel } from "../../shared/Carousel";
import AppointmentCardTexts from "./AppointmentCardText";

const SmallView = () => {
  return (
    <Carousel
      Content={APPOINTMENT_CARD_DATA.map((card) => (
        <div className="size-full relative" key={card.id}>
          <div className="flex size-full shadow-2xl">
            <img
              src={card.image}
              alt={card.title}
              loading="lazy"
              className="rounded-xl size-full object-center object-cover bg-blend-darken mix-blend-multiply bg-gray-50"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 -z-10" />
          <div className="absolute top-2 md:top-5 px-2 left-0 z-50 w-full">
            <AppointmentCardTexts
              {...card}
              className="max-md:!space-y-2"
              titleClasses="text-gray-50 !text-base sm:!text-3xl"
              descriptionClasses="max-sm:!text-xs text-gray-100 line-clamp-5"
              linkClasses="!text-xs !text-gray-100"
            />
          </div>
        </div>
      ))}
    />
  );
};

export default SmallView;

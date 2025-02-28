import PointToTrail from "../../assets/Point to trail.svg";
import Button from "../../shared/Button";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
const HeroSec = () => {
  return (
    <section className="my-12 object-cover size-full bg-no-repeat bg-[url('/BackgroundLine.png')] bg-cover bg-center h-full">
      <div className="mx-auto px-4 sm:text-center max-w-screen-lg space-y-7 ">
        <h1 className="font-bold text-3xl md:text-4xl  md:!leading-[52px] text-balance ">
          Looking for a
          <span className="text-red-500 mx-1">
            Business Solution <br className="max-lg:hidden" />
            for
          </span>
          appointments?
        </h1>

        <p className="text-gray-600 max-md:text-sm">
          Ambel simplifies business management by providing tools for scheduling
          appointments, managing bookkeeping, accepting payments, sharing
          resources with customers, sending reminders, and running email
          marketing campaigns.
        </p>

        <div className="flex lg:items-center sm:justify-center gap-4 md:gap-7">
          <div className="relative">
            <Button className="max-xs:w-48 max-md:rounded-sm bg-[#19525A]">
              Start A Free Trial
            </Button>
            <img
              src={PointToTrail}
              className="absolute  right-full top-4 max-sm:hidden"
            />
          </div>
          <div className="">
            <Button
              isShowIcon
              variant="none"
              className="max-xs:w-48 max-md:rounded-sm bg-orange-500 text-gray-50 hover:bg-orange-600 active:bg-orange-700 focus:outline-none"
            >
              Find Professionals
            </Button>
          </div>
        </div>
        {/* pointer options */}

        <div className="flex max-sm:flex-row items-center justify-center gap-6 font-bold max-sm:items-start max-sm:justify-start">
          <HBadge text="No credit card required" />
          <HBadge text="Try one month for free" />
        </div>
      </div>
    </section>
  );
};

export default HeroSec;

const HBadge = ({ text, className }: { text: string; className?: string }) => (
  <span
    className={`inline-flex items-center px-2 py-1 rounded-full gap-2  bg-green-100 text-xs text-green-500 ${className}`}
  >
    <IoCheckmarkCircleOutline /> {text}
  </span>
);

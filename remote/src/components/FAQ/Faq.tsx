import { FAQ_LIST } from "../../config";
import FaqItem from "./FaqItem";

const Faq = () => {
  return (
    <section className="mb-20">
      <div className="container">
        <p className="text-primary-500 text-sm mb-3">Support</p>
        <h2 className=" text-2xl lg:text-4xl font-semibold mb-5">
          Frequently asked questions
        </h2>
        <p className="text-gray-600 max-w-3xl mb-10 md:mb-16">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please chat to our friendly team.
        </p>
        <div className="grid lg:grid-cols-2 gap-3 lg:!gap-20 place-items-center">
          {/* faq item */}
          <div className="space-y-10 md:space-y-16">
            {FAQ_LIST.map(({ id, ...rest }) => (
              <FaqItem key={id} {...rest} />
            ))}
          </div>

          <div className="rounded-2xl max-lg:hidden overflow-hidden lg:w-[570px] lg:h-[570px]">
            <img
              src="/faq.png"
              alt="faq-image"
              loading="lazy"
              className="object-cover aspect-square size-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

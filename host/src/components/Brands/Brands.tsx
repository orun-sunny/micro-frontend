import { BRANDS } from "../../config";

const Brands = () => {
  return (
    <section className="py-8 mb-16 bg-[#FAFAFA] lg:py-16 lg:mb-32">
      <div className="container">
        <p className="mb-8 text-center text-gray-600 lg:mb-16">
          Join 10k + Users, 35 + Solo Practitioners and 60 + Businesses all over
          the World
        </p>

        <div className="grid grid-cols-3 gap-12 lg:grid-cols-6 place-items-center">
          {BRANDS.map(({ id, alt, img }) => (
            <img
              key={id}
              src={img}
              alt={alt}
              className="w-auto h-[48px] lg:h-[60px] md:h-[54px]"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;

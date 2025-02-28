const HeroText = () => {
  return (
    <>
      <div className="bg-blue-50 py-1 px-3 rounded-full">
        <h1 className="text-primary-500 font-bold text-sm">Pricing Plans</h1>
      </div>
      <h2 className="!text-2xl md:!text-4xl lg:!text-5xl text-green-700 font-semibold text-pretty">
        Let’s Get Started
        <br />
        We have a perfect plan for you.
      </h2>
      <h2 className="text-blue-500 !text-sm md:!text-lg text-pretty lg:!text-xl">
        Simple, transparent pricing that grows with you. Try any plan free for
        30 days.
      </h2>
    </>
  );
};

export default HeroText;

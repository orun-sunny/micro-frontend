import FeaturesCard from "./FeaturesCard";
import FeatureText from "./FeatureText";

const Features = () => {
  return (
    <section className="bg-[#19525A] py-10 lg:py-16 mb-16">
      <div className="container">
        <FeatureText />

        <FeaturesCard />
      </div>
    </section>
  );
};

export default Features;

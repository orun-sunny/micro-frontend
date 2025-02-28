import LargeView from "./LargeView";
import SmallView from "./SmallView";

const Appointment = () => {
  return (
    <section className="container">
      <div className="max-lg:hidden ">
        <LargeView />
      </div>
      <div className="lg:hidden mb-16">
        <SmallView />
      </div>
    </section>
  );
};

export default Appointment;

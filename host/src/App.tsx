import Appointment from "./components/Appointment/Appointment";
import Brands from "./components/Brands/Brands";
import Features from "./components/Features/Features";
import HeroImg from "./components/HeroSec/HeroImg";
import HeroSec from "./components/HeroSec/HeroSec";
import Industries from "./components/Industries/Industries";
import { NAV_LIST } from "./config";
import Footer from "./shared/Footer/Footer";
import Header from "./shared/Header/Header";
import HeaderButtons from "./shared/Header/HeaderButtons";

function App() {
  return (
    <main className="">
      <Header navList={NAV_LIST} ActionButtons={HeaderButtons} />
      <HeroSec />
      <HeroImg />
      <Brands />
      <Industries />
      <Features />
      <Appointment />
      <Footer />
    </main>
  );
}

export default App;

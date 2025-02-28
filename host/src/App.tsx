import Brands from "./components/Brands/Brands";
import HeroImg from "./components/HeroSec/HeroImg";
import HeroSec from "./components/HeroSec/HeroSec";
import { NAV_LIST } from "./config";
import Header from "./shared/Header/Header";
import HeaderButtons from "./shared/Header/HeaderButtons";

function App() {
  return (
    <main className="">
      <Header navList={NAV_LIST} ActionButtons={HeaderButtons} />
      <HeroSec />
      <HeroImg />
      <Brands />
    </main>
  );
}

export default App;

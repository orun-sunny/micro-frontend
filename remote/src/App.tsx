import Header from "host/Header";
import { NAV_LIST } from "./config";
import HeaderActionButtons from "./components/HeaderActionButtons";
import Hero from "./components/Hero/Hero";
import Trial from "./components/Trial/Trial";
import Features from "host/Features";

function App() {
  return (
    <main>
      <Header
        navList={NAV_LIST}
        ActionButtons={HeaderActionButtons}
        className="xl:justify-start xl:gap-12"
      />
      <Hero />
      <Trial />
      <Features />
    </main>
  );
}

export default App;

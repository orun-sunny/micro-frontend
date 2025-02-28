import Header from "host/Header";
import { NAV_LIST } from "./config";
import HeaderActionButtons from "./components/HeaderActionButtons";

function App() {
  return (
    <main>
      <Header
        navList={NAV_LIST}
        ActionButtons={HeaderActionButtons}
        className="xl:justify-start xl:gap-12"
      />
    </main>
  );
}

export default App;

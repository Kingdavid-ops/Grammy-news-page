import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import { LoadMore, ScrollToTop } from "./components/DownButton";
import CardLayout from "./components/CardsLayout";
import Bar from "./components/bar";
const App = () => {
  return (
    <main className="py-4">
      <Navbar />
      <div className="flex h-full justify-center gap-x-10">
        <div>
          <h1 className="text-5xl py-5 font-[1] font-polaris text-[#b69859]">
            MUSIC NEWS
          </h1>
          <CardLayout />
        </div>
        <Filter />
      </div>
      <LoadMore />
      <ScrollToTop />
      <div className="relative">
        <Bar />
        <Footer />
      </div>
    </main>
  );
};

export default App;

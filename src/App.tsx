import "./App.css";
import BestInPlump from "./containers/BestInPlump";
import FeaturedIn from "./containers/FeaturedIn";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import MadeForEveryone from "./containers/MadeForEveryone";
import Marquee from "./containers/Marquee";
import PlumpingKits from "./containers/PlumpingKits";
import ProductsProven from "./containers/ProductsProven";
import ProjectCosmetics from "./containers/ProjectCosmetics";
import ShopProductCategories from "./containers/ShopProductCategories";

function App() {
  return (
    <main className="max-md:w-screen overflow-x-hidden">
      <Header />
      <ShopProductCategories />
      <Marquee />
      <BestInPlump />
      <ProductsProven />
      <FeaturedIn />
      <PlumpingKits />
      <MadeForEveryone />
      <ProjectCosmetics />
      <Footer />
    </main>
  );
}

export default App;

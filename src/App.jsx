import Navbar from "./components/Navbar";
import Banner from "./components/Banner"; 
import Features from "./components/Features";
import PromoSection from "./components/PromoSection";
import NewArrivals from "./components/NewArrivals";
import FeaturedSection from "./components/FeaturedSection";
import SpecialOffers from "./components/SpecialOffers";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Banner />  
      <Features /> 
      <PromoSection />
      <NewArrivals />
      <FeaturedSection />
      <SpecialOffers />
      <Footer />
    </div>
  );
}
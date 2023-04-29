import About from "@/common/Containers/About";
import Agents from "@/common/Containers/Agents";
import BestOffers from "@/common/Containers/BestOffers";
import Footer from "@/common/Containers/Footer";
import Hero from "@/common/Containers/Hero";
import Services from "@/common/Containers/Services";

export default function Home() {
  return (
    <>
    <div id="wrapper">
      <div className="header">
        <Hero />
      </div>
      <BestOffers />
      <About />
      <Services />
      <Agents />
      <Footer />
    </div> 
    </>
  )
}

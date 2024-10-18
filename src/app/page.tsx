import Image from "next/image";
import LandingPage from "./landingPage/page";
import Navbar from "@/components/navbar";
import About from "./about/page";
import Cuisine from "./cuisines/page";
import ParkAttractions from "./parkAttractions";
import ParkMap from "./map/page";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#283606] to-[#0f1500]"> 
    <LandingPage/>
    <About/>
    <Cuisine/>
    <ParkAttractions/>
    <ParkMap/>
    <Footer/>
    </div>
  );
}

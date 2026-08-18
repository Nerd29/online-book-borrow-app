import Banner from "@/components/Banner";
import MarqueeSection from "@/components/Marquee";
import Image from "next/image";
import AboutUs from "./about/page";
import FeaturedBooks from "./featured/page";

export default function Home() {
  return (
    <>
    
    <Banner />
    <MarqueeSection />
    <AboutUs />
    <FeaturedBooks/>
    </>
    
  );
}

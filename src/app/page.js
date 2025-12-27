import Image from "next/image";
import Footer from "./website/components/Footer";
import Header from "./website/components/Header";
import Hero from "./website/components/Hero";
import Vision from "./website/components/Vision";
import Roadmap from "./website/components/Roadmap";
import Digital from "./website/components/Digital";
import Investor from "./website/components/Investor";
import GainProjection from "./website/components/GainProjection";
import CTA from "./website/components/CTA";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Vision />
      <Roadmap />
      <Digital />
      <Investor />
      <GainProjection />
      <CTA />
      <Footer />
    </div>
  );
}

import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Vision from "../components/Vision";
import Roadmap from "../components/Roadmap";
import Digital from "../components/Digital";
import Investor from "../components/Investor";
import GainProjection from "../components/GainProjection";
import CTA from "../components/CTA";

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

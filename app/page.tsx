import { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import Specifications from "./components/Specifications";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import OrderSection from "./components/OrderSection";

export const metadata: Metadata = {
  title: "Power Home | ReyBattery",
  description:
    "Revitalize Your Nokia With Premium Power",
};

export default function Home() {
  return (
      <main>
        <HeroSection />
        <Features />
        <Specifications />
        <Testimonials />
        <FAQ />
        <OrderSection />
      </main>
  );
}

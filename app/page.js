import About from "./components/About";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Testimonial from "./components/Testimonial";
import { Roboto } from "@next/font/google";

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <Brands /> */}
      <About />
      <Testimonial />
      <Contact />
    </main>
  );
}

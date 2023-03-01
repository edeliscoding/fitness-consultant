import About from "./components/About";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Testimonial from "./components/Testimonial";
import { Metadata } from "next";

export const metadata = {
  title: `Personal Trainer, Athletic Performance Coach, and Fitness Consultant
  in Aurora, CO | David Wood`,
  description: `Looking for a personal trainer or athletic performance coach in Aurora, CO? Look no further! David Wood is an experienced coach and consultant who can help you reach your fitness goals.`,
  keywords: `personal trainer, athletic performance coach, fitness consultant, Aurora CO, Santa Monica CA, UCLA, women's basketball, volleyball`,
  author: `David Wood`,
  viewport: `width=device-width, initial-scale=1.0`,
};

import { Roboto } from "@next/font/google";
import Faq from "./components/Faq";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function Home() {
  return (
    <main className={roboto.className}>
      <HeroSection />
      <About />
      <Testimonial />
      <Faq />
      <Contact />
    </main>
  );
}

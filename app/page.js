import Head from "next/head";
import About from "./components/About";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Personal Trainer, Athletic Performance Coach, and Fitness Consultant
          in Aurora, CO | David Wood
        </title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Looking for a personal trainer or athletic performance coach in Aurora, CO? Look no further! {Your Name} is an experienced coach and consultant who can help you reach your fitness goals."
        />
        <meta
          name="keywords"
          content="personal trainer, athletic performance coach, fitness consultant, Aurora CO, Santa Monica CA, UCLA, women's basketball, volleyball"
        />
        <meta name="author" content="David Wood" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <HeroSection />
        <About />
        <Testimonial />
        <Contact />
      </main>
    </>
  );
}

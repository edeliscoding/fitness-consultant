import Image from "next/image";

import React from "react";
import WomanImg from "../assets/banner-woman2.webp";
import Yoga from "../assets/yoga.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="lg:h-[100vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            {/* <p className="text-3xl text-bold text-accent text-md mb-[22px]">
              David Wood
            </p> */}
            <h1 className="text-4lg leading-[46px] md:text-4xl md:leading-tight lg:text-6xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              Athlethic Performance Coach <span className="text-accent">&</span>{" "}
              Fitness Consultant
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing illo ad labore
              dolor elit.
            </p>

            <button className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all">
              Work with me
            </button>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <Image src={Yoga} alt="" height="350px" width="200px" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

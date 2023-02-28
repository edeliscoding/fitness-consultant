"use client";

import React from "react";
// import components
import TestimonialCarousel from "./TestimonialCarousel";
// import data
import { testimonialData } from "../data";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn } from "../variants";
import Image from "next/image";

const Testimonial = () => {
  const { title, subtitle, modelImg, slider } = testimonialData;
  return (
    <section
      id="testimonials"
      className="bg-testimonial bg-cover bg-no-repeat relative z-10 h-[780px] pt-[60px] md:pt-[120px]"
    >
      <div className="top-0 left-0 absolute bg-blend-multiply h-full w-full"></div>
      <div className="container mx-auto">
        {/* text */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1.6)}
          initial="hidden"
          whileInView={"show"}
          className="text-center capitalize flex flex-col items-center"
        >
          <h2 className="h2 text-white text-4xl">{title}</h2>
          <p className="text-white/70 capitalize mb-8 text-xl">{subtitle}</p>
          <div className="mb-12">
            <Image src={modelImg} alt="" />
          </div>
        </motion.div>

        {/* slider */}
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1.6)}
          initial="hidden"
          whileInView={"show"}
          className="flex justify-center items-center"
        >
          <TestimonialCarousel slider={slider} />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;

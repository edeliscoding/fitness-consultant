import React from "react";
import Image from "next/image";

// import img
import Image2 from "../assets/about.webp";
import Image3 from "../assets/fitnesscoaching.jpg";
import Image4 from "../assets/AboutMe.png";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <Image
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image4}
            alt="David Wood as a fitness coach and athletic trainer in action"
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h1 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
                David Wood
              </h1>
              <p className="mb-4 text-accent h1">
                Athletic Performance Coach and Fitness Consultant
              </p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit tempore
                earum dolorum quo consequatur rem nihil hic ducimus rerum soluta
                neque harum velit molestiae dignissimos distinctio dolorum nisi
                labore culpa nihil. <br />
                <br />
                Qui doloremque quod sit accusantium unde totam inventore
                cupiditate ratione esse maxime eum recusandae ducimus.
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-secondary-hover transition-all">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

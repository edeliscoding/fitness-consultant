"use client";
import React from "react";
import { faq } from "../data";
import Image from "next/image";

import Accordion from "../components/Accordion";

const Faq = () => {
  const { icon, title, accordions } = faq;
  return (
    <section className="md:pt-28 section bg-secondary">
      <div className="text-accent text-center text-4xl mb-8 ">
        Frequently Ask Questions
      </div>
      <div className="max-w-[768px] mx-auto lg:bg-faq bg-no-repeat bg-secondary rounded-md">
        {/*section title */}

        {/* accordion list */}
        <div>
          {accordions.map((accordion, idx) => {
            return <Accordion accordion={accordion} key={idx} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;

import Image from "next/image";
import React from "react";

// import brands data
import { brands } from "../data";

const Brands = () => {
  return (
    <section className="min-h-[146px] bg-tertiary flex items-center">
      <div className="container mx-auto flex md:justify-between items-center flex-wrap justify-evenly">
        {brands.map((brand, idx) => {
          return (
            <div key={idx}>
              <Image src={brand.img} alt="" height="60" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;

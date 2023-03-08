"use client";

import React, { useState, useEffect } from "react";
import Nav from "./Nav";

import Logo from "../assets/logo.svg";
import Davidlogo from "../assets/transparent-david.svg";
import onCourt from "../assets/onCourt.png";
import Socials from "../components/Socials";
import Image from "next/image";
import NavMobile from "../components/NavMobile";

const Navbar = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-999 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <a href="#">
          <h1 aria-label="David Wood personal trainer, athletic performance coach, and fitness consultant">
            <Image
              src={Davidlogo}
              alt="David Wood. Athletic performance coach and fitness consultant"
            />
          </h1>
        </a>
        {/* nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        {/* Socials */}
        <div className="hidden lg:block">
          <Socials />
        </div>
        {/* nav mobile*/}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

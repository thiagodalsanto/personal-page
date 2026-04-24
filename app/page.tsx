"use client";

import React from "react";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";

export default function Home() {

  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

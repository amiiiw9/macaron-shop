"use client";

import HeroSection from "./components/HeroSection";
import FutureSections from "./components/FutureSections";
import Sales from "./components/Sales";
import PopularSets from "./components/PopularSets";
import News from "./components/News";
import CareSection from "./components/CareSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FutureSections />
      <Sales />
      <PopularSets />
      <News />
      <CareSection />
    </>
  );
}

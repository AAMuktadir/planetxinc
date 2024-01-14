"use client";
import Image from "next/image";
import { useState } from "react";
import HeroSection from "@/Components/home/heroSection";
import BiggerBetter from "@/Components/home/biggerBetter";
import CreativeDesign from "@/Components/home/creativeDesign";
import SmartDevelopment from "@/Components/home/smartDevelopment";

export default function Home() {
  const [banner, setbanner] = useState(true);

  return (
    <main className="">
      <div className="">
        <HeroSection />
        <BiggerBetter />
        <CreativeDesign />
        <SmartDevelopment />
      </div>
    </main>
  );
}

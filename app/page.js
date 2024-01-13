"use client";
import Image from "next/image";
import { useState } from "react";
import HeroSection from "@/Components/home/heroSection";

export default function Home() {
  const [banner, setbanner] = useState(true);

  return (
    <main className="">
      <div className="">
        <HeroSection />
      </div>
    </main>
  );
}

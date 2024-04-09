"use client";
import { useState } from "react";
import HeroSection from "@/Components/home/heroSection";
import BiggerBetter from "@/Components/home/biggerBetter";
import CreativeDesign from "@/Components/home/creativeDesign";
import SmartDevelopment from "@/Components/home/smartDevelopment";
import BrandIdentities from "@/Components/home/brandIdentities";
import ArtDirection from "@/Components/home/artDirection";
import InHouseSolutions from "@/Components/home/inHouseSolutions";
import CoolestProjects from "@/Components/home/coolestProjects";
import DevelopmentTools from "@/Components/home/developmentTools";
import { HelloSparkles } from "@/Components/home/helloComponent";
// import OurClients from "@/Components/home/ourClients";
import LatestUpdates from "@/Components/home/latestUpdates";
import MyExamplePage from "@/Components/otherComponents/animation/smartDevelopmentAnimation";
import Header from "@/Components/global/header";
import Link from "next/link";

export default function Home() {
  const [banner, setbanner] = useState(true);

  return (
    <main className="">
      <div className="">
        <Header />
        <HeroSection />
        <BiggerBetter />
        <CreativeDesign />
        <SmartDevelopment />
        <BrandIdentities />
        <ArtDirection />
        <InHouseSolutions />
        <CoolestProjects />
        <DevelopmentTools />

        <LatestUpdates />
        {/* <OurClients /> */}
        <Link href={"contact-us"}>
          <HelloSparkles />
        </Link>
      </div>
    </main>
  );
}

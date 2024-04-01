import React from "react";
import OurClients from "@/Components/home/ourClients";
import ReviewSlider from "@/Components/ourClients/reviewSlider";
import { HelloSparkles } from "@/Components/home/helloComponent";

export default function page() {
  return (
    <div className="">
      <div className="pt-4 sm:pt-32 bg-background">
        <OurClients />
      </div>
      <div className="">
        <ReviewSlider />
      </div>
      <HelloSparkles />
    </div>
  );
}

import React from "react";
import Image from "next/image";
import WhatMakesUsDifferent from "@/Components/about/wmudfo";
import { HelloSparkles } from "@/Components/home/helloComponent";

export default function page() {
  return (
    <>
      <div className="bg-background h-full pt-0 sm:pt-40 px-4 sm:px-32">
        <h3 className="text-4xl sm:text-7xl text-white lowercase font-semibold">
          Planet X Inc is a complete solutions provider
        </h3>
        <p className="text-white text-xl sm:text-sm py-8">
          that provides technology integrated end-to-end impact oriented and
          data driven organisational solutions. Taking a needs based approach,
          the company designs technology that augments business and
          organisational performances. Having provided solutions to various
          organisations, it has recently started expanding its reach by
          designing technological solutions to address community societal
          issues.
        </p>
        <div className="sm:flex items-center justify-center gap-12">
          <div className="sm:w-1/2">
            <h3 className="text-white uppercase text-xl sm:text-5xl text-left font-medium pt-2 sm:pt-8">
              Success Stories
            </h3>
            <Image
              src={"/image/SuccesStories.png"}
              height={400}
              width={400}
              alt="image"
              className="py-8"
            />
          </div>
          <div className="text-white sm:w-1/2">
            <p>
              Over the years, we have propelled numerous businesses to thrive,
              maintaining robust partnerships through our collaborative
              approach.
            </p>

            <p className="py-8">
              We are proud to help businesses grow and succeed in different
              industries. From startups to established enterprises, our tailored
              solutions have helped them conquer challenges, reach milestones,
              and actualize their visions.
            </p>
          </div>
        </div>
      </div>
      <WhatMakesUsDifferent />
      <HelloSparkles />
    </>
  );
}

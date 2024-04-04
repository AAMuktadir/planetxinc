import React from "react";
import Image from "next/image";
import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  return (
    <>
      <section className="bg-background sm:flex items-center pt-2  sm:px-16">
        <div className="text-white text-5xl sm:text-9xl tracking-widest py-8  px-4 sm:px-0 sm:w-2/3 z-10">
          <h2 className="">
            WE
            <span className="border-2 px-4 border-footer rounded-full text-footer">
              CREATE
            </span>
          </h2>
          <h2 className="py-2">DIGITAL</h2>
          <h2>_SOLUTIONS</h2>
        </div>
        <div className="sm:w1/3">
          {/* <Spline scene="https://prod.spline.design/ooQyfzKBciGmqVyR/scene.splinecode" /> */}
          <Image
            src={"/image/heroImage.png"}
            width={1000}
            height={1000}
            alt={"vector"}
            className="sm:-translate-x-20 z-0 px-12 sm:px-0"
          />
        </div>
      </section>
    </>
  );
}

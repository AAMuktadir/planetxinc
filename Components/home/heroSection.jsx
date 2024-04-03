import React from "react";
import Image from "next/image";
import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  return (
    <>
      <section className="bg-background sm:flex pt-2 bg-fixed">
        <div className="text-white text-4xl sm:text-8xl tracking-widest py-8 sm:py-32 px-4 sm:px-0 sm:translate-x-20">
          <h2 className="">
            WE
            <span className="border-2 px-4 py-0 border-footer rounded-full text-footer">
              CREATE
            </span>
          </h2>
          <h2 className="py-2">DIGITAL</h2>
          <h2>_SOLUTIONS</h2>
        </div>
        <div className="">
          <Spline scene="https://prod.spline.design/ooQyfzKBciGmqVyR/scene.splinecode" />
          {/* <Image
            src={"/image/heroVector.png"}
            width={1500}
            height={800}
            alt={"vector"}
          /> */}
        </div>
      </section>
    </>
  );
}

import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <section className="bg-background flex pt-12 bg-fixed">
        <div className="text-white text-8xl tracking-widest py-40 translate-x-20">
          <h2 className="">
            WE
            <span className="border-2 px-4 py-0 border-footer rounded-full text-footer">
              CREATE
            </span>
          </h2>
          <h2 className="py-2">DIGITAL</h2>
          <h2>_SOLUTIONS</h2>
        </div>
        <div className="pt-20">
          <Image
            src={"/image/heroVector.png"}
            width={1500}
            height={800}
            alt={"vector"}
          />
        </div>
      </section>
    </>
  );
}

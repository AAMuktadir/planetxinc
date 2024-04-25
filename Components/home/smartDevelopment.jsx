import React from "react";
import Image from "next/image";

export default function SmartDevelopment() {
  return (
    <>
      <div className="bg-background py-20">
        <section className="px-4 sm:px-28">
          <h3 className="text-white text-4xl sm:text-8xl">SMART DEVELOPMENT</h3>
        </section>

        <section className="px-4 sm:px-12 py-4 sm:py-20">
          <div className="bg-black rounded-full flex items-center justify-center">
            {/* <Image
              src={"/image/smartDevelopment.png"}
              height={500}
              width={500}
              alt="image"
              className="py-2 sm:py-8"
            /> */}
            <video
              width="500"
              height="500"
              autoPlay
              loop
              muted
              className="py-4 p-12 sm:p-0"
            >
              <source
                src="/image/anim/smartDevelopmentAnim.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className="border-t border-white flex justify-center items-center pb-12">
          <span className="px-4 sm:px-0 w-full sm:w-[450px] pt-8 text-white">
            <h3 className="-skew-x-12">SMART DEVELOPMENT</h3>
            Combining unique design and rich technology, we build digital
            products exactly as they were designed, without shortcuts or
            simplifications.
          </span>
        </section>
        <section className="flex justify-center items-center">
          <div className="px-4 sm:px-0 w-full sm:w-[450px]">
            <h3 className="-skew-x-12 text-white">AREAS</h3>
            <div className="flex flex-wrap gap-4 pt-2">
              <span className="px-2 border border-white text-white rounded-full">
                E-COMMERCE
              </span>
              <span className="px-2 border border-white text-white rounded-full">
                FINANCE
              </span>
              <span className="px-2 border border-white text-white rounded-full">
                EDUCATION
              </span>
              <span className="px-2 border border-white text-white rounded-full">
                SOCIAL
              </span>
              <span className="px-2 border border-white text-white rounded-full">
                ENTERTAINMENT
              </span>
              <span className="px-2 border border-white text-white rounded-full">
                MEDICINE
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

import React from "react";

export default function ArtDirection() {
  return (
    <>
      <div className="bg-background py-20">
        <section className="px-28">
          <h3 className="text-white text-8xl">SMART DEVELOPMENT</h3>
        </section>

        <section className="px-20 py-20">
          <div className="border-0 rounded-full w-full bg-darkBG py-40">
            <h4 className="text-white font-bold text-4xl text-center">
              Animation of BORI will be placed here
            </h4>
          </div>
        </section>

        <section className="border-t border-white flex justify-center items-center pb-12">
          <span className="w-[450px] pt-8 text-white">
            <h3 className="-skew-x-12">SMART DEVELOPMENT</h3>
            Combining unique design and rich technology, we build digital
            products exactly as they were designed, without shortcuts or
            simplifications.
          </span>
        </section>
        <section className="flex justify-center items-center">
          <div className="w-[450px]">
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

import React from "react";
import Image from "next/image";

export default function ArtDirection() {
  return (
    <>
      <div className="bg-whiteBG py-20">
        <section className="px-4 sm:px-28">
          <h3 className="text-5xl sm:text-8xl">
            ART <br />
            DIRECTION
          </h3>
        </section>

        <section className="px-4 sm:px-20 py-12 sm:py-20">
          <div className="border-0 rounded-full w-full bg-white py-8 sm:py-16 flex items-center justify-center">
            <Image
              src={"/image/CreativeDesign.png"}
              width={300}
              height={300}
              alt="vector"
            />
          </div>
        </section>

        <section className="border-t border-black flex justify-center items-center pb-12">
          <span className="px-4 sm:px-0 sm:w-[450px] pt-8">
            <h3 className="-skew-x-12">ART DIRECTION</h3>
            Creating digital products from scratch is a team effort. Each of the
            specialists can bring something new to the project, but they must
            all work as a single mechanism. Well-established processes and a
            well-coordinated team are the main keys to success.
          </span>
        </section>
        <section className="flex justify-center items-center">
          <div className="px-4 sm:px-0 sm:w-[450px]">
            <h3 className="-skew-x-12">AREAS</h3>
            <div className="flex flex-wrap gap-4 pt-2">
              <span className="px-2 border border-black rounded-full">
                VISUAL IDENTITY
              </span>
              <span className="px-2 border border-black rounded-full">
                WEB DESIGN
              </span>
              <span className="px-2 border border-black rounded-full">
                UX & UI DESIGN
              </span>
              <span className="px-2 border border-black rounded-full">
                DEVELOPMENT
              </span>
              <span className="px-2 border border-black rounded-full">
                MOTION DESIGN
              </span>
              <span className="px-2 border border-black rounded-full">
                QUALITY ASSURANCE
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

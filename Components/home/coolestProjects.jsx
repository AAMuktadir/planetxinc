import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function CoolestProjects() {
  return (
    <>
      <div className="bg-[url('/image/CoolestProject.jpeg')] bg-cover bg-no-repeat bg-center h-full w-full">
        <section className="py-32 px-28">
          <h3 className="text-white text-8xl">OUR COOLEST PROJECTS</h3>
        </section>
        <div className="px-4">
          <section className="bg-[url('/image/ProjectCase1.jpeg')] bg-cover bg-no-repeat bg-center h-full w-full py-40 rounded-t-3xl">
            <Marquee>
              <p className="flex gap-4 items-center justify-center text-9xl text-white">
                View case
                <Image
                  src={"/image/caseIcon.png"}
                  width={150}
                  height={150}
                  alt="icon"
                />
              </p>
            </Marquee>
          </section>
        </div>
      </div>
      <div className="bg-background py-16 px-4">
        <section className="bg-[url('/image/ProjectCase2.jpeg')] bg-cover bg-no-repeat bg-center h-full w-full py-40 rounded-t-3xl">
          <Marquee>
            <p className="flex gap-4 items-center justify-center text-9xl text-white">
              View case
              <Image
                src={"/image/caseIcon.png"}
                width={150}
                height={150}
                alt="icon"
              />
            </p>
          </Marquee>
        </section>
      </div>

      <div className="bg-background py-16 flex items-center justify-end pr-20 border-b border-white">
        <p className="text-footer -skew-x-12 w-80">
          WE THINK AND SPEAK MAINLY SWIFT, KOTLIN, NODE, REACT. THAT’S
          EVERYTHING YOU NEED!
        </p>
      </div>
    </>
  );
}

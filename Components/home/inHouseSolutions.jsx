import React from "react";
import Image from "next/image";

export default function InHouseSolutions() {
  return (
    <>
      <div className="bg-footer">
        <section className="flex">
          <h3 className="text-8xl pt-20 translate-x-28">
            WE BUILD A STABLE CODE USING IN-HOUSE SOLUTIONS
          </h3>
          <div className="">
            <Image
              src={"/image/inhouseDevelopment.png"}
              width={2500}
              height={2500}
              alt="photo"
            />
          </div>
        </section>
        <section className="flex items-center justify-end pt-40 pr-20 pb-20 w-full">
          <p className="w-[450px]">
            Developing digital products since 2010. We help bring ideas to life
            and create digital products that work
          </p>
        </section>
      </div>
    </>
  );
}

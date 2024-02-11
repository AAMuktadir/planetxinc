import React from "react";
import { devCardInfo } from "@/data/developmentCardInfo";
import Image from "next/image";

export default function DevelopmentCard() {
  return (
    <>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 px-36">
        {devCardInfo.map((card, id) => (
          <div className="relative hover:scale-105 duration-500" key={card.id}>
            <Image
              src={card.background}
              height={300}
              width={500}
              alt="image"
              className="rounded-2xl "
            />
            <section className="absolute inset-0 flex">
              <div className="w-2/3 pl-12">
                <h4 className="text-3xl font-medium uppercase tracking-wider pt-10 pb-6">
                  {card.title}
                </h4>
                <div className="flex uppercase gap-4">
                  <p className="border border-black px-2 rounded-full">
                    {card.primary}
                  </p>
                  <p className="border border-black px-2 rounded-full">
                    {card.secondary}
                  </p>
                </div>
              </div>
              <div className="w-1/3"></div>
            </section>
          </div>
        ))}
      </div>
    </>
  );
}

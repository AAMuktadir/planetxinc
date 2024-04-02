import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function OurClients() {
  return (
    <>
      <div className="bg-background h-full pt-0">
        <div className=" px-4 sm:px-32">
          <h3 className="text-4xl sm:text-7xl text-white font-semibold">
            Our Clients
          </h3>
          <p className="text-white text-xl sm:text-sm py-8">
            We have developed digital marketing strategies, designed websites,
            and created content to engage customers for a number of small to
            medium-sized businesses.
          </p>
        </div>

        <section className="border-t border-white py-20 ">
          <Marquee
            pauseOnHover={true}
            autoFill={true}
            direction="right"
            className=""
          >
            <div className="pl-10 flex gap-10 items-center justify-center">
              <Image
                src={"/image/ourClients/burgerKing.png"}
                width={100}
                height={100}
                alt="icon"
              />
              <Image
                src={"/image/ourClients/Omera.png"}
                width={100}
                height={100}
                alt="icon"
              />
              <Image
                src={"/image/ourClients/stmbiosolutions.png"}
                width={100}
                height={100}
                alt="icon"
              />
              <Image
                src={"/image/ourClients/clear.png"}
                width={100}
                height={100}
                alt="icon"
              />
              <Image
                src={"/image/ourClients/Saffola.png"}
                width={100}
                height={100}
                alt="icon"
              />
              <Image
                src={"/image/ourClients/bbsCables.png"}
                width={100}
                height={100}
                alt="icon"
              />
            </div>
          </Marquee>
        </section>
      </div>
    </>
  );
}

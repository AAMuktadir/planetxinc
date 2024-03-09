import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function OurClients() {
  return (
    <>
      <div className="bg-whiteBG " id="our-client">
        <section className="pl-4 sm:pl-28 pr-4 sm:pr-20 sm:flex items-end justify-between py-20">
          <h3 className="text-5xl sm:text-8xl">
            OUR <br />
            CLIENTS
          </h3>

          <p className="sm:w-[450px] pt-8 sm:pt-0">
            We have developed digital marketing strategies, designed websites,
            and created content to engage customers for a number of small to
            medium-sized businesses.
          </p>
        </section>

        <section className="border-t border-black py-20">
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

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import DevelopmentCard from "../otherComponents/developmentCard";

export default function DevelopmentTools() {
  return (
    <>
      <div className="bg-background py-20">
        <div className="">
          <Marquee>
            <div className="flex gap-16 items-center justify-center">
              <Image
                src={"/image/icons/mobile.png"}
                width={150}
                height={100}
                alt="icon"
              />
              <Image
                src={"/image/icons/swift.png"}
                width={150}
                height={100}
                alt="icon"
              />
              <Image
                src={"/image/icons/kotlin.png"}
                width={150}
                height={100}
                alt="icon"
              />
              <Image
                src={"/image/icons/react.png"}
                width={150}
                height={100}
                alt="icon"
              />
              <Image
                src={"/image/icons/java.png"}
                width={150}
                height={100}
                alt="icon"
              />
            </div>
          </Marquee>
          <Marquee direction="right" className="pt-20">
            <div className="flex gap-20 items-center justify-center">
              <Image
                src={"/image/icons/web.png"}
                width={120}
                height={100}
                alt="icon"
              />
              <Image
                src={"/image/icons/js.png"}
                width={100}
                height={80}
                alt="icon"
              />
              <Image
                src={"/image/icons/nodejs.png"}
                width={150}
                height={80}
                alt="icon"
              />
              <Image
                src={"/image/icons/html.png"}
                width={80}
                height={80}
                alt="icon"
              />
              <Image
                src={"/image/icons/redis.png"}
                width={150}
                height={80}
                alt="icon"
              />
            </div>
          </Marquee>
        </div>

        <div className="py-28">
          <DevelopmentCard />
        </div>
      </div>
    </>
  );
}

import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-background flex items-center justify-left px-8 py-2 w-full sm:fixed z-10">
      <span>
        <Image src={"/Global/Logo.png"} width={90} height={50} alt={"logo"} />
      </span>
      <h2 className="text-white text-center px-0 sm:px-20 uppercase">
        Hello, this website is under construction
      </h2>
    </div>
  );
}

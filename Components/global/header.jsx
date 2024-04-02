import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";

export default function Header() {
  return (
    <div className="bg-background flex items-center justify-between px-8 py-2 w-full z-10">
      <span>
        <Image src={"/Global/Logo.png"} width={90} height={50} alt={"logo"} />
      </span>
      <h2 className="text-center px-0 sm:px-20 uppercase text-white">
        Hello, this website is under construction
      </h2>
      <div className="">
        <Navbar />
      </div>
    </div>
  );
}

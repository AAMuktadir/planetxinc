import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";

export default function Header() {
  return (
    <div className="bg-background flex items-center justify-between px-8 py-2 w-full z-10">
      <Link href={"/"}>
        <Image src={"/Global/Logo.png"} width={90} height={50} alt={"logo"} />
      </Link>

      <div className="">
        <Navbar />
      </div>
    </div>
  );
}

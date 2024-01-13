"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [banner, setbanner] = useState(true);

  return (
    <main className="bg-background h-screen pt-40">
      <div className="text-white text-8xl tracking-widest pl-20">
        <h2 className="">
          WE
          <span className="border-2 px-4 py-0 border-footer rounded-full text-footer">
            CREATE
          </span>
        </h2>
        <h2 className="py-2">DIGITAL</h2>
        <h2>_SOLUTIONS</h2>
      </div>
      <div></div>
    </main>
  );
}

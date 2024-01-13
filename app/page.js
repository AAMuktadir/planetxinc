"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [banner, setbanner] = useState(true);

  return (
    <main className="bg-background h-screen pt-40">
      <div className="text-white text-4xl tracking-widest">
        <h2 className="">
          WE{" "}
          <span className="border-2 p-1 border-white rounded-full">CREATE</span>
        </h2>
        <h2 className="py-2">DIGITAL</h2>
        <h2>SOLUTIONS</h2>
      </div>
      <div></div>
    </main>
  );
}

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { servicesData } from "@/data/servicesData";

export default function ServicesItems() {
  const [selectedItem, setSelectedItem] = useState("IT");
  const singleItem = servicesData.find((item) => item.idx == selectedItem);

  const imgSource = () => {
    return singleItem.image;
  };
  return (
    <>
      <div className="px-4 sm:px-20">
        <h2 className="text-sm sm:text-xl pb-8">
          {singleItem.shortDescription}
        </h2>
        <div className="sm:flex gap-12">
          <div className="sm:w-1/2">
            <Image src={imgSource()} height={500} width={500} alt="img" />
          </div>

          <div className="pt-8 sm:pt-0 text-sm sm:text-xl">
            <p
              className={`cursor-pointer p-2 ${
                selectedItem === "IT" ? "bg-footer text-darkBG" : ""
              }`}
              onClick={() => setSelectedItem("IT")}
            >
              IT Solution
            </p>
            <p
              className={`cursor-pointer p-2 ${
                selectedItem === "M" ? "bg-footer text-darkBG" : ""
              }`}
              onClick={() => setSelectedItem("M")}
            >
              Marketing
            </p>
            <p
              className={`cursor-pointer p-2 ${
                selectedItem === "ID" ? "bg-footer text-darkBG" : ""
              }`}
              onClick={() => setSelectedItem("ID")}
            >
              Interior Design
            </p>
            <p
              className={`cursor-pointer p-2 ${
                selectedItem === "BF" ? "bg-footer text-darkBG" : ""
              }`}
              onClick={() => setSelectedItem("BF")}
            >
              Business Formation
            </p>
            <p
              className={`cursor-pointer p-2 ${
                selectedItem === "EM" ? "bg-footer text-darkBG" : ""
              }`}
              onClick={() => setSelectedItem("EM")}
            >
              Event Management
            </p>
          </div>
        </div>
        <div className="pt-20">{singleItem.featureTitle}</div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-10 md:mx-0 mx-5">
          {singleItem.featureData.map((feature) => (
            <div className="col-span-1 flex flex-row" key={feature.id}>
              <div className="bg-footer p-3 w-1/4 flex items-center justify-center">
                <Image
                  src={feature.url}
                  width={50}
                  height={50}
                  alt="feature icon"
                />
              </div>
              <div className="bg-whiteBG w-3/4 flex items-center justify-center">
                <span className="text-center text-darkBG text-sm">
                  {feature.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

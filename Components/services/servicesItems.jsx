"use client";
import React, { useState } from "react";
import Image from "next/image";
import { servicesData } from "@/data/servicesData";

export default function ServicesItems() {
  const [selectedItem, setSelectedItem] = useState("IT");
  const singleItem = servicesData.find((item) => item.idx == selectedItem);

  //   const itemHandler = (key) => {
  //     if (key == "IT") {
  //       setSelectedImage("/image/services/it_solution.jpeg");
  //       setSelectedItem("IT");
  //     } else if (key == "M") {
  //       setSelectedImage("/image/services/marketing.jpeg");
  //       setSelectedItem("M");
  //     } else if (key == "ID") {
  //       setSelectedImage("/image/services/interior_design.jpeg");
  //       setSelectedItem("ID");
  //     } else if (key == "BF") {
  //       setSelectedImage("/image/services/business_formation.jpeg");
  //       setSelectedItem("BF");
  //     } else if (key == "EM") {
  //       setSelectedImage("/image/services/event_management.jpeg");
  //       setSelectedItem("EM");
  //     }
  //   };

  const imgSource = () => {
    return singleItem.image;
  };
  return (
    <>
      <div className="sm:flex px-20 gap-12">
        <div className="sm:w-1/2">
          <Image src={imgSource()} height={500} width={500} alt="img" />
        </div>

        <div className="">
          <p
            className={`text-xl cursor-pointer ${
              selectedItem === "IT" ? "bg-footer" : ""
            }`}
            onClick={() => setSelectedItem("IT")}
          >
            IT Solution
          </p>
          <p
            className={`text-xl cursor-pointer ${
              selectedItem === "M" ? "bg-footer" : ""
            }`}
            onClick={() => setSelectedItem("M")}
          >
            Marketing
          </p>
          <p
            className={`text-xl cursor-pointer ${
              selectedItem === "ID" ? "bg-footer" : ""
            }`}
            onClick={() => setSelectedItem("ID")}
          >
            Interior Design
          </p>
          <p
            className={`text-xl cursor-pointer ${
              selectedItem === "BF" ? "bg-footer" : ""
            }`}
            onClick={() => setSelectedItem("BF")}
          >
            Business Formation
          </p>
          <p
            className={`text-xl cursor-pointer ${
              selectedItem === "EM" ? "bg-footer" : ""
            }`}
            onClick={() => setSelectedItem("EM")}
          >
            Event Management
          </p>
        </div>
      </div>
    </>
  );
}

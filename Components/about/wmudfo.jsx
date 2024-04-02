import React from "react";
import { wmudfoData } from "@/data/wmudfoData";

export default function WhatMakesUsDifferent() {
  return (
    <div className="w-full bg-whiteBG px-4 sm:px-20 pt-4 pb-16">
      <h4 className="text-xl sm:text-6xl pb-4 sm:py-8 font-medium">
        What makes us
        <br /> different from others
      </h4>
      <div className="sm:grid grid-cols-3 gap-12">
        {wmudfoData.map((data, id) => (
          <div
            className="bg-gray-200 rounded-2xl p-4 h-80 text-center"
            key={data.id}
          >
            <h2 className="text-lg sm:text-xl font-medium">{data.title}</h2>
            <p className="text-sm sm:text-lg pt-4">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

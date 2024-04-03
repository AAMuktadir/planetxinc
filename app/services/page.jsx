import React from "react";
import Header from "@/Components/global/header";
import ServicesItems from "@/Components/services/servicesItems";

export default function page() {
  return (
    <>
      <div className="bg-background text-white">
        <Header />
        <div className="py-20">
          <ServicesItems />
        </div>
      </div>
    </>
  );
}

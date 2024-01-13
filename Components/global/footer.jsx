import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="bg-footer py-16">
        <h4 className="text-center">Hello this is footer</h4>
        <div className="flex items-center justify-center">
          <Image
            src={"/Global/LogoWhite.png"}
            width={90}
            height={50}
            alt={"logo"}
          />
        </div>
      </div>
    </>
  );
}

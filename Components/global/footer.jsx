import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="bg-footer py-16">
        <div className="flex items-center justify-center">
          <Image
            src={"/Global/LogoWhite.png"}
            width={90}
            height={50}
            alt={"logo"}
          />
        </div>
        <div className="flex items-center justify-center gap-4 text-white text-[28px] py-4">
          <span>
            <Link href="https://www.facebook.com/PlanetXInc/" target={"_blank"}>
              <FaFacebook />
            </Link>
          </span>
          <span>
            <Link
              href="https://www.instagram.com/planetxinc?igsh=MXgxbzkydzAzM3FkOA=="
              target={"_blank"}
            >
              <PiInstagramLogoFill />
            </Link>
          </span>
          <span>
            <Link
              href="https://bd.linkedin.com/company/planet-x-incorporated"
              target={"_blank"}
            >
              <FaLinkedin />
            </Link>
          </span>
        </div>
        <div className="text-center">
          <p>
            Ground Floor, House 7, Road 4, Gulshan 1, Dhaka 1213, Bangladesh
          </p>

          <p>Planet X Inc Ltd. © Copyright 2023</p>
        </div>
      </div>
    </>
  );
}

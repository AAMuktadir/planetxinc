"use client";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center text-white container py-5">
      <Sheet>
        <SheetTrigger asChild>
          <button>
            <AiOutlineMenu size={25} />
          </button>
        </SheetTrigger>
        <SheetContent side={"right"}>
          <div className="flex flex-col text-black w-full items-center justify-center h-full  gap-4">
            <Link
              href={"/"}
              className={`text-xl sm:text-2xl hover:text-white cursor-pointer ${
                pathname == "/" && "text-white "
              }`}
            >
              Home
            </Link>

            <Link
              href={"/about-us"}
              className={`text-xl sm:text-2xl hover:text-white cursor-pointer  ${
                pathname == "/about-us" && "text-white "
              }`}
            >
              About
            </Link>

            <Link
              href={"/our-products"}
              className={`text-xl sm:text-2xl hover:text-white cursor-pointer ${
                pathname == "/our-products" && "text-white"
              }`}
            >
              Products
            </Link>

            <Link
              href={"/services"}
              className={`text-xl sm:text-2xl hover:text-white cursor-pointer ${
                pathname == "/services" && "text-white"
              }`}
            >
              Services
            </Link>
            <Link
              href={"/our-clients"}
              className={`text-xl sm:text-2xl hover:text-white cursor-pointer ${
                pathname == "/our-clients" && "text-white"
              }`}
            >
              Clients
            </Link>
            <Link
              href={"/contact-us"}
              className={`text-xl sm:text-2xl hover:text-white cursor-pointer ${
                pathname == "/contact-us" && "text-white"
              }`}
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

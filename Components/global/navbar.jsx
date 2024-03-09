"use client";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
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
              className="text-xl sm:text-2xl hover:text-white cursor-pointer"
            >
              Home
            </Link>

            <Link
              href={"/#our-client"}
              className="text-xl sm:text-2xl hover:text-white cursor-pointer"
            >
              About
            </Link>

            <Link
              href={"/#our-client"}
              className="text-xl sm:text-2xl hover:text-white cursor-pointer"
            >
              Products
            </Link>

            <Link
              href={"/#our-client"}
              className="text-xl sm:text-2xl hover:text-white cursor-pointer"
            >
              Services
            </Link>
            <Link
              href={"/#our-client"}
              className="text-xl sm:text-2xl hover:text-white cursor-pointer"
            >
              Clients
            </Link>
            <Link
              href={"/#our-client"}
              className="text-xl sm:text-2xl hover:text-white cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

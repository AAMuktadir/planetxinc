"use client";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
          <SheetHeader>
            <SheetTitle className="text-left text-white">Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col text-white">
            <Link href={"/#our-client"} className="">
              Our client
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

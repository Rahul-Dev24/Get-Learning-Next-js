"use client";
import { Button } from "@/components/ui/button";
import { BellDot, Search } from "lucide-react";
import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

const Header = ({ handelMenuBar }) => {
  const { user, isLoaded } = useUser();
  return (
    <div className="p-4 bg-white flex justify-between">
      <div className="flex gap-4">
        <Image
          src="/menu.svg"
          height={27}
          width={38}
          onClick={() => handelMenuBar()}
          className="p-2 hover:bg-gray-200 cursor-pointer rounded-xl text-white sm:hidden"
        />
        {/* Search bar here */}
        <div className="flex gap-2 border rounded-md p-2">
          <Search className="w-3 h-5" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none w-[28vw]"
          />
        </div>
      </div>

      {/* Get started button & bell icon */}
      <div className="flex items-center gap-3 pr-2">
        <BellDot className="text-gray-500 cursor-pointer " />
        {isLoaded && user ? (
          <UserButton afterSignOutUrl="/courses" />
        ) : (
          <Link href={"/sign-in"}>
            <Button>Log-in</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;

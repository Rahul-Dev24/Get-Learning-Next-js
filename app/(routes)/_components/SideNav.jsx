"use client";
import React from "react";
import {
  BadgeIcon,
  BookOpen,
  GraduationCap,
  LayoutGrid,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";

const SideNav = () => {
  const user = useUser();
  const menu = [
    {
      id: 5,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
      auth: user.isSignedIn,
    },
    {
      id: 1,
      name: "All Courses",
      icon: BookOpen,
      path: "/courses",
      auth: true,
    },
    {
      id: 4,
      name: "Store",
      icon: LayoutGrid,
      path: "/member",
      auth: true,
    },
    {
      id: 2,
      name: "Membership",
      icon: BadgeIcon,
      path: "/member",
      auth: true,
    },
    {
      id: 3,
      name: "Be Instructor",
      icon: GraduationCap,
      path: "/intro",
      auth: true,
    },
    {
      id: 8,
      name: "Newsletter",
      icon: Mail,
      path: "/intro",
      auth: true,
    },
  ];

  const path = usePathname();
  return (
    <div className="p-5 bg-white shadow-sm border h-screen">
      <div>
        <Image src="/logo.png" alt="logo" width={170} height={80} />
      </div>
      <hr className="mt-7" />
      <div className="mt-5">
        {menu.map(
          (item, index) =>
            item.auth && (
              <Link href={item.path}>
                <div
                  className={`group flex gap-3 mt-2 p-3 text-[18px] items-center text-gray-500 cursor-pointer hover:bg-primary hover:text-white rounded-md
              transition-all ease-in-out duration-200 ${
                path.includes(item.path) && "bg-primary text-white"
              }`}
                >
                  <item.icon className="group-hover:animate-bounce" />
                  <h2>{item.name}</h2>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default SideNav;

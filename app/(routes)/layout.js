"use client";
import Header from "./_components/Header";
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
const layout = ({ children }) => {
  const [sideNav, setsideNav] = useState("hidden");

  const handelMenuBar = () => {
    setsideNav("block");
  };
  const hidMenu = () => {
    setsideNav("hidden");
  };
  return (
    <div>
      <div className={`sm:w-64 ${sideNav} sm:block fixed`}>
        <SideNav hidMenu={hidMenu} />
      </div>
      <div className="sm:ml-64">
        <Header handelMenuBar={handelMenuBar} />
        {children}
      </div>
    </div>
  );
};

export default layout;

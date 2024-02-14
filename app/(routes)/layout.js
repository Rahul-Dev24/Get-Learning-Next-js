import Header from "./_components/Header";
import React from "react";
import SideNav from "./_components/SideNav";

const layout = ({ children }) => {
  function handelMenuBar() {
    console.log("clicked");
  }
  return (
    <div>
      <div className="sm:w-64 hidden sm:block fixed">
        <SideNav />
      </div>
      <div className="sm:ml-64">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default layout;

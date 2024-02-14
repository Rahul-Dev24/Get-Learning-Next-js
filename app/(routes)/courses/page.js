"use client";
import React from "react";
import CourseList from "./_components/CourseList";
import Wellcome from "./_components/Wellcome";
import SideBanners from "./_components/SideBanners";

const Courses = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-4">
      {/* left container */}
      <div className="col-span-3">
        <center>
          {/* Banner */}
          <Wellcome />
        </center>
        {/* course list */}
        <center>
          <CourseList />
        </center>
      </div>

      {/* right container */}
      <center>
        <div className="p-5 bg-white rounded-xl">
          <SideBanners />
        </div>
      </center>
    </div>
  );
};

export default Courses;

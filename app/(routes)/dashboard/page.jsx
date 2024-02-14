"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import SideBanners from "../courses/_components/SideBanners";
import InProgressCourseList from "./_components/InProgressCourseList";
import WellcomeBannerDashboard from "./_components/WellcomeBannerDashboard";

const Dashboard = () => {
  const { user } = useUser();
  const [userEnrollCourses, setuserEnrollCourses] = useState([]);

  useEffect(() => {
    user && getAllUserEnrollCourse();
  }, []);

  const getAllUserEnrollCourse = () => {
    GlobalApi.getUserEnrolledCourse(
      user?.primaryEmailAddress?.emailAddress
    ).then((res) => {
      setuserEnrollCourses(res?.userEnrollCourses);
    });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-5">
      {/* left container */}
      <div className="col-span-3">
        <center>
          {/* Banner */}
          <WellcomeBannerDashboard user={user} />
        </center>
        <InProgressCourseList userEnrollCourses={userEnrollCourses} />
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

export default Dashboard;

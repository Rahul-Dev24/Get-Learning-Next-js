import Image from "next/image";
import React from "react";

const WellcomeBannerDashboard = ({ user }) => {
  return (
    <div className="flex gap-5 items-center bg-secondary rounded-xl p-5">
      <Image
        src="/panda.png"
        alt="Loading"
        width={100}
        height={100}
        className="mr-5"
      />
      <div>
        <h2 className="font-bold text-[29px]">
          WellCome Back{" "}
          <span className="text-primary">
            {" "}
            {user?.fullName === null ? "Learner" : user?.fullName}{" "}
          </span>
        </h2>
        <h2 className="text-gray-500">
          Let's Begin with Courses & Keep it up and Improve your Progress
        </h2>
      </div>
    </div>
  );
};

export default WellcomeBannerDashboard;

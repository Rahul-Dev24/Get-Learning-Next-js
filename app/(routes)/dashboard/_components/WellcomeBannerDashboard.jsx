import Image from "next/image";
import React from "react";

const WellcomeBannerDashboard = ({ user }) => {
  return (
    <div className="flex gap-5 items-center bg-secondary rounded-xl p-5">
      <Image
        src="/banner.jpg"
        alt="Loading"
        width={130}
        height={140}
        className="mr-5 rounded-xl"
      />
      <div>
        <h2 className="font-bold text-[4vw] sm:text-[3vw]">
          WellCome Back{" "}
          <span className="text-primary">
            {" "}
            {user?.fullName === null ? "Learner" : user?.fullName}{" "}
          </span>
        </h2>
        <h2 className="text-gray-500 text-[2vw] sm:text-[1.2vw]">
          Let's Begin with Courses & Keep it up and Improve your Progress
        </h2>
      </div>
    </div>
  );
};

export default WellcomeBannerDashboard;

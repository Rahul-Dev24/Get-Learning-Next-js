import React from "react";
import Image from "next/image";

const Wellcome = () => {
  return (
    <div className="flex gap-5 items-center bg-secondary rounded-xl p-5">
      <Image
        src="/banner.jpg"
        alt="Loading"
        width={160}
        height={160}
        className="mr-5 rounded-xl"
      />
      <div>
        <h2 className="font-bold text-[4vw] sm:text-[3vw]">
          WellCome to <span className="text-primary"> Rahul-Dev24 </span>{" "}
          Academy
        </h2>
        <h2 className="text-gray-500 text-[2vw] sm:text-[1.2vw]">
          Explore, Learn and Build All Real Life Projects
        </h2>
      </div>
    </div>
  );
};

export default Wellcome;

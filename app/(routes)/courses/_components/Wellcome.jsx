import React from "react";
import Image from "next/image";

const Wellcome = () => {
  return (
    <div className="flex gap-5 items-center bg-secondary rounded-xl p-5">
      <Image
        src="/banner.jpg"
        alt="Loading"
        width={100}
        height={100}
        className="mr-5 rounded-xl"
      />
      <div>
        <h2 className="font-bold text-[29px]">
          WellCome to <span className="text-primary"> Rahul-Dev24 </span>{" "}
          Academy
        </h2>
        <h2 className="text-gray-500">
          Explore, Learn and Build All Real Life Projects
        </h2>
      </div>
    </div>
  );
};

export default Wellcome;

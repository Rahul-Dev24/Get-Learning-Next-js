import Image from "next/image";
import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="border rounded-xl hover:shadow-md cursor-pointer hover:shadow-purple-400">
      <Image
        src={course.banner.url}
        width={500}
        height={150}
        className="rounded-t-xl"
        alt="loading"
      />
      <div className="font-semibold flex flex-col gap-1 p-4">
        <h2>{course.name}</h2>
        <h2 className="text-[15px] text-right text-green-300">Author</h2>
        {course?.totalChapters == 0 ? (
          <div className="flex gap-3">
            <Image
              src="/favicon.png"
              width={20}
              height={20}
              className="w-[20px] h-[20px]"
            />
            <h2 className="text-[14px] text-gray-400">Watch On youtube</h2>
          </div>
        ) : (
          <div className="flex gap-3">
            <Image
              src="/favicon.png"
              width={20}
              height={20}
              className="w-[20px] h-[20px]"
            />
            <h2 className="text-[14px] text-gray-400">Chapter</h2>
            <h2 className="text-[15px]">{course.free ? "Free" : "Paid"}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;

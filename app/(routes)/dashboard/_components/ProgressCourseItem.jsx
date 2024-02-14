import Image from "next/image";
import React, { useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

const ProgressCourseItem = ({ course }) => {
  useEffect(() => {
    getTotalCompletedChapterPerce(course);
  }, []);

  const getTotalCompletedChapterPerce = (item) => {
    //rerc =  totalComplitedChapter/totalChapter
    const perc =
      (item.completedChapter?.length / item?.courseList?.chapter?.length) * 100;
    return perc;
  };

  return (
    <Link href={"/course-preview/" + course?.courseList?.slug}>
      <div className="border rounded-xl hover:shadow-md cursor-pointer hover:shadow-purple-400">
        <Image
          src={course?.courseList?.banner.url}
          width={500}
          height={150}
          className="rounded-t-xl"
          alt="loading"
        />
        <div className="font-semibold flex flex-col gap-1 p-4">
          <h2>{course?.courseList?.name}</h2>
          <h2 className="text-[15px] text-right text-green-300">Author</h2>
          <h2 className="text-[12px] text-gray-400 mt-3">
            {getTotalCompletedChapterPerce(course).toString().substring(0, 5)}%{" "}
            <span className="float-right">
              {course?.completedChapter?.length}/
              {course?.courseList?.chapter?.length} Chapters
            </span>
          </h2>
          <Progress
            value={getTotalCompletedChapterPerce(course)}
            className="h-[7px]"
          />
        </div>
      </div>
    </Link>
  );
};

export default ProgressCourseItem;

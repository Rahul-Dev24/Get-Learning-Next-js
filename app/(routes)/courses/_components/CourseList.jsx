import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseCard from "./CourseCard";
import Link from "next/link";

const CourseList = () => {
  const [course, setCourseList] = useState([]);

  useEffect(() => {
    getAllCourses();
  }, []);

  // fetch course list
  const getAllCourses = () => {
    GlobalApi.getAllCourseList().then((res) => {
      setCourseList(res.courseLists);
    });
  };

  return (
    <div className="p-5 bg-white rounded-lg mt-5">
      {/* title & filter */}
      <div className="flex items-center justify-between">
        <h2 className="text-[16px] font-bold text-primary sm:text-[20px]">
          All Courses
        </h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">All</SelectItem>
            <SelectItem value="dark">Paid</SelectItem>
            <SelectItem value="system">Free</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <br />
      {/* display course list  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {course?.length > 0
          ? course.map((item, index) => (
              <Link href={"/course-preview/" + item.slug}>
                <div key={index}>
                  <CourseCard course={item} />
                </div>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <div
                key={index}
                className="w-full h-[240px] rounded-xl m-2 bg-slate-400 animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
};

export default CourseList;

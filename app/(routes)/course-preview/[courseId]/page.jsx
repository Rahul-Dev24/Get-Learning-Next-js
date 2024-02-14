"use client";
import { useEffect, useState } from "react";
import GlobalApi from "@/app/_utils/GlobalApi";
import React from "react";
import CourseVideoDescription from "./_components/CourseVideoDescription";
import CourseEnrollSection from "./_components/CourseEnrollSection";
import CourseContent from "./_components/CourseContent";
import { useUser } from "@clerk/nextjs";

const CoursePreview = ({ params }) => {
  const [courseinfo, setcourseinfo] = useState();

  useEffect(() => {
    params && getCourseInfoById();
  }, [params]);

  const user = useUser();
  const [isAlreadyUserEnroll, setisAlreadyUserEnroll] = useState();

  useEffect(() => {
    courseinfo && user && checkUserEnrollToCourse();
  }, [courseinfo, user]);

  /**
   * used to get course info by slug name
   */
  const getCourseInfoById = () => {
    GlobalApi.getCourseById(params?.courseId).then((res) => {
      console.log(res?.courseList);
      setcourseinfo(res?.courseList);
    });
  };

  /**
   * To check user already enrolled to course or not
   */
  const checkUserEnrollToCourse = () => {
    GlobalApi.checkUserEnrollToCourse(
      courseinfo?.slug,
      user?.user?.primaryEmailAddress?.emailAddress
    ).then((res) => {
      res?.userEnrollCourses[0]?.id &&
        setisAlreadyUserEnroll(res?.userEnrollCourses[0]?.id);
    });
  };

  return (
    courseinfo && (
      <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
        {/* Title, video description */}
        <div className="col-span-2 bg-white p-3">
          <CourseVideoDescription courseInfo={courseinfo} />
        </div>
        {/* course content */}
        <div>
          <CourseEnrollSection
            courseInfo={courseinfo}
            isAlreadyUserEnroll={isAlreadyUserEnroll}
          />
          <CourseContent
            courseInfo={courseinfo}
            isAlreadyUserEnroll={isAlreadyUserEnroll}
          />
        </div>
      </div>
    )
  );
};

export default CoursePreview;

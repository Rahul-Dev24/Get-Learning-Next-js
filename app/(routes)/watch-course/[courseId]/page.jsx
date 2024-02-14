"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "@/app/_utils/GlobalApi";
import { useUser } from "@clerk/nextjs";
import CourseVideoDescription from "../../course-preview/[courseId]/_components/CourseVideoDescription";
import CourseContent from "../../course-preview/[courseId]/_components/CourseContent";
import { toast } from "sonner";

const WatchCourse = ({ params }) => {
  const { user } = useUser();
  const [courseInfo, setcourseInfo] = useState([]);
  const [completedChapter, setcompletedChapter] = useState([]);
  const [atciveChapterIndex, setatciveChapterIndex] = useState(0);
  useEffect(() => {
    params && user && getUserEnrollCourseDetails();
  }, [params && user]);

  const getUserEnrollCourseDetails = () => {
    GlobalApi.getUserEnrollCourse(
      params.courseId,
      user?.primaryEmailAddress.emailAddress
    ).then((res) => {
      console.log();
      setcompletedChapter(res?.userEnrollCourses[0]?.completedChapter);
      setcourseInfo(res?.userEnrollCourses[0].courseList);
    });
  };

  /**
   * save completed chapter id
   */
  const onChapterComplete = (chapterId) => {
    GlobalApi.markChapterComplete(params?.courseId, chapterId).then((res) => {
      console.log(res);
      if (res) {
        getUserEnrollCourseDetails();
        toast("Chapter Marker as Completed...!");
      }
    });
  };

  return (
    courseInfo?.name && (
      <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
        {/* Title, video description */}
        <div className="col-span-2 bg-white p-3">
          <CourseVideoDescription
            courseInfo={courseInfo}
            atciveChapterIndex={atciveChapterIndex}
            watchMode={true}
            setChapterCompleted={(chapterId) => onChapterComplete(chapterId)}
          />
        </div>
        {/* course content */}
        <div>
          <CourseContent
            courseInfo={courseInfo}
            isAlreadyUserEnroll={true}
            watchMode={true}
            completedChapter={completedChapter}
            setAtciveChapterIndex={(index) => setatciveChapterIndex(index)}
          />
        </div>
      </div>
    )
  );
};

export default WatchCourse;

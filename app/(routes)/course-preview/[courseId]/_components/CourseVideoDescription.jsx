import React from "react";
import VideoPlayer from "./VideoPlayer";
import Markdown from "react-markdown";
import { Button } from "@/components/ui/button";

const CourseVideoDescription = ({
  courseInfo,
  atciveChapterIndex,
  watchMode = false,
  setChapterCompleted,
}) => {
  console.log(atciveChapterIndex);
  return (
    <div>
      <h2 className="text-[20px] font-semibold">{courseInfo?.name}</h2>
      <h2 className="text-gray-500 text-[14px] mb-3">
        {courseInfo?.free ? "Free" : "Paid"}
      </h2>

      {/* video player */}
      <VideoPlayer
        videoUrl={
          courseInfo?.chapter[
            atciveChapterIndex == undefined ? 0 : atciveChapterIndex
          ]?.videoLink
        }
        poster={!watchMode ? courseInfo?.banner?.url : null}
      />

      {/* discription */}

      <h2 className="mt-5 text-[17px] font-semibold">
        {watchMode ? (
          <span className="flex justify-between items-center">
            {courseInfo?.chapter[atciveChapterIndex]?.name}
            <Button
              onClick={() =>
                setChapterCompleted(courseInfo?.chapter[atciveChapterIndex]?.id)
              }
            >
              Mark Completed
            </Button>
          </span>
        ) : (
          <span>About This Course</span>
        )}
      </h2>
      {watchMode ? (
        <Markdown className="text-[13px] font-light mt-2 leading-6">
          I want to add short description
        </Markdown>
      ) : (
        <Markdown className="text-[13px] font-light mt-2 leading-6">
          {courseInfo?.description}
        </Markdown>
      )}
    </div>
  );
};

export default CourseVideoDescription;

import { Lock } from "lucide-react";
import { Play } from "lucide-react";
import React, { useState } from "react";

const CourseContent = ({
  courseInfo,
  isAlreadyUserEnroll,
  watchMode = false,
  completedChapter,
  setAtciveChapterIndex,
}) => {
  const [activeIndex, setactiveIndex] = useState(0);
  /**
   * check where the chapter is complited or not and change the color
   */
  const checkIsChapterComplited = (chapterId) => {
    return completedChapter.find((item) => item.chapterId == chapterId);
  };
  return (
    <div className="p-3 bg-white rounded-sm mt-3">
      <h2>Contents</h2>
      {courseInfo?.chapter?.map((item, index) => (
        <div>
          <h2
            className={`p-2 text-[14px] flex justify-between item-center border rounded-sm px-4 m-2 cursor-pointer hover:bg-gray-200 hover:text-gray-500 ${
              activeIndex == index && "bg-primary text-white"
            }
            ${isAlreadyUserEnroll && "hover:bg-primary hover:text-white"}
            ${
              watchMode &&
              checkIsChapterComplited(item.id) &&
              "border-green-800 bg-green-400"
            }
            `}
            onClick={() => {
              watchMode && setAtciveChapterIndex(index);
              watchMode && setactiveIndex(index);
            }}
          >
            {index + 1}. {item.name}
            {activeIndex == index || isAlreadyUserEnroll ? (
              <Play className="h-4 w-4" />
            ) : (
              <Lock className="h-4 w-4" />
            )}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default CourseContent;

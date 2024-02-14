import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import GlobalApi from "@/app/_utils/GlobalApi";
import { toast } from "sonner";

const CourseEnrollSection = ({ courseInfo, isAlreadyUserEnroll }) => {
  const membership = false;
  const user = useUser();
  const router = useRouter();
  // enroll to the course
  const onEnrollCourse = () => {
    GlobalApi.enrollToCourse(
      courseInfo?.slug,
      user?.user?.primaryEmailAddress?.emailAddress
    ).then((res) => {
      if (res) {
        // show toast message on sucessfully enrolled

        toast("User Enroll Successfull", {
          description: "User Enroll to this Course, Let's Enjoy your Course ",
          // action:{
          //   label:"undo",
          //   onClick: ()=> console.log("difine the action");
          // }
        });

        // redreact to the the watch course
        router.push("/watch-course/" + res.createUserEnrollCourse.id);
      }
    });
  };
  return (
    <div className="p-3 text-center rounded-sm bg-primary">
      <h2 className="text-[22px] font-bold text-white">Enroll to the Course</h2>
      {/* user is already login and has a membership then run this code */}
      {user.isSignedIn &&
      (membership || courseInfo.free) &&
      !isAlreadyUserEnroll ? (
        <div className="flex flex-col gap-3">
          <h2 className="text-white font-light">
            Enroll Now to Start Learning and Building the Project{" "}
          </h2>
          <Button
            className="bg-white text-primary hover:bg-gray-200 hover:text-primary"
            onClick={() => {
              onEnrollCourse();
            }}
          >
            Enroll Now
          </Button>
        </div>
      ) : !user.isSignedIn ? (
        <div className="flex flex-col gap-3">
          <h2 className="text-white font-light">
            Enroll Now to Start Learning and Building the Project{" "}
          </h2>
          <Link href={"/sign-in"}>
            <Button className="bg-white text-primary hover:bg-gray-200 hover:text-primary">
              Enroll Now
            </Button>
          </Link>
        </div>
      ) : (
        /* user does not have a membership or not login/signup */

        !isAlreadyUserEnroll && (
          <div className="flex flex-col gap-3 mt-3">
            <h2 className="text-white font-light">
              Buy a Monthly Membership and Get Access to All Courses{" "}
            </h2>
            <Button className="bg-white text-primary hover:bg-gray-200 hover:text-primary">
              Buy Just in 19 Rs
            </Button>
          </div>
        )
      )}
      {isAlreadyUserEnroll && (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white font-light">
            Continue to Learning & Exploring the Technologys and Build a
            Projects{" "}
          </h2>
          <Link href={"/watch-course/" + isAlreadyUserEnroll}>
            <Button className="bg-white text-primary hover:bg-gray-200 hover:text-primary">
              Continue Learning
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CourseEnrollSection;

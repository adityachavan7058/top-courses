import React from "react";

import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-hot-toast";
function Card(props) {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setlikedCourses = props.setlikedCourses;
  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      setlikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      // toast.("Like Removed") 
      toast.error("Liked Removed");

    } else {
      // Phele se like nahi to course
      // inserting the course in the liked course

      if (likedCourses.length === 0) {
        setlikedCourses([course.id]);
      } else {
        setlikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Sucessfully");
    }
  }
  return (
    <div className="w-[300px] bg-bgdark bg-opactiy-80 rounded-md overflow-hidden card">
      <div className="relative">
        <img src={course.image.url} alt="" />
        <div className="w-[40px] h-[30px] bg-white rounded-full absolute right-2 bottom-4 grid place-items-center">
          <button onClick={clickHandler}>{

            !likedCourses.includes(course.id) ?  (<FcLikePlaceholder></FcLikePlaceholder>) : (<FcLike></FcLike>)
          }</button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">
          
         {
           course.description.length >100 ? (course.description.substr(0,100)) + "..." :(course.description)
         }
          </p>
      </div>
    </div>
  );
}

export default Card;

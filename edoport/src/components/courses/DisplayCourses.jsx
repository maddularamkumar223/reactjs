import React, { useContext, useEffect } from "react";
import { courseContext } from "../context/CourseContext";
import { useNavigate } from "react-router-dom";

const DisplayCourses = () => {
  let { fetchCourses, courses } = useContext(courseContext);
  useEffect(() => {
    fetchCourses();
  }, []);
  console.log(courses);
  let navigate = useNavigate();
  let navigateToSingleCourse = (id) => {
    navigate(`/singleCourse/${id}`);
  };
  return (
    <div>
      {courses.map((value) => {
        return (
          <article>
            <p>Course Name : {value.courseName}</p>
            <p>Price : {value.price} Rs</p>
            <p>Duration : {value.duration} months</p>
            <button
              onClick={() => {
                navigateToSingleCourse(value.id);
              }}
            >
              Course Details
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default DisplayCourses;

import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { courseContext } from "../context/CourseContext";

const SingleCourse = () => {
  let { id } = useParams();

  let { singleCourse, fetchSingleCourse } = useContext(courseContext);
  console.log(singleCourse);

  useEffect(() => {
    fetchSingleCourse(id);
  }, []);
  return (
    <div>
      <p>Course Name : {singleCourse.courseName}</p>
      <p>Price : {singleCourse.price} Rs</p>
      <p>Duration : {singleCourse.duration} months</p>
      <p>Trainer Name : {singleCourse.trainerName}</p>
      <p>Technology : {singleCourse.technology}</p>
    </div>
  );
};

export default SingleCourse;

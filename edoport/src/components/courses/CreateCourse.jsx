import React, { useContext, useState } from "react";
import CreateForm from "./../form/CreateForm";
import { courseContext } from "../context/CourseContext";

const CreateCourse = () => {
  let [courseDetails, setCourseDetails] = useState({
    courseName: "",
    price: "",
    duration: "",
    technology: "",
    trainerName: "",
  });

  let { addCourse } = useContext(courseContext);
  let { courseName, price, duration, technology, trainerName } = courseDetails;

  let courseData = [
    {
      name: "courseName",
      stateValue: courseName,
      type: "text",
    },
    {
      name: "price",
      stateValue: price,
      type: "number",
    },
    {
      name: "duration",
      stateValue: duration,
      type: "number",
    },
    {
      name: "technology",
      stateValue: technology,
      type: "text",
    },
    {
      name: "trainerName",
      stateValue: trainerName,
      type: "text",
    },
  ];

  let handleChange = (e) => {
    let { name, value } = e.target;
    setCourseDetails({ ...courseDetails, [name]: value });
  };

  let handleSubmit = () => {
    addCourse(courseDetails);
  };
  return (
    <div>
      <CreateForm
        data={courseData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default CreateCourse;

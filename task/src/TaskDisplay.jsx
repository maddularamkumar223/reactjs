import React from "react";
import Style from "./TaskDisplay.module.css";

const TaskDisplay = ({ data, dataState }) => {
  console.log(data);
  let cssData = {
    border: "2px solid red",
    height: "150px",
    width: "200px",
    borderRadius: "20px",
    padding: "20px",
    fontSize: "22px",
  };
  return (
    <article className={Style.container}>
      {data.map((value) => {
        return (
          <section
            style={cssData}
            className={
              value.completed ? Style.complete : Style.incomplete
            }
          >
            <p>Task Name: {value.task}</p>
            <p>
              Task Completed: {value.completed ? "Completed" : "Not Completed"}
            </p>
          </section>
        );
      })}
    </article>
  );
};

export default TaskDisplay;

import React from "react";
import { NavLink } from "react-router-dom";
import CreateNavbar from "./CreateNavbar";

const Navigation = () => {
  let navData = [
    {
      name: "Home",
      path: "#",
    },
    {
      name: "Courses",
      path: "/displayCourse",
    },
    {
      name: "Trainers",
      path: "/displayTrainers",
    },
    {
      name: "Add Course",
      path: "/createCourse",
    },
    {
      name: "Add Trainer",
      path: "/createTrainer",
    },
  ];
  return (
    <section>
      <CreateNavbar data={navData} />
    </section>
  );
};

export default Navigation;

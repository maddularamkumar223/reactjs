import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CreateNavbar from "./CreateNavbar";
import { authContext } from "../context/AuthContext";

const Navigation = () => {
  let { role } = useContext(authContext);
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

  let navData1 = [
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
  ];

  return (
    <section>
      {role === "admin" ? (
        <CreateNavbar data={navData} />
      ) : (
        <CreateNavbar data={navData1} />
      )}
    </section>
  );
};

export default Navigation;

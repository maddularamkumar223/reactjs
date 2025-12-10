import { createBrowserRouter } from "react-router-dom";
import App from "./../../App";
import Login from "./../auth/login/Login";
import Register from "./../auth/register/Register";
import CreateTriner from "./../trainers/CreateTriner";
import CreateCourse from "./../courses/CreateCourse";
import DisplayCourses from "./../courses/DisplayCourses";
import DisplayTrainer from "./../trainers/DisplayTrainer";
import SingleCourse from "./../courses/SingleCourse";
import SingleTrainer from "./../trainers/SingleTrainer";

let route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/createTrainer",
        element: <CreateTriner />,
      },
      {
        path: "/createCourse",
        element: <CreateCourse />,
      },
      {
        path: "/displayCourse",
        element: <DisplayCourses />,
      },
      {
        path: "/displayTrainers",
        element: <DisplayTrainer />,
      },
      {
        path: "/singleCourse",
        element: <SingleCourse />,
      },
      {
        path: "/singleTrainer",
        element: <SingleTrainer />,
      },
    ],
  },
]);

export default route;

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
import { protectedRoutes } from "../utilities/protectedRoutes";

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
        loader: protectedRoutes,
      },
      {
        path: "/createCourse",
        element: <CreateCourse />,
        loader: protectedRoutes,
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
        path: "/singleCourse/:id",
        element: <SingleCourse />,
        loader: protectedRoutes,
      },
      {
        path: "/singleTrainer/:id",
        element: <SingleTrainer />,
        loader: protectedRoutes,
      },
    ],
  },
]);

export default route;

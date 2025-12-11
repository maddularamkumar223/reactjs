import { createRoot } from "react-dom/client";
import App from "./App";
import "../global.css";
import { RouterProvider } from "react-router-dom";
import route from "./components/routes/Route";
import AuthProvider from "./components/context/AuthContext";
import CourseProvider from "./components/context/CourseContext";

createRoot(document.getElementById("root")).render(
  <CourseProvider>
    <AuthProvider>
      <RouterProvider router={route}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </CourseProvider>
);

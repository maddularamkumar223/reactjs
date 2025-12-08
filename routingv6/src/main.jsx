import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import route from "./components/routes/Routes";
import "../global.css";

createRoot(document.getElementById("root")).render(
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>

  <RouterProvider router={route}>
    <App />
  </RouterProvider>
);

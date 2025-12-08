import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import App from "../../App";
import Contact from "../Contact";
import ProductsData from "../products/ProductsData";
import Men from "../products/Men";
import Women from "../products/Women";
import Kids from "../products/Kids";
import Layout from "../Layout";

let route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/layout",
        element: <Layout />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products",
        element: <ProductsData />,
        children: [
          {
            path: "/products/men",
            element: <Men />,
          },
          {
            path: "/products/women",
            element: <Women />,
          },
          {
            path: "/products/kids",
            element: <Kids />,
          },
        ],
      },
    ],
  },
]);

export default route;

import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Form, Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ProductsData from "./components/products/ProductsData";
import Men from "./components/products/Men";
import Women from "./components/products/Women";
import Kids from "./components/products/Kids";
import FormData from "./components/Form";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}

      {/* <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/products" element={<ProductsData />}>
          <Route path="men" element={<Men />}></Route>
          <Route path="women" element={<Women />}></Route>
          <Route path="kids" element={<Kids />}></Route>
        </Route>
      </Routes> */}
      {/* <Outlet /> */}
      <FormData />
      <Outlet />
    </div>
  );
};

export default App;

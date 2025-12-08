import React from "react";
import { Link, Outlet } from "react-router-dom";

const ProductsData = () => {
  return (
    <div>
      <Link to="men">Men</Link>
      <Link to="women">Women</Link>
      <Link to="kids">Kids</Link>
      <Outlet />
    </div>
  );
};

export default ProductsData;

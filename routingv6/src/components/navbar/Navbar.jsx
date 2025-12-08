import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/products">Products</Link> */}

      <NavLink
        to="/home"
        className={({ isActive }) => isActive && "active-link"}
      >
        Home
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => isActive && "active-link"}
      >
        Contact
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => isActive && "active-link"}
      >
        Products
      </NavLink>
    </div>
  );
};

export default Navbar;
``;

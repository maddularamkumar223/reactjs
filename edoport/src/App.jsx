import React from "react";
import NavbarContainer from "./components/navbar/NavbarContainer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavbarContainer />

      <section>
        <Outlet />
      </section>
    </>
  );
};

export default App;

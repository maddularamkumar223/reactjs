import React, { useContext } from "react";
// import Parent from "./components/firstpart/Parent";
// import MessageProvider from "./components/context/MessageContext";
// import Parent2 from "./components/secondpart/Parent2";
import Data from "./components/Data";
import Data1 from "./components/Data1";
import { themeContext } from "./components/context/theme/TheameContext";
import Register from "./components/forms/register/Register";
import Login from "./components/forms/login/Login";

const App = () => {
  let { theme, dark, light } = useContext(themeContext);
  return (
    <section style={theme ? dark : light}>
      {/* <Parent message="Some people buy a new vehicle from app" />
      <Parent2 /> */}
      {/* <Data />
      <Data1 /> */}
      <Register />
      <Login />
    </section>
  );
};
export default App;

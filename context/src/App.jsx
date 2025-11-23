import React from "react";
import Parent from "./components/firstpart/Parent";
import MessageProvider from "./components/content/MessageContext";
import Parent2 from "./components/secondpart/Parent2";

const App = () => {
  return (
    <>
      <Parent message="Some people buy a new vehicle from app" />
      <Parent2 />
    </>
  );
};
export default App;

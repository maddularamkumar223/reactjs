import React from "react";
import "./global.css";
import Child1 from "./child1/Child1";
import Child2 from "./child2/Child2";

const App = () => {
  let cb = {
    color: "green",
    backgroundColor: "red",
  };
  return (
    <>
      <div style={{ color: "red", backgroundColor: "black" }}>App</div>
      <h1 style={cb}>I am a h1 tag</h1>
      <Child1 />
      <Child2 />
    </>
  );
};

export default App;

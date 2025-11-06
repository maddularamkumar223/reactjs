import React, { useState } from "react";
import Child from "./Child";

const App = () => {
  let [color, setColor] = useState("red");
  let [scale, setScale] = useState(1);
  let colorChange = (e) => {
    console.log(e);
    setColor("blue");
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  let handleScale = () => {
    setScale(1.5);
  };
  console.log(scale);
  return (
    <div>
      <Child
        color={color}
        colorChange={colorChange}
        handleSubmit={handleSubmit}
        scale={{ scale, handleScale }}
      />
    </div>
  );
};

export default App;

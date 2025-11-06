import React from "react";
import Child from "./Child";

const Parent = ({ userName }) => {
  return (
    <div>
      Parent
      <Child userName={userName} />
    </div>
  );
};

export default Parent;

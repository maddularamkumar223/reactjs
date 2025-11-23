import React from "react";
import Child1 from "./Child1";

const Parent = ({ message }) => {
  return (
    <div>
      <Child1 message={message} />
    </div>
  );
};

export default Parent;

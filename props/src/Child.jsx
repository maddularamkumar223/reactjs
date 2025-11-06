import React from "react";

const Child = ({ userName }) => {
  console.log(userName);
  return (
    <div>
      <h1>Hello {userName} </h1>
    </div>
  );
};

export default Child;

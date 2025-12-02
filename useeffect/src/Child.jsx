import React, { useEffect } from "react";

const Child = ({ count, handleClick }) => {
  useEffect(() => {
    return () => {
      console.log("I am a component unmount");
      //   return "I am a component Un mount";
    };
  }, []);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Inc</button>
    </div>
  );
};

export default Child;

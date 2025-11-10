import React from "react";
import Style from "./Child2.module.css";

const Child2 = () => {
  return (
    <>
      <div className="child">Child2</div>
      <div className={Style.child}>I am a second div in the child 2</div>
    </>
  );
};

export default Child2;

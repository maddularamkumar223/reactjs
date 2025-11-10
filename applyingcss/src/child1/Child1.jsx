import React from "react";
// import "./global.css";
import Style from "./Child.module.css";

const Child1 = () => {
  return (
    <>
      <div className="child">Child1</div>
      <div className={Style.child}>I am a second dic in the child 1</div>
    </>
  );
};

export default Child1;

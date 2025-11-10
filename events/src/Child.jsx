import React from "react";
import Form from "./Form";


const Child = ({
  color,
  colorChange,
  handleSubmit,
  scale: { scale, handleScale },
}) => {
  return (
    <div>
      <h1
        style={{ color: color, transform: `scale(${scale})` }}
        onMouseOver={handleScale}
      >
        I am a child Component
      </h1>
      <button onClick={colorChange}>Click to change color</button>
      <Form handleSubmit={handleSubmit} />
      <img src={Image1}/>
    </div>
  );
};

export default Child;

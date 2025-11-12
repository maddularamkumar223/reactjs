import React, { useRef } from "react";
import Audio from "./Audio";

const App = () => {
  let inputRef = useRef(null);
  let handleSubmit = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value);
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Focus</button>
      <Audio />
    </div>
  );
};

export default App;

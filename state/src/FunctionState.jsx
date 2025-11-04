import React, { useState } from "react";
let FunctionState = () => {
  //   let [userName, setUsername] = React.useState           ("Ravi");
  //   let [count, setCount] = React.useState(0);
  let [userName, setUsername] = useState("ram");
  let [count, setCount] = useState(0);
  return (
    <>
      <h1 onClick={() => setUsername("Ram")}>My name is {userName}</h1>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => count > 0 && setCount(count - 1)}>Dec</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
};
export default FunctionState;

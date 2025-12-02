// import React, { useEffect, useState } from "react";
// import Child from "./Child";
// // ! useEffect will accept the two parameters 1. function 2. dependencies
// const App = () => {
//   let [count, setCount] = useState(0);
//   //   ! Below one behaves like a render method
//   //   useEffect(() => {
//   //     console.log("I am a render method");
//   //   });
//   // ! Below one behaves like a componentDidMount
//   //   useEffect(() => {
//   //     console.log("I am a component Did Mount");
//   //   },[]);
//   let handleClick = () => {
//     setCount(count + 1);
//   };
//   // ! Below one component Did Update
//   //   useEffect(() => {
//   //     console.log("I am a component Did Update");
//   //   }, [count]);
//   return (
//     <div>{count <= 5 && <Child count={count} handleClick={handleClick} />}</div>
//   );
// };

// export default App;

import React from "react";
import ApiHandling from "./components/ApiHandling";

const App = () => {
  return (
    <div>
      <ApiHandling />
    </div>
  );
};

export default App;

// import React from "react";

// const Counter = ({ count, inc, dec }) => {
//   console.log(inc);
//   console.log(dec);
//   console.log(count);
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => inc()}>Inc</button>
//       <button onClick={() => dec()}>Dec</button>
//     </div>
//   );
// };

// export default Counter;

import React from "react";

const Counter = ({ countData: { count, inc, dec } }) => {
  console.log(count);
  console.log(inc);
  console.log(dec);
  return (
    <div>
      <>
        <h1>Count :{count}</h1>
        <button onClick={inc}>Inc</button>
        <button onClick={dec}>Dec</button>
      </>
    </div>
  );
};

export default Counter;

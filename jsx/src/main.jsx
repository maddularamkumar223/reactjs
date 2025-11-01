import React, { Fragment } from "react";
import ReactDom from "react-dom/client";
// import { react } from '@vitejs/plugin-react';

// let div = React.createElement(
//   "div",
//   null,
//   React.createElement(
//     "h2",
//     null,
//     React.createElement(
//       "i",
//       null,
//       React.createElement("u", null, "I am a h2 tag")
//     )
//   ),
//   React.createElement("h1",null,'I am a h1 tag')
// );

// ReactDom.createRoot(document.getElementById("root")).render(
// <div className = "container">
//   <h2>
//     <i>
//       <u>I am a h2 tag</u>
//     </i>
//   </h2>
//   <h1>i am a h1 tag</h1>
//   <label for="">Data</label>
// </div>

// <React.Fragment>
//   <h2>
//     <i>
//       <u>I am a h2 tag</u>
//     </i>
//   </h2>
//   <h1>I am a h1 tag</h1>
//   <label htmlFor="">Data</label>
// </React.Fragment>

// <>
//   <h2>
//     <i>
//       <u>I am a h2 tag</u>
//     </i>
//   </h2>
//   <h1>I am a h1 tag</h1>
//   <label htmlFor="">Data</label>
// </>

// <Fragment>
//   <h2>I am a h2 tag</h2>
// </Fragment>
// );
// ! JSX Expression

let num = 10;
let num2 = 20;
console.log(num + num2);
let name = "Ravi";

let names = [
  { name: "Ram", age: 60 },
  { name: "Ravi", age: 12 },
  { name: "Kumar", age: 6 },
];

ReactDom.createRoot(document.getElementById("root")).render(
  <>
    <h1>{num + num2}</h1>
    <h1>{name}</h1>
    {names.map((value) => {
      return <h1>{`Name: ${value.name}  Age :${value.age}`}</h1>;
    })}
  </>
);

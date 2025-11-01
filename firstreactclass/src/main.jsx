import React from "react";
import ReactDom from "react-dom/client"

// console.log(React)

let h1 = React.createElement("h1",null,"I am a h1 tag")
// console.log(h1)

let h2 = React.createElement("h2",null,"I am a h2 tag")
// console.log(h2)

console.log(ReactDom)

ReactDom.createRoot(document.getElementById("root")).render(React.createElement("article",{"id":"article"},h2,h1))
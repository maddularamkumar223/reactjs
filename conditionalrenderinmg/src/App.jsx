import React, { useState } from "react";
import PageNotFound from "./PageNotFound";
import DisplayData from "./DisplayData";

const App = () => {
  let [display, setDisplay] = useState("kumari");
  //   if (display) {
  //     return <h1>I am a App Component</h1>;
  //   } else {
  //     return <h1>Data Not Found</h1>;
  //   }

  //   return (
  //     <>
  //       <PageNotFound />
  //       <h1>{display ? " I am a component" : "Data Not Found"}</h1>
  //     </>
  //   );

  //   if (display) {
  //     return <DisplayData />;
  //   } else {
  //     return <PageNotFound />;
  //   }

  //   return <section> {display ? <DisplayData /> : <PageNotFound />}</section>;

  //   return <section>{display && <DisplayData />}</section>;

  //   let score = 90;

  //   switch (true) {
  //     case score > 90: {
  //       console.log("Rank 1");
  //       break;
  //     }
  //     case score > 80: {
  //       console.log("Rank 2");
  //       break;
  //     }
  //     case score > 70: {
  //       console.log("Rank 3 ");
  //       break;
  //     }
  //     case score >= 35: {
  //       console.log("pass");
  //       break;
  //     }
  //     default: {
  //       console.log("Fail");
  //     }
  //   }

  switch (display) {
    case "ravi": {
      return <DisplayData userName="Ravi" />;
    }
    case "ram": {
      return <DisplayData userName="Ram" />;
    }
    case "ramya": {
      return <DisplayData userName="Ramya" />;
    }
    default: {
      return <PageNotFound />;
    }
  }
};

export default App;

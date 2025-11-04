import React from "react";
import ClassProps from "./ClassProps";
import Data from "./Data";

const App = () => {
  return (
    <div>
      <ClassProps userName="Ravi" age={23} />
      <ClassProps userName="Nitesh" age={30} />
      <ClassProps userName="Shankanth" age={60} />
      <Data />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import LifeCycle from "./LifeCycle";
import Data from "./Data";

const App = () => {
  let [count, setCount] = useState(0);
  let inc = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <Data />
      {count >= 0 && <LifeCycle name="Ram" count={count} inc={inc} />}
    </div>
  );
};

export default App;

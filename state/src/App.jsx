import React from "react";
import ClassState from "./ClassState";
import FunctionState from "./FunctionState";

class App extends React.Component {
  render() {
    return (
      <>
        <ClassState />
        <FunctionState />
      </>
    );
  }
}
export default App;

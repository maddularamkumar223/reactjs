import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import From from "./components/From";
import DisplayData from "./components/DisplayData";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/form" component={From}></Route>
        <Route path="/display" component={DisplayData}></Route>
      </Switch>
    </div>
  );
};

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

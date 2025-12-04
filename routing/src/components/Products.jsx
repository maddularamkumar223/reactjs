import React from "react";
import {
  Link,
  Route,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";
import Fasishon from "./category/Fasishon";
import Accessiros from "./category/Accessiros";
import Electronics from "./category/Electronics";
import PersnolCare from "./category/PersnolCare";

const Products = () => {
  let match = useRouteMatch();
  console.log(match);
  return (
    <div>
      <Link to={`${match.url}/fashion`}>Fashion</Link>
      <Link to={`${match.url}/accessories`}>Accessories</Link>
      <Link to={`${match.url}/electronics`}>Electronics</Link>
      <Link to={`${match.url}/personalCare`}>Personal Care</Link>

      {/* @ create route for the nested paths */}
      <Route path={`${match.path}/fashion`} component={Fasishon}></Route>
      <Route path={`${match.path}/accessories`} component={Accessiros}></Route>
      <Route path={`${match.path}/electronics`} component={Electronics}></Route>
      <Route
        path={`${match.path}/personalCare`}
        component={PersnolCare}
      ></Route>
    </div>
  );
};

export default Products;

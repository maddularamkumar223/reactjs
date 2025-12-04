import React from "react";
import {
  Link,
  Route,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";
import FashionProduct from "./FashionProduct";

const Fasishon = () => {
  let match = useRouteMatch();
  let productsData = [
    {
      id: 1,
      product: "Men Clothing",
    },
    {
      id: 2,
      product: "Women Clothing",
    },
    {
      id: 3,
      product: "Kids Clothing",
    },
  ];
  return (
    <div>
      {productsData.map((value) => {
        return (
          <Link to={`${match.url}/${value.product}`}>{value.product}</Link>
        );
      })}
      <Route path={`${match.path}/:product`} component={FashionProduct}></Route>
    </div>
  );
};

export default Fasishon;

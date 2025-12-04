import React from "react";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

const FashionProduct = () => {
  let match = useRouteMatch();
  console.log(match.params);
  return <div>FashionProduct {match.params.product}</div>;
};

export default FashionProduct;

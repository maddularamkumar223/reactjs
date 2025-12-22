// import React, { useEffect } from "react";
// import { fetchProducts } from "./redux/productSlice";
// import { useDispatch, useSelector } from "react-redux";

// const Products = () => {
//   let value = useSelector((state) => state.product.products);
//   console.log(value);

//   let dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, []);
//   return (
//     <div>
//       {value.map((product) => {
//         return <p>{product.title}</p>;
//       })}
//     </div>
//   );
// };

// export default Products;

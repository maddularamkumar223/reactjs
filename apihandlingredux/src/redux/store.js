import { configureStore } from "@reduxjs/toolkit";
// import productSlice from "./productSlice";
import productSliceApi from "./product/productApiSlice";

let store = configureStore({
  reducer: {
    // product: productSlice,
    productApiStore: productSliceApi,
  },
});

export default store;

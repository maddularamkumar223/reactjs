import { createAsyncThunk } from "@reduxjs/toolkit";
import { addProducts, fetchProductsData } from "./productApi";

// ! Fetch Product thunk
export let fetchProducts = createAsyncThunk(
  "products/ fetchProductsData",
  async () => {
    let { data } = await fetchProductsData();
    return data;
  }
);

// ! Add  Product thunk

export let addProduct = createAsyncThunk(
  "products/addProduct",
  async (product) => {
    let data = await addProducts(product);
    return data;
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProducts,
  deleteProduct,
  editProduct,
  fetchProductsData,
} from "./productApi";

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

// ! edit productData

export let editProductData = createAsyncThunk(
  "products/editProduct",
  async ({ id, product }) => {
    let data = await editProduct(id, product);
    return data;
  }
);

// ! delete product

export let deleteProductData = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    let data = await deleteProduct(id);
    return data;
  }
);

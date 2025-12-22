// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export let fetchProductApi = () =>
//   axios.get("https://fakestoreapi.com/products");
// export let fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     let { data } = await fetchProductApi();
//     return data;
//   }
// );
// let productSlice = createSlice({
//   name: "productSlice",
//   initialState: { products: [] }a,
//   reducers: [],
//   extraReducers: (builders) => {
//     builders.addCase(fetchProducts.fulfilled, (state, action) => {
//       state.products = action.payload;
//     });
//   },
// });
// export default productSlice.reducer;

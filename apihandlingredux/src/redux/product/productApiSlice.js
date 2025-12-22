import { createSlice } from "@reduxjs/toolkit";
import { addProduct, fetchProducts } from "./productThunkApi";

let productSliceApi = createSlice({
  name: "productSlice",
  initialState: {
    productsList: [],
    singleProduct: "",
    error: "",
    pending: false,
  },
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productsList = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.productsList.push(action.payload.data);
      })
      .addCase(addProduct.rejected, (state, action) => {
        // console.log(action);
        state.error = action.payload;
      })
      .addCase(addProduct.pending, (state, action) => {
        state.pending = true;
      });
  },
});

export default productSliceApi.reducer;

import { createSlice } from "@reduxjs/toolkit";
import {
  addProduct,
  deleteProductData,
  editProductData,
  fetchProducts,
} from "./productThunkApi";

let productSliceApi = createSlice({
  name: "productSlice",
  initialState: {
    productsList: [],
    singleProduct: "",
    isEdit: false,
  },
  reducers: {
    updateSingleProduct(state, action) {
      console.log(action);
      let data = state.productsList.find(
        (value) => value.id === action.payload
      );
      state.singleProduct = data;
      state.isEdit = true;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productsList = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.productsList.push(action.payload.data);
      })
      .addCase(editProductData.fulfilled, (state, action) => {
        let indexValue = state.productsList.findIndex(
          (value) => value.id === action.payload.data.id
        );
        console.log(indexValue);
        console.log(action);
        state.productsList[indexValue] = action.payload.data;
      })
      .addCase(deleteProductData.fulfilled, (state, action) => {
        let data = state.productsList.filter(
          (value) => value.id !== action.payload
        );
        state.productsList = data;
      });
  },
});

export let { updateSingleProduct } = productSliceApi.actions;
export default productSliceApi.reducer;

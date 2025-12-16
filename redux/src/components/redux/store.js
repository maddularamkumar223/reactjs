import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/CounterSlice";

let store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
export default store;

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/CounterSlice";
import complaintSlice from "./slices/complaintSlice";

let store = configureStore({
  reducer: {
    counter: counterSlice,
    complaint: complaintSlice,
  },
});
export default store;

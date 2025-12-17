import { createSlice } from "@reduxjs/toolkit";

let complaintSlice = createSlice({
  name: "complaint",
  initialState: { complaints: [] },
  reducers: {
    addComplaint(state, action) {
      state.complaints.push(action.payload);
    },
    deleteComplaint(state, action) {
      let data = state.complaints.filter(
        (value) => value.id !== action.payload
      );
      console.log(data);
      state.complaints = data;
    },
  },
});

export let { addComplaint, deleteComplaint } = complaintSlice.actions;
export default complaintSlice.reducer;

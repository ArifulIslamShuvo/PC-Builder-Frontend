import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const pcBuildSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToPcBuilder: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { addToPcBuilder } = pcBuildSlice.actions;

export default pcBuildSlice.reducer;
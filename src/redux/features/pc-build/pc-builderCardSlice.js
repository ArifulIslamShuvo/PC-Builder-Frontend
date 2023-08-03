import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cpu: [],
  motherboard: [],
  ram: [],
  powerSupply: [],
  storage: [],
  monitor: [],
};

export const pcBuildSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addToPcBuilder: (state, action) => {
      const { category, product } = action.payload;
      state[category].push(product);
    },
  },
});

export const { addToPcBuilder } = pcBuildSlice.actions;

export default pcBuildSlice.reducer;
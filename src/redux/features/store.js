import { configureStore } from "@reduxjs/toolkit"
import addToPcBuilderReducer from "./pc-build/pc-builderCardSlice";
export const store = configureStore({
  reducer: {
    addToBuild: addToPcBuilderReducer,
  },
});

export default store;
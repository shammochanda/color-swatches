import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colors";

const store = configureStore({
  reducer: { colors: colorReducer },
});

export default store;

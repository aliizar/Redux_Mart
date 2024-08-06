import { configureStore } from "@reduxjs/toolkit";
import AllGrocerySlice from "../Reducers/AllGrocery";
  const store = configureStore({
    reducer : {
        AllGrocery : AllGrocerySlice,
    }
})
export default store 
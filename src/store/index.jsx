import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slices/modal-slice";
import movieSlice from "./slices/movie-slice";
import orderSlice from "./slices/order-slice";

const store = configureStore({
  reducer: { movie: movieSlice.reducer, modal: modalSlice.reducer, order: orderSlice.reducer }
})

export default store
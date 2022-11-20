import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal-slice";
import movieSlice from "./movie-slice";

const store = configureStore({
  reducer: { movie: movieSlice.reducer, modal: modalSlice.reducer  }
})

export default store
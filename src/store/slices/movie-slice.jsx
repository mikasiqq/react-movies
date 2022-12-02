import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scheduleDates: [],
  scheduleCategories: [
    { id: "c1", title: "Все форматы", type: "t1", isActive: true },
    { id: "c2", title: "2D", type: "t1", isActive: false },
    { id: "c3", title: "Только премьеры недели", type: "t1", isActive: false },
    { id: "c4", title: "Без ограничений", type: "t2", isActive: true },
    { id: "c5", title: "0+", type: "t2", isActive: false },
    { id: "c6", title: "6+", type: "t2", isActive: false },
    { id: "c7", title: "12+", type: "t2", isActive: false },
    { id: "c8", title: "16+", type: "t2", isActive: false },
    { id: "c9", title: "18+", type: "t2", isActive: false },
  ],
  movies: [],
  currentDate: {},
  currentDateId: "d1",
  curCategories: ["c1", "c4"],
  isLoading: true,
};
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    replaceDates(state, action) {
      state.scheduleDates = action.payload;
    },
    replaceMovies(state, action) {
      state.movies = action.payload;
    },
    changeActiveDate(state, action) {
      const activeId = action.payload;
      state.isLoading = true;
      state.scheduleDates = state.scheduleDates.map((obj) => {
        if (obj.id !== activeId && obj.isActive) {
          return {
            ...obj,
            isActive: false,
          };
        } else if (obj.id === activeId) {
          state.currentDateId = obj.id;
          state.currentDate = obj;

          return {
            ...obj,
            isActive: true,
          };
        }
        return obj;
      });
      state.isLoading = false;
    },
    categoryHandler(state, action) {
      const { categoryId } = action.payload;
      const { type } = action.payload;
      state.isLoading = true;
      switch (type) {
        case "t1": {
          state.scheduleCategories = state.scheduleCategories.map((obj) => {
            if (obj.type === "t1" && obj.id === categoryId) {
              state.curCategories[0] = obj.id;
              return {
                ...obj,
                isActive: true,
              };
            } else if (obj.type === "t1" && obj.id !== categoryId) {
              return {
                ...obj,
                isActive: false,
              };
            }
            return obj;
          });
          break;
        }
        case "t2": {
          state.scheduleCategories = state.scheduleCategories.map((obj) => {
            if (obj.type === "t2" && obj.id === categoryId) {
              state.curCategories[1] = obj.id;
              return {
                ...obj,
                isActive: true,
              };
            } else if (obj.type === "t2" && obj.id !== categoryId) {
              return {
                ...obj,
                isActive: false,
              };
            }
            return obj;
          });
          break;
        }
      }
      state.isLoading = false;
    },
    makeSwipe(state, action) {
      const { type } = action.payload;
      const searchedId = state.scheduleDates.findIndex(
        (obj) => obj.isActive === true
      );
      switch (type) {
        case "swipeLeft": {
          if (searchedId !== 0) {
            state.scheduleDates[searchedId].isActive = false;
            state.scheduleDates[searchedId - 1].isActive = true;

            state.currentDateId = state.scheduleDates[searchedId - 1].id;
            state.currentDate = state.scheduleDates[searchedId - 1];
          }
          break;
        }
        case "swipeRight": {
          if (searchedId !== state.scheduleDates.length - 1) {
            state.scheduleDates[searchedId].isActive = false;
            state.scheduleDates[searchedId + 1].isActive = true;

            state.currentDateId = state.scheduleDates[searchedId + 1].id;
            state.currentDate = state.scheduleDates[searchedId + 1];
          }
          break;
        }
      }
    },
    replaceMovieTickets(state, action) {
      const { movieId, orderedTickets } = action.payload
      state.scheduleDates = state.scheduleDates.map((el) => {
        if (el.id === state.currentDateId) {
          for (const property in el.movies) {
            if (property === movieId) el.movies[property] = orderedTickets
          }
        }
        return el;
      });
    },
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice;

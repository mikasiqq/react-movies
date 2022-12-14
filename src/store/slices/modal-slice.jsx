import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  modalMovie: {},
  modalTickets: [],
  updatedTickets: [],
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalChangeHandler(state, action) {
      state.modalMovie = action.payload;
      state.showModal = !state.showModal;
      state.updatedTickets = [];
    },
    modalTicketsHandler(state, action) {
      const { scheduleDates, currentDateId } = action.payload;
      scheduleDates.forEach((curDate) => {
        if (curDate.id === currentDateId) {
          for (const obj in curDate.movies) {
            if (obj === state.modalMovie.id) {
              state.modalTickets = curDate.movies[obj];
            }
          }
        }
      });
    },
    selectedTicketsHandler(state, action) {
      const { id, tickets } = action.payload;
      state.modalTickets = tickets.map((obj) => {
        if (obj.id === id && obj.isAvailable === false && obj.ordered === false) {
          state.updatedTickets = state.updatedTickets.filter(
            (el) => el.id !== id
          );
          return {
            ...obj,
            isAvailable: !obj.isAvailable,
          };
        } else if (obj.id === id && obj.isAvailable === true && obj.ordered === false) {
          state.updatedTickets.push(obj);
          return {
            ...obj,
            isAvailable: !obj.isAvailable,
          };
        }
        return obj;
      });
    },
    updatedTicketsHandler(state, action) {
      state.updatedTickets = state.modalTickets.filter(
        (el) => el.isAvailable === false && el.ordered === false
      );
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;

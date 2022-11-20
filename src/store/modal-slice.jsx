import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  showModal: false,
  modalMovie: {},
  modalTickets: [],
  updatedTickets: []
}


const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalChangeHandler(state, action) {
      state.modalMovie = action.payload
      state.showModal = !state.showModal
    },
    modalTicketsHandler(state, action) {
      const { scheduleDates, currentDateId } = action.payload

      scheduleDates.forEach((curDate) => {
        if (curDate.id === currentDateId) {
          for (const obj in curDate.movies) {
            if (obj === state.modalMovie.id) {
              state.modalTickets = curDate.movies[obj]
            }
          }
        }
      })
    },
    selectedModalTicketsHandler(state, action) {
      const { id, tickets } = action.payload
      state.modalTickets = tickets.map((obj) => {
        if (obj.id === id) {
          return {
            ...obj,
            isAvailable: !obj.isAvailable
          }
        }
        return obj
      });
      console.log(state.modalTickets);
    },
    
  }
})

export const modalActions = modalSlice.actions

export default modalSlice
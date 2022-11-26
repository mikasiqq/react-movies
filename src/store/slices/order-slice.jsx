import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  orders: []
}


const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    replaceOrders(state, action) {
      state.orders = action.payload
    }
  }
})

export const orderActions = orderSlice.actions

export default orderSlice
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  orders: [],
  toOrder: false
}


const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    replaceOrders(state, action) {
      state.orders = action.payload
    },
    putOrder(state, action) {
      state.toOrder = !state.toOrder
    }
  }
})

export const orderActions = orderSlice.actions

export default orderSlice
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  asks: [],
  bids: [],
};

const orderBookSlice = createSlice({
  name: 'orderBook',
  initialState,
  reducers: {
    updateOrderBook(state, action) {
      const data = action.payload;
      if (data[2] > 0) {
        state.bids = [...state.bids, data];
      } else if (data[2] < 0) {
        state.asks = [...state.asks, data];
      }
    },
  },
});

export const { updateOrderBook } = orderBookSlice.actions;
export default orderBookSlice.reducer;

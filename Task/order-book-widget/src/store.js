import { configureStore } from '@reduxjs/toolkit';
import orderBookReducer from './redux/orderBookSlice';

export const store = configureStore({
  reducer: {
    orderBook: orderBookReducer,
  },
});

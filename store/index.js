import { configureStore } from '@reduxjs/toolkit';
import cart from './slices/cart.slice';
import updateInfo from './slices/updateInfo.slice';

const store = configureStore({
  reducer: {
    cart,
    updateInfo
  },
});

export default store;

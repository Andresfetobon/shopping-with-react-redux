import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  //reducers son las actions
  reducers: {
    addProductG: (state, action) => [...state, action.payload],
    deleteProductG: (state, action) => {
      return state.filter(producto => producto.bar_code !== action.payload);
    },
    updateProductG: (state, action) => {
      return state.map(product => {
        if (product.bar_code === action.payload.bar_code) {
          return action.payload
        }
        return product
      });
    },
  },
});

export const { addProductG, deleteProductG, updateProductG } = cartSlice.actions;

export default cartSlice.reducer;

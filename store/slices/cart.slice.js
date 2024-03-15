import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    //reducers son las actions
    reducers: {
        addProductG: (state, action) =>  [...state, action.payload],
        deleteProductG: (state, action) => {
            return state.filter(producto => producto.bar_code !== action.payload);
        } //action de agregar producto a la cesta
    }
})

export const { addProductG, deleteProductG } = cartSlice.actions

export default cartSlice.reducer
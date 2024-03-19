import { createSlice } from "@reduxjs/toolkit";

const updateInfoSlice = createSlice({
    name: 'updateInfo',
    initialState: null,
    reducers: {
        setUpdateInfoG: (state, action) => action.payload
    }
})

export const { setUpdateInfoG } = updateInfoSlice.actions

export default updateInfoSlice.reducer
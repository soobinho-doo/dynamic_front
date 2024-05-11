import { createSlice } from "@reduxjs/toolkit";

export const isLoggedIn = createSlice({
    name:'isLoggedIn', 
    initialState:{
        value : false,
    },
    reducers: {
        login : (state) => { state.value = true },
        logout : (state) => { state.value = false },
    },
})

export const { login, logout } = isLoggedIn.actions;
export default isLoggedIn.reducer;
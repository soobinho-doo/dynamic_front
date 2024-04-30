import { createSlice } from "@reduxjs/toolkit";

export const authRedux = createSlice({
    name:'authRedux', 
    initialState:{
        value : false,
    },
    reducers: {
        isLogin : (state) => {
            state.value = false
        },
    },
})

export const {isLogin} = authRedux.actions
export default authRedux.reducer;
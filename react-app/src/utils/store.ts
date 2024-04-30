import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../reducer/authReducer"

const store = configureStore({
  reducer: {
    authRedux:authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
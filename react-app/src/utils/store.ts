import { configureStore } from "@reduxjs/toolkit"
import isLoggedIn from "../reducer/isLoggedIn"

const store = configureStore({
  reducer: {
    isLoggedIn : isLoggedIn,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";

const reducer = {
    auth: authSlice
}

// export const store = configureStore({ reducer: rootReducer })
export const store = configureStore({ reducer })
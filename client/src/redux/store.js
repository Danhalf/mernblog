import { configureStore } from "@reduxjs/toolkit";
import { default as authSlice } from "./features/auth/authSlice";

const rootReducer = {
    auth: authSlice
}

export const store = configureStore({ reducer: rootReducer })
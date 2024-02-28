import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import analyticsSlice from "./analyticsSlice";
import userSummarySlice from "./userSummarySlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        analytics: analyticsSlice,
        userSummary: userSummarySlice,
    },
})
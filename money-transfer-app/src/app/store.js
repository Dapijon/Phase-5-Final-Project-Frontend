import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import analyticsSlice from "./analyticsSlice";
import userSummarySlice from "./userSummarySlice";
import allUsersSlice from "./allUsers.slice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        analytics: analyticsSlice,
        userSummary: userSummarySlice,
        allusers: allUsersSlice,
    },

    
})
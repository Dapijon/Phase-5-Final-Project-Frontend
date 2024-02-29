import { configureStore } from '@reduxjs/toolkit';


import adminSlice from './adminSlice';
import userSlice from './userSlice';


export const store = configureStore(
    {
        reducer: {
            user: userSlice.reducer,
            admin: adminSlice.reducer,
        },
        
    }
);

export default store;
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    
    email: "",
    password: "",
    isLoggedIn: false,
    role: "",
    isLoading: false,
    isError: false,
    isSuccess: false,
    error: ""
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInReducer: (state, action) => {
            const { email, password, role, isLoggedIn } = action.payload;
            state.email = email;
            state.password = password;
            state.role = role;
            state.isLoggedIn = isLoggedIn; 
            
        }, 
        signOutReducer: (state) => {
            state.email = '';
            state.password = '';
            state.role = '';
            state.isLoggedIn = false; 
        }
    }
});


export const { signInReducer, signOutReducer } = authSlice.actions
export default authSlice.reducer
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/summary/users';

export const fetchUsers = createAsyncThunk('allUsers/fetchUsers', async (_, { getState }) => {
    try {
        const authState = getState().auth;
        const JWT_TOKEN = authState.accessToken;

        const response = await axios.get(API_URL, {
            headers: {
                'Authorization': `Bearer ${JWT_TOKEN}`,
            },
        });
        const users = response.data;
        console.log(users);
        return users;
    } catch (error) {
        console.error('Error fetching users:', error.response.data);
        throw error;
    }
});

const allUsersSlice = createSlice({
    name: 'allUsers',
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const selectAllUsers = (state) => state.allUsers.users;
export const selectUsersLoading = (state) => state.allUsers.loading;
export const selectUsersError = (state) => state.allUsers.error;

export default allUsersSlice.reducer;
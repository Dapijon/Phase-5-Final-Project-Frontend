import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode'

const storedToken = JSON.parse(localStorage.getItem('token'));

const initialState = {
  isAuthenticated: storedToken ? true : false,
  accessToken: storedToken ? storedToken.accessToken : null,
  user: null,
};

export const signInAsync = createAsyncThunk(
  'auth/signInAsync',
  async (token, { dispatch }) => {
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.userId;

    try {
      const response = await axios.get(`http://your-api.com/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(authSlice.actions.signIn({ accessToken: token, user: response.data }));
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn(state, action) {
      state.isAuthenticated = true;
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      localStorage.setItem('token', JSON.stringify({
        accessToken: action.payload.accessToken,
      }));
    },
    signOut(state) {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.user = null;
      localStorage.removeItem('token');
    },
    updateUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInAsync.fulfilled, (state, action) => {
        // No need to update state here, handled in signIn reducer
      })
      .addCase(signInAsync.rejected, (state, action) => {
        console.error('Error signing in:', action.error.message);
      });
  },
});

export const { signIn, signOut, updateUser } = authSlice.actions;

export const selectIsAdmin = (state) => state.auth.user && state.auth.user.isAdmin;
export const selectCurrentUser = (state) => state.auth.user;

export default authSlice.reducer;

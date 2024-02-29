import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSummarySlice = createSlice({
  name: 'userSummary',
  initialState: {
    userSummary: {},
    loading: false,
    error: null,
  },
  reducers: {
    getUserSummaryStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getUserSummarySuccess: (state, action) => {
      state.loading = false;
      state.userSummary = action.payload;
    },
    getUserSummaryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getUserSummaryStart, getUserSummarySuccess, getUserSummaryFailure } = userSummarySlice.actions;

// Async action creator to fetch user summary
export const fetchUserSummary = () => async (dispatch, getState) => {
  dispatch(getUserSummaryStart());
  const { accessToken } = getState().auth;

  try {
    const response = await axios.get('http://127.0.0.1:5000/summary/user-summary', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch(getUserSummarySuccess(response.data));
  } catch (error) {
    dispatch(getUserSummaryFailure(error.message));
  }
};

export default userSummarySlice.reducer;
